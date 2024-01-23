import { Link } from 'react-router-dom';

const BreadCrumbs = ({ data }) => {
    return (
        <div className="d-flex">
            {data.map((item, index) => (
                <div key={index} className="">
                    <Link className="text-secondary text-decoration-none" to={item.link}>
                        {item.name}
                    </Link>
                    {index !== data.length - 1 && <span className="px-3">/</span>}
                </div>
            ))}
        </div>
    );
};

export default BreadCrumbs;
