import { useContext, useEffect } from 'react';
import { blogContext, typeOfBlog, valueOfContextType } from '../Context/BlogsContext';
import ItemOfBlog from './ItemOfBlog/ItemOfBlog';
import { Link } from 'react-router-dom';

export default function Blogs() {
    const { Blogs } = useContext(blogContext) as valueOfContextType;
    useEffect(() => {
        console.log(Blogs);
    }, [Blogs]);

    return (
        <>
            <div className="min-h-screen">
                <div className='flex justify-end pe-10 py-5'>
                    <Link to="/addBlog" className="border-black-700  border-spacing-4 rounded-2xl bg-blue-900     px-8 py-4  font-semibold text-white shadow-2xl">
                        Create Blog
                    </Link>
                </div>
                <div className="grid select-none grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {Blogs &&
                        Blogs.map((blog: typeOfBlog, index: number) => {
                            return <ItemOfBlog key={index} blog={blog}></ItemOfBlog>;
                        })}
                </div>
            </div>
        </>
    );
}
