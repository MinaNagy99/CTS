import { Link } from 'react-router-dom';
import { suggestedPost } from '../../types/BlogsTypes';
import './AllBlogs.css';
import { Trans } from 'react-i18next';
interface props {
    className: string;
    header: string;
    tags: string[] | undefined;
    posts: suggestedPost[];
}

function SuggestedPosts({ className, header, posts, tags }: props) {
    return (
        <>
            <div id="suggestedPost" className={`w-100 shadow-sm rounded p-2 ${className}`}>
                <h4><Trans i18nKey={header}></Trans></h4>
                <div className="row gap-3">
                    {posts.map((item, index: number) => (
                        <Link
                            key={index}
                            to={`/blog/${item.slug}`}
                            className="  text-decoration-none   flex-nowrap align-items-center col-12 my-2  d-flex "
                        >
                            <img className="object-fit-fill rounded w-25 m-md-2" src={item.mainImg} alt={item.title} />
                            <div className="fs-6">
                                <p id="title" className="text-decoration-none fs-6 px-2 text-black">
                                {<Trans i18nKey={item.title}></Trans>}
                                </p>
                                <p id="date" className="text-decoration-none   px-2 ">
                                {<Trans i18nKey={item.timeOfDay}></Trans>}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <h2 className="">Tags</h2>
                <div className="d-flex flex-wrap gap-1">
                    {tags &&
                        tags.map((item: string, index: number) => (
                            <Link key={index} to="/" className="inline-block rounded px-2 py-1 bg-primary fs-6 text-white">
                                {item}
                            </Link>
                        ))}
                </div>
            </div>
        </>
    );
}

export default SuggestedPosts;
