import { useContext, useEffect } from 'react';
import { blogContext, typeOfBlog, valueOfContextType } from '../Context/BlogsContext';
import ItemOfBlog from './ItemOfBlog/ItemOfBlog';

export default function Blogs() {
    const { Blogs } = useContext(blogContext) as valueOfContextType;
    useEffect(() => {
        console.log(Blogs);
    }, [Blogs]);

    return (
        <>
            <div className="min-h-screen">
                <p className="py-4 text-center text-4xl font-semibold">Tailwind CSS</p>
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
