import { Trans } from "react-i18next";
import "./fixedIcons.css";
import { useState } from "react";

function FixedIcons() {
    const [showPhoneNumbers, setShowPhoneNumbers] = useState(false);

    const dialNumber = () => {
        // Replace with the logic to initiate a call to the specified number
        window.location.href = "tel:+201201117955";
    };

    const togglePhoneNumbers = () => {
        setShowPhoneNumbers(!showPhoneNumbers);
    };

    const goToTop = () => {
        // Replace with the logic to scroll to the top of the page
        window.scrollTo(0, 0);
    };

    return (
        <div className=" ">
            <div className="containIcon btn-top" onClick={goToTop}>
                <img className="w-100" src="/assets/home/Frame 50.png" alt="" />
            </div>
            <div
                className={`containIcon btn-whatsapp whats ${showPhoneNumbers ? "show-phone-numbers" : ""}`}
                onClick={togglePhoneNumbers}
            >
                {showPhoneNumbers && (
                    <div className="phone-numbers">
                        <a target="_blank" href="https://wa.me/01201117955?text=Hello%20from%20your%20website">
                            <div className="eg d-flex align-items-center ">
                                <img className="" src="assets/fixedIcon/eg.svg" alt="" />
                                <p className="m-0">
                                    <Trans i18nKey="egypt"></Trans>{" "}
                                </p>
                            </div>
                        </a>
                        <a target="_blank" href="https://wa.me/966540038724?text=Hello%20from%20your%20website">
                            <div className="sa d-flex align-items-center ">
                                <img className="" src="assets/fixedIcon/sa.svg" alt="" />
                                <p className="m-0">
                                    <Trans i18nKey="saudi"></Trans>{" "}
                                </p>
                            </div>
                        </a>
                    </div>
                )}
                <img className="w-100" src="/assets/home/whatsappimage.png" alt="" />
            </div>
        </div>
    );
}

export default FixedIcons;
