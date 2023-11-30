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
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import WesbiteDetails from "./components/website_details/WebsiteDetails";
import WebDesign from "./components/Services/WebDesign/WebDesign";

function App() {
    const { i18n } = useTranslation();
    const textDirection = i18n.languages[0] === "ar" ? "rtl" : "ltr";

    return (
        <>
            <div style={{ direction: textDirection }} className="stikcy-container">
                <PortfolioContextProvider>
                    <MyContextProvider>
                        <Router>
                            <Routes>
                                <Route
                                    path="/"
                                    element={<MainLayout />}
                                >
                                    <Route index element={<Home />} />
                                    <Route path="/CTS" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/portfolio" element={<PreviousWork />} />
                                    <Route path="/contact-us" element={<ContactUs />} />
                                    <Route path="/services/Web-design" element={<WebDesign />} />
                                    <Route path="/website/:title" element={<WesbiteDetails />} />
                                </Route>
                            </Routes>
                        </Router>
                    </MyContextProvider>
                </PortfolioContextProvider>
                <FixedIcons />
            </div>
        </>
    );
}

export default App;
