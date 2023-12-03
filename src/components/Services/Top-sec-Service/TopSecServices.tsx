import { Trans } from "react-i18next";
import "./Top-sec-services.css";
interface topSecData {
  img: string;
  title: string;
  desc: string;
}

export default function TopSecServices({ title, desc, img }:topSecData) {
  return (
    <>
      <section
        className="bg-tob-sectionSercices  d-flex justify-content-center align-items-end"
        id="tob-section-services"
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-9 pb-5">
              <h1 className="mobile-header"><Trans i18nKey={title}></Trans></h1>
              <p className="mobile-text"><Trans i18nKey={desc}></Trans></p>
            </div>
            <div className="col-md-3 d-flex align-self-end">
              <img
                className="w-100"
                src={img}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
