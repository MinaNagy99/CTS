import { createContext, ReactNode } from "react";

type PortfolioContext = {
    mainImg: string;
    title: string;
    previewImages?: string[];
    carouselImages?: string[];
    logo?: string;
    link?: string;
};
type PortfolioContextProviderProps = {
    children: ReactNode;
};

export const PortfolioContext = createContext<PortfolioContext[]>([
    {
        mainImg: "/assets/websites/alphaclinic-photos/alphaclinic-carasoul1.webp",
        title: "Alphaclinic-car",
        previewImages: [
            "/assets/websites/alphaclinic-photos/alphaclinic-page1.webp",
            "/assets/websites/alphaclinic-photos/alphaclinic-page2.webp",
            "/assets/websites/alphaclinic-photos/alphaclinic-page3.webp",
        ],
        carouselImages: [
            "/assets/websites/alphaclinic-photos/alphaclinic-carasoul1.webp",
            "/assets/websites/alphaclinic-photos/alphaclinic-carasoul2.webp",
            "/assets/websites/alphaclinic-photos/alphaclinic-carasoul3.webp",
        ],
        logo: "/assets/websites/alphaclinic-photos/alphaclinic-logo.webp",
        link: "dental-clinic",
    },
]);

function PortfolioContextProvider(props: PortfolioContextProviderProps) {
    const portfolioData: PortfolioContext[] = [
        {
            mainImg: "/assets/websites/littleengineer-photos/littleegineer-carasoul1.webp",
            title: "Little engineer",
            previewImages: [
                "/assets/websites/littleengineer-photos/le-page1.webp",
                "/assets/websites/littleengineer-photos/le-page2.webp",
                "/assets/websites/littleengineer-photos/le-page3.webp",
            ],
            carouselImages: [
                "/assets/websites/littleengineer-photos/littleegineer-carasoul1.webp",
                "/assets/websites/littleengineer-photos/littleegineer-carasoul2.webp",
                "/assets/websites/littleengineer-photos/littleegineer-carasoul3.webp",
            ],
            logo: "/assets/websites/littleengineer-photos/le-logo.webp",
            link: "https://le-academy.com/",
        },
        {
            mainImg: "/assets/websites/africa-queen/africa-queen.webp",
            title: "Africa Queen",
            previewImages: [
                "/assets/websites/africa-queen/africa-queen-coursol1.webp",
                "/assets/websites/africa-queen/africa-queen-coursol2.webp",
            ],
            carouselImages: [
                "/assets/websites/africa-queen/africa-queen-coursol1.webp",
                "/assets/websites/africa-queen/africa-queen-coursol2.webp",
            ],
            logo: "/assets/websites/africa-queen/logo.webp",
            link: "https://africa-queen.com/",
        },
        {
            mainImg: "/assets/websites/el-masria-kitchens/el-masria-kitchens1.webp",
            title: "El Masria Kitchens",
            previewImages: [
                "/assets/websites/el-masria-kitchens/el-masria-kitchens-c1.webp",
                "/assets/websites/el-masria-kitchens/el-masria-kitchens-c2.webp",
                "/assets/websites/el-masria-kitchens/el-masria-kitchens-c3.webp",
            ],
            carouselImages: [
                "/assets/websites/el-masria-kitchens/el-masria-kitchens-c1.webp",
                "/assets/websites/el-masria-kitchens/el-masria-kitchens-c2.webp",
                "/assets/websites/el-masria-kitchens/el-masria-kitchens-c3.webp",
            ],
            logo: "/assets/websites/el-masria-kitchens/logo.webp",
            link: "https://dev-dahab-kitchens.pantheonsite.io/",
        },
        {
            mainImg: "/assets/websites/ebdaa-photos/ebdaa-carasoul1.webp",
            title: "Ebdaa for engineering consultancy",
            previewImages: [
                "/assets/websites/ebdaa-photos/ebdaa-page1.webp",
                "/assets/websites/ebdaa-photos/ebdaa-page2.webp",
            ],
            carouselImages: [
                "/assets/websites/ebdaa-photos/ebdaa-carasoul1.webp",
                "/assets/websites/ebdaa-photos/ebdaa-carasoul2.webp",
            ],
            logo: "/assets/websites/ebdaa-photos/ebdaa-logo.webp",
            link: "http://ebdaa-saudi.com/",
        },
        {
            mainImg: "/assets/websites/mannaie-photos/mannaie-carasoul1.webp",
            title: "Mannaie for real state",
            previewImages: [
                "/assets/websites/mannaie-photos/mannaie-page1.webp",
                "/assets/websites/mannaie-photos/mannaie-page2.webp",
                "/assets/websites/mannaie-photos/mannaie-page3.webp",
            ],
            carouselImages: [
                "/assets/websites/mannaie-photos/mannaie-carasoul1.webp",
                "/assets/websites/mannaie-photos/mannaie-carasoul2.webp",
                "/assets/websites/mannaie-photos/mannaie-carasoul3.webp",
            ],
            logo: "/assets/websites/mannaie-photos/mannaie-logo.webp",
            link: "https://www.mannaie-group-development.com/",
        },
        {
            mainImg: "/assets/websites/kider-photos/kider-carasoul1.webp",
            title: "Kider for educating kids",
            previewImages: [
                "/assets/websites/kider-photos/kider-page1.webp",
                "/assets/websites/kider-photos/kider-page2.webp",
                "/assets/websites/kider-photos/kider-page3.webp",
            ],
            carouselImages: [
                "/assets/websites/kider-photos/kider-carasoul1.webp",
                "/assets/websites/kider-photos/kider-carasoul2.webp",
                "/assets/websites/kider-photos/kider-carasoul3.webp",
            ],
            logo: "/assets/websites/kider-photos/kider-logo.webp",
            link: "/demo/kinderGarten",
        },
        {
            mainImg: "/assets/websites/cleaned-photos/cleaned-carasoul1.webp",
            title: "Cleaned for cleaning services",
            previewImages: [
                "/assets/websites/cleaned-photos/cleaned-page1.webp",
                "/assets/websites/cleaned-photos/cleaned-page2.webp",
                "/assets/websites/cleaned-photos/cleaned-page3.webp",
            ],
            carouselImages: [
                "/assets/websites/cleaned-photos/cleaned-carasoul1.webp",
                "/assets/websites/cleaned-photos/cleaned-carasoul2.webp",
                "/assets/websites/cleaned-photos/cleaned-carasoul3.webp",
            ],
            logo: "/assets/websites/cleaned-photos/cleaned-logo.webp",
            link: "/demo/Cleaned",
        },
        {
            mainImg: "/assets/websites/alphaclinic-photos/alphaclinic-carasoul1.webp",
            title: "Alpha Clinic for dental treatment",
            previewImages: [
                "/assets/websites/alphaclinic-photos/alphaclinic-page1.webp",
                "/assets/websites/alphaclinic-photos/alphaclinic-page2.webp",
                "/assets/websites/alphaclinic-photos/alphaclinic-page3.webp",
            ],
            carouselImages: [
                "/assets/websites/alphaclinic-photos/alphaclinic-carasoul1.webp",
                "/assets/websites/alphaclinic-photos/alphaclinic-carasoul2.webp",
                "/assets/websites/alphaclinic-photos/alphaclinic-carasoul3.webp",
            ],
            logo: "/assets/websites/alphaclinic-photos/alphaclinic-logo.webp",
            link: "/demo/dental-clinic",
        },
        {
            mainImg: "/assets/websites/motormenders-photos/motormenders-carasoul1.webp",
            title: "MotorMenders for cars",
            previewImages: [
                "/assets/websites/motormenders-photos/motormenders-page1.webp",
                "/assets/websites/motormenders-photos/motormenders-page2.webp",
                "/assets/websites/motormenders-photos/motormenders-page3.webp",
            ],
            carouselImages: [
                "/assets/websites/motormenders-photos/motormenders-carasoul1.webp",
                "/assets/websites/motormenders-photos/motormenders-carasoul2.webp",
                "/assets/websites/motormenders-photos/motormenders-carasoul3.webp",
            ],
            logo: "/assets/websites/motormenders-photos/motor-logo.webp",
            link: "/demo/MotorMenders",
        },
        {
            mainImg: "/assets/websites/tournest-photos/tournest-carasoul1.webp",
            title: "TourNest for travel",
            previewImages: [
                "/assets/websites/tournest-photos/tournest-page1.webp",
                "/assets/websites/tournest-photos/tournest-page2.webp",
            ],
            carouselImages: [
                "/assets/websites/tournest-photos/tournest-carasoul1.webp",
                "/assets/websites/tournest-photos/tournest-carasoul2.webp",
            ],
            logo: "/assets/websites/tournest-photos/tournest-logo.webp",
            link: "/demo/TourNest",
        },
        {
            mainImg: "/assets/websites/educap-photos/educap-carasoul1.webp",
            title: "Educap for courses",
            previewImages: [
                "/assets/websites/educap-photos/educap-page1.webp",
                "/assets/websites/educap-photos/educap-page2.webp",
                "/assets/websites/educap-photos/educap-page3.webp",
            ],
            carouselImages: [
                "/assets/websites/educap-photos/educap-carasoul1.webp",
                "/assets/websites/educap-photos/educap-carasoul2.webp",
                "/assets/websites/educap-photos/educap-carasoul3.webp",
            ],
            logo: "/assets/websites/educap-photos/educap-logo.webp",
            link: "https://www.educap.ae/",
        },
        {
            mainImg: "/assets/websites/arconswebsite-photos/arconswebsite-carasoul1.webp",
            title: "Arcons Industrial Services",
            previewImages: [
                "/assets/websites/arconswebsite-photos/arcons-page1.webp",
                "/assets/websites/arconswebsite-photos/arcons-page2.webp",
                "/assets/websites/arconswebsite-photos/arcons-page3.webp",
            ],
            carouselImages: [
                "/assets/websites/arconswebsite-photos/arconswebsite-carasoul1.webp",
                "/assets/websites/arconswebsite-photos/arconswebsite-carasoul2.webp",
                "/assets/websites/arconswebsite-photos/arconswebsite-carasoul3.webp",
            ],
            logo: "/assets/websites/arconswebsite-photos/arcons-logo.webp",
            link: "https://arconsegypt.com/",
        },
        {
            mainImg: "/assets/websites/masdar-photos/masdar-carasoul1.webp",
            title: "Masdar for building products",
            previewImages: [
                "/assets/websites/masdar-photos/masdar-page1.webp",
                "/assets/websites/masdar-photos/masdar-page2.webp",
                "/assets/websites/masdar-photos/masdar-page3.webp",
            ],
            carouselImages: [
                "/assets/websites/masdar-photos/masdar-carasoul1.webp",
                "/assets/websites/masdar-photos/masdar-carasoul2.webp",
                "/assets/websites/masdar-photos/masdar-carasoul3.webp",
            ],
            logo: "/assets/websites/masdar-photos/masdar-logo.webp",
            link: "https://masdar.co/",
        },
        {
            mainImg: "/assets/websites/prestige-photos/prestige-carasoul1.webp",
            title: "Prestige web store",
            previewImages: [
                "/assets/websites/prestige-photos/prestige-page1.webp",
                "/assets/websites/prestige-photos/prestige-page2.webp",
                "/assets/websites/prestige-photos/prestige-page3.webp",
            ],
            carouselImages: [
                "/assets/websites/prestige-photos/prestige-carasoul1.webp",
                "/assets/websites/prestige-photos/prestige-carasoul2.webp",
                "/assets/websites/prestige-photos/prestige-carasoul3.webp",
            ],
            logo: "/assets/websites/prestige-photos/prestige-logo.webp",
            link: "https://prestige.co.ae/",
        },
        {
            mainImg: "/assets/websites/zein-photos/zein-page1.webp",
            title: "Zein real estate",
            previewImages: [
                "/assets/websites/zein-photos/zein-page1.webp",
                "/assets/websites/zein-photos/zein-page2.webp",
                "/assets/websites/zein-photos/zein-page3.webp",
            ],
            carouselImages: [
                "/assets/websites/zein-photos/zein-page1.webp",
                "/assets/websites/zein-photos/zein-page2.webp",
                "/assets/websites/zein-photos/zein-page3.webp",
            ],
            logo: "/assets/websites/zein-photos/zein-logo.webp",
            link: "https://zeindevelopment.com/",
        },

        {
            mainImg: "/assets/websites/static/summit.webp",
            title: "Summit",
        },
        {
            mainImg: "/assets/websites/static/helioplis.webp",
            title: "Heliopolis association",
        },
        {
            mainImg: "/assets/websites/static/ramsesfresh.webp",
            title: "Ramsees fresh",
        },
        {
            mainImg: "/assets/websites/static/tabibac.webp",
            title: "Tabibac",
        },
        {
            mainImg: "/assets/websites/static/bricohub.webp",
            title: "BricoHub",
        },
        {
            mainImg: "/assets/websites/static/damassteel.webp",
            title: "Damas steel",
        },
        {
            mainImg: "/assets/websites/static/school-functional.webp",
            title: "Tatweer",
        },
        {
            mainImg: "/assets/websites/static/thndr.webp",
            title: "Thndr sports wear",
        },
        {
            mainImg: "/assets/websites/static/pixi-travel.webp",
            title: "PIXI Travel",
        },
        {
            mainImg: "/assets/websites/static/eqraa.webp",
            title: "Eqraa",
        },
        {
            mainImg: "/assets/websites/static/realestate.webp",
            title: "Dwelling real estate",
        },
        {
            mainImg: "/assets/websites/static/chat.webp",
            title: "Educational dashboard",
        },
        {
            mainImg: "/assets/websites/static/courses.webp",
            title: "Educational dashboard",
        },
        {
            mainImg: "/assets/websites/static/dashboard.webp",
            title: "Educational dashboard",
        },
    ];
    return <PortfolioContext.Provider value={portfolioData}>{props.children}</PortfolioContext.Provider>;
}

export default PortfolioContextProvider;
