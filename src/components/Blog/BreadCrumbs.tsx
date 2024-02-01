import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

interface propsType {
    data: {
        name: string;
        link: string;
    };
}
const BreadCrumbs = ({ data }: propsType) => {
    return (
        <div className="d-flex">
            <Link className="text-secondary text-decoration-none" to={data.link}>
                {<Trans i18nKey={data.name}></Trans>}
            </Link>
            <span className="px-3">/</span>
        </div>
    );
};

export default BreadCrumbs;
