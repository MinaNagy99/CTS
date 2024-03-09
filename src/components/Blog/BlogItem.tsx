import { Link } from 'react-router-dom';
import { blogType } from '../../types/BlogsTypes';
import { FaRegUserCircle } from 'react-icons/fa';
import { Trans } from 'react-i18next';

export default function BlogItem({ blog }: { blog: blogType }) {
    const { mainImg, title, createdBy, slug, caption, timeOfDay } = blog;

/*


design pattern 
data stracture 
algorisms 
advanced topics in react and nodejs and angular 
problem solving to improve my my thinking way of coding and i will learn english from auc 
to join with forgen company and 
how can i help me to improve this pattern and i will be able to continue
how can i help me to improve this pattern and i will be able to continue
how can i help me to improve this pattern and i will be able to continue
how and how can this extension complete with me this words and can i and you can do any things about this pattern 
and what is my plan and what am i want 
i'm very bay now and i can't think about any things and what do you want and what do you want 
i can't think here and i want change my company 



*/
    return (
        <>
            <>
            {console.log(slug)
            }
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
