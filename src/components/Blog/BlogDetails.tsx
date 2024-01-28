import { Link, useParams } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';

import './blog.css';
import SuggestedPosts from './SuggestedPosts';
import CommentsContainer from './Comments/CommentsContainer';
import SocialShareButtons from './SocialShareButtons';
import { useContext, useEffect, useMemo, useState } from 'react';
import { blogContext, valueOfContextType } from '../context/BlogContext';
import { blogType } from '../../types/BlogsTypes';
const getBlogById = (Blogs: blogType[], id: string): blogType => {
    return Blogs.find((blog: blogType) => blog._id === id);
};
function BlogDetails() {
    const { Blogs } = useContext(blogContext) as valueOfContextType;
    const { id } = useParams();

    const memoizedGetBlogById = useMemo(() => getBlogById(Blogs, id), [Blogs, id]);

    const [Blog, setBlog] = useState<blogType>();
    const [Tags, setTags] = useState<string[]>();

    const BreadCrumbsData = [
        { name: Blog?.title, Link: `blog/${Blog?._id}` },
        { name: 'Home', Link: '/' },
        { name: 'Blog', Link: '/blogs' },
    ];

    useEffect(() => {
        if (id) {
            setBlog(memoizedGetBlogById);
        }
    }, [memoizedGetBlogById, id]);
    useEffect(() => {
        if (Blog) {
            setTags(Blog.tags);
        }
    }, [Blog]);

    const data = Blogs.map(({ title, mainImg, _id, createdAt }) => {
        return { title, mainImg, createdAt, _id };
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
                        <div className="">
                            {/* {data?.categories.map((category) => (
                            <Link
                                to={`/blog?category=${category.name}`}
                                className="text-primary text-sm font-roboto inline-block md:text-base"
                            >
                                {category.name}
                            </Link>
                        ))} */}
                        </div>
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
