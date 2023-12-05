import "./topSection.css";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MyContext } from "../../context/LngContext";
function TopSection() {
  const { currentLng } = useContext(MyContext);
  let text: string;
  if (currentLng == "en") {
    text = "We provide integrated web services";
  } else {
    text = "نقدم خدمات تصميم مواقع إلكترونية";
  }
  const h1Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const SpanVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="container-fluid">
      <div className="row top-section ">
        <div className="col-12 col-lg-7 d-sm-flex justify-content-center flex-column pt-3">
          <div className="d-flex align-items-center">
            <span className="top-section-span mb-3 d-flex justify-content-start">
              <Trans i18nKey="Everything you need to build your company or services online"></Trans>
            </span>
          </div>
          <div className="d-flex align-items-center">
            <img className="home-icon" src="/assets/home/home1.png" alt="" />
            <motion.h1
              variants={h1Variants}
              initial="hidden"
              whileInView="visible"
              className=""
            >
              {text.split("").map((char: string, index: number) => {
                return (
                  <motion.span variants={SpanVariants} key={index}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.h1>
          </div>
          <div className="d-flex align-align-items-center">
            <span className="square-symbol">&#9632;</span>
            <span className="top-section-span">
              <Trans i18nKey="We provide various web services and offers suitable for all individuals and companies with the latest technologies, the best quality and the fastest time"></Trans>
            </span>
          </div>
          <div className=" d-flex justify-content-md-start  justify-content-center">
            <Link to="/contact-us">
              <button className="btn text-center btn-top-section mt-3">
                <Trans i18nKey="Contact us"></Trans>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center px-5">
          <img

            className="home2 p-xl-4 d-none d-lg-block img-fluid"
            src="/assets/home/home2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default TopSection;
