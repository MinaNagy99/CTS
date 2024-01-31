import { listType } from '../../types/BlogsTypes';

interface props {
    list: listType;
}

export default function ListOfBody({ list }: props) {
    const { title, listItems, orderedList } = list;
    return (
        <>
            {title && <h2 className="article-heading ">{title}</h2>}
            <div className="mt-2">
                <p className="article-p mb-2 text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga velit odio aspernatur sunt adipisci error
                    saepe impedit ex quae! Labore voluptas animi quis sed harum necessitatibus eligendi sunt sapiente fuga?
                </p>
                <ul className="me-5 ">
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
                </ul>
            </div>
        </>
    );
}
