import { useContext } from 'react';
import { blogContext, valueOfContextType } from '../context/BlogContext';
import './AllBlogs.css';
import BlogItem from './BlogItem';
import { blogType } from '../../types/BlogsTypes';

export default function AllBlogs() {
    const data = useContext(blogContext) as valueOfContextType;
    const { Blogs } = data;
    return (
        <>
            {console.log(Blogs)}
            <section className="wrapper">
                <div className="container">
                    <div className="row ">
                        {Blogs.map((blog: blogType, index: number) => {
                            return <BlogItem key={index} blog={blog} />;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
