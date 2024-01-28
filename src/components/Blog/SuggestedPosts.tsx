import { Link } from 'react-router-dom';
import { suggestedPost } from '../../types/BlogsTypes';
interface props {
    className: string;
    header: string;
    tags: string[] | undefined;
    posts: suggestedPost[];
}

function SuggestedPosts({ className, header, posts, tags }: props) {
    return (
        <>
            <div className={`w-100 shadow-sm rounded p-2 ${className}`}>
                <h4>{header}</h4>
                <div className="row gap-3">
                    {posts.map((item) => (
                        <Link
                            key={item._id}
                            to={`/blog/${item.slug}`}
                            className="align-items-center text-decoration-none flex-nowrap col-12 my-2 col-md-2 d-flex col-lg-12"
                        >
                            <img className="object-fit-cover rounded w-25 m-md-2" src={item.mainImg.url} alt={item.title} />
                            <div className="fs-6">
                                <h3 className="text-sm text-decoration-none font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
                                    <p className="text-decoration-none fs-6 text-black">{item.title}</p>
                                </h3>
                                <span className="opacity-60">
                                    {new Date(item.createdAt).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                    })}
                                </span>
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
