import { Trans } from "react-i18next";
import HeaderAndLines from "../../shared/HeaderAndLines";
import TopSecServices from "../Top-sec-Service/TopSecServices";
import "./Wordpress.css";
import { useNavigate } from "react-router-dom";
export default function Wordpress() {
    const navigate = useNavigate();
    const handelNavigate = () => {
        navigate("/contact-us", { state: { id: 1, name: "wordpress" } });
    };
    type arrOfWordpress = {
        title: React.ReactNode;
        content: React.ReactNode;
        img: string;
    };
    const arrOfWordpress1: arrOfWordpress[] = [
        {
            title: <Trans i18nKey="Secure and fast hosting"></Trans>,
            content: (
                <Trans i18nKey="We provide you with software security from hacking. We take care of our programming to be light and take into account browsing speed."></Trans>
            ),
            img: "./assets/services/wordpress/wd1.webp",
        },
        {
            title: <Trans i18nKey="Search engine friendly site"></Trans>,
            content: (
                <Trans i18nKey="We add your site professionally to ensure that your site appears on search engines"></Trans>
            ),
            img: "./assets/services/wordpress/wd2.webp",
        },
        {
            title: <Trans i18nKey="Arabization and multilingualism"></Trans>,
            content: (
                <Trans i18nKey="We Arabize any WordPress template you have without complexity and offer several language options for your site"></Trans>
            ),
            img: "./assets/services/wordpress/wd3.webp",
        },
        {
            title: <Trans i18nKey="Developing and updating the system in WordPress"></Trans>,
            content: (
                <Trans i18nKey="Developing the system in WordPress to serve you. Our work is the result of the cooperation of a work team keen on accuracy and attention to all details"></Trans>
            ),
            img: "./assets/services/wordpress/wd4.webp",
        },
    ];
    const arrOfWordpress2: arrOfWordpress[] = [
        {
            title: <Trans i18nKey="Professional theme design"></Trans>,
            content: (
                <Trans i18nKey="Installing the theme with a control panel accompanying the design, we give you easy management"></Trans>
            ),
            img: "./assets/services/wordpress/wd5.webp",
        },
        {
            title: <Trans i18nKey="WordPress website design for any field"></Trans>,
            content: (
                <Trans i18nKey="Design and development of WordPress for any field, news, artistic, personal, any field, themes that suit your field and put you at the forefront of distinguished sites."></Trans>
            ),
            img: "./assets/services/wordpress/wd6.webp",
        },
        {
            title: <Trans i18nKey="Site division"></Trans>,
            content: (
                <Trans i18nKey="Dividing the site into main and sub-sections, adding special pages, creating main and sub-menus for the site."></Trans>
            ),
            img: "./assets/services/wordpress/wd7.webp",
        },
        {
            title: <Trans i18nKey="Installing the software on the hosting"></Trans>,
            content: (
                <Trans i18nKey="Installing all the necessary additions for the proper functioning of the site. We use the latest work techniques in programming and design"></Trans>
            ),
            img: "./assets/services/wordpress/wd8.webp",
        },
    ];
    return (
        <>
            <div id="wordpress">
                <TopSecServices
                    title="Programming and designing WordPress websites"
                    desc="We offer professional WordPress website design services at the cheapest prices. We also provide WordPress themes that include Arabic and English. Core Technology Solutions is also distinguished by providing distinctive designs for e-commerce websites, “e-commerce sites.” Core Technology Solutions services also include website design in the countries of Egypt. And the Emirates, Saudi Arabia, and Kuwait. There are also special designs for all fields of companies (medical - stores - commercial - hospitals - real estate - restaurants - contracting - car services and others)"
                    img="./assets/services/wordpress/wordpress.webp"
                />
                <div id="wdSec2" className="container ">
                    <HeaderAndLines header={<Trans i18nKey="Features of WordPress website design from Solutions"></Trans>} />
                    <div className="row mt-5">
                        <div className="col-md-6 col-12">
                            {arrOfWordpress1.map((item, index) => {
                                return (
                                    <div key={index} className="d-flex  ">
                                        <img className="pb-4 px-3 pt-0" src={item.img} alt="" />
                                        <div>
                                            <p>{item.title}</p>
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="col-md-6 col-12">
                            {arrOfWordpress2.map((item, index) => {
                                return (
                                    <div key={index} className="d-flex  ">
                                        <img className="pb-4 px-3 pt-0" src={item.img} alt="" />
                                        <div>
                                            <p>{item.title}</p>
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div id="section4" className=" bg-wordpress text-center py-4  mt-4">
                    <p>
                        <Trans i18nKey="To obtain this service, leave us your information and get a price quote"></Trans>
                    </p>
                    <a
                        onClick={() => {
                            handelNavigate();
                            window.scrollTo({ top: 0 });
                        }}
                    >
                        <button className="btn text-center btn-top-section mt-3">
                            <Trans i18nKey="Request for a quote"></Trans>
                        </button>
                    </a>{" "}
                </div>
            </div>
        </>
    );
}
