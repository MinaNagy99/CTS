import { Trans } from 'react-i18next';
import HeaderAndLines from '../../shared/HeaderAndLines';
import TopSecServices from '../Top-sec-Service/TopSecServices';
import './WebHosting.css';
import { useContext } from 'react';
import { MyContext } from '../../context/LngContext';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
export default function WebHosting() {
    const navigate = useNavigate();
    const handelNavigate = () => {
        navigate('/contact-us', { state: { id: 1, name: 'hosting' } });
    };
    const { currentLng } = useContext(MyContext);
    type arrayOfAdvHosting = {
        title: React.ReactNode;
        desc: React.ReactNode;
    };
    type arrayOfWhy = {
        text: React.ReactNode;
    };
    const arrayOfAdvHosting: arrayOfAdvHosting[] = [
        {
            title: <Trans i18nKey="CDN geographic spread technology"></Trans>,
            desc: (
                <Trans i18nKey="It means disseminating data about the site using automated technology on the “Content Delivery Network”, which are connected distribution points around the world, which ensure quick browsing of the site in a way that achieves the maximum possible benefit for the site and its owner."></Trans>
            ),
        },
        {
            title: <Trans i18nKey="Protection from DDOS attacks"></Trans>,
            desc: (
                <Trans i18nKey="Core Technology Solutions provides its customers with the highest levels of protection against Internet hackers, and the presence of alternative servers in the event of a sudden service outage, so that the site is not affected at all, without customers and site visitors feeling it."></Trans>
            ),
        },
        {
            title: <Trans i18nKey="SSL certificate"></Trans>,
            desc: (
                <Trans i18nKey="We provide our customers with an SSL certificate that provides the highest levels of security for site browsers, by using a system for encrypting user data within the site. At the same time, the Google search engine adopts this certificate as one of the criteria for arranging search results."></Trans>
            ),
        },
    ];
    const arrayOfWhy: arrayOfWhy[] = [
        {
            text: (
                <Trans i18nKey="The company provides its customers with advanced backups to protect the site from any malfunctions or emergency attacks."></Trans>
            ),
        },
        {
            text: (
                <Trans i18nKey="The customer service department provides its services immediately, 24 hours a day."></Trans>
            ),
        },
        {
            text: <Trans i18nKey="It uses the best and latest software and hosting."></Trans>,
        },
        {
            text: <Trans i18nKey="Hosting is suitable for all platforms."></Trans>,
        },
        {
            text: (
                <Trans i18nKey="It features a control panel that allows the site owner more flexibility and to make some modifications to the site that he deems necessary."></Trans>
            ),
        },
        {
            text: (
                <Trans i18nKey="Because the site enjoys great trust among users, it provides the opportunity to refund money in the event of dissatisfaction with the service within 30 days from the beginning of implementation."></Trans>
            ),
        },
        {
            text: (
                <Trans i18nKey="Providing a permanent replacement service, which guarantees the continuity of service without interruption by 99.9% in the event that one of the devices suffers a sudden malfunction, as the replacement is provided immediately without any interruption to the service."></Trans>
            ),
        },
        {
            text: (
                <Trans i18nKey="Core Technology Solutions uses the latest storage methods, which operate with advanced NVME technology, which is 7 times faster than the speed of various media, and is considered one of the company's best features."></Trans>
            ),
        },
        {
            text: (
                <Trans i18nKey="The site offers its customers the best offers, facilities, and various contracting packages."></Trans>
            ),
        },
        {
            text: (
                <Trans i18nKey="Dear customer, do not hesitate to contact Core Technology Solutions for the best and safest possible hosting."></Trans>
            ),
        },
    ];
    return (
        <>
            <Helmet>
                <title>Web hosting</title>
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
                <meta property="og:url" content="https://cts-egy.com/services/web-hosting" />
            </Helmet>
            <div id="webhosting">
                <TopSecServices
                    title="The best web hosting and email services"
                    desc="Website hosting is one of the things that many business owners who want to start their business on the Internet are interested in, and it is one of the most important things that must be obtained when creating your website or online store."
                    img="/assets/services/hosting/bg-webhosting.webp"
                ></TopSecServices>
                <HeaderAndLines header={<Trans i18nKey="Hosting features from Core Technology Solutions"></Trans>} />
                <div id="section2" className="container  mt-5 ">
                    <div className="row">
                        {arrayOfAdvHosting.map((item, index) => {
                            return (
                                <div key={index} className="col-md-4 col-12 py-4 border border-2">
                                    <p>{item.title}</p>
                                    <p>{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div id="section3" className="container ">
                    <div className="row mb-5">
                        <div className="col-md-10 col-12">
                            <HeaderAndLines
                                header={
                                    <Trans i18nKey="Why do customers prefer hosting with Core Technology Solutions?"></Trans>
                                }
                            />
                        </div>
                    </div>
                    <div className={`${currentLng == 'ar' ? 'bg-section3AR' : 'bg-section3EN'}`}>
                        {arrayOfWhy.map((item, index) => {
                            return (
                                <p key={index}>
                                    <span>
                                        <img src="/assets/services/hosting/star.webp" alt="" />
                                    </span>{' '}
                                    {item.text}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div id="section4" className=" text-center py-4  mt-4">
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
                    </a>{' '}
                </div>
            </div>
        </>
    );
}
