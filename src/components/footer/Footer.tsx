import "./footer.css";
import { Trans } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer>
            <div className=" container-fluid p-4 ">
                <div className="row p-0 ">
                    <div className="col-md-4 col-12 d-flex align-items-center flex-column">
                        <img className="footer-logo my-1" src="/assets/logofooter.svg" alt="" />
                        <div className="my-3">
                            <Link to="">info@cts-egy.com</Link>
                            <img className="me-1" src="/assets/svg/emailicon.svg" alt="" />
                        </div>
                        <Link to="/contact-us">
                            <button className="btn mb-4  btn-top-section">
                                <Trans i18nKey="Contact us"></Trans>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-4 col-12 px-0">
                        <h5 className="mb-2">
                            <Trans i18nKey="Services"></Trans>
                        </h5>
                        <ul className="list-unstyled px-3">
                            <li className="text-decoration-underline">
                                <NavLink
                                    onClick={() => {
                                        window.scrollTo({ top: 0 });
                                    }}
                                    className="nav-Link"
                                    to="/services/web-design"
                                >
                                    <Trans i18nKey="Website design"></Trans>
                                </NavLink>
                            </li>

                            <li className="text-decoration-underline">
                                <NavLink
                                    className="nav-Link"
                                    onClick={() => {
                                        window.scrollTo({ top: 0 });
                                    }}
                                    to="/"
                                >
                                    <Trans i18nKey="Mobile application programming"></Trans>
                                </NavLink>
                            </li>
                            <li className="text-decoration-underline">
                                <NavLink
                                    onClick={() => {
                                        window.scrollTo({ top: 0 });
                                    }}
                                    className="nav-Link"
                                    to="/"
                                >
                                    <Trans i18nKey="WordPress programming and website design"></Trans>
                                </NavLink>
                            </li>
                            <li className="text-decoration-underline">
                                <NavLink
                                    onClick={() => {
                                        window.scrollTo({ top: 0 });
                                    }}
                                    className="nav-Link"
                                    to="/portfolio"
                                >
                                    <Trans i18nKey="portfolio"></Trans>
                                </NavLink>
                            </li>
                            <li className="text-decoration-underline">
                                <NavLink
                                    onClick={() => {
                                        window.scrollTo({ top: 0 });
                                    }}
                                    className="nav-Link"
                                    to="/"
                                >
                                    <Trans i18nKey="IT Services"></Trans>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-12 px-0">
                        <h5 className="mb-2  ">
                            {" "}
                            <Trans i18nKey="Contact us"></Trans>{" "}
                        </h5>
                        <div className="contact-lines d-flex align-items-center">
                            <div className="footer-icon-container mx-2   d-inline-flex justify-content-center align-items-center">
                                <img src="/assets/svg/location.svg" alt="" />
                            </div>
                            <span>
                                <Trans i18nKey="Cairo, Maadi Corniche St. Police Information Institute"></Trans>
                            </span>
                        </div>
                        <div className="contact-lines d-flex align-items-center">
                            <div className="footer-icon-container mx-2   d-inline-flex justify-content-center align-items-center">
                                <img src="/assets/svg/phone.svg" alt="" />
                            </div>
                            <div>
                                <span>
                                    <Trans i18nKey="(+20)1201117955"></Trans>
                                </span>
                            </div>
                        </div>
                        <div className="contact-lines d-flex align-items-center">
                            <div className="footer-icon-container mx-2   d-inline-flex justify-content-center align-items-center">
                                <img src="/assets/svg/telephone.svg" alt="" />
                            </div>
                            <span>0227634002</span>
                        </div>
                        <div className="contact-lines d-flex align-items-center">
                            <div className="footer-icon-container mx-2  d-inline-flex justify-content-center align-items-center">
                                <img src="/assets/svg/location.svg" alt="" />
                            </div>
                            <span>
                                <Trans i18nKey="Jeddah, King Fahd Road, Al Jazeera Building, Building 3"></Trans>
                            </span>
                        </div>
                        <div className="contact-lines d-flex align-items-center">
                            <div className="footer-icon-container mx-2    d-inline-flex justify-content-center align-items-center">
                                <img src="/assets/svg/phone.svg" alt="" />
                            </div>
                            <span>
                                <Trans i18nKey="(+966)542714543"></Trans>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="row mb-2  mx-5">
                    <div className="col-12 col-md-6 footer-gifs d-flex justify-content-center">
                        <Link
                            to="https://www.snapchat.com/add/coretechnology?share_id=zOFk_Vu0-k0&locale=en-GB"
                            target="_blank"
                            className="ms-3"
                        >
                            <img className="" src="/assets/gif/snapchat.gif" alt="" />
                        </Link>
                        <Link
                            target="_blank"
                            className="ms-3"
                            to="https://www.facebook.com/CoreTechnologySolutions022/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0 "
                        >
                            <img className="" src="/assets/gif/facebook.gif" alt="" />
                        </Link>
                        <Link
                            className="ms-3"
                            target="_blank"
                            to="https://wa.me/01201117955?text=Hello%20from%20your%20website"
                        >
                            <img className="" src="/assets/gif/whatsapp.gif" alt="" />
                        </Link>
                        <Link className="ms-3" target="_blank" to="https://www.Linkedin.com/company/cts-eg/">
                            <img className="" src="/assets/gif/in.gif" alt="" />
                        </Link>
                        <Link className="ms-3" target="_blank" to="https://www.instagram.com/core_technology24/">
                            <img className="" src="/assets/gif/instegram.gif" alt="" />
                        </Link>
                    </div>
                    <div className="col-12 mb-4 col-md-6 d-flex justify-content-center align-items-center ">
                        <p className="p-0 m-0 text-center">
                            <Trans i18nKey="All rights reserved to © Core Technology Solutions"></Trans>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
