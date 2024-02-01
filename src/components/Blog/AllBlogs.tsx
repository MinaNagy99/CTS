import { useContext } from 'react';
import './AllBlogs.css';
import BlogItem from './BlogItem';
import { blogType, valueOfContextType } from '../../types/BlogsTypes';
import { blogContext } from '../context/ContextName/Context';

export default function AllBlogs() {
    const data = useContext(blogContext) as valueOfContextType;
    const { Blogs } = data;
    return (
        <>
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
