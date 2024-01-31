import { listType } from '../../types/BlogsTypes';

interface props {
    list: listType;
}

export default function ListOfBody({ list }: props) {
    const { title, listItems, orderedList } = list;
    return (
        <>
            <div className="mt-2">
                <p className="article-p mb-2 text">{title}</p>
                <ul className="me-5 ">
                    {listItems.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </div>
        </>
    );
}
