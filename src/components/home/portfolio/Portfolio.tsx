import "./Portofolio.css";
import HeaderAndLines from "../../shared/HeaderAndLines";
import { Trans } from "react-i18next";

export default function Portfolio() {
    return (
        <>
            <section>
                <HeaderAndLines header={<Trans i18nKey="Portfolio"></Trans>} />
                <div className="container">
                    <div className="row position-relative mt-5 justify-content-evenly">
                        <div className="arrow1 d-lg-block d-none">
                            <img src="/assets/home/arrow1.png" alt="" />
                        </div>
                        <div className="arrow2   d-lg-block d-none">
                            <img src="/assets/home/arrow2.png" alt="" />
                        </div>
                        <div className="col-12 p-3 col-md-4">
                            <div className="row  borderOfService py-2">
                                <div className="col-4 d-flex  justify-content-center align-items-center">
                                    <img className="port-img" src="/assets/home/webdesign.png" alt="" />
                                </div>
                                <div className="col-8 d-flex align-items-center">
                                    <p className="textService mb-0">
                                        <Trans i18nKey="Websites"></Trans>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 p-3 col-md-4">
                            <div className="row borderOfService py-2">
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <img className="port-img" src="/assets/home/itservices.png" alt="" />
                                </div>
                                <div className="col-8 d-flex align-items-center">
                                    <p className="textService mb-0">
                                        <Trans i18nKey="Information technology"></Trans>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row  mt-3 m-auto">
                        <div className="col-sm-4  col-12 my-3 ">
                            <img className="w-100 border border-2 p-3" src="/assets/home/mannaiewebsite.png" alt="" />

                            <p className="serviceName">
                                <Trans i18nKey="Al Mannai Real Estate Development"></Trans>
                            </p>
                        </div>
                        <div className="col-sm-4 col-12 my-3 ">
                            <img className="w-100 border border-2 p-3 " src="/assets/home/littleengineer.png" alt="" />

                            <p className="serviceName">
                                <Trans i18nKey="The Junior engineer platform"></Trans>{" "}
                            </p>
                        </div>
                        <div className="col-sm-4 col-12 my-3 ">
                            <img className="w-100 border border-2 p-3 " src="/assets/home/ebdaawebsite1.png" alt="" />

                            <p className="serviceName">
                                <Trans i18nKey="Creativity of engineering consulting"></Trans>
                            </p>
                        </div>
                    </div>
                    <div className="row  mt-5 m-auto">
                        <div className="col-sm-4 col-12 my-3 ">
                            <img className="w-100 border border-2 p-3 " src="/assets/home/motorswebsite.png" alt="" />

                            <p className="serviceName">
                                {" "}
                                <Trans i18nKey="Car maintenance website"></Trans>
                            </p>
                        </div>
                        <div className="col-sm-4 col-12 my-3 ">
                            <img className="w-100 border border-2 p-3 " src="/assets/home/alfaclinicwebsite.png" alt="" />

                            <p className="serviceName">
                                <Trans i18nKey="Alpha Clinic website"></Trans>
                            </p>
                        </div>
                        <div className="col-sm-4 col-12 my-3 ">
                            <img className="w-100 border border-2 p-3 " src="/assets/home/tripswebsite.png" alt="" />

                            <p className="serviceName">
                                <Trans i18nKey="Tourist travel website"></Trans>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
