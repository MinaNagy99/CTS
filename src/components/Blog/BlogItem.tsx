import { Link } from 'react-router-dom';
import { blogType } from '../../types/BlogsTypes';
import { FaRegUserCircle } from 'react-icons/fa';
import { Trans } from 'react-i18next';

export default function BlogItem({ blog }: { blog: blogType }) {
    const { mainImg, title, createdBy, slug, caption, timeOfDay } = blog;

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
                <Link to={`/blog/${slug}`} className="col-sm-12 col-md-6 col-lg-4 mb-4 text-decoration-none">
                    <div className="card text-dark click-col h-100">
                        <div className="ratio-container">
                            <img
                                className="card-image-demo card-img-top ratio-content"
                                src={mainImg}
                                alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
                            />
                        </div>
                        <div className="card-body">
                            <small className="blog-card-caption card-meta mb-2">
                                <Trans i18nKey={caption}></Trans>
                            </small>
                            <h5 className=" card-title mt-1">
                                <p className="blog-card-title text-decoration-none text-dark">
                                    <Trans i18nKey={title}></Trans>
                                </p>
                            </h5>
                            <small>
                                <i className="far fa-clock"></i> <Trans i18nKey={timeOfDay}></Trans>
                            </small>
                        </div>
                        <div className="card-footer">
                            <div className="media d-flex gap-1 align-items-center">
                                <FaRegUserCircle />
                                <div className="media-body">
                                    <h6 className="my-0 text-dark d-block">
                                        <Trans i18nKey={createdBy.name}></Trans>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </>
        </>
    );
}
