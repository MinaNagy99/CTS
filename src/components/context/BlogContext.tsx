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
            slug: slugify('Designing a hotel and airline reservation website'),
            mainImg: '/assets/blogs/Design of a hotel and airline reservation website/main.webp',
            timeOfDay: 'Jan 7, 2024',
            timeOfHour: '11:45 Pm',
            category: 'Articles',
            title: 'Designing a hotel and airline reservation website, such as Booking, according to the latest updates for the year 2024',
            caption: 'Designing a hotel and airline reservation website',
            createdBy: { name: 'Kamel Mamdouh' },
            tags: ['Reservation System Design', 'Hotel and Airline Booking', 'Web Design Trends 2024'],
            mainText:
                'Designing a professional hotel and flight reservation website with pictures contributes to providing great control to the website owner, and the ability to communicate with customers to develop your company’s services. This requires obtaining a distinctive website design that is easy for the visitor to use when entering, and demonstrates the extent of the company’s excellence in providing its services. Through the article, we will present the best hotel reservation website design from ',
            sections: [
                {
                    title: 'Design of a hotel and airline reservation website',
                    caption: 'Design of a hotel and airline reservation website',
                    image: '/assets/blogs/Design of a hotel and airline reservation website/sec1.webp',
                    body: [
                        {
                            paragraphs: [
                                'Designing a professional hotel and flight reservation website requires that your goal be clear, in order to obtain a great return on investment, so you must determine the type of field that you want to target its audience, by taking steps that provide an easy user experience for the visitor, and simple online payment methods, in addition to providing Means of communication with all countries of the world, and the ability to upload photos, to display your company’s and hotels’ services.',
                            ],
                            list: {
                                title: 'You can now get an easy hotel reservation website design that provides you with the following:',
                                listItems: [
                                    'It provides the visitor to search by country, hotel name and city.',
                                    'Through it, the customer can book the room he wants.',
                                    'CTS Company provides you with an easy-to-use control panel in all languages, enabling you to send and receive reservation requests from customers.',
                                    'The design of your website for booking hotels also provides easy and multiple payment methods, whether a bank account or a Visa.',
                                    'It is a suitable site for viewing on all devices, whether mobile or desktop.',
                                ],
                                orderedList: true,
                            },
                            order: ['para', 'list'],
                        },
                    ],
                },
                {
                    title: 'Airline reservation website design specifications',
                    caption: 'Airline reservation website design specifications',
                    image: '/assets/blogs/Design of a hotel and airline reservation website/sec2.webp',
                    body: [
                        {
                            list: {
                                title: 'The hotel reservation website design specifications from Injaz Media Company are characterized by professionalism, as they help you communicate well with customers, the most prominent of which are the following:',
                                listItems: [
                                    'You will get an innovative, professional airline booking website design, which will help you attract customers attention.',
                                    'We will also provide you with a logo design for the company, indicating its commercial identity.',
                                    'You will get a control panel that is easy to control in foreign and Arabic languages.',
                                    'We will provide coding for all pages.',
                                    'We will also allocate a special panel for site members, and special programming.',
                                    'We will also provide multiple payment methods, suitable for all customers, in addition to providing you with professional archiving services.',
                                    'We will also protect your site against electronic attacks, and provide server protection.',
                                    'You can add bank accounts through it, send a message with the amount, deposit and pay.',
                                ],
                                orderedList: true,
                            },
                            // order: ['para', 'list'],
                        },
                    ],
                },
                {
                    title: 'Design standards for the flight reservation website Booking website for booking airline tickets and hotels',
                    caption:
                        'Design standards for the flight reservation website Booking website for booking airline tickets and hotels',
                    image: '/assets/blogs/Design of a hotel and airline reservation website/sec3.webp',
                    body: [
                        {
                            list: {
                                title: 'We present to you the standards for designing a flight reservation website. Booking.com is a distinctive website for booking airline tickets and hotels. It will help you stand out from your competitors and get ahead of them. They are as follows:',
                                listItems: [
                                    'You must provide high-quality images in the design of the hotel reservation website that you want customers to book, showing all the details within it, and being coordinated in a smooth, sequential manner, while explaining the features of the place.',
                                    'You must provide an easy user experience for the visitor to your site, while browsing your site and viewing images, without facing problems of difficulty loading images, or difficulty browsing, which would cause him to leave your site without returning.',
                                    'Protecting your site from electronic attacks requires providing a valid security certificate for the site, which makes it provide optimal response to customers, on all phones, computers, and tablets.',
                                ],
                                orderedList: true,
                            },
                            // order: ['para', 'list'],
                        },
                    ],
                },
                {
                    title: 'Requirements for creating an airline tickets and hotels website',
                    caption: 'Requirements for creating an airline tickets and hotels website',
                    image: '/assets/blogs/Design of a hotel and airline reservation website/sec4.webp',
                    body: [
                        {
                            list: {
                                title: 'One of the most important requirements for creating an airline tickets and hotel website is to have a set of skills, in order to have a professional website that motivates customers to request your services. Its steps are as follows:',
                                listItems: [
                                    'Use modern colors for the website that attract attention and suit your commercial identity.',
                                    'Design a logo for your company that distinguishes it from competing companies.',
                                    'Choosing a wonderful, unique and innovative design for your hotel and flight reservation website will attract customers’ attention.',
                                    'The site design is compatible with all mobile and web devices.',
                                    'There must also be a control panel that makes it easy to manage the site in all languages, with simple payment methods available on the site for booking hotels.',
                                    'Having an account for each user with all his data and all the operations he carried out.',
                                ],
                                orderedList: true,
                            },
                            // order: ['para', 'list'],
                        },
                    ],
                },
                {
                    title: 'Create a website for booking airline tickets and hotels with a commission',
                    caption: 'Create a website for booking airline tickets and hotels with a commission',
                    image: '/assets/blogs/Design of a hotel and airline reservation website/sec5.webp',
                    body: [
                        {
                            list: {
                                title: 'The specifications for creating a website for booking airline tickets and hotels with a commission from the best website design company in Egypt and the Arab world, are as follows:',
                                listItems: [
                                    'Providing innovative, unique and easy-to-use specifications for the website owner.',
                                    'The client gets the best hotel and airline reservation website design at a simple price.',
                                    'We also have a team of experts and programmers in the field of design professionally.',
                                    'We also determine the lowest cost for designing the hotel website, provide you with a control panel that is easy for you to use, and communicate with customers in all countries of the world.',
                                    'We also design a professional logo for you, and provide you with technical support services even after the product is delivered, to solve any problems with our hotel website designs.',
                                    'The hotel website design is also compatible with all search engines and exchange systems.',
                                ],
                                orderedList: false,
                            },
                            // order: ['para', 'list'],
                        },
                    ],
                },
                {
                    title: 'How to create, program and design a hotel reservation website',
                    caption: 'How to create, program and design a hotel reservation website',
                    image: '/assets/blogs/Design of a hotel and airline reservation website/sec6.webp',
                    body: [
                        {
                            list: {
                                title: 'A hotel and flight reservations website can be created, programmed, and designed by following the following steps:',
                                listItems: [
                                    'Define goals clearly.',
                                    'Determine target groups.',
                                    'Site planning.',
                                    'Domain and hosting.',
                                ],
                                orderedList: true,
                            },
                            // order: ['para', 'list'],
                        },
                    ],
                },
            ],
        },
        {
            slug: slugify('Website programming and development'),
            mainImg: '/assets/blogs/Website programming and development/main.webp',
            timeOfDay: 'Jan 7, 2024',
            timeOfHour: '11:45 Pm',
            category: 'Articles',
            title: 'Website programming and development - programming, design and development of websites',
            caption: 'Website programming and development',
            createdBy: { name: 'Kamel Mamdouh' },
            tags: ['website'],
            sections: [
                {
                    title: 'Programming, design and development of websites',
                    caption: 'Programming, design and development of websites',
                    image: '/assets/blogs/Design of a hotel and airline reservation website/sec1.webp',
                    body: [
                        {
                            paragraphs: [
                                'Website design from AST Solutions is more than just designing a website on the Internet, because the digital world is governed by first impressions, and we work to make an impressive impression from the beginning and designing a distinctive website is the key to success in light of the Internet era that we live in now, where We start working directly with you to transform your ideas into a successful and inspiring website. Website programming and development - programming, design and development of websites.',
                                'If you are looking to design a new website for your company project, you can browse our previous work. We work from a standpoint of innovation and experience, as we help companies develop their work by designing a website that presents what they have professionally to reflect the extent of their uniqueness in providing their services and products. We are able to do this through Your site, God willing. Our approach to website design begins with placing your activity and business on the Internet, earning more sales, and discovering more opportunities in this distinguished, fast-paced market.',
                                'We offer a wide range of different services and options that include website design, electronic marketing, mobile application programming, and online store design. With AST Solutions, you will gain your place in the online and mobile world and build a personality for your brand that will have a long-term impact on your customers. We believe that design makes a difference because the first impression lasts. At EST Solutions, websites must undergo rigorous testing for all types of devices, as well as different browsers and operating systems, before we launch your new website. User tests are conducted periodically to ensure the site is up to date and responsive. Our team develops effective content strategies, and we have a proven track record of success partners that is constantly increasing. We have previous work in Kuwait, Saudi Arabia and Egypt.',
                            ],
                            // order: ['para', 'list'],
                        },
                    ],
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
