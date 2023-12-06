import "./MobilApp.css";
import HeaderAndLines from "../../shared/HeaderAndLines";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import TopSecServices from "../Top-sec-Service/TopSecServices";
export default function MobilApp() {
    type OurAdvantageType = {
        title: React.ReactNode;
        description: React.ReactNode;
        img: string;
    };

    let OurAdvantage: OurAdvantageType[] = [
        {
            title: <Trans i18nKey="Easy to navigate"></Trans>,
            description: (
                <Trans i18nKey="By providing a navigation bar that links important pages in your application, making it easier for users to navigate the application and easily access what they want."></Trans>
            ),
            img: "./assets/services/mobile/1.png",
        },
        {
            title: <Trans i18nKey="Usability"></Trans>,
            description: (
                <Trans i18nKey="We design your application with the appropriate specifications for the target customer. We study this customer first in order to improve the user experience and then apply the appropriate specifications for him."></Trans>
            ),
            img: "./assets/services/mobile/2.png",
        },
        {
            title: <Trans i18nKey="programming"></Trans>,
            description: (
                <Trans i18nKey="The appropriate programming language is used, and programming is done according to the latest international standards, with further experiments being conducted on different types of mobile devices, in order to ensure their compatibility with all operating systems."></Trans>
            ),
            img: "./assets/services/mobile/3.png",
        },
        {
            title: <Trans i18nKey="Publishing on app stores"></Trans>,
            description: (
                <Trans i18nKey="Once the application is finalized, its sections are complete, and all necessary operating tests are conducted, the application is released on application stores, such as Google Play and the App Store."></Trans>
            ),
            img: "./assets/services/mobile/4.png",
        },
        {
            title: <Trans i18nKey="Modern and innovative design"></Trans>,
            description: (
                <Trans i18nKey="We have designers who specialize in creating the best designs that are compatible with the type of activity, whether service or commercial, so that it completely succeeds in achieving the purpose of its design and provides the best customer experience."></Trans>
            ),
            img: "./assets/services/mobile/5.png",
        },
        {
            title: <Trans i18nKey="Continuous technical support"></Trans>,
            description: (
                <Trans i18nKey="The company does not stop providing technical support to its customers, as it has a professional team trained to provide service around the clock."></Trans>
            ),
            img: "./assets/services/mobile/6.png",
        },
        {
            title: <Trans i18nKey="Search feature"></Trans>,
            description: (
                <Trans i18nKey="Another feature that we provide is one of the most important factors that make the application successful, as it makes it easier for the customer to access what he wants easily. When the application is the easiest for the customer, he will repeat the purchase process."></Trans>
            ),
            img: "./assets/services/mobile/7.png",
        },
        {
            title: <Trans i18nKey="Continuous Improvement"></Trans>,
            description: (
                <Trans i18nKey="All mobile applications designed by Core Technology Solutions are subject to continuous development and improvements to keep pace with the best global developments."></Trans>
            ),
            img: "./assets/services/mobile/8.png",
        },
        {
            title: <Trans i18nKey="Evaluation system"></Trans>,
            description: (
                <Trans i18nKey="We are working to provide a rating system feature so that users can evaluate your application across all application stores. They can also write a quick review based on their experience, and based on it, they will know what the customer needs and improve the user experience."></Trans>
            ),
            img: "./assets/services/mobile/9.png",
        },
    ];

    return (
        <>
            <TopSecServices
                title="Mobile applications"
                desc="At Core Technology Solutions, we provide the service of designing and programming smart mobile applications for Android and iPhone for companies, individuals, and institutions with high quality and a control panel for each application according to need. We also create professional mobile applications for systems and companies, starting with the distinguished design appropriate to the idea and ending with strong programming and high performance, with attention to continuous updates to maintain success. The application after uploading it to Google Market or Father Story."
                img="./assets/services/mobile/Frame.png"
            />
            <section id="sec2">
                <HeaderAndLines
                    header={
                        <Trans i18nKey="Why customers prefer to get a mobile app from Core Technology Solutions"></Trans>
                    }
                />
                <div className="container-md mt-5">
                    <div className="row gx-2">
                        {OurAdvantage.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-sm-6  col-12   p-2 ">
                                    <div className="border  h-100 p-4 ">
                                        <div className="d-flex mb-2 justify-content-center align-items-center">
                                            <img src={item.img} alt="" />
                                            <p className="mx-4 text-mobile   mb-0">{item.title}</p>
                                        </div>
                                        <p className="details">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="sec4" className="bg-sec4">
                <div className="online-store-design-bot-section  p-5 mt-4">
                    <h2 className="text-center mb-4">
                        <Trans i18nKey="Application design and programming"></Trans>
                    </h2>
                    <p className="text-sec4 my-4   w-md-75  m-auto">
                        <Trans i18nKey="We have a work team with extensive experience in the field of designing mobile applications for both the Android or IOS operating systems that is able to help you transform your vision into a tangible reality that will be the beginning of amazing success."></Trans>
                    </p>
                    <div className="d-flex justify-content-center">
                        <Link
                            to="/contact-us"
                            onClick={() => {
                                window.scrollTo({ top: 0 });
                            }}
                        >
                            <button className="btn text-center  btn-top-section  ">
                                <Trans i18nKey="Request for a quote"></Trans>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
