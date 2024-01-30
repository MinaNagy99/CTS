import { ReactNode, createContext, useState } from 'react';
import slugify from 'slugify';
import { blogType } from '../../types/BlogsTypes';
export const blogContext = createContext<valueOfContextType | null>(null);
interface propsType {
    children: ReactNode;
}

export type valueOfContextType = {
    Blogs: blogType[];
};

function BlogContextProvider({ children }: propsType) {
    const dataOfBlogs: blogType[] = [
        {
            slug: slugify('How to design a complete company identity'),
            mainImg: '/assets/blogs/blog1/1.webp',
            timeOfDay: 'Jan 7, 2024',
            timeOfHour: '11:45 Pm',
            category: 'Articles',
            title: 'How to design a complete company identity',
            createdBy: { avatar: '/assets/blogs/blog1/2.webp', name: 'Khamel Mamdouh' },
            tags: ['Search engine optimization', 'The best electronic marketing company'],
            sections: [
                {
                    title: 'Corporate brand identity design elements',
                    caption:
                        'We provide corporate identity design elements, so that you can provide a professional design, the most important of which are the following:',
                    body: '',
                    image: '/assets/blogs/blog1/1.webp',
                },
                {
                    title: 'Brand identity colors and fonts',
                    caption: 'Brand identity colors and fonts',
                    body: [
                        {
                            title: "The company's brand identity colors help in effective marketing.",
                            list: [
                                'The attractive colors of commercial identities stick in the mind, and therefore when you see the various colors and fonts',
                                'you will remember the identity immediately.',
                                "He also chose the appropriate brand identity design colors for the company's project.",
                            ],
                        },
                    ],
                    image: '/assets/blogs/blog1/3.webp',
                },
                {
                    title: ' brand identity',
                    caption: 'Brand identity',
                    image: '/assets/blogs/blog',
                    body: {
                        title:"asd",
                        paragraphs:['sadasdasd','asdasdasd']
                    },
                },
            ],
        },
    ];
    const [Blogs] = useState<blogType[]>(dataOfBlogs);
    // const getAllBlogs = async () => {
    //     const { data } = await axios.get(url_backEnd);
    //     setBlogs(data.data);
    //     return data.data;
    // };

    // useEffect(() => {
    //     getAllBlogs();
    // }, []);

    const valueOfContext: valueOfContextType = {
        Blogs,
    };

    return <blogContext.Provider value={valueOfContext}>{children}</blogContext.Provider>;
}

export default BlogContextProvider;
