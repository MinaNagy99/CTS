import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './clientsSlider.css';
import HeaderAndLines from '../../shared/HeaderAndLines';
import { Trans } from 'react-i18next';

interface Props {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    header?: React.ReactNode | string;
}

function NextArrow(props: Props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" viewBox="0 0 33 30" fill="none">
                <ellipse cx="16.5" cy="15" rx="16.5" ry="15" fill="#05579B" />
                <path
                    d="M13.3548 8.59636L18.0689 14.5027L13.3548 20.4091C13.2423 20.55 13.1531 20.7173 13.0922 20.9015C13.0313 21.0856 13 21.283 13 21.4823C13 21.6816 13.0313 21.8789 13.0922 22.0631C13.1531 22.2472 13.2423 22.4145 13.3548 22.5555C13.4673 22.6964 13.6008 22.8082 13.7478 22.8845C13.8948 22.9607 14.0523 23 14.2114 23C14.3704 23 14.5279 22.9607 14.6749 22.8845C14.8219 22.8082 14.9554 22.6964 15.0679 22.5555L20.6446 15.5683C21.1185 14.9746 21.1185 14.0156 20.6446 13.4219L15.0679 6.43475C14.9555 6.29363 14.822 6.18167 14.675 6.10529C14.528 6.0289 14.3705 5.98958 14.2114 5.98958C14.0522 5.98958 13.8947 6.0289 13.7477 6.10529C13.6007 6.18167 13.4672 6.29363 13.3548 6.43475C12.8931 7.02843 12.881 8.00268 13.3548 8.59636Z"
                    fill="white"
                />
            </svg>
        </div>
    );
}
function PrevArrow(props: Props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" viewBox="0 0 33 30" fill="none">
                <ellipse cx="16.5" cy="15" rx="16.5" ry="15" transform="matrix(-1 0 0 1 33 0)" fill="#05579B" />
                <path
                    d="M20.6452 8.59636L15.9311 14.5027L20.6452 20.4091C20.7577 20.55 20.8469 20.7173 20.9078 20.9015C20.9687 21.0856 21 21.283 21 21.4823C21 21.6816 20.9687 21.8789 20.9078 22.0631C20.8469 22.2472 20.7577 22.4145 20.6452 22.5555C20.5327 22.6964 20.3992 22.8082 20.2522 22.8845C20.1052 22.9607 19.9477 23 19.7886 23C19.6296 23 19.4721 22.9607 19.3251 22.8845C19.1781 22.8082 19.0446 22.6964 18.9321 22.5555L13.3554 15.5683C12.8815 14.9746 12.8815 14.0156 13.3554 13.4219L18.9321 6.43475C19.0445 6.29363 19.178 6.18167 19.325 6.10529C19.472 6.0289 19.6295 5.98958 19.7886 5.98958C19.9478 5.98958 20.1053 6.0289 20.2523 6.10529C20.3993 6.18167 20.5328 6.29363 20.6452 6.43475C21.1069 7.02843 21.119 8.00268 20.6452 8.59636Z"
                    fill="white"
                />
            </svg>
        </div>
    );
}

function ClientsSlider() {
    const clientsLogos = [
        '/assets/clients/abgad-logo.webp',
        '/assets/clients/abu-auf-logo.webp',
        '/assets/clients/ahramgroup-logo.webp',
        '/assets/clients/dar-el-mona-logo.webp',
        '/assets/clients/darelfouad-logo.webp',
        '/assets/clients/delta-galil-logo.webp',
        '/assets/clients/ecs-logo.webp',
        '/assets/clients/egemac-logo.webp',
        '/assets/clients/evapharma-logo.webp',
        '/assets/clients/gapplymer-logo.webp',
        '/assets/clients/mobica-logo.webp',
        '/assets/clients/redcone-logo.webp',
        '/assets/clients/rowad-logo.webp',
        '/assets/clients/semak-logo.webp',
        '/assets/clients/sews-eg-logo.webp',
        '/assets/clients/solera-logo.webp',
        '/assets/clients/mannaie-logo.webp',
        '/assets/clients/AlmasryaKitchens-logo.webp',
        '/assets/clients/RamseesFresh-logo.webp',
        '/assets/clients/AfricaQueen-logo.webp',
    ];

    const settings = {
        autoplay: true,
        speed: 300,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 5,
        swipeToSlide: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="container">
                <div className="mb-5">
                    <HeaderAndLines header={<Trans i18nKey="Our clients"></Trans>} />
                </div>
                <Slider {...settings}>
                    {clientsLogos.map((source, index) => (
                        <div className="">
                            <div className="image-container" key={index}>
                                <img className="logo-image" src={source} alt={`Image ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default ClientsSlider;
