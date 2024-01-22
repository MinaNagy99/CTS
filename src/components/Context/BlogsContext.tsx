import { ReactNode, createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const blogContext = createContext<valueOfContextType | null>(null);
const url_backEnd = 'http://localhost:3003/blog';
interface propsType {
    children: ReactNode;
}
interface typeOfImg {
    pubic_id: string;
    url: string;
}
interface userType {
    avatar: typeOfImg;
    name: string;
    email: string;
    _id: string;
}
interface commentType {
    text: string;
    createdBy: userType;
    parent: null | commentType;
}
export  interface typeOfBlog {
    mainImg: typeOfImg;
    title: string;
    body: string;
    caption: string;
    comments: commentType[];
    createdAt:ReactNode;
    createdBy: userType;    
}

export type valueOfContextType = {
    getAllBlogs: () => Promise<typeOfBlog[]>;
    Blogs: typeOfBlog[] ;
};

function BlogContextProvider({ children }: propsType) {
    const [Blogs, setBlogs] = useState<typeOfBlog[]>([]);
    const getAllBlogs = async () => {
        const { data } = await axios.get(url_backEnd);
        setBlogs(data.data);
        return data.data;
    };
    useEffect(() => {
         getAllBlogs();
    },[]);

    const valueOfContext: valueOfContextType = {
        getAllBlogs,
        Blogs,
    };

    return <blogContext.Provider value={valueOfContext}>{children}</blogContext.Provider>;
}

export default BlogContextProvider;
