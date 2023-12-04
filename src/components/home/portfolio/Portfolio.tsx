import "./Portofolio.css";
import HeaderAndLines from "../../shared/HeaderAndLines";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

interface DataItem {
    title: JSX.Element; // Assuming you're using JSX for translations
    image: string;
    link: string;
}

export default function Portfolio() {
    const portfolioArray: DataItem[] = [
        {
            title: <Trans i18nKey="Al Mannai Real Estate Development" />,
            image: "/assets/websites/mannaie-photos/mannaie-carasoul1.png",
            link: "https://www.mannaie-group-development.com/",
        },
        {
            title: <Trans i18nKey="The Junior engineer platform" />,
            image: "/assets/websites/littleengineer-photos/littleegineer-carasoul1.png",
            link: "https://le-academy.com/",
        },
        {
            title: <Trans i18nKey="Creativity of engineering consulting" />,
            image: "/assets/websites/ebdaa-photos/ebdaa-carasoul1.png",
            link: "http://ebdaa-saudi.com/",
        },
        {
            title: <Trans i18nKey="Car maintenance website" />,
            image: "/assets/websites/motormenders-photos/motormenders-carasoul1.png",
            link: "/demo/MotorMenders",
        },
        {
            title: <Trans i18nKey="Masdar for building products" />,
            image: "/assets/websites/masdar-photos/masdar-page1.png",
            link: "https://masdar.co/",
        },
        {
            title: <Trans i18nKey="Prestige web store" />,
            image: "/assets/websites/prestige-photos/prestige-carasoul1.png",
            link: "https://prestige.co.ae/",
        },
    ];

    return (
        <>
            <section>
                <HeaderAndLines header={<Trans i18nKey="Portfolio"></Trans>} />
                <div className="container">
                    <div className="row d-flex position-relative mt-5 justify-content-evenly">
                        <span className="arrow1 d-md-inline d-none">
                            <img src="/assets/home/arrow1.png" alt="" />
                        </span>
                        <span className="arrow2 d-md-inline d-none">
                            <img src="/assets/home/arrow2.png" alt="" />
                        </span>
                        <div className="d-flex justify-content-center align-items-center  p-3 portfolio-title">
                            <Link
                                className="d-flex borderOfService px-5 py-2"
                                to={"/Portfolio"}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <div className=" d-flex mx-2 justify-content-center align-items-center">
                                    <img className="port-img" src="/assets/home/webdesign.png" alt="" />
                                </div>
                                <div className=" d-flex mx-2 align-items-center">
                                    <p className="textService mb-0">
                                        <Trans i18nKey="Websites"></Trans>
                                    </p>
                                </div>
                            </Link>
                        </div>
                        {/* <div className="col-12 p-3 col-md-4">
                            <div className="row borderOfService py-2">
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <img className="port-img" src="/assets/home/itservices.png" alt="" />
                                </div>
                                <div className="col-8 d-flex align-items-center">
                                    <p className="textService mb-0">
                                        <Trans i18nKey="Information technology"></Trans>
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row mt-3 m-auto">
                        {portfolioArray.map((item, index) => (
                            <Link to={item.link} className="col-lg-4 col-sm-6 col-12 text-decoration-none">
                                <div
                                    className=" portfolio-section-container border border-2 p-3 overflow-hidden"
                                    key={index}
                                >
                                    <div className="portfolio-section-img-container overflow-hidden rounded-4 item-border border-0">
                                        <img className="w-100 portfolio-section-image" src={item.image} alt="" />
                                    </div>
                                </div>
                                <p className="serviceName">{item.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
