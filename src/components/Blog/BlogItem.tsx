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
                <Link id='blogItem' className="col-sm-12 col-md-6 col-lg-4 mb-4" to={`/blog/${slug}`}>
                    <div className="card text-dark  click-col">
                        <img
                            className="card-img  "
                            src={mainImg}
                            alt={caption}
                        />
                        <div className="card-img-overlay  d-flex flex-column">
                            <div className="card-body">
                                <small className="card-meta mb-2"> {<Trans i18nKey={caption}></Trans>}</small>
                                <h4 className="card-title mt-0 ">
                                    <p className="text-dark" >
                                        {<Trans i18nKey={title}></Trans>}{' '}
                                    </p>
                                </h4>
                                <small>
                                    <i className="far fa-clock"></i> {timeOfDay}
                                </small>
                            </div>
                            <div className="card-footer">
                                <div className="media d-flex gap-1 align-items-center">
                                    <FaRegUserCircle className="avatar-icon" />
                                    <div className="media-body">
                                        <h6 className="my-0 text-dark d-block">
                                            {' '}
                                            {<Trans i18nKey={createdBy.name}></Trans>}
                                        </h6>
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
