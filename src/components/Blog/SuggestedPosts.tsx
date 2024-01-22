import { Link } from 'react-router-dom';

function SuggestedPosts({ className, header, posts = [], tags }) {
    return (
        <>
            <div className={`w-100 shadow-sm rounded p-2 ${className}`}>
                <h4>{header}</h4>
                <div className="row">
                    {posts.map((item) => (
                        <div
                            key={item._id}
                            className="d-flex gap-3 align-items-center flex-nowrap col-12 col-md-6 col-lg-12"
                        >
                            <img className="object-fit-cover rounded w-25 m-md-2" src={item.image} alt={item.title} />
                            <div className="fs-6">
                                <h3 className="text-sm text-decoration-none font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
                                    <Link to={'/'} className="text-decoration-none fs-6 text-black">
                                        {item.title}
                                    </Link>
                                </h3>
                                <span className="opacity-60">
                                    {new Date(item.createdAt).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="">Tags</h2>
                <div className="d-flex flex-wrap gap-1">
                    {tags.map((item, index) => (
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
