import { Trans } from 'react-i18next';
import './onlineStoreFeatures.css';

interface OnlineStoreFeaturesProps {
    imageOrSvg: JSX.Element | string;
    title: string;
    text: string;
}

export default function OnlineStoreFeatures({ imageOrSvg, title, text }: OnlineStoreFeaturesProps) {
    return (
        <>
            <div className="d-flex align-items-center">
                <div className="online-ftore-features-svg">
                    {typeof imageOrSvg === 'string' ? <img src={imageOrSvg} alt="" /> : imageOrSvg}
                </div>
                <div>
                    <h2 className="online-ftore-features-title">
                        <Trans i18nKey={title} />
                    </h2>
                    <p className="online-ftore-features-text">
                        <Trans i18nKey={text} />
                    </p>
                </div>
            </div>
        </>
    );
}
