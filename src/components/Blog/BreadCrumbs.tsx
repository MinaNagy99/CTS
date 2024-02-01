import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
interface propsType {
    BreadCrumbsData: {
        name: string | undefined;
        Link: string | undefined;
    }[];
}

const BreadCrumbs = ({ BreadCrumbsData }: propsType) => {
    return (
        <div className="d-flex">
            {BreadCrumbsData.map((item, index) => (
                <div key={index} className="">
                    {item.Link && (
                        <>
                            <Link className="text-secondary text-decoration-none" to={item.Link}>
                                {<Trans i18nKey={item.name}></Trans>}
                            </Link>
                        </>
                    )}
                    {index !== BreadCrumbsData.length - 1 && <span className="px-3">/</span>}
                </div>
            ))}
        </div>
    );
};

export default BreadCrumbs;
