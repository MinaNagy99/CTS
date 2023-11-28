import "./websiteDetails.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import HeaderAndLines from "../shared/HeaderAndLines";
import { PortfolioContext } from "../context/PortfolioContext";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

interface Props {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    header?: React.ReactNode | string;
}

function NextArrow(props: Props) {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <svg
                className="next-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
            >
                <g clip-path="url(#clip0_791_1584)">
                    <path
                        d="M24 0C19.2533 0 14.6131 1.40758 10.6663 4.04473C6.71954 6.68188 3.64341 10.4302 1.8269 14.8156C0.0103989 19.201 -0.464881 24.0266 0.461164 28.6822C1.38721 33.3377 3.67299 37.6141 7.02945 40.9706C10.3859 44.327 14.6623 46.6128 19.3178 47.5388C23.9734 48.4649 28.799 47.9896 33.1844 46.1731C37.5698 44.3566 41.3181 41.2805 43.9553 37.3337C46.5924 33.3869 48 28.7467 48 24C47.9931 17.6369 45.4624 11.5364 40.963 7.03704C36.4636 2.53766 30.3631 0.00688216 24 0ZM24 44C20.0444 44 16.1776 42.827 12.8886 40.6294C9.59962 38.4318 7.03617 35.3082 5.52242 31.6537C4.00867 27.9991 3.6126 23.9778 4.38431 20.0982C5.15601 16.2186 7.06082 12.6549 9.85787 9.85786C12.6549 7.06081 16.2186 5.156 20.0982 4.38429C23.9778 3.61259 27.9992 4.00866 31.6537 5.52241C35.3082 7.03616 38.4318 9.59961 40.6294 12.8886C42.827 16.1776 44 20.0444 44 24C43.9942 29.3025 41.8852 34.3862 38.1357 38.1357C34.3862 41.8852 29.3026 43.9942 24 44Z"
                        fill="#528CFF"
                    />
                    <path
                        d="M21.2817 12.4642C21.08 12.2959 20.8471 12.1689 20.5963 12.0905C20.3456 12.0122 20.0818 11.984 19.8201 12.0076C19.5585 12.0312 19.304 12.1061 19.0713 12.228C18.8385 12.3499 18.6321 12.5165 18.4637 12.7182C18.2954 12.9199 18.1684 13.1528 18.0901 13.4036C18.0117 13.6544 17.9835 13.9181 18.0071 14.1798C18.0307 14.4415 18.1056 14.696 18.2275 14.9287C18.3494 15.1614 18.516 15.3679 18.7177 15.5362L28.8737 24.0002L18.7177 32.4642C18.3104 32.8042 18.0547 33.2921 18.0071 33.8206C17.9595 34.3491 18.1237 34.8748 18.4637 35.2822C18.8037 35.6896 19.2917 35.9452 19.8201 35.9928C20.3486 36.0405 20.8744 35.8762 21.2817 35.5362L33.2817 25.5362C33.5068 25.3485 33.6879 25.1136 33.8122 24.8482C33.9364 24.5828 34.0008 24.2933 34.0008 24.0002C34.0008 23.7071 33.9364 23.4176 33.8122 23.1522C33.6879 22.8868 33.5068 22.6519 33.2817 22.4642L21.2817 12.4642Z"
                        fill="#528CFF"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_791_1584">
                        <rect width="48" height="48" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function PrevArrow(props: Props) {
    const { onClick } = props;
    return (
        <div onClick={onClick}>
            <svg
                className="prev-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
            >
                <g clip-path="url(#clip0_791_1588)">
                    <path
                        d="M24 0C28.7467 0 33.3869 1.40758 37.3337 4.04473C41.2805 6.68188 44.3566 10.4302 46.1731 14.8156C47.9896 19.201 48.4649 24.0266 47.5388 28.6822C46.6128 33.3377 44.327 37.6141 40.9706 40.9706C37.6141 44.327 33.3377 46.6128 28.6822 47.5388C24.0266 48.4649 19.201 47.9896 14.8156 46.1731C10.4302 44.3566 6.68187 41.2805 4.04472 37.3337C1.40757 33.3869 -1.14441e-05 28.7467 -1.14441e-05 24C0.00687027 17.6369 2.53764 11.5364 7.03703 7.03704C11.5364 2.53766 17.6369 0.00688216 24 0ZM24 44C27.9556 44 31.8224 42.827 35.1114 40.6294C38.4004 38.4318 40.9638 35.3082 42.4776 31.6537C43.9913 27.9991 44.3874 23.9778 43.6157 20.0982C42.844 16.2186 40.9392 12.6549 38.1421 9.85786C35.3451 7.06081 31.7814 5.156 27.9018 4.38429C24.0222 3.61259 20.0008 4.00866 16.3463 5.52241C12.6918 7.03616 9.56823 9.59961 7.3706 12.8886C5.17297 16.1776 3.99999 20.0444 3.99999 24C4.00581 29.3025 6.11482 34.3862 9.86428 38.1357C13.6138 41.8852 18.6974 43.9942 24 44Z"
                        fill="#528CFF"
                    />
                    <path
                        d="M26.7183 12.4642C26.92 12.2959 27.1529 12.1689 27.4037 12.0905C27.6544 12.0122 27.9182 11.984 28.1799 12.0076C28.4415 12.0312 28.696 12.1061 28.9287 12.228C29.1615 12.3499 29.3679 12.5165 29.5363 12.7182C29.7046 12.9199 29.8316 13.1528 29.9099 13.4036C29.9883 13.6544 30.0165 13.9181 29.9929 14.1798C29.9693 14.4415 29.8944 14.696 29.7725 14.9287C29.6506 15.1614 29.484 15.3679 29.2823 15.5362L19.1263 24.0002L29.2823 32.4642C29.6896 32.8042 29.9453 33.2921 29.9929 33.8206C30.0405 34.3491 29.8763 34.8748 29.5363 35.2822C29.1963 35.6896 28.7083 35.9452 28.1799 35.9928C27.6514 36.0405 27.1256 35.8762 26.7183 35.5362L14.7183 25.5362C14.4932 25.3485 14.3121 25.1136 14.1878 24.8482C14.0636 24.5828 13.9992 24.2933 13.9992 24.0002C13.9992 23.7071 14.0636 23.4176 14.1878 23.1522C14.3121 22.8868 14.4932 22.6519 14.7183 22.4642L26.7183 12.4642Z"
                        fill="#528CFF"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_791_1588">
                        <rect width="48" height="48" fill="white" transform="matrix(-1 0 0 1 48 0)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

const CloseButton = (
    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
        <path
            d="M51 6.375H17C11.1418 6.375 6.375 11.1418 6.375 17V51C6.375 56.8582 11.1418 61.625 17 61.625H51C56.8582 61.625 61.625 56.8582 61.625 51V17C61.625 11.1418 56.8582 6.375 51 6.375ZM57.375 51C57.375 54.5154 54.5154 57.375 51 57.375H17C13.4846 57.375 10.625 54.5154 10.625 51V17C10.625 13.4846 13.4846 10.625 17 10.625H51C54.5154 10.625 57.375 13.4846 57.375 17V51ZM51.7512 19.2538L37.005 34L51.7512 48.7462C52.1662 49.1612 52.1662 49.8338 51.7512 50.249L50.249 51.7512C49.834 52.1662 49.1614 52.1662 48.7462 51.7512L34 37.005L19.2538 51.7512C18.8388 52.1662 18.1662 52.1662 17.751 51.7512L16.2488 50.249C15.8338 49.834 15.8338 49.1614 16.2488 48.7462L30.995 34L16.2488 19.2538C15.8338 18.8388 15.8338 18.1662 16.2488 17.751L17.751 16.2488C18.166 15.8338 18.8386 15.8338 19.2538 16.2488L34 30.995L48.7462 16.2488C49.1612 15.8338 49.8338 15.8338 50.249 16.2488L51.7512 17.751C52.1662 18.1662 52.1662 18.8388 51.7512 19.2538Z"
            fill="#528CFF"
        />
    </svg>
);

function WesbiteDetails() {
    const [showCarousel, setShowCarousel] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [images, setImages] = useState<string[] | undefined>([]);

    const { title } = useParams<{ title: any }>();
    console.log(title);

    const data = useContext(PortfolioContext);
    const project = data.find((item) => item.title === decodeURIComponent(title));
    console.log(data);

    const handleClick = (index) => {
        setShowCarousel(true);
        setSelectedImageIndex(index);
    };

    useEffect(() => {
        // Update the images state when the project.carouselImages change
        setImages(project?.carouselImages);
    }, []);

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: selectedImageIndex,
        // centerMode: true, // Enable center mode
        // centerPadding: "0", // Set center padding to zero
        // adaptiveHeight: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <>
            <div className="top d-flex flex-column flex-lg-row justify-content-evenly align-items-center">
                <div className="logo-container">
                    <div className="inner-logo-container">
                        <img className="w-100" src={project?.logo} alt="" />
                    </div>
                </div>
                <div className="">
                    <HeaderAndLines header={project?.title} />
                </div>
            </div>
            <div className="bot">
                <div className="project-header m-auto d-flex align-items-center justify-content-center mt-5">
                    صفحات من الموقع
                </div>

                <div>
                    <div className="container mt-5 d-flex justify-content-center">
                        <div className="row justify-content-around">
                            {project?.previewImages.map((image, index) => (
                                <div className="col-3 p-0 project-image-container" key={index}>
                                    <img className="" src={image} alt="" onClick={() => handleClick(index)} />
                                </div>
                            ))}

                            <Modal
                                isOpen={showCarousel}
                                onRequestClose={() => setShowCarousel(false)}
                                className="m-auto slideshow-modal"
                                style={{
                                    overlay: {
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    },
                                    content: {
                                        background: "transparent",
                                        border: "none",
                                    },
                                }}
                            >
                                {/* Close button */}
                                <button
                                    className="close-button"
                                    onClick={() => setShowCarousel(false)}
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        right: "10px",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    {CloseButton}
                                </button>
                                <div className="project-slider p-0 m-0">
                                    <Slider {...settings}>
                                        {images?.map((image, index) => (
                                            <div className="p-0 m-0" key={index}>
                                                <img className="p-0" src={image} alt={`slide ${index + 1}`} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-4">
                    <div className="project-link d-flex align-items-center justify-content-center mt-5 mx-3">
                        <svg
                            className="mx-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                        >
                            <path
                                d="M11.0813 22.4999C11.025 22.4999 10.9125 22.4999 10.8562 22.4436L0.9 18.2249C0.675 18.1686 0.5625 17.9436 0.5625 17.7186C0.5625 17.4936 0.73125 17.3249 0.9 17.2124L34.7062 4.10615C34.9875 3.99365 35.2687 4.10615 35.3813 4.33115C35.4938 4.55615 35.4375 4.89365 35.2125 5.00615L11.3625 22.4436C11.3063 22.4999 11.1938 22.4999 11.0813 22.4999ZM2.475 17.7749L10.9688 21.4311L31.3313 6.58115L2.475 17.7749Z"
                                fill="white"
                            />
                            <path
                                d="M13.9496 31.8937C13.7246 31.8937 13.4996 31.7249 13.4433 31.4999L10.5183 22.1062C10.4621 21.8812 10.5183 21.6562 10.7433 21.4874L34.5933 4.16244C34.8183 3.99369 35.1558 4.04994 35.3246 4.21869C35.4933 4.44369 35.4933 4.78119 35.3246 4.94994L16.6496 24.1312L14.4558 31.5562C14.4558 31.7812 14.2308 31.8937 13.9496 31.8937ZM11.6996 22.2187L14.0058 29.5874L15.6933 23.7374C15.6933 23.6249 15.7496 23.5687 15.8058 23.5124L30.2058 8.77494L11.6996 22.2187Z"
                                fill="white"
                            />
                            <path
                                d="M29.3617 29.475C29.3055 29.475 29.2492 29.475 29.193 29.4188L16.0305 24.3563C15.8617 24.3 15.7492 24.1313 15.693 23.9625C15.6367 23.7938 15.693 23.5688 15.8617 23.4563L34.4805 4.27503C34.6492 4.10628 34.9305 4.05003 35.1555 4.16253C35.3805 4.27503 35.493 4.50003 35.4367 4.78128L29.9242 29.0813C29.868 29.25 29.8117 29.3625 29.643 29.4188C29.5305 29.4188 29.4742 29.475 29.3617 29.475ZM17.1555 23.6813L29.0242 28.2375L33.9742 6.35628L17.1555 23.6813Z"
                                fill="white"
                            />
                            <path
                                d="M13.9503 31.8939C13.894 31.8939 13.7815 31.8939 13.7253 31.8377C13.5003 31.7252 13.3878 31.4439 13.444 31.2189L15.6378 23.6814C15.694 23.5127 15.8065 23.4002 15.919 23.3439C16.0315 23.2877 16.2003 23.2877 16.369 23.3439L18.9003 24.3002C19.069 24.3564 19.1815 24.4689 19.2378 24.6377C19.294 24.8064 19.2378 24.9752 19.1815 25.0877L14.4565 31.6127C14.2878 31.8377 14.119 31.8939 13.9503 31.8939ZM16.5378 24.5252L15.3565 28.5752L17.944 25.0877L16.5378 24.5252Z"
                                fill="white"
                            />
                        </svg>
                        <a href="#">تصفح الموقع</a>
                    </div>
                    <div className="project-link d-flex align-items-center justify-content-center mt-5 mx-3">
                        <a className="text-decoration-none" href="#">
                            عرض جميع الأعمال
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WesbiteDetails;
