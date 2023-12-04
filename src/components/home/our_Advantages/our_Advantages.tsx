import HeaderAndLines from "../../shared/HeaderAndLines";
import "./our_Advantages.css";
import { Trans } from "react-i18next";
import {motion} from "framer-motion"
export default function Our_Advantages() {
//   type ourAdvantages = {
//     title: string;
//     description: string;
//     image: string;
//   };
//   const [ourAdvantages, setOurAdvantages] = useState<ourAdvantages[]>([
//     {
//       title: "Fast design",
//       description:
//         "We provide fast designs that are compatible with search engines so that your site appears quickly in search engines and all browsers",
//       image: "/assets/home/features1.png",
//     },
//     {
//         title: "Compatible with all devices",
//         description:
//           "We always work to make the site compatible with smart devices and all mobile devices and screens such as browsing",
//         image: "/assets/home/features2.png",
//       },
//   ]);
  return (
    <>
      <div className="bg-image">
        <div className="container  pt-4">
          <HeaderAndLines
            header={<Trans i18nKey="Our website design features"></Trans>}
          />
          <div className=" p-3 my-5">
            <div className="row">
              <motion.div initial={{x:300}} whileInView={{x:0}} transition={{duration:1.5}}  className="col-lg-6 p-3 col-12">
                <div className="row my-3">
                  <div className="col-2 d-flex align-items-start    ">
                    <img
                      className="w-100 "
                      src="/assets/home/features1.png"
                      alt=""
                    />
                  </div>
                  <div className="col-9 ">
                    <p className="d-flex titleOfAdvanded justify-content-start">
                      <Trans i18nKey="Fast design"></Trans>
                    </p>{" "}
                    <p className="d-flex justify-content-start">
                      <Trans i18nKey="We provide fast designs that are compatible with search engines so that your site appears quickly in search engines and all browsers"></Trans>
                    </p>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-2 d-flex align-items-start  d-flex justify-content-end  text-start">
                    <img
                      className="w-100 "
                      src="/assets/home/features2.png"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="d-flex titleOfAdvanded justify-content-start">
                      {" "}
                      <Trans i18nKey="Official emails"></Trans>
                    </p>
                    <p className="d-flex justify-content-start">
                      <Trans i18nKey="We provide official emails under the domain name to all the company’s staff for easy communication between them and customers"></Trans>
                    </p>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-2 d-flex align-items-start  d-flex justify-content-end  text-start">
                    <img
                      className="w-100 "
                      src="/assets/home/features3.png"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="d-flex titleOfAdvanded justify-content-start">
                      {" "}
                      <Trans i18nKey="Control your site easily"></Trans>{" "}
                    </p>
                    <p className="d-flex justify-content-start">
                      <Trans i18nKey="We offer an easy-to-use control panel. Manage your site's contents with ease at any time"></Trans>
                    </p>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-2 d-flex align-items-start  d-flex justify-content-end  text-start">
                    <img
                      className="w-100 "
                      src="/assets/home/features4.png"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="d-flex titleOfAdvanded justify-content-start">
                      {" "}
                      <Trans i18nKey="Professional design"></Trans>{" "}
                    </p>
                    <p className="d-flex justify-content-start">
                      <Trans i18nKey="We are distinguished by simple, exclusive and professional designs with the intersection of different ideas that express you and your identity"></Trans>
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{x:-300}} whileInView={{x:0}} transition={{duration:1.5}} className="col-lg-6 p-3 col-12">
                <div className="row my-3">
                  <div className="col-2 d-flex align-items-start  d-flex justify-content-end   text-start">
                    <img
                      className="w-100 "
                      src="/assets/home/features5.png"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="d-flex titleOfAdvanded justify-content-start">
                      <Trans i18nKey="Compatible with all devices"></Trans>
                    </p>
                    <p className="d-flex justify-content-start">
                      <Trans i18nKey="We always work to make the site compatible with smart devices and all mobile devices and screens such as browsing"></Trans>
                    </p>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-2 d-flex align-items-start  d-flex justify-content-end  text-start">
                    <img
                      className="w-100 "
                      src="/assets/home/features6.png"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="d-flex titleOfAdvanded justify-content-start">
                      {" "}
                      <Trans i18nKey="multi languages"></Trans>{" "}
                    </p>
                    <p className="d-flex justify-content-start">
                      <Trans i18nKey="We offer several language options for your site. It is possible for your site to be displayed in one language or displayed in more than one language, depending on your choice"></Trans>
                    </p>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-2 d-flex align-items-start  d-flex justify-content-end  text-start">
                    <img
                      className="w-100 "
                      src="/assets/home/features7.png"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="d-flex titleOfAdvanded justify-content-start">
                      {" "}
                      <Trans i18nKey="Professional slide show"></Trans>
                    </p>
                    <p className="d-flex justify-content-start">
                      <Trans i18nKey="We provide you with a professional slide show to display all services and images in a distinctive way and control the slide from the control panel"></Trans>
                    </p>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-2 d-flex align-items-start  d-flex justify-content-end  text-start">
                    <img
                      className="w-100 "
                      src="/assets/home/features8.png"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className="d-flex titleOfAdvanded justify-content-start">
                      {" "}
                      <Trans i18nKey="Search engine friendly site"></Trans>
                    </p>
                    <p className="d-flex justify-content-start">
                      <Trans i18nKey="We add your site professionally to search engines to ensure that your site appears in the first search results on search engines"></Trans>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
