import { Trans } from 'react-i18next';
import { sectionsType } from '../../types/BlogsTypes';
import SectionBody from './SectionBody';

interface props {
    section: sectionsType;
}

export default function BlogSection({ section }: props) {
    const { title, image, body, caption  } = section;
    return (
        <>
            {console.log(section)}
            <h2 className=" typography"> {<Trans i18nKey={title}></Trans>}</h2>
            {image && <img id="blogImg" className="  rounded" src={image} alt={caption} />}
            <SectionBody  body={body} />
        </>
    );
}
