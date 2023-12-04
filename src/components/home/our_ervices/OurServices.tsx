import { NavLink } from "react-router-dom";
import HeaderAndLines from "../../shared/HeaderAndLines";
import "./ourServices.css";
import { Trans } from "react-i18next";
import {motion} from "framer-motion"
function OurServices() {    
    return (
        <section>
            <HeaderAndLines header={<Trans i18nKey="Services"></Trans>} />
            <div className="container-fluid ">
                <div className="row w-md-75 mt-5 m-auto">
                    <motion.div  initial={{opacity:0}}  whileHover={{scale:1.1 ,transition:{duration:1}}} whileInView={{opacity:1}} transition={{duration:1}}  className="col-sm-4  col-6 my-3 ">
                        <NavLink
                            to="/services/web-design"
                            onClick={() => {
                                window.scrollTo({ top: 0 });
                            }}
                        >
                            <div className="imgService3  imgService p-5"></div>
                        </NavLink>

                        <p className="serviceName">
                            <Trans i18nKey="Website design"></Trans>
                        </p>
                    </motion.div>
                    <motion.div initial={{opacity:0}}  whileHover={{scale:1.1 ,transition:{duration:1}}} whileInView={{opacity:1}} transition={{duration:1.5}} className="col-sm-4 col-6 my-3">
                        <NavLink
                            to="/services/online-store-design"
                            onClick={() => {
                                window.scrollTo({ top: 0 });
                            }}
                        >
                            <div className="imgService2 imgService p-5"></div>
                        </NavLink>
                        <p className="serviceName">
                            <Trans i18nKey="Online store design"></Trans>
                        </p>
                    </motion.div>
                    <motion.div initial={{opacity:0}}  whileHover={{scale:1.1 ,transition:{duration:1}}} whileInView={{opacity:1}} transition={{duration:2}} className="col-sm-4 col-6 my-3">
                        <NavLink
                            to="/services/mobile-app"
                            onClick={() => {
                                window.scrollTo({ top: 0 });
                            }}
                        >
                            <div className="imgService1 imgService p-5"></div>
                        </NavLink>
                        <p className="serviceName">
                            <Trans i18nKey="Mobile application programming"></Trans>
                        </p>
                    </motion.div>
                    <motion.div initial={{opacity:0}}  whileHover={{scale:1.1 ,transition:{duration:1}}} whileInView={{opacity:1}} transition={{duration:2.5}} className="col-sm-4 col-6 my-3">
                        <NavLink
                            to="#"
                            onClick={() => {
                                window.scrollTo({ top: 0 });
                            }}
                        >
                            <div className="imgService6 imgService p-5"></div>
                        </NavLink>
                        <p className="serviceName">
                            <Trans i18nKey="Website hosting"></Trans>
                        </p>
                    </motion.div>
                    <motion.div initial={{opacity:0}}  whileHover={{scale:1.1 ,transition:{duration:1}}} whileInView={{opacity:1}} transition={{duration:3}} className="col-sm-4 col-6 my-3">
                        <div className="imgService5  imgService p-5"></div>
                        <p className="serviceName">
                            <Trans i18nKey="WordPress programming and website design"></Trans>
                        </p>
                    </motion.div>
                    <motion.div initial={{opacity:0}}  whileHover={{scale:1.1 ,transition:{duration:1}}} whileInView={{opacity:1}} transition={{duration:3.5}} className="col-sm-4 col-6 my-3">
                        <NavLink
                            to="/services/seo"
                            onClick={() => {
                                window.scrollTo({ top: 0 });
                            }}
                        >
                            <div className="imgService4 imgService p-5"></div>
                        </NavLink>
                        <p className="serviceName">
                            <Trans i18nKey="Preparing websites for search engines"></Trans>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;
