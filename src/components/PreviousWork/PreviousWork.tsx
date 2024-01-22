// PreviousWork.tsx
import './PreviousWork.css';
import ItemProject from './itemProject/ItemProject';
import { Trans, useTranslation } from 'react-i18next';
import { useEffect, useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function PreviousWork() {
    const data: any = useContext(PortfolioContext);

    const { t } = useTranslation();
    useEffect(() => {
        document.title = t('CTS | Portfolio');
    });

    //     {
    //         imag: "/assets/portfolio/1.webp",
    //         title: <Trans i18nKey="Al Mannai Real Estate Development"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/2.webp",
    //         title: <Trans i18nKey="Creativity for engineering consultancy"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/3.webp",
    //         title: <Trans i18nKey="Junior engineer"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/4.webp",
    //         title: <Trans i18nKey="Alpha Clinic for dental treatment"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/5.webp",
    //         title: <Trans i18nKey="Cleaned for cleaning services"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/6.webp",
    //         title: <Trans i18nKey="Kider to teach children"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/7.webp",
    //         title: <Trans i18nKey="Educap for courses"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/8.webp",
    //         title: <Trans i18nKey="TourNest for trekking"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/9.webp",
    //         title: <Trans i18nKey="MotorMenders for cars"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/10.webp",
    //         title: <Trans i18nKey="Prestige online store"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/11.webp",
    //         title: <Trans i18nKey="Source for construction products"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/12.webp",
    //         title: <Trans i18nKey="Arcons Industrial Services"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/13.webp",
    //         title: <Trans i18nKey="Ramses Fresh"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/14.webp",
    //         title: <Trans i18nKey="Heliopolis Association"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/15.webp",
    //         title: <Trans i18nKey="summit"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/16.webp",
    //         title: <Trans i18nKey="Damas Steel"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/17.webp",
    //         title: "BricoHub  ",
    //     },
    //     {
    //         imag: "/assets/portfolio/18.webp",
    //         title: <Trans i18nKey="Your doctor"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/19.webp",
    //         title: <Trans i18nKey="PIXI Travel"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/20.webp",
    //         title: <Trans i18nKey="Thunder Sports Fashion"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/21.webp",
    //         title: <Trans i18nKey="development"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/22.webp",
    //         title: <Trans i18nKey="Educational dash board"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/23.webp",
    //         title: <Trans i18nKey="Dwelling Real Estate"></Trans>,
    //     },
    //     {
    //         imag: "/assets/portfolio/24.webp",
    //         title: <Trans i18nKey="Read"></Trans>,
    //     },
    // ];

    return (
        <>
            <Helmet>
                <title>CTS | Portfolio</title>
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
                <meta property="og:url" content="https://cts-egy.com/portfolio" />
            </Helmet>
            <section className="first-section p-4 d-flex flex-column justify-content-center align-items-start ">
                <div className="text-section d-flex flex-column align-items-center justify-content-center">
                    <p className="my-4">
                        <Trans i18nKey="See our previous work from"></Trans>
                    </p>
                    <h1 className="my-4">
                        <Trans i18nKey="Sites Design"></Trans>
                    </h1>
                    <img className="mt-4 img-fluid" src="/assets/portfolio/titleline.webp" alt="" />
                </div>
            </section>
            <div className="container ">
                <div className="row gy-4 mt-5">
                    
                    {data.map((item: any, index: number) =>
                        // Check if the item has a link property
                        // If it does, render a Link, otherwise render a div
                        'link' in item ? (
                            <Link
                                className="col-lg-4 col-sm-6 col-12 p-2"
                                key={index}
                                to={`/website/${encodeURIComponent(item.title)}`}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <ItemProject imag={item.mainImg.url} title={item.title} />
                            </Link>
                        ) : (
                            <div className="col-lg-4 col-sm-6 col-12 p-2" key={index}>
                                <ItemProject imag={item.mainImg} title={item.title} />
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
}
