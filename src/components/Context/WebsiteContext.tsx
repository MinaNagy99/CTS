import axios, { AxiosError } from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

export interface ImageType {
  url: string;
  public_id: string;
}

export interface WebsiteType {
  title: string;
  link?: string;
  previewImgs?: FileList;
  logo?: FileList;
  mainImg?: FileList;
  _id?: string;
}

export type SiteType = {
  title: string;
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
}

export const PortfolioContext = createContext<PortfolioContextValue | null>(
  null
);

const WebsiteProvider: React.FC<PropsOfProvider> = ({ children }) => {
  const [websites, setWebsites] = useState<SiteType[]>([]);
  const [IsLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");

  const getData = async () => {
    const { data } = await axios.get("https://cts.onrender.com/website");
    setWebsites(data.data);
  };

  const getSiteById = (id: string) => {
    return websites.find((website) => website._id === id);
  };

  const createWebsite = async (data: WebsiteType) => {
    setIsLoading(true);
    const { title, link, logo, mainImg, previewImgs } = data;
    const formData = new FormData();
    formData.append("title", title);
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
      const { data } = await axios.post(
        "https://cts.onrender.com/website",
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
    await axios.delete(`https://cts.onrender.com/website/${id}`);

    // Wait for the state updateWebsite to complete
    await setWebsites((prevWebsites) =>
      prevWebsites.filter((website) => website._id !== id)
    );
    // Fetch updateWebsited data
    await getData();
  };

  const updateWebsite = async (id :string, formData: FormData) => {
    try {
      await axios.put(`https://cts.onrender.com/website/${id}`, formData);
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
  };

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default WebsiteProvider;
