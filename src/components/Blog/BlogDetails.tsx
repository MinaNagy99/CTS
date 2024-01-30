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

    return (
        <>
            <section id="blogDetails" className="container-fluid   blog-page  py-5   px-md-5  gap-4">
                <div className="row">
                    <article className="col-8 ">
                        <BreadCrumbs data={BreadCrumbsData} />
                        <img className="w-100 h-25  rounded" src={Blog?.mainImg} alt="main image" />
                        <div className=" d-flex ">
                            <div className="d-flex mx-4 justify-content-start align-items-center">
                                <span className="fs-5 fw-semibold">مقالات</span>
                                <i className="fa-solid fs-5 fa-highlighter"></i>{' '}
                            </div>
                            <div className="d-flex justify-content-start align-items-center">
                                <span className="fs-5 fw-semibold">مقالات</span>
                                <i className="fa-solid fs-5 fa-highlighter"></i>{' '}
                            </div>
                        </div>
                        <Link to={'/'} className="text-primary text-decoration-none d-block mt-3">
                            {Blog?.category}
                        </Link>

                        <h2 className="article-heading ">{Blog?.title}</h2>
                        <div className="mt-2">
                            <p className="article-p text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga velit odio aspernatur sunt
                                adipisci error saepe impedit ex quae! Labore voluptas animi quis sed harum necessitatibus
                                eligendi sunt sapiente fuga?
                            </p>
                        </div>
                        <img className="w-100 h-25 rounded" src={Blog?.mainImg} alt="main image" />
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
                    </article>
                    <div className="col-4">
                        <SuggestedPosts header="Latest Article" posts={data} tags={Tags} className="mt-0 mt-lg-0" />
                        <div className="">
                            <h2 className="">Share on:</h2>
                            <SocialShareButtons url={encodeURI('facebook.com')} title={encodeURIComponent('Whatever')} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogDetails;
