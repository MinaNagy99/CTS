import './App.css';
import About from './components/About/About';
import MainLayout from './components/MainLayout/MainLayout';
import PreviousWork from './components/PreviousWork/PreviousWork';
import ContactUs from './components/contact_us/ContactUs';
import MyContextProvider from './components/context/LngContext';
import PortfolioContextProvider from './components/context/PortfolioContext';
import FixedIcons from './components/fixed_icons/FixedIcons';
import Home from './components/home/Home';
import { useTranslation } from 'react-i18next';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WebDesign from './components/Services/WebDesign/WebDesign';
import OnlineStoreDesign from './components/Services/OnlineStoreDesign/OnlineStoreDesign';
import Seo from './components/Services/SEO/SEO';
import MobilApp from './components/Services/MobilApp/MobilApp';
import WebHosting from './components/Services/WebHosting/WebHosting';
import Wordpress from './components/Services/WordPress/Wordpress';
// import Register from './components/register/Register';
import BlogContextProvider from './components/context/BlogContext';
import BlogDetails from './components/Blog/BlogDetails';
import AllBlogs from './components/Blog/AllBlogs';
import WesbiteDetails from './components/website_details/WebsiteDetails';

function App() {
    const { i18n } = useTranslation();
    const textDirection = i18n.languages[0] === 'ar' ? 'rtl' : 'ltr';
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { index: true, element: <Home /> },
                { path: '/about', element: <About /> },
                { path: '/portfolio', element: <PreviousWork /> },
                { path: '/website/:title', element: <WesbiteDetails /> },
                { path: '/contact-us', element: <ContactUs /> },
                { path: '/services/web-design', element: <WebDesign /> },
                { path: '/services/mobile-app', element: <MobilApp /> },
                {
                    path: '/services/online-store-design',
                    element: <OnlineStoreDesign />,
                },
                { path: '/services/web-hosting', element: <WebHosting /> },
                { path: '/services/wordpress', element: <Wordpress /> },
                { path: '/services/seo', element: <Seo /> },
                // { path: '/register', element: <Register /> },
                { path: '/blogs', element: <AllBlogs /> },
                { path: '/blog/:slug', element: <BlogDetails /> },
            ],
        },
    ]);

    return (
        <>
            <div style={{ direction: textDirection }} className="stikcy-container">
                <BlogContextProvider>
                    <PortfolioContextProvider>
                        <MyContextProvider>
                            <RouterProvider router={router}></RouterProvider>
                        </MyContextProvider>
                    </PortfolioContextProvider>
                </BlogContextProvider>
                <FixedIcons />
            </div>
        </>
    );
}

export default App;
