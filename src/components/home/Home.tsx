import './home.css';
import PartnersSlider from './partners_slider/PartnersSlider';
import Our_Advantages from './our_Advantages/our_Advantages';
import OurServices from './our_ervices/OurServices';
import Portfolio from './portfolio/Portfolio';
import TopSection from './top_section/TopSection';
import ClientsSlider from './clients_slider/ClientsSlider';
import { Helmet } from 'react-helmet-async';

// ... rest of your code

function Home() {
    return (
        <>
            <Helmet>
                <title>Core Technology Solutions</title>
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
                <meta property="og:url" content="https://www.cts-egy.com" />
            </Helmet>
            <div className="container-fluid p-0 ">
                <TopSection />
                <OurServices />
                <Portfolio />
                <PartnersSlider />
                <Our_Advantages />
                <ClientsSlider />
            </div>
        </>
    );
}

export default Home;
