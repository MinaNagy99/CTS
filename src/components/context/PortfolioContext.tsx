import { createContext, ReactNode } from "react";

type PortfolioContext = {
    mainImg: string;
    title: string;
    previewImages: string[];
    carouselImages: string[];
    logo: string;
    link: string;
};
type PortfolioContextProviderProps = {
    children: ReactNode;
};

export const PortfolioContext = createContext<PortfolioContext[]>([
    {
        mainImg: "/assets/websites/alphaclinic-photos/alphaclinic-carasoul1.png",
        title: "Alphaclinic-car",
        previewImages: [
            "/assets/websites/alphaclinic-photos/alphaclinic-page1.png",
            "/assets/websites/alphaclinic-photos/alphaclinic-page2.png",
            "/assets/websites/alphaclinic-photos/alphaclinic-page3.png",
        ],
        carouselImages: [
            "/assets/websites/alphaclinic-photos/alphaclinic-carasoul1.png",
            "/assets/websites/alphaclinic-photos/alphaclinic-carasoul2.png",
            "/assets/websites/alphaclinic-photos/alphaclinic-carasoul3.png",
        ],
        logo: "/assets/websites/alphaclinic-photos/alphaclinic-logo.png",
        link: "sss",
    },
]);

function PortfolioContextProvider(props: PortfolioContextProviderProps) {
    const portfolioData: PortfolioContext[] = [
        {
            mainImg: "/assets/websites/alphaclinic-photos/alphaclinic-carasoul1.png",
            title: "Alpha Clinic for dental treatment",
            previewImages: [
                "/assets/websites/alphaclinic-photos/alphaclinic-page1.png",
                "/assets/websites/alphaclinic-photos/alphaclinic-page2.png",
                "/assets/websites/alphaclinic-photos/alphaclinic-page3.png",
            ],
            carouselImages: [
                "/assets/websites/alphaclinic-photos/alphaclinic-carasoul1.png",
                "/assets/websites/alphaclinic-photos/alphaclinic-carasoul2.png",
                "/assets/websites/alphaclinic-photos/alphaclinic-carasoul3.png",
            ],
            logo: "/assets/websites/alphaclinic-photos/alphaclinic-logo.png",
            link: "sss",
        },
        {
            mainImg: "/assets/websites/arconswebsite-photos/arconswebsite-carasoul1.png",
            title: "Arcons Industrial Services",
            previewImages: [
                "/assets/websites/arconswebsite-photos/arcons-page1.png",
                "/assets/websites/arconswebsite-photos/arcons-page2.png",
                "/assets/websites/arconswebsite-photos/arcons-page3.png",
            ],
            carouselImages: [
                "/assets/websites/arconswebsite-photos/arconswebsite-carasoul1.png",
                "/assets/websites/arconswebsite-photos/arconswebsite-carasoul2.png",
                "/assets/websites/arconswebsite-photos/arconswebsite-carasoul3.png",
            ],
            logo: "/assets/websites/arconswebsite-photos/arcons-logo.png",
            link: "sss",
        },
        {
            mainImg: "/assets/websites/cleaned-photos/cleaned-carasoul1.png",
            title: "Cleaned for cleaning services",
            previewImages: [
                "/assets/websites/cleaned-photos/cleaned-page1.png",
                "/assets/websites/cleaned-photos/cleaned-page2.png",
                "/assets/websites/cleaned-photos/cleaned-page3.png",
            ],
            carouselImages: [
                "/assets/websites/cleaned-photos/cleaned-carasoul1.png",
                "/assets/websites/cleaned-photos/cleaned-carasoul2.png",
                "/assets/websites/cleaned-photos/cleaned-carasoul3.png",
            ],
            logo: "/assets/websites/cleaned-photos/cleaned-logo.png",
            link: "sss",
        },
        {
            mainImg: "/assets/websites/ebdaa-photos/ebdaa-carasoul1.png",
            title: "Ebdaa for engineering consultancy",
            previewImages: [
                "/assets/websites/ebdaa-photos/ebdaa-page1.png",
                "/assets/websites/ebdaa-photos/ebdaa-page2.png",
            ],
            carouselImages: [
                "/assets/websites/ebdaa-photos/ebdaa-carasoul1.png",
                "/assets/websites/ebdaa-photos/ebdaa-carasoul2.png",
            ],
            logo: "/assets/websites/ebdaa-photos/ebdaa-logo.png",
            link: "sss",
        },
        {
            mainImg: "/assets/websites/educap-photos/educap-carasoul1.png",
            title: "Educap for courses",
            previewImages: [
                "/assets/websites/educap-photos/educap-page1.png",
                "/assets/websites/educap-photos/educap-page2.png",
                "/assets/websites/educap-photos/educap-page3.png",
            ],
            carouselImages: [
                "/assets/websites/educap-photos/educap-carasoul1.png",
                "/assets/websites/educap-photos/educap-carasoul2.png",
                "/assets/websites/educap-photos/educap-carasoul3.png",
            ],
            logo: "/assets/websites/educap-photos/educap-logo.png",
            link: "sss",
        },
        {
            mainImg: "/assets/websites/kider-photos/kider-carasoul1.png",
            title: "Kider for educating kids",
            previewImages: [
                "/assets/websites/kider-photos/kider-page1.png",
                "/assets/websites/kider-photos/kider-page2.png",
                "/assets/websites/kider-photos/kider-page3.png",
            ],
            carouselImages: [
                "/assets/websites/kider-photos/kider-carasoul1.png",
                "/assets/websites/kider-photos/kider-carasoul2.png",
                "/assets/websites/kider-photos/kider-carasoul3.png",
            ],
            logo: "/assets/websites/kider-photos/kider-logo.png",
            link: "sss",
        },
        {
            mainImg: "/assets/websites/littleengineer-photos/littleegineer-carasoul1.png",
            title: "Little engineer",
            previewImages: [
                "/assets/websites/littleengineer-photos/le-page1.png",
                "/assets/websites/littleengineer-photos/le-page2.png",
                "/assets/websites/littleengineer-photos/le-page3.png",
            ],
            carouselImages: [
                "/assets/websites/littleengineer-photos/littleegineer-carasoul1.png",
                "/assets/websites/littleengineer-photos/littleegineer-carasoul2.png",
                "/assets/websites/littleengineer-photos/littleegineer-carasoul3.png",
            ],
            logo: "/assets/websites/littleengineer-photos/le-page3.png",
            link: "sss",
        },
        {
            mainImg: "/assets/websites/mannaie-photos/mannaie-carasoul1.png",
            title: "Mannaie for real state",
            previewImages: [
                "/assets/websites/mannaie-photos/mannaie-page1.png",
                "/assets/websites/mannaie-photos/mannaie-page2.png",
                "/assets/websites/mannaie-photos/mannaie-page3.png",
            ],
            carouselImages: [
                "/assets/websites/mannaie-photos/mannaie-carasoul1.png",
                "/assets/websites/mannaie-photos/mannaie-carasoul2.png",
                "/assets/websites/mannaie-photos/mannaie-carasoul3.png",
            ],
            logo: "/assets/websites/mannaie-photos/mannaie-logo.png",
            link: "sss",
        },
        {
            mainImg: "/assets/websites/masdar-photos/masdar-carasoul1.png",
            title: "Masdar for building products",
            previewImages: [
                "/assets/websites/masdar-photos/masdar-page1.png",
                "/assets/websites/masdar-photos/masdar-page2.png",
                "/assets/websites/masdar-photos/masdar-page3.png",
            ],
            carouselImages: [
                "/assets/websites/masdar-photos/masdar-carasoul1.png",
                "/assets/websites/masdar-photos/masdar-carasoul2.png",
                "/assets/websites/masdar-photos/masdar-carasoul3.png",
            ],
            logo: "/assets/websites/masdar-photos/masdar-logo.png",
            link: "sss",
        },
        {
            mainImg: "/assets/websites/motormenders-photos/motormenders-carasoul1.png",
            title: "MotorMenders for cars",
            previewImages: [
                "/assets/websites/motormenders-photos/motormenders-page1.png",
                "/assets/websites/motormenders-photos/motormenders-page2.png",
                "/assets/websites/motormenders-photos/motormenders-page3.png",
            ],
            carouselImages: [
                "/assets/websites/motormenders-photos/motormenders-carasoul1.png",
                "/assets/websites/motormenders-photos/motormenders-carasoul2.png",
                "/assets/websites/motormenders-photos/motormenders-carasoul3.png",
            ],
            logo: "/assets/websites/motormenders-photos/motor-logo.png",
            link: "sss",
        },
        {
            mainImg: "/assets/websites/prestige-photos/prestige-carasoul1.png",
            title: "Prestige web store",
            previewImages: [
                "/assets/websites/prestige-photos/prestige-page1.png",
                "/assets/websites/prestige-photos/prestige-page2.png",
                "/assets/websites/prestige-photos/prestige-page3.png",
            ],
            carouselImages: [
                "/assets/websites/prestige-photos/prestige-carasoul1.png",
                "/assets/websites/prestige-photos/prestige-carasoul2.png",
                "/assets/websites/prestige-photos/prestige-carasoul3.png",
            ],
            logo: "/assets/websites/prestige-photos/prestige-logo.png",
            link: "sss",
        },
        {
            mainImg: "/assets/websites/tournest-photos/tournest-carasoul1.png",
            title: "TourNest for travel",
            previewImages: [
                "/assets/websites/tournest-photos/tournest-page1.png",
                "/assets/websites/tournest-photos/tournest-page2.png",
            ],
            carouselImages: [
                "/assets/websites/tournest-photos/tournest-carasoul1.png",
                "/assets/websites/tournest-photos/tournest-carasoul2.png",
            ],
            logo: "/assets/websites/tournest-photos/tournest-logo.png",
            link: "sss",
        },
    ];
    return <PortfolioContext.Provider value={portfolioData}>{props.children}</PortfolioContext.Provider>;
}

export default PortfolioContextProvider;