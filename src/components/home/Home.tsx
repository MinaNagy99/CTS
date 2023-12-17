import "./home.css";
import PartnersSlider from "./partners_slider/PartnersSlider";
import Our_Advantages from "./our_Advantages/our_Advantages";
import OurServices from "./our_ervices/OurServices";
import Portfolio from "./portfolio/Portfolio";
import TopSection from "./top_section/TopSection";
import ClientsSlider from "./clients_slider/ClientsSlider";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// ... rest of your code

function Home() {
  useEffect(() => {
  }, []);
  
  window.addEventListener("beforeunload", (e) => e.preventDefault());
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("CTS | Home");
  });
  return (
    <>
      <div className="container-fluid p-0 ">
        <TopSection />
        <OurServices />
        <Portfolio />
        <PartnersSlider />
        <Our_Advantages />
        <ClientsSlider />
      </div>
    </>
  );
}

export default Home;
