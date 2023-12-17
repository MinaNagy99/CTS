import { Trans } from 'react-i18next';
import './SEO.css';
import { useNavigate } from 'react-router-dom';
import TopSecServices from '../Top-sec-Service/TopSecServices';
import { Helmet } from 'react-helmet-async';
function Seo() {
    const navigate = useNavigate();
    const handelNavigate = () => {
        navigate('/contact-us', { state: { id: 1, name: 'SEO' } });
    };
    return (
        <>
            <Helmet>
                <title>SEO</title>
                <meta
                    name="keywords"
                    content="web development, buy Cisco switch CBS350-24 eg-tech,buy Cisco switch , Cisco switch CBS350-24 eg-tech , IT services, custom software development, website design, technology solutions, responsive web design, mobile app development, software consulting, IT support, digital solutions, e-commerce websites, content management systems, SEO, integrated services, web hosting, business identities, Light Current Solutions, Optical Fiber, Cabling Networks, Voice systems, Call Center systems, CCTV systems, online presence, tailored solutions, technological landscape, drive success forward"
                />
                <meta name="author" content="Core Technology Solutions" />
                <meta
                    name="description"
                    content="Welcome to Core Technology Solutions, the leading provider of comprehensive web development and IT services. With a dedicated team of experts, we specialize in delivering cutting-edge solutions tailored to your unique business needs. From custom software development and innovative website designs to responsive user interfaces and mobile app development, we offer a full spectrum of technology services. Our seasoned consultants provide strategic IT support and guidance, ensuring your digital solutions are aligned with your business goals. Explore how we can enhance your online presence and streamline your operations. Partner with us for unmatched expertise in e-commerce websites, content management systems, and search engine optimization (SEO). Join hands with Core Technology Solutions to embark on a journey of digital excellence and success."
                />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta property="og:title" content="Core Technology Solutions" />
                <meta
                    property="og:description"
                    content="Welcome to Core Technology Solutions, the leading provider of comprehensive web development and IT services. With a dedicated team of experts."
                />
                <meta property="og:image" content="https://www.cts-egy.com/assets/logonavbar.svg" />
                <meta property="og:url" content="https://cts-egy.com/services/seo" />
            </Helmet>
            <TopSecServices
                title="SEO"
                desc="We have a research team of specialists in on-page and off-page SEO, as well as PPC, i.e. payment for clicks in sponsored advertising campaigns such as Facebook and Google. We have a proven track record in increasing our clients’ search engine rankings."
                img="/assets/seo/seo1.webp"
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
