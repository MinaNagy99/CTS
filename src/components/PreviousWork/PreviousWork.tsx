// PreviousWork.tsx
import "./PreviousWork.css";
import ItemProject from "./itemProject/ItemProject";
import { Trans, useTranslation } from "react-i18next";
import { useEffect, useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

interface PortfolioItem {
  imag: string;
  title: React.ReactNode | any;
}

export default function PreviousWork() {
  const data:any = useContext(PortfolioContext);
  console.log(data);
  
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("CTS | Portfolio");
  });
  const arrOfItem: PortfolioItem[] = [
    {
      imag: "/assets/portfolio/1.png",
      title: <Trans i18nKey="Al Mannai Real Estate Development"></Trans>,
    },
    {
      imag: "/assets/portfolio/2.png",
      title: <Trans i18nKey="Creativity for engineering consultancy"></Trans>,
    },
    {
      imag: "/assets/portfolio/3.png",
      title: <Trans i18nKey="Junior engineer"></Trans>,
    },
    {
      imag: "/assets/portfolio/4.png",
      title: <Trans i18nKey="Alpha Clinic for dental treatment"></Trans>,
    },
    {
      imag: "/assets/portfolio/5.png",
      title: <Trans i18nKey="Cleaned for cleaning services"></Trans>,
    },
    {
      imag: "/assets/portfolio/6.png",
      title: <Trans i18nKey="Kider to teach children"></Trans>,
    },
    {
      imag: "/assets/portfolio/7.png",
      title: <Trans i18nKey="Educap for courses"></Trans>,
    },
    {
      imag: "/assets/portfolio/8.png",
      title: <Trans i18nKey="TourNest for trekking"></Trans>,
    },
    {
      imag: "/assets/portfolio/9.png",
      title: <Trans i18nKey="MotorMenders for cars"></Trans>,
    },
    {
      imag: "/assets/portfolio/10.png",
      title: <Trans i18nKey="Prestige online store"></Trans>,
    },
    {
      imag: "/assets/portfolio/11.png",
      title: <Trans i18nKey="Source for construction products"></Trans>,
    },
    {
      imag: "/assets/portfolio/12.png",
      title: <Trans i18nKey="Arcons Industrial Services"></Trans>,
    },
    {
      imag: "/assets/portfolio/13.png",
      title: <Trans i18nKey="Ramses Fresh"></Trans>,
    },
    {
      imag: "/assets/portfolio/14.png",
      title: <Trans i18nKey="Heliopolis Association"></Trans>,
    },
    {
      imag: "/assets/portfolio/15.png",
      title: <Trans i18nKey="summit"></Trans>,
    },
    {
      imag: "/assets/portfolio/16.png",
      title: <Trans i18nKey="Damas Steel"></Trans>,
    },
    {
      imag: "/assets/portfolio/17.png",
      title: "BricoHub  ",
    },
    {
      imag: "/assets/portfolio/18.png",
      title: <Trans i18nKey="Your doctor"></Trans>,
    },
    {
      imag: "/assets/portfolio/19.png",
      title: <Trans i18nKey="PIXI Travel"></Trans>,
    },
    {
      imag: "/assets/portfolio/20.png",
      title: <Trans i18nKey="Thunder Sports Fashion"></Trans>,
    },
    {
      imag: "/assets/portfolio/21.png",
      title: <Trans i18nKey="development"></Trans>,
    },
    {
      imag: "/assets/portfolio/22.png",
      title: <Trans i18nKey="Educational dash board"></Trans>,
    },
    {
      imag: "/assets/portfolio/23.png",
      title: <Trans i18nKey="Dwelling Real Estate"></Trans>,
    },
    {
      imag: "/assets/portfolio/24.png",
      title: <Trans i18nKey="Read"></Trans>,
    },
  ];

  return (
    <>
      <section className="first-section d-flex flex-column justify-content-center align-items-start ">
        <div className="text-section d-flex flex-column align-items-center justify-content-center">
          <p className="my-4">
            <Trans i18nKey="See our previous work from"></Trans>
          </p>
          <h1 className="my-4">
            <Trans i18nKey="Sites Design"></Trans>
          </h1>
          <img className="mt-4" src="/assets/portfolio/titleline.png" alt="" />
        </div>
      </section>
      <div className="container ">
        <div className="row gy-4 mt-5">
          {arrOfItem.map((item, index) => (
            <ItemProject key={index} imag={item.imag} title={item.title} />
          ))}
        </div>
      </div>
    </>
  );
}
