import { useContext, useEffect } from "react";
import "./About.css";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import { MyContext } from "../context/LngContext";
import { motion } from "framer-motion";
export default function About() {
  const { t } = useTranslation();
  const { currentLng } = useContext(MyContext);
  let text1: string;
  if (currentLng == "en") {
    text1 =
      "We come to the forefront due to our accumulated experience in technical, software and business solutions and our provision of unprecedented solutions and unusual integration of communications systems, information networks and surveillance systems.";
  } else {
    text1 =
      "نأتي في الصدارة لخبراتنا المتراكمة في الحلول التقنية والبرمجية وحلول الاعمال وتقديمنا لحلول غير مسبوقة ودمج غير إعتيادي لأنظمة الاتصالات وشبكات المعلومات ونظم المراقبة.";
  }
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.02 } },
  };
  const SpanVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  useEffect(() => {
    document.title = t("CTS | About Us");
  });
  const onUnload = (event: Event) => {    
    event.preventDefault();
  };
  useEffect(()=>{
    window.addEventListener("beforeunload", onUnload)

    return ()=>{
        window.removeEventListener("beforeunload",onUnload)

    }
  })
  return (
    <>
      <div className="container-fluid">
        <div className="row about-section  ">
          <div className="col-12 col-md-7    d-sm-flex justify-content-center flex-column p-0  pt-lg-0">
            <div className="row ">
              <div className="col-2 pt-4 text-center ">
                <motion.img
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 2 }}
                  src="/assets/about/about-logo.webp"
                  alt=""
                />
              </div>
              <div className="col-10">
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="paragraph pt-4"
                >
                  {text1.split("").map((char: string, index: number) => {
                    return (
                      <motion.span variants={SpanVariants} key={index}>
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 4.3, duration: 0 }}
                  className="paragraph py-4"
                >
                  <Trans i18nKey="We are a leading company in providing integrated services, specializing in providing web solutions services, programming, website hosting services, and designing commercial identities, in addition to design and implementation services for light current works and advanced security solutions."></Trans>
                </motion.p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-center align-items-center px-5">
            <img
              className="home2 p-3 img-fluid"
              src="/assets/about/about.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="m-0 p-0 my-5 position-relative">
        <div className=" bg-vision">
          <img src="/assets/about/ourvisionbackground.webp" alt="" />
        </div>
        <div className=" bg-mission">
          <img src="/assets/about/ourmisionbackground.webp" alt="" />
        </div>
        <div className="container   mt-4">
          <div className="row p-4">
            <div className="col-md-6 col-12">
              <div className="d-flex justify-content-center align-items-center">
                <h5 className="subHeader">
                  <Trans i18nKey="Our mission"></Trans>
                </h5>
                <img src="/assets/about/ourmission.webp" alt="" />
              </div>
              <p className="p-4  d-flex justify-content-start">
                <Trans i18nKey="Providing integrated solutions to its customers in the field of information technology with all its systems and fulfilling their requirements with accuracy and high efficiency, and finally designing websites and mobile applications that contribute and serve the community by creating a better environment to provide the best services and optimal employment of skills and creativity in developing solutions and building a local partnership. And a global leader."></Trans>
              </p>
            </div>
            <div className="col-md-6 col-12">
              <div className="d-flex justify-content-center align-items-center">
                <h5 className="subHeader">
                  <Trans i18nKey="Our vision"></Trans>
                </h5>
                <img src="/assets/about/ourvision.webp" alt="" />
              </div>
              <p className="p-4 d-flex justify-content-start">
                <Trans i18nKey="To be a leading company in providing software applications and integrated technological solutions in eg, while leaving our mark throughout the Middle East region."></Trans>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
