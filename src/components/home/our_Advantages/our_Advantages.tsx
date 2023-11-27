import HeaderAndLines from "../../shared/HeaderAndLines";
import "./our_Advantages.css";
import { Trans } from "react-i18next";
export default function Our_Advantages() {
    return (
        <>
            <div className="bg-image">
                <div className="container  pt-4">
                    <HeaderAndLines header={<Trans i18nKey="Our website design features"></Trans>} />
                    <div className=" p-3 my-5">
                        <div className="row">
                            <div className="col-md-6 p-3 col-12">
                                <div className="row my-3">
                                    <div className="col-2 m-auto d-flex justify-content-end  ">
                                        <img className="w-100 " src="/assets/home/features1.png" alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h3 className="d-flex justify-content-start">
                                            <Trans i18nKey="Fast design"></Trans>
                                        </h3>{" "}
                                        <p className="d-flex justify-content-start">
                                            <Trans i18nKey="We provide fast designs that are compatible with search engines so that your site appears quickly in search engines and all browsers"></Trans>
                                        </p>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-2 m-auto d-flex justify-content-end  text-start">
                                        <img className="w-100 " src="/assets/home/features2.png" alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h3 className="d-flex justify-content-start">
                                            {" "}
                                            <Trans i18nKey="Official emails"></Trans>
                                        </h3>
                                        <p className="d-flex justify-content-start">
                                            <Trans i18nKey="We provide official emails under the domain name to all the company’s staff for easy communication between them and customers"></Trans>
                                        </p>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-2 m-auto d-flex justify-content-end  text-start">
                                        <img className="w-100 " src="/assets/home/features3.png" alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h3 className="d-flex justify-content-start">
                                            {" "}
                                            <Trans i18nKey="Control your site easily"></Trans>{" "}
                                        </h3>
                                        <p className="d-flex justify-content-start">
                                            <Trans i18nKey="We offer an easy-to-use control panel. Manage your site's contents with ease at any time"></Trans>
                                        </p>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-2 m-auto d-flex justify-content-end  text-start">
                                        <img className="w-100 " src="/assets/home/features4.png" alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h3 className="d-flex justify-content-start">
                                            {" "}
                                            <Trans i18nKey="Professional design"></Trans>{" "}
                                        </h3>
                                        <p className="d-flex justify-content-start">
                                            <Trans i18nKey="We are distinguished by simple, exclusive and professional designs with the intersection of different ideas that express you and your identity"></Trans>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-3 col-12">
                                <div className="row my-3">
                                    <div className="col-2 m-auto d-flex justify-content-end   text-start">
                                        <img className="w-100 " src="/assets/home/features5.png" alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h3 className="d-flex justify-content-start">
                                            <Trans i18nKey="Compatible with all devices"></Trans>
                                        </h3>
                                        <p className="d-flex justify-content-start">
                                            <Trans i18nKey="We always work to make the site compatible with smart devices and all mobile devices and screens such as browsing"></Trans>
                                        </p>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-2 m-auto d-flex justify-content-end  text-start">
                                        <img className="w-100 " src="/assets/home/features6.png" alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h3 className="d-flex justify-content-start">
                                            {" "}
                                            <Trans i18nKey="multi languages"></Trans>{" "}
                                        </h3>
                                        <p className="d-flex justify-content-start">
                                            <Trans i18nKey="We offer several language options for your site. It is possible for your site to be displayed in one language or displayed in more than one language, depending on your choice"></Trans>
                                        </p>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-2 m-auto d-flex justify-content-end  text-start">
                                        <img className="w-100 " src="/assets/home/features7.png" alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h3 className="d-flex justify-content-start">
                                            {" "}
                                            <Trans i18nKey="Professional slide show"></Trans>
                                        </h3>
                                        <p className="d-flex justify-content-start">
                                            <Trans i18nKey="We provide you with a professional slide show to display all services and images in a distinctive way and control the slide from the control panel"></Trans>
                                        </p>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-2 m-auto d-flex justify-content-end  text-start">
                                        <img className="w-100 " src="/assets/home/features8.png" alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h3 className="d-flex justify-content-start">
                                            {" "}
                                            <Trans i18nKey="Search engine friendly site"></Trans>
                                        </h3>
                                        <p className="d-flex justify-content-start">
                                            <Trans i18nKey="We add your site professionally to search engines to ensure that your site appears in the first search results on search engines"></Trans>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
