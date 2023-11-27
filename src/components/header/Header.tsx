import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./header.css";
import i18next from "i18next";
import { Trans } from "react-i18next";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isNavbarCollapsed, setNavbarCollapsed] = useState(false);
    const [nextLang, setnextLang] = useState({
        languageName: "English",
        imgFlag: "/assets//home/american-flag.png",
    });
    const [currentLang, setCurrentLand] = useState("");
    const location = useLocation();

    const navigationLinks = [
        { to: "/", textKey: "Home" },
        { to: "/about", textKey: "About us" },
        { to: "/services", textKey: "Services" },
        { to: "/portfolio", textKey: "Portfolio" },
        { to: "/blogs", textKey: "Blogs" },
        { to: "/contact-us", textKey: "Contact us" },
    ];

    const isServicesAndBlogsDisabled = true;

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50; // Adjust the scroll threshold as needed
            setScrolled(isScrolled);
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setCurrentLand(localStorage.getItem("lng") || "ar");
    }, [nextLang]);

    const handleNavbarToggle = () => {
        setNavbarCollapsed(!isNavbarCollapsed);
    };

    const handleLangToggle = () => {
        if (currentLang === "en") {
            localStorage.setItem("lng", "ar");
            i18next.changeLanguage("ar");
            setnextLang({
                languageName: "English",
                imgFlag: "/assets//home/american-flag.png",
            });
        } else {
            localStorage.setItem("lng", "en");
            i18next.changeLanguage("en");
            setnextLang({
                languageName: "العربية",
                imgFlag: "/assets/svg/arabic_flag.svg",
            });
        }
    };

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg ${scrolled ? "navbar-scrolled" : ""} ${isNavbarCollapsed ? "m-0" : ""}`}
            >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src="/assets/logo.png" alt="" />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={handleNavbarToggle}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse`} id="navbarNavAltMarkup">
                        <div className="navbar-nav w-100 d-flex flex-column col-lg-5 flex-lg-row justify-content-between align-items-center">
                            {navigationLinks.map((link) =>
                                isServicesAndBlogsDisabled && ( link.to === "/blogs") ? null : (
                                    <NavLink
                                    onClick={()=>{window.scrollTo({ top: 0})
                                    }}
                                        key={link.to}
                                        className={`nav-link ${location.pathname === link.to ? "active" : ""}`}
                                        to={link.to}
                                    >
                                        <Trans i18nKey={link.textKey}></Trans>
                                    </NavLink>
                                )
                            )}
                            <button onClick={handleLangToggle} className="btn-lang px-3 mx-3">
                                <img className="px-2 language-flag" src={nextLang.imgFlag} alt="" />
                                {nextLang.languageName}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
