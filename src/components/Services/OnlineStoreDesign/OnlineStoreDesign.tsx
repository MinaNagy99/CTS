import { Trans } from "react-i18next";
import HeaderAndLines from "../../shared/HeaderAndLines";
import OnlineStoreFeatures from "./OnlineStoreFeatures/OnlineStoreFeatures";
import "./onlineStoreDesign.css";
import { useNavigate } from "react-router-dom";
import TopSecServices from "../Top-sec-Service/TopSecServices";

function OnlineStoreDesign() {
    const navigate = useNavigate();
    const handelNavigate = () => {
        navigate("/contact-us", { state: { id: 1, name: "onlineStore" } });
    };
    return (
        <>
            <TopSecServices
                title="Why is designing an online store an important step?"
                desc="We live in the era of digital development and technology, and designing an online store has become an indispensable thing for any business owner, which helps him promote and spread well in front of competitors in the field."
                img="./assets/onlineStoreDesignImages/e-commerce1.webp"
            />
            <div className="container-fluid p-0">
                <HeaderAndLines
                    header={<Trans i18nKey="What distinguishes our e-commerce websites"></Trans>}
                ></HeaderAndLines>
                <div className="container">
                    <div className="row mt-5 gy-4">
                        <div className="col-12 col-md-6">
                            <OnlineStoreFeatures
                                imageOrSvg={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="66"
                                        height="66"
                                        viewBox="0 0 42 66"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_1205_458)">
                                            <path
                                                d="M41.0426 4.08123V61.9195C41.0426 62.7268 40.71 63.5011 40.1179 64.072C39.5259 64.6429 38.723 64.9636 37.8857 64.9636H4.1178C3.28055 64.9636 2.47759 64.6429 1.88556 64.072C1.29353 63.5011 0.960938 62.7268 0.960938 61.9195V4.08123C0.960938 3.27388 1.29353 2.49959 1.88556 1.92871C2.47759 1.35783 3.28055 1.03711 4.1178 1.03711H37.8857C38.723 1.03711 39.5259 1.35783 40.1179 1.92871C40.71 2.49959 41.0426 3.27388 41.0426 4.08123Z"
                                                fill="#EFEFEF"
                                            />
                                            <path d="M3.50391 9.1543H38.4925V56.8455H3.50391V9.1543Z" fill="#71C7E5" />
                                            <path
                                                d="M23.0465 60.9043C23.0465 61.4277 22.8309 61.9297 22.4471 62.2998C22.0632 62.6699 21.5426 62.8779 20.9998 62.8779C20.457 62.8779 19.9364 62.6699 19.5526 62.2998C19.1688 61.9297 18.9531 61.4277 18.9531 60.9043C18.9531 60.3808 19.1688 59.8788 19.5526 59.5087C19.9364 59.1386 20.457 58.9307 20.9998 58.9307C21.5426 58.9307 22.0632 59.1386 22.4471 59.5087C22.8309 59.8788 23.0465 60.3808 23.0465 60.9043Z"
                                                fill="#4E535F"
                                            />
                                            <path
                                                d="M6.66286 14.8938C6.52332 14.8938 6.38949 14.8404 6.29082 14.7452C6.19215 14.6501 6.13672 14.521 6.13672 14.3865V13.6457C6.13672 12.5681 7.0459 11.6914 8.16343 11.6914H8.96316C9.10271 11.6914 9.23653 11.7449 9.3352 11.84C9.43387 11.9352 9.48931 12.0642 9.48931 12.1988C9.48931 12.3333 9.43387 12.4624 9.3352 12.5575C9.23653 12.6527 9.10271 12.7061 8.96316 12.7061H8.16343C7.90508 12.7064 7.65739 12.8055 7.47471 12.9816C7.29204 13.1578 7.18928 13.3966 7.18901 13.6457V14.3865C7.18901 14.521 7.13357 14.6501 7.0349 14.7452C6.93623 14.8404 6.8024 14.8938 6.66286 14.8938ZM34.6064 25.7877L32.1724 36.4624C32.1209 36.6881 31.991 36.8901 31.8042 37.0349C31.6175 37.1798 31.3851 37.2588 31.1454 37.2589H14.434L11.5381 24.5548H33.5793C33.7368 24.5548 33.8922 24.5888 34.0342 24.6543C34.1762 24.7199 34.3011 24.8154 34.3998 24.9337C34.4984 25.052 34.5683 25.1901 34.6042 25.3379C34.6402 25.4857 34.6402 25.6394 34.6064 25.7877Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M30.3891 24.5547L28.6097 37.2588H17.8195L16.0391 24.5547H30.3891Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M25.7603 24.5547L25.1278 37.2588H21.2944L20.6619 24.5547H25.7603ZM29.3696 43.5165C29.3696 44.4521 28.5751 45.2192 27.5913 45.2192C26.6074 45.2192 25.8129 44.4521 25.8129 43.5165C25.8129 42.5677 26.6074 41.8016 27.5913 41.8016C28.5751 41.8016 29.3696 42.5677 29.3696 43.5165ZM19.8106 43.5165C19.8106 44.4521 19.0162 45.2192 18.0323 45.2192C17.0484 45.2192 16.2539 44.4521 16.2539 43.5165C16.2539 42.5677 17.0484 41.8016 18.0323 41.8016C19.0162 41.8016 19.8106 42.5677 19.8106 43.5165Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M37.8857 0.529297H12.5361C12.3965 0.529297 12.2627 0.58275 12.164 0.677897C12.0654 0.773044 12.0099 0.902091 12.0099 1.03665C12.0099 1.17121 12.0654 1.30026 12.164 1.3954C12.2627 1.49055 12.3965 1.544 12.5361 1.544H37.8857C39.3378 1.544 40.5164 2.68149 40.5164 4.08077V61.919C40.5164 63.3183 39.3378 64.4558 37.8857 64.4558H35.7811C35.6416 64.4558 35.5077 64.5092 35.4091 64.6044C35.3104 64.6995 35.255 64.8286 35.255 64.9631C35.255 65.0977 35.3104 65.2267 35.4091 65.3219C35.5077 65.417 35.6416 65.4705 35.7811 65.4705H37.8857C39.9166 65.4705 41.5687 63.8774 41.5687 61.919V20.9776C41.7082 20.9776 41.8421 20.9242 41.9407 20.8291C42.0394 20.7339 42.0948 20.6049 42.0948 20.4703V14.3821C42.0948 14.2475 42.0394 14.1185 41.9407 14.0233C41.8421 13.9282 41.7082 13.8747 41.5687 13.8747V4.08077C41.5687 2.12239 39.9166 0.529297 37.8857 0.529297ZM10.4315 1.544C10.571 1.544 10.7049 1.49055 10.8035 1.3954C10.9022 1.30026 10.9576 1.17121 10.9576 1.03665C10.9576 0.902091 10.9022 0.773044 10.8035 0.677897C10.7049 0.58275 10.571 0.529297 10.4315 0.529297H8.32693C8.18738 0.529297 8.05356 0.58275 7.95488 0.677897C7.85621 0.773044 7.80078 0.902091 7.80078 1.03665C7.80078 1.17121 7.85621 1.30026 7.95488 1.3954C8.05356 1.49055 8.18738 1.544 8.32693 1.544H10.4315ZM31.572 64.4558C31.4324 64.4558 31.2986 64.5092 31.1999 64.6044C31.1012 64.6995 31.0458 64.8286 31.0458 64.9631C31.0458 65.0977 31.1012 65.2267 31.1999 65.3219C31.2986 65.417 31.4324 65.4705 31.572 65.4705H33.6765C33.8161 65.4705 33.9499 65.417 34.0486 65.3219C34.1472 65.2267 34.2027 65.0977 34.2027 64.9631C34.2027 64.8286 34.1472 64.6995 34.0486 64.6044C33.9499 64.5092 33.8161 64.4558 33.6765 64.4558H31.572Z"
                                                fill="#414141"
                                            />
                                            <path
                                                d="M2.98047 9.15407V56.8452C2.98047 56.9798 3.0359 57.1088 3.13457 57.204C3.23324 57.2991 3.36707 57.3526 3.50661 57.3526H38.4952C38.6347 57.3526 38.7685 57.2991 38.8672 57.204C38.9659 57.1088 39.0213 56.9798 39.0213 56.8452V9.15407C39.0213 9.01951 38.9659 8.89046 38.8672 8.79531C38.7685 8.70017 38.6347 8.64671 38.4952 8.64671H3.50661C3.36707 8.64671 3.23324 8.70017 3.13457 8.79531C3.0359 8.89046 2.98047 9.01951 2.98047 9.15407ZM4.03276 9.66142H37.969V56.3379H4.03276V9.66142ZM17.4705 4.58789C17.3309 4.58789 17.1971 4.64134 17.0984 4.73649C16.9998 4.83164 16.9443 4.96069 16.9443 5.09524C16.9443 5.2298 16.9998 5.35885 17.0984 5.454C17.1971 5.54914 17.3309 5.6026 17.4705 5.6026H24.5303C24.6698 5.6026 24.8036 5.54914 24.9023 5.454C25.001 5.35885 25.0564 5.2298 25.0564 5.09524C25.0564 4.96069 25.001 4.83164 24.9023 4.73649C24.8036 4.64134 24.6698 4.58789 24.5303 4.58789H17.4705ZM27.1831 4.58789C27.0435 4.58789 26.9097 4.64134 26.811 4.73649C26.7124 4.83164 26.6569 4.96069 26.6569 5.09524C26.6569 5.2298 26.7124 5.35885 26.811 5.454C26.9097 5.54914 27.0435 5.6026 27.1831 5.6026H28.147C28.2865 5.6026 28.4203 5.54914 28.519 5.454C28.6177 5.35885 28.6731 5.2298 28.6731 5.09524C28.6731 4.96069 28.6177 4.83164 28.519 4.73649C28.4203 4.64134 28.2865 4.58789 28.147 4.58789H27.1831ZM18.4281 60.9041C18.4272 61.5616 18.6968 62.1927 19.1777 62.6589C19.6586 63.1251 20.3116 63.3884 20.9935 63.3911C22.4162 63.3911 23.5737 62.2749 23.5737 60.9041C23.5737 59.5312 22.4162 58.416 20.9935 58.416C20.3112 58.4184 19.6578 58.6818 19.1767 59.1482C18.6955 59.6147 18.4269 60.2461 18.4281 60.9041ZM22.5214 60.9041C22.5214 61.7158 21.8364 62.3764 20.9935 62.3764C20.5904 62.3743 20.2047 62.2181 19.9208 61.9421C19.6369 61.6661 19.4782 61.2928 19.4793 60.9041C19.4793 60.0923 20.1591 59.4307 20.9946 59.4307C21.8364 59.4307 22.5214 60.0913 22.5214 60.9041Z"
                                                fill="#414141"
                                            />
                                            <path
                                                d="M-0.09375 18.3039V22.6377C-0.09375 22.7723 -0.0383175 22.9013 0.0603535 22.9965C0.159025 23.0916 0.292852 23.1451 0.432394 23.1451V61.919C0.432394 63.8774 2.08449 65.4705 4.1154 65.4705H29.465C29.6045 65.4705 29.7384 65.417 29.837 65.3219C29.9357 65.2267 29.9911 65.0977 29.9911 64.9631C29.9911 64.8286 29.9357 64.6995 29.837 64.6044C29.7384 64.5092 29.6045 64.4558 29.465 64.4558H4.1154C3.41795 64.455 2.7493 64.1874 2.25612 63.7119C1.76295 63.2363 1.48552 62.5915 1.48468 61.919V4.08077C1.48468 2.68149 2.6643 1.544 4.1154 1.544H6.21998C6.35952 1.544 6.49334 1.49055 6.59202 1.3954C6.69069 1.30026 6.74612 1.17121 6.74612 1.03665C6.74612 0.902091 6.69069 0.773044 6.59202 0.677897C6.49334 0.58275 6.35952 0.529297 6.21998 0.529297H4.1154C2.08449 0.529297 0.432394 2.12239 0.432394 4.08077V11.7083C0.292852 11.7083 0.159025 11.7618 0.0603535 11.8569C-0.0383175 11.9521 -0.09375 12.0811 -0.09375 12.2157V16.5495C-0.09375 16.684 -0.0383175 16.8131 0.0603535 16.9082C0.159025 17.0034 0.292852 17.0568 0.432394 17.0568V17.7965C0.292852 17.7965 0.159025 17.85 0.0603535 17.9451C-0.0383175 18.0403 -0.09375 18.1693 -0.09375 18.3039Z"
                                                fill="#414141"
                                            />
                                            <path
                                                d="M33.5792 24.0485H11.9568L11.4833 22.0658C11.3888 21.6641 11.1553 21.3054 10.8211 21.0488C10.4869 20.7922 10.0721 20.6531 9.64494 20.6543H7.11208C6.97254 20.6543 6.83871 20.7078 6.74004 20.8029C6.64137 20.8981 6.58594 21.0271 6.58594 21.1617C6.58594 21.2962 6.64137 21.4253 6.74004 21.5204C6.83871 21.6156 6.97254 21.669 7.11208 21.669H9.64494C9.83388 21.6684 10.0174 21.7299 10.1653 21.8433C10.3131 21.9568 10.4165 22.1154 10.4584 22.2931L11.0245 24.6695L13.8972 37.2691C13.7731 37.6947 13.7532 38.1422 13.8389 38.5764C13.9246 39.0107 14.1137 39.4199 14.3912 39.7717C14.6688 40.1235 15.0272 40.4084 15.4384 40.604C15.8495 40.7996 16.3021 40.9004 16.7605 40.8987H31.3242C31.4637 40.8987 31.5975 40.8452 31.6962 40.7501C31.7949 40.655 31.8503 40.5259 31.8503 40.3913C31.8503 40.2568 31.7949 40.1277 31.6962 40.0326C31.5975 39.9374 31.4637 39.884 31.3242 39.884H16.7605C16.4845 39.8851 16.2115 39.8287 15.9602 39.7187C15.7089 39.6086 15.4852 39.4476 15.3043 39.2465C15.1235 39.0455 14.9898 38.8091 14.9124 38.5537C14.835 38.2982 14.8157 38.0296 14.8559 37.7663H31.1453C31.8819 37.7663 32.5301 37.264 32.6879 36.572L35.1208 25.8973C35.1721 25.6748 35.1706 25.444 35.1165 25.2221C35.0624 25.0002 34.957 24.7929 34.8083 24.6157C34.6608 24.4381 34.4738 24.2947 34.261 24.1964C34.0482 24.098 33.8152 24.0481 33.5792 24.0485ZM14.8569 36.7526L12.1925 25.0632H15.5777L17.2161 36.7526H14.8569ZM18.2769 36.7526L16.6405 25.0632H20.1626L20.7445 36.7526H18.2769ZM24.6285 36.7526H21.7978L21.2159 25.0632H25.2093L24.6274 36.7526H24.6285ZM28.1484 36.7526H25.6808L26.2637 25.0632H29.7857L28.1484 36.7526ZM31.6598 36.3538C31.6336 36.4664 31.5685 36.5671 31.4753 36.6393C31.382 36.7116 31.266 36.7512 31.1463 36.7516H29.2101L30.8475 25.0622H33.5792C33.6579 25.0621 33.7356 25.079 33.8066 25.1117C33.8776 25.1444 33.94 25.1921 33.9893 25.2513C34.0386 25.3104 34.0735 25.3795 34.0914 25.4533C34.1093 25.5272 34.1098 25.604 34.0927 25.6781L31.6598 36.3538ZM27.5928 41.2944C26.3226 41.2944 25.2882 42.2909 25.2882 43.5166C25.2882 44.7343 26.3226 45.7267 27.5928 45.7267C28.8639 45.7267 29.8973 44.7343 29.8973 43.5156C29.8973 42.2909 28.8639 41.2944 27.5928 41.2944ZM27.5928 44.712C26.9025 44.712 26.3405 44.1762 26.3405 43.5156C26.3405 43.1954 26.4725 42.8882 26.7073 42.6618C26.9421 42.4353 27.2606 42.3081 27.5928 42.3081C27.9249 42.3081 28.2434 42.4353 28.4782 42.6618C28.713 42.8882 28.845 43.1954 28.845 43.5156C28.845 44.1752 28.2831 44.712 27.5928 44.712ZM18.0338 41.2944C16.7626 41.2944 15.7293 42.2909 15.7293 43.5166C15.7293 44.7343 16.7626 45.7267 18.0338 45.7267C19.3049 45.7267 20.3383 44.7343 20.3383 43.5156C20.3383 42.2909 19.3039 41.2944 18.0338 41.2944ZM18.0338 44.712C17.3435 44.712 16.7816 44.1762 16.7816 43.5156C16.7816 43.1954 16.9135 42.8882 17.1483 42.6618C17.3832 42.4353 17.7017 42.3081 18.0338 42.3081C18.3659 42.3081 18.6844 42.4353 18.9192 42.6618C19.1541 42.8882 19.286 43.1954 19.286 43.5156C19.286 44.1752 18.7241 44.712 18.0338 44.712Z"
                                                fill="#414141"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1205_458">
                                                <rect width="42" height="66" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                }
                                title="Mobile friendly"
                                text="Your store is responsive to all devices and supports all screen sizes, from mobile phones to computers"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <OnlineStoreFeatures
                                imageOrSvg={"/assets/onlineStoreDesignImages/hosting.webp"}
                                title="Distinctive hosting and domain"
                                text="The best fast hosting protected with the highest levels of security and protection on our servers, and also a domain of your choice that is easy and expressive of the store’s activity for a year for free, within the cost."
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <OnlineStoreFeatures
                                imageOrSvg={"/assets/onlineStoreDesignImages/transaction.webp"}
                                title="Different payment methods"
                                text="Your store contains different payment methods to facilitate payment methods for the customer"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <OnlineStoreFeatures
                                imageOrSvg={"/assets/onlineStoreDesignImages/question.webp"}
                                title="Live chat"
                                text="The Live Chat feature is added to your online store to facilitate the process of your customers reaching your sales team online and immediately and to facilitate communication processes."
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <OnlineStoreFeatures
                                imageOrSvg={"/assets/onlineStoreDesignImages/translation.webp"}
                                title="Multilanguage"
                                text="We offer your online store to the whole world so that it can spread throughout it, by adding more than one language to your store to expand the circle of your customers interested in your activity in all parts of the world."
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <OnlineStoreFeatures
                                imageOrSvg={"/assets/onlineStoreDesignImages/shopping-cart.webp"}
                                title="shopping cart"
                                text="The shopping cart is the most important addition to the online store, as online stores are similar to supermarkets"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <OnlineStoreFeatures
                                imageOrSvg={"/assets/onlineStoreDesignImages/trade.webp"}
                                title="Product comparison system"
                                text="The online store has a comparison system between products to find out which is better. When you get the online store, you will enjoy the best additional services."
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <OnlineStoreFeatures
                                imageOrSvg={"/assets/onlineStoreDesignImages/ad.webp"}
                                title="Advertising banners"
                                text="Spaces suitable for advertising banners of various sizes in a distinctive way that increases the customer’s desire to shop in your store"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <OnlineStoreFeatures
                                imageOrSvg={"/assets/onlineStoreDesignImages/wishlist.webp"}
                                title="Wishlist"
                                text="Wish lists are available in your online store, and there is also a special account for each customer with a system of best wishes and favorites and a rating system for all products to improve your store’s sales."
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <OnlineStoreFeatures
                                imageOrSvg={"/assets/onlineStoreDesignImages/certificate.webp"}
                                title="SSL certificate"
                                text="Elevate trust and security! Our SSL certificates ensure encrypted connections for safeguarding sensitive data on your website."
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <OnlineStoreFeatures
                                imageOrSvg={"/assets/onlineStoreDesignImages/email.webp"}
                                title="Official emails"
                                text="We provide you with official emails in the name of your business that you can use for your supervisors to facilitate the communication process"
                            />
                        </div>
                    </div>
                </div>

                <div className="online-store-design-bot-section text-center mt-5">
                    <h2 className="text-center">
                        <Trans i18nKey="E-commerce websites design"></Trans>
                    </h2>
                    <p>
                        <Trans i18nKey="Our online store design services help you enter the world of e-commerce and get your own store and an accompanying mobile application that works on Android and iPhone devices."></Trans>
                    </p>
                    <a
                        onClick={() => {
                            handelNavigate();
                            window.scrollTo({ top: 0 });
                        }}
                    >
                        <button className="btn text-center  btn-top-section mt-3">
                            <Trans i18nKey="Request for a quote"></Trans>
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default OnlineStoreDesign;
