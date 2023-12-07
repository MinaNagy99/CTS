import { Trans } from "react-i18next";
import "./SEO.css";
import { useNavigate } from "react-router-dom";
import TopSecServices from "../Top-sec-Service/TopSecServices";
function Seo() {
    const navigate = useNavigate();
    const handelNavigate = () => {
        navigate("/contact-us", { state: { id: 1, name: "SEO" } });
    };
    return (
        <>
            <TopSecServices
                title="SEO"
                desc="We have a research team of specialists in on-page and off-page SEO, as well as PPC, i.e. payment for clicks in sponsored advertising campaigns such as Facebook and Google. We have a proven track record in increasing our clients’ search engine rankings."
                img="./assets/seo/seo1.webp"
            />
            <div className="container-fluid p-0 seo">
                <div className="position-relative ice1">
                    <img src="/assets/seo/ice1.webp" alt="" />
                </div>
                <div className="px-5">
                    <h2>
                        <Trans i18nKey="Our strategies aim to achieve the following three goals:"></Trans>
                    </h2>
                    <ul className="">
                        <li className="list-square">
                            <Trans i18nKey="Creativity in ways to attract the target audience to visit the website through social networks"></Trans>
                        </li>
                        <li className="list-square">
                            <Trans i18nKey="Supporting the site by enriching dialogue and spreading it through trustworthy people and sites"></Trans>
                        </li>
                        <li className="list-square">
                            <Trans i18nKey="Attracting visitors through good content approved by search engines in order to target specific search terms."></Trans>
                        </li>
                    </ul>
                </div>
                <div className="ice2">
                    <img src="/assets/seo/ice2.webp" alt="" />
                </div>
                <div className="seo-bot-section text-center p-5 mt-5">
                    <h2>
                        <Trans i18nKey="Preparing websites for search engines (SEO)."></Trans>
                    </h2>
                    <p className="my-4">
                        <Trans i18nKey="SEO is considered the most important source in attracting targeted visitors. We study your field, the market, and competitors, in order to develop the appropriate marketing plan that saves a lot of money and time and ensures that your site is prepared and appears in the first results. The appearance of your site in the first results of search engines is a great success, because This means that thousands of visitors and therefore customers will reach your site, which is what any company seeks."></Trans>
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
                    </a>
                </div>
            </div>
        </>
    );
}

export default Seo;
