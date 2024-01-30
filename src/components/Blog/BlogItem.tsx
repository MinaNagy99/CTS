import { Link } from 'react-router-dom';
import { blogType } from '../../types/BlogsTypes';
import { FaRegUserCircle } from 'react-icons/fa';

export default function BlogItem({ blog }: { blog: blogType }) {
    const { mainImg, title, createdBy, slug, timeOfHour, timeOfDay } = blog;

    // const formatDate = (createdAt: string) => {
    //     const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    //         year: 'numeric',
    //         month: 'long',
    //         day: 'numeric',
    //     });
    //     return formattedDate;
    // };
    return (
        <>
            <>
                <Link className="col-sm-12 col-md-6 col-lg-4 mb-4" to={`/blog/${slug}`}>
                    <div className="card text-dark card-has-bg click-col" style={{ backgroundImage: `url(${mainImg})` }}>
                        <img
                            className="card-img d-none"
                            src="https://source.unsplash.com/600x900/?tech,street"
                            alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
                        />
                        <div className="card-img-overlay d-flex flex-column">
                            <div className="card-body">
                                <small className="card-meta mb-2">${title}</small>
                                <h4 className="card-title mt-0 ">
                                    <a className="text-dark" href="https://creativemanner.com">
                                        {title}
                                    </a>
                                </h4>
                                <small>
                                    <i className="far fa-clock"></i> {timeOfDay}
                                </small>
                            </div>
                            <div className="card-footer">
                                <div className="media d-flex gap-1 align-items-center">
                                    <FaRegUserCircle className="avatar-icon" />
                                    <div className="media-body">
                                        <h6 className="my-0 text-dark d-block">{createdBy.name}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </>
        </>
    );
}
