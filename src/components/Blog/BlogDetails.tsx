import { Link, useParams } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';

import './blog.css';
import SuggestedPosts from './SuggestedPosts';
import SocialShareButtons from './SocialShareButtons';
import { useContext, useEffect, useMemo, useState } from 'react';
import { blogContext, valueOfContextType } from '../context/BlogContext';
import { blogType } from '../../types/BlogsTypes';
const getBlogBySlug = (Blogs: blogType[], slug: string): blogType | undefined => {
    if (Blogs) {
        return Blogs.find((blog: blogType) => blog.slug === slug);
    }
};
function BlogDetails() {
    const { Blogs } = useContext(blogContext) as valueOfContextType;
    const { slug } = useParams();

    const memoizedGetBlogBySlug = useMemo(() => {
        if (slug) {
            return getBlogBySlug(Blogs, slug);
        }
    }, [Blogs, slug]);

    const [Blog, setBlog] = useState<blogType>();
    const [Tags, setTags] = useState<string[]>();

    const BreadCrumbsData = [
        { name: Blog?.title, Link: `blog/${Blog?.slug}` },
        { name: 'Home', Link: '/' },
        { name: 'Blog', Link: '/blogs' },
    ];

    useEffect(() => {
        if (slug) {
            setBlog(memoizedGetBlogBySlug);
        }
    }, [memoizedGetBlogBySlug, slug]);
    useEffect(() => {
        if (Blog) {
            setTags(Blog.tags);
        }
    }, [Blog]);

    const data = Blogs.map(({ title, mainImg, slug, timeOfHour, timeOfDay }) => {
        return { title, mainImg, timeOfHour, timeOfDay, slug };
    });
    const metaDataOfBlog = [
        { classOfIcon: 'fa-clipboard', text: 'Blogs' },
        { classOfIcon: 'fa-calendar-days', text: Blog?.timeOfDay },
        { classOfIcon: 'fa-clock', text: Blog?.timeOfHour },
        { classOfIcon: 'fa-user-tie', text: Blog?.createdBy.name },
    ];

    return (
        <>
            <section id="blogDetails" className="typography  blog-page  pt-4     gap-4">
                <div className="container-fluid">
                    <div id="blogTitle" className="w-100  boxShadow  mb-4 text-black  ">
                        <div className=" layer   py-4">
                            <h1 className=" mb-0  typography ">titititisdlcsdlfsdfksdfksdfkl</h1>
                            <p id="caption" className="typography ">
                                How a professionally designed website can help businesses establish a strong online presence
                                and attract customers
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <article className="col-lg-9 col-12 ">
                            <BreadCrumbs data={BreadCrumbsData} />
                            <img id="blogImg" className=" w-100  rounded" src={Blog?.mainImg} alt="main image" />
                            {/* Display meta data of blogs  */}
                            <div className=" d-flex  flex-wrap mt-2 justify-content-evenly  ">
                                {metaDataOfBlog.map((metaData, index) => {
                                    return (
                                        <>
                                            <div key={index} className="d-flex  justify-content-start align-items-center">
                                                <i className={`fa-solid fs-md-5 fs-6 ${metaData.classOfIcon}`}></i>
                                                <span className="fs-6 mx-2 fw-semibold">{metaData.text}</span>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                            {/* ==================================================== */}
                            <Link to={'/'} className="text-primary text-decoration-none d-block mt-3">
                                {Blog?.category}
                            </Link>
                            <p id="mainBody" className="typography article-p">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga velit odio aspernatur sunt
                                adipisci error saepe impedit ex quae! Labore voluptas animi quis sed harum necessitatibus
                                eligendi sunt sapiente fuga?
                            </p>

                            <h2 className=" typography">{Blog?.title}</h2>
                            <img id="blogImg" className="  rounded" src={Blog?.mainImg} alt="main image" />
                            <div className="mt-2">
                                <p className="article-p text">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga velit odio aspernatur sunt
                                    adipisci error saepe impedit ex quae! Labore voluptas animi quis sed harum necessitatibus
                                    eligendi sunt sapiente fuga?
                                </p>
                            </div>
                            <Link to={'/'} className="text-primary text-decoration-none d-inline-block mt-3">
                                {Blog?.category}
                            </Link>

                            <h2 className="article-heading ">{Blog?.title}</h2>
                            <div className="mt-2">
                                <p className="article-p mb-2 text">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga velit odio aspernatur sunt
                                    adipisci error saepe impedit ex quae! Labore voluptas animi quis sed harum necessitatibus
                                    eligendi sunt sapiente fuga?
                                </p>
                                <ul className="me-5 ">
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
                                </ul>
                            </div>
                            <h2 className="article-heading ">{Blog?.title}</h2>
                            <div className="mt-2">
                                <p className="article-p mb-2 ">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga velit odio aspernatur sunt
                                    adipisci error saepe impedit ex quae! Labore voluptas animi quis sed harum necessitatibus
                                    eligendi sunt sapiente fuga?
                                </p>
                                <ul className="me-5 ">
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
                                </ul>
                            </div>
                        </article>
                        {/* 
                    <article className="col-12 col-md-8">
                        <div className='d-flex justify-content-center'>
                            <img id='blogImg' className="w-75 m-auto" src="/assets/blogs/blog1/1.webp" alt="" />
                        </div>
                    </article> */}
                        <div className="col-lg-3 suggestion__border position-relative col-sm-9 col-12 col-md-6 ">
                            <div id="leftSection" className="position-sticky">
                                <SuggestedPosts
                                    header="Latest Article"
                                    posts={data}
                                    tags={Tags}
                                    className="mt-0   mt-lg-0"
                                />
                                <div className="">
                                    <h2 className="">Share on:</h2>
                                    <SocialShareButtons
                                        url={encodeURI('facebook.com')}
                                        title={encodeURIComponent('Whatever')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogDetails;
