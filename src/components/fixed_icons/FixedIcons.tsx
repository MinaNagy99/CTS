import { Trans } from "react-i18next";
import "./fixedIcons.css";

function FixedIcons() {
    const dialNumber = () => {
        // Replace with the logic to initiate a call to the specified number
        window.location.href = "tel:+201201117955";
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
            <div className="containIcon btn-whatsapp whats " onClick={dialNumber}>
                <a target="_blank" href="https://wa.me/01201117955?text=Hello%20from%20your%20website">
                    <div className="egy d-flex align-items-center ">
                        <img className="w-50" src="././src/assets/fixedIcon/egy.png" alt="" />
                        <p className="p-0 m-0 mx-1">
                            <Trans i18nKey="Egypt"></Trans>{" "}
                        </p>
                    </div>
                </a>
                <a target="_blank" href="https://wa.me/966540038724?text=Hello%20from%20your%20website">
                    <div className="soudi d-flex align-items-center ">
                        <img className="w-50" src="././src/assets/fixedIcon/soudi.png" alt="" />
                        <p className="p-0 m-0 mx-1">
                            <Trans i18nKey="Soudi"></Trans>{" "}
                        </p>
                    </div>
                </a>
                <img className="w-100" src="/assets/home/whatsappimage.png" alt="" />
            </div>
        </div>
    );
}

export default FixedIcons;
