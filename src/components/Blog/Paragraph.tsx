import { Trans } from 'react-i18next';

export default function Paragraph({ paragraph }: { paragraph: string }) {
    return (
        <div className="mt-2">
            <p className="article-p text"> {<Trans i18nKey={paragraph}></Trans>}</p>
        </div>
    );
}
