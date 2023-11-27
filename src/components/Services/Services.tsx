import "./Services.css";
import { Trans } from "react-i18next";
import HeaderAndLines from "../shared/HeaderAndLines";
import { useContext } from "react";
import { MyContext } from "../context/LngContext";

export default function Services() {
  const { currentLng } = useContext(MyContext);
  console.log(currentLng);
  return (
    <>
 

    
      <div className="container-fluid ">
        <div className="row bg-services  ">
          <div className="col-12 col-md-7    d-sm-flex justify-content-center flex-column p-0  pt-lg-0">
            <div className="row ">
              <div className={`col-2 pt-4 p-0  ${currentLng=='ar'?'text-start':'text-end'}   `}>
                <img src="/assets/services/star-icon.png" alt="" />
              </div>
              <div className="col-10">
                <p className="header-services pt-4">
                  <Trans i18nKey="Fast, professional website design compatible with all devices and search engines (SEO)."></Trans>
                </p>
                <p className="paragraph py-4">
                  <Trans i18nKey="The easiest way to display your services and products is to have a professionally designed website It combines form and efficiency, is compatible with all devices, and is fast in downloading, thus facilitating Search engines must archive it and appear when searching for any of your services or products."></Trans>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-center align-items-center px-4">
            <img
              className="home2 p-3 img-fluid"
              src="/assets/services/webservices1.png"
              alt=""
            />
          </div>
        </div>
        <HeaderAndLines header={<Trans i18nKey="Offers"></Trans>} />
      </div>
      <div className={`container p-5 mb-5 rtl ${currentLng=='ar'?'bg-img-servicesWithAR':"servicesWithEN"} bg-img-services`}>
        <div className="row mt-3">
          <div className="col-md-6 col-12">
            <div className="d-flex">
              <img src="/assets/services/pin.png" alt="" />
              <p className="text-services px-3 ">
                {" "}
                <Trans i18nKey="Free domain for one year."></Trans>
              </p>
            </div>
            <div className="d-flex">
              <img src="/assets/services/pin.png" alt="" />
              <p className="text-services px-3">
                <Trans i18nKey="Linking the website to social media platforms."></Trans>
              </p>
            </div>
            <div className="d-flex">
              <img src="/assets/services/pin.png" alt="" />
              <p className="text-services px-3">
                <Trans i18nKey="Structural programming of the site at the highest level."></Trans>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="d-flex">
              <img src="/assets/services/pin.png" alt="" />
              <p className="text-services px-3">
                <Trans i18nKey="Secure product management system."></Trans>
              </p>
            </div>
            <div className="d-flex">
              <img src="/assets/services/pin.png" alt="" />
              <p className="text-services px-3">
                <Trans i18nKey="Free technical support service for 6 months."></Trans>
              </p>
            </div>
            <div className="d-flex">
              <img src="/assets/services/pin.png" alt="" />
              <p className="text-services px-3">
                <Trans i18nKey="A comprehensive website management control panel."></Trans>
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex">
              <img src="/assets/services/pin.png" alt="" />
              <p className="text-services px-3">
                <Trans i18nKey="The number of emails (e-mail) reaches 100 emails."></Trans>
              </p>
            </div>
            <div className="d-flex">
              <img src="/assets/services/pin.png" alt="" />
              <p className="text-services px-3">
                <Trans i18nKey="The possibility of paying by credit cards through your website."></Trans>
              </p>
            </div>
            <div className="d-flex">
              <img src="/assets/services/pin.png" alt="" />
              <p className="text-services px-3">
                <Trans i18nKey="Design compatible with all devices (computer + tablet + mobile)."></Trans>
              </p>
            </div>
            <div className="d-flex">
              <img src="/assets/services/pin.png" alt="" />
              <p className="text-services px-3">
                <Trans i18nKey="An attractive design that is appropriate to the character and field of the company and coordinated with the company logo."></Trans>
              </p>
            </div>
            <div className="d-flex">
              <img src="/assets/services/pin.png" alt="" />
              <p className="text-services px-3">
                <Trans i18nKey="Your site will be eligible to appear on search engines."></Trans>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-features   py-4">
        <HeaderAndLines
          header={<Trans i18nKey="What makes your website special?"></Trans>}
        />
        <div className="container  my-5">
          <div className="row mt-5 gy-5">
            <div className=" col-sm-6 col-lg-3  text-center ">
              <img
                className="text-center m-auto  "
                src="./assets/services/features1.png"
                alt=""
              />
              <p className="text-services2">
                <Trans i18nKey="speed"></Trans>
              </p>
            </div>
            <div className=" col-sm-6 col-lg-3  text-center ">
              <img
                className="text-center m-auto  "
                src="./assets/services/features2.png"
                alt=""
              />
              <p className="text-services2">
                <Trans i18nKey="design"></Trans>
              </p>
            </div>
            <div className=" col-sm-6 col-lg-3  text-center ">
              <img
                className="text-center m-auto  "
                src="./assets/services/features3.png"
                alt=""
              />
              <p className="text-services2">
                <Trans i18nKey="Safety"></Trans>
              </p>
            </div>
            <div className=" col-sm-6 col-lg-3  text-center ">
              <img
                className="text-center m-auto  "
                src="./assets/services/features4.png"
                alt=""
              />
              <p className="text-services2">
                <Trans i18nKey="Compatible with search engines"></Trans>
              </p>
            </div>
            <div className=" col-sm-6 col-lg-3  text-center ">
              <img
                className="text-center m-auto  "
                src="./assets/services/features4.png"
                alt=""
              />
              <p className="text-services2">
                <Trans i18nKey="cost"></Trans>
              </p>
            </div>
            <div className=" col-sm-6 col-lg-3  text-center ">
              <img
                className="text-center m-auto  "
                src="./assets/services/features5.png"
                alt=""
              />
              <p className="text-services2">
                <Trans i18nKey="Ease of modification"></Trans>
              </p>
            </div>
            <div className=" col-sm-6 col-lg-3  text-center ">
              <img
                className="text-center m-auto  "
                src="./assets/services/features6.png"
                alt=""
              />
              <p className="text-services2">
                <Trans i18nKey="Easy control"></Trans>
              </p>
            </div>
            <div className=" col-sm-6 col-lg-3  text-center ">
              <img
                className="text-center m-auto  "
                src="./assets/services/features7.png"
                alt=""
              />
              <p className="text-services2">
                <Trans i18nKey="execution time"></Trans>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
