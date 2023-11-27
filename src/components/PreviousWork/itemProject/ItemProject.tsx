import { Link } from "react-router-dom";

interface ItemProjectProps {
    imag: string;
    title: string;
}
export default function ItemProject({ imag, title }: ItemProjectProps) {
    return (
        <>
            <Link to="/" className="col-lg-4 col-sm-6 col-12 p-2 ">
                <div className="item-border">
                    <img className="w-100" src={imag} alt="" />
                </div>
                <div className="rectangle position-relative">
                    <div className="circle"></div>
                </div>
                <img
                    className=" d-flex justify-content-center align-items-center m-auto"
                    src="/assets/portfolio/Frame.png"
                    alt=""
                />
                <p className="item-header py-3 w-100 m-auto mt-3   text-center">{title}</p>
            </Link>
        </>
    );
}
