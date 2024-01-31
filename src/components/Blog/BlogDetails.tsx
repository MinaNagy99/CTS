import { Link, useParams } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';

import './blog.css';
import SuggestedPosts from './SuggestedPosts';
import SocialShareButtons from './SocialShareButtons';
import { useContext, useEffect, useMemo, useState } from 'react';
import { blogContext, valueOfContextType } from '../context/BlogContext';
import { blogType, sectionsType } from '../../types/BlogsTypes';
import BlogSection from './BlogSection';
import Paragraph from './Paragraph';
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
                    <div
                        id="blogTitle"
                        className="w-100   boxShadow  mb-4   "
                        style={{
                            backgroundImage: `url(${Blog?.mainImg})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <img src="" alt="" />
                        <div className=" layer   py-4">
                            <h1 className=" mb-0  text-center typography ">{Blog?.title}</h1>
                            <p id="caption" className="typography ">
                                {Blog?.caption}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <article className="col-lg-9 col-12 ">
                            <BreadCrumbs data={BreadCrumbsData} />

                            {Blog?.mainImg && (
                                <img id="blogImg" className=" w-100  rounded" src={Blog?.mainImg} alt={Blog?.caption} />
                            )}
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
                            {Blog?.mainText &&
                                Blog?.mainText.map((paragraph: string, index: number) => (
                                    <Paragraph key={index} paragraph={paragraph} />
                                ))}

                            {Blog?.sections.map((section: sectionsType, index: number) => {
                                return (
                                    <>
                                        <BlogSection key={index} section={section} />
                                    </>
                                );
                            })}
                        
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
