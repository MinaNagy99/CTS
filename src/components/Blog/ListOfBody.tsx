import { Trans } from 'react-i18next';
import { listType } from '../../types/BlogsTypes';

interface props {
    list: listType;
}

export default function ListOfBody({ list }: props) {
    const { title, listItems, orderedList } = list;
    return (
        <>
            <div className="mt-2">
                <p className="article-p mb-2 text"> {<Trans i18nKey={title}></Trans>}</p>
                {orderedList && (
                    <ol className="me-5 ">
                        {listItems.map((item, index) => {
                            return <li key={index}> {<Trans i18nKey={item}></Trans>}</li>;
                        })}
                    </ol>
                )}
                {!orderedList && (
                    <ul className="me-5 ">
                        {listItems.map((item, index) => {
                            return <li className='typography ' key={index}> {<Trans i18nKey={item}></Trans>}</li>;
                        })}
                    </ul>
                )}
            </div>
        </>
    );
}
