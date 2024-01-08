import axios, { AxiosError } from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

export interface ImageType {
  url: string;
  public_id: string;
}

export interface WebsiteType {
  title: string;
  titleInArabic: string;
  link?: string;
  previewImgs?: FileList;
  logo?: FileList;
  mainImg?: FileList;
  _id?: string;
}

export type SiteType = {
  title: string;
  titleInArabic: string;
  link: string;
  previewImgs?: ImageType[];
  mainImg: ImageType;
  _id?: string;
  logo: ImageType;
};

interface PropsOfProvider {
  children: ReactNode;
}

export interface PortfolioContextValue {
  websites: SiteType[];
  handleDelete: (id: string) => Promise<void>;
  createWebsite: (data: WebsiteType) => void;
  IsLoading: boolean;
  getSiteById: (id: string) => SiteType | undefined;
  updateWebsite: (id: string, formData: FormData) => Promise<void>;
  getData: () => Promise<void>;
}

export const PortfolioContext = createContext<PortfolioContextValue | null>(
  null
);

const WebsiteProvider: React.FC<PropsOfProvider> = ({ children }) => {
  const [websites, setWebsites] = useState<SiteType[]>([]);
  const [IsLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3003/website");
      setWebsites(data.data);
      return data.data;
    } catch (error) {
      if ((error as AxiosError)?.response) {
        const axiosError = error as AxiosError;
        console.error("Response Data:", axiosError.response?.data);
        console.error("Response Status:", axiosError.response?.status);
        console.error("Response Headers:", axiosError.response?.headers);
      }
    }
  };

  const getSiteById = (id: string) => {
    return websites.find((website) => website._id === id);
  };

  const createWebsite = async (data: WebsiteType) => {
    setIsLoading(true);
    const { title, titleInArabic, link, logo, mainImg, previewImgs } = data;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("titleInArabic", titleInArabic);
    if (link) {
      formData.append("link", link);
    }
    if (logo) {
      formData.append("logo", logo[0]);
    }
    if (mainImg) {
      formData.append("mainImg", mainImg[0]);
    }

    if (previewImgs && previewImgs.length > 0) {
      for (let index = 0; index < previewImgs.length; index++) {
        formData.append("previewImgs", previewImgs[index]);
      }
    }

    try {
      console.log("add website from frontend");

      const { data } = await axios.post(
        "http://localhost:3003/website",
        formData,
        {
          headers: {
            token: `${token}`,
          },
        }
      );

      setIsLoading(false);
      getData();
      return data;
    } catch (error) {
      if ((error as AxiosError)?.response) {
        const axiosError = error as AxiosError;
        console.error("Response Data:", axiosError.response?.data);
        console.error("Response Status:", axiosError.response?.status);
        console.error("Response Headers:", axiosError.response?.headers);
      }
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (token) {
      console.log(token + " deleted");
      
      await axios.delete(`http://localhost:3003/website/${id}`, {
        headers: { token },
      });

      // Wait for the state updateWebsite to complete
      await setWebsites((prevWebsites) =>
        prevWebsites.filter((website) => website._id !== id)
      );
      // Fetch updateWebsited data
      await getData();
    }
  };

  const updateWebsite = async (id: string, formData: FormData) => {
    try {
      await axios.put(`http://localhost:3003/website/${id}`, formData, {
        headers: { token },
      });
    } catch (error) {
      if ((error as AxiosError)?.response) {
        const axiosError = error as AxiosError;
        console.error("Response Data:", axiosError.response?.data);
        console.error("Response Status:", axiosError.response?.status);
        console.error("Response Headers:", axiosError.response?.headers);
      }
    }
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  const contextValue: PortfolioContextValue = {
    websites,
    handleDelete,
    createWebsite,
    IsLoading,
    getSiteById,
    updateWebsite,
    getData,
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default WebsiteProvider;
