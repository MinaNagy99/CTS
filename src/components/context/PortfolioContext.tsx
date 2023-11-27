import { createContext, ReactNode } from "react";

type PortfolioContext = {
  mainImg: string;
  title: string;
  images: string[];
  logo: string;
  link: string;
};
type PortfolioContextProviderProps = {
  children: ReactNode;
};

export const PortfolioContext = createContext<PortfolioContext[]>([
 
  {
    mainImg: "/assets/websites/arconswebsite-photos/alphaclinic-carasoul1.png",
    title: "alphaclinic",
    images: [
      "/assets/websites/arconswebsite-photos/arcons-page1.png",
      "/assets/websites/arconswebsite-photos/arcons-page2.png",
      "/assets/websites/arconswebsite-photos/arcons-page3.png",
    ],
    logo: "/assets/websites/arconswebsite-photos/arcons-logo.png",
    link: "sss",
  },
]);

function PortfolioContextProvider(props: PortfolioContextProviderProps) {
  let portfolioData: PortfolioContext[] = [
    {
      mainImg: "/assets/websites/alphaclinic-photos/alphaclinic-carasoul1.png",
      title: "Alphaclinic-car",
      images: [
        "/assets/websites/alphaclinic-photos/alphaclinic-page1.png",
        "/assets/websites/alphaclinic-photos/alphaclinic-page2.png",
        "/assets/websites/alphaclinic-photos/alphaclinic-page3.png",
      ],
      logo: "/assets/websites/alphaclinic-photos/alphaclinic-logo.png",
      link: "sss",
    },

  ];
  return (
    <PortfolioContext.Provider value={portfolioData}>
      {props.children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioContextProvider;
