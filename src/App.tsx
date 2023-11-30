import "./App.css";
import About from "./components/About/About";
import MainLayout from "./components/MainLayout/MainLayout";
import PreviousWork from "./components/PreviousWork/PreviousWork";
import ContactUs from "./components/contact_us/ContactUs";
import MyContextProvider from "./components/context/LngContext";
import PortfolioContextProvider from "./components/context/PortfolioContext";
import FixedIcons from "./components/fixed_icons/FixedIcons";
import Home from "./components/home/Home";
import { useTranslation } from "react-i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WesbiteDetails from "./components/website_details/WebsiteDetails";
import WebDesign from "./components/Services/WebDesign/WebDesign";
function App() {
    const { i18n } = useTranslation();

    const textDirection = i18n.languages[0] === "ar" ? "rtl" : "ltr";
    let routes = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { index: true, element: <Home /> },
                { path:"/CTS", element: <Home /> },
                { path: "/about", element: <About /> },
                { path: "/portfolio", element: <PreviousWork /> },
                { path: "/contact-us", element: <ContactUs /> },
                { path: "/services/Web-design", element: <WebDesign /> },
                { path: "/website/:title", element: <WesbiteDetails /> },
            ],
        },
    ]);

    return (
        <>
            <div style={{ direction: textDirection }} className="stikcy-container">
                <PortfolioContextProvider>
                    <MyContextProvider>
                        <RouterProvider router={routes} />
                    </MyContextProvider>
                </PortfolioContextProvider>
                <FixedIcons />
            </div>
        </>
    );
}

export default App;
