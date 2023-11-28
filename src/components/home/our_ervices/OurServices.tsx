import { NavLink } from "react-router-dom";
import HeaderAndLines from "../../shared/HeaderAndLines";
import "./ourServices.css";
import { Trans } from "react-i18next";
function OurServices() {
  return (
    <section>
      <HeaderAndLines header={<Trans i18nKey="Services"></Trans>} />
      <div className="container-fluid ">
        <div className="row w-md-75 mt-5 m-auto">
          <div className="col-sm-4  col-6 my-3 ">
            <NavLink
              to="/services/web-design"
              onClick={() => {
                window.scrollTo({ top: 0 });
              }}
            >
              <div className="imgService3 imgService p-5"></div>{" "}
            </NavLink>

            <p className="serviceName">
              {" "}
              <Trans i18nKey="Website design"></Trans>
            </p>
          </div>
          <div className="col-sm-4 col-6 my-3">
            <div className="imgService2 imgService p-5"></div>
            <p className="serviceName">
              <Trans i18nKey="Online store design"></Trans>
            </p>
          </div>
          <div className="col-sm-4 col-6 my-3">
            <div className="imgService1 imgService p-5"></div>
            <p className="serviceName">
              {" "}
              <Trans i18nKey="Mobile application programming"></Trans>
            </p>
          </div>
          <div className="col-sm-4 col-6 my-3">
            <div className="imgService6 imgService p-5"></div>
            <p className="serviceName">
              <Trans i18nKey="Website hosting"></Trans>{" "}
            </p>
          </div>
          <div className="col-sm-4 col-6 my-3">
            <div className="imgService5 imgService p-5"></div>
            <p className="serviceName">
              {" "}
              <Trans i18nKey="WordPress programming and website design"></Trans>
            </p>
          </div>
          <div className="col-sm-4 col-6 my-3">
            <div className="imgService4 imgService p-5"></div>
            <p className="serviceName">
              {" "}
              <Trans i18nKey="Preparing websites for search engines"></Trans>
            </p>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}

export default OurServices;
