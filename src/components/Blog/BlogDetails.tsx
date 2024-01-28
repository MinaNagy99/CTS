import { Link, useParams } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';

import './blog.css';
import SuggestedPosts from './SuggestedPosts';
import CommentsContainer from './Comments/CommentsContainer';
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
        { name: Blog?.title, Link: `blog/${Blog?._id}` },
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

    const data = Blogs.map(({ title, mainImg, _id, slug, createdAt }) => {
        return { title, mainImg, createdAt, _id, slug };
    });

    return (
        <>
            <section className="container-fluid   blog-page  py-5   px-md-5  gap-4">
                <div className="row">
                    <article className="col-8 ">
                        <BreadCrumbs data={BreadCrumbsData} />
                        <img className="w-100 rounded" src={Blog?.mainImg.url} alt="main image" />
                        <Link to={'/'} className="text-primary text-decoration-none d-inline-block mt-3">
                            {Blog?.category.name}
                        </Link>

                        <h2 className="article-heading ">{Blog?.title}</h2>
                        <div className="mt-2">
                            <p className="article-p text">{Blog?.body}</p>
                        </div>
                        <div className="">
                            {/* {!isLoading && !isError && <Editor content={data?.body} editable={false} />} */}
                        </div>
                        <CommentsContainer
                            // comments={data?.comments}
                            className="mt-10"
                            loggedInUserId="a"
                            // postSlug={slug}
                        />
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
