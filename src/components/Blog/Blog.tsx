import { Link } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';

import './blog.css';
import SuggestedPosts from './SuggestedPosts';
import CommentsContainer from './Comments/CommentsContainer';
import SocialShareButtons from './SocialShareButtons';

function Blog() {
    const BreadCrumbsData = [
        { name: 'Home', Link: '/' },
        { name: 'Blog', Link: '/blog' },
        { name: 'Article title', Link: '/blog/123' },
    ];

    const postsData = [
        {
            _id: '1',
            image: '/assets/portfolio/1.webp',
            title: 'Our first post',
            createdAt: '2023-12-28T15:35:53.607+0000',
        },
        {
            _id: '2',
            image: '/assets/portfolio/1.webp',
            title: 'Our first post',
            createdAt: '2023-12-28T15:35:53.607+0000',
        },
        {
            _id: '3',
            image: '/assets/portfolio/1.webp',
            title: 'Our first post',
            createdAt: '2023-12-28T15:35:53.607+0000',
        },
        {
            _id: '4',
            image: '/assets/portfolio/1.webp',
            title: 'Our first post',
            createdAt: '2023-12-28T15:35:53.607+0000',
        },
        {
            _id: '5',
            image: '/assets/portfolio/1.webp',
            title: 'Our first post',
            createdAt: '2023-12-28T15:35:53.607+0000',
        },
    ];

    let tags = ['programming', 'webDevelopment', 'javascript', 'tutorials', 'codingTips', 'technology'];

    return (
        <>
            <section className="container-fluid blog-page mx-auto py-5 px-md-5 d-lg-flex gap-4">
                <article className="">
                    <BreadCrumbs data={BreadCrumbsData} />
                    <img className="w-100 rounded" src="/assets/portfolio/1.webp" alt="main image" />
                    <Link to={'/'} className="text-primary text-decoration-none d-inline-block mt-3">
                        EDUCATION
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
                    <h2 className="article-heading">Article Title</h2>
                    <div className="mt-2">
                        <p className="article-p text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, optio. Nulla sint, voluptas
                            recusandae voluptate eaque pariatur, quae soluta cupiditate vero molestias in voluptatem ab saepe
                            rerum, temporibus aspernatur doloribus.
                        </p>
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
                <div>
                    <SuggestedPosts header="Latest Article" posts={postsData} tags={tags} className="mt-0 mt-lg-0" />
                    <div className="">
                        <h2 className="">Share on:</h2>
                        <SocialShareButtons url={encodeURI('facebook.com')} title={encodeURIComponent('Whatever')} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;
