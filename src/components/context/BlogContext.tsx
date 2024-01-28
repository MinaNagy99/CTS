import { ReactNode, createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { blogType } from '../../types/BlogsTypes';
export const blogContext = createContext<valueOfContextType | null>(null);
const url_backEnd = 'http://localhost:3003/blog';
interface propsType {
    children: ReactNode;
}

export type valueOfContextType = {
    getAllBlogs: () => Promise<blogType[]>;
    Blogs: blogType[];
    getBlogById: (id: string) => blogType|undefined;
};

function BlogContextProvider({ children }: propsType) {
    const [Blogs, setBlogs] = useState<blogType[]>([]);
    const getAllBlogs = async () => {
        const { data } = await axios.get(url_backEnd);
        setBlogs(data.data);
        return data.data;
    };
    const getBlogById = (id: string) => {
        return Blogs.find((blog: blogType) => blog._id === id);
    };
    useEffect(() => {
        getAllBlogs();
    }, []);

    const valueOfContext: valueOfContextType = {
        getAllBlogs,
        Blogs,
        getBlogById,
    };

    return <blogContext.Provider value={valueOfContext}>{children}</blogContext.Provider>;
}

export default BlogContextProvider;
