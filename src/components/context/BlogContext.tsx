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
            timeOfHour: '02:45pm',
            category: 'Articles',
            title: 'Designing a hotel and airline reservation website, such as Booking, according to the latest updates for the year 2024',
            caption: 'Designing a hotel and airline reservation website',
            createdBy: { name: 'Kamel Mamdouh' },
            tags: ['Reservation System Design', 'Hotel and Airline Booking', 'Web Design Trends 2024'],
            mainText: [
                'Designing a professional hotel and flight reservation website with pictures contributes to providing great control to the website owner, and the ability to communicate with customers to develop your company’s services. This requires obtaining a distinctive website design that is easy for the visitor to use when entering, and demonstrates the extent of the company’s excellence in providing its services. Through the article, we will present the best hotel reservation website design from ',
            ],
            sections: [
                {
                    title: 'Design of a hotel and airline reservation website',
                    caption: 'Design of a hotel and airline reservation website',
                    image: '/assets/blogs/Design of a hotel and airline reservation website/sec1.webp',
                    body: {
                        paragraphs: [
                            'Designing a professional hotel and flight reservation website requires that your goal be clear, in order to obtain a great return on investment, so you must determine the type of field that you want to target its audience, by taking steps that provide an easy user experience for the visitor, and simple online payment methods, in addition to providing Means of communication with all countries of the world, and the ability to upload photos, to display your company’s and hotels’ services.',
                        ],
                        list: [
                            {
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
                        ],
                        order: ['para', 'list'],
                    },
                },
                {
                    title: 'Airline reservation website design specifications',
                    caption: 'Airline reservation website design specifications',
                    image: '/assets/blogs/Design of a hotel and airline reservation website/sec2.webp',
                    body: {
                        list: [
                            {
                                title: 'The hotel reservation website design specifications from Core Technology Solutions Company are characterized by professionalism, as they help you communicate well with customers, the most prominent of which are the following:',
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
                        ],
                        // order: ['para', 'list'],
                    },
                },
                {
                    title: 'Design standards for the flight reservation website Booking website for booking airline tickets and hotels',
                    caption:
                        'Design standards for the flight reservation website Booking website for booking airline tickets and hotels',
                    image: '/assets/blogs/Design of a hotel and airline reservation website/sec3.webp',
                    body: {
                        list: [
                            {
                                title: 'We present to you the standards for designing a flight reservation website. Booking.com is a distinctive website for booking airline tickets and hotels. It will help you stand out from your competitors and get ahead of them. They are as follows:',
                                listItems: [
                                    'You must provide high-quality images in the design of the hotel reservation website that you want customers to book, showing all the details within it, and being coordinated in a smooth, sequential manner, while explaining the features of the place.',
                                    'You must provide an easy user experience for the visitor to your site, while browsing your site and viewing images, without facing problems of difficulty loading images, or difficulty browsing, which would cause him to leave your site without returning.',
                                    'Protecting your site from electronic attacks requires providing a valid security certificate for the site, which makes it provide optimal response to customers, on all phones, computers, and tablets.',
                                ],
                                orderedList: true,
                            },
                        ],
                        // order: ['para', 'list'],
                    },
                },
                {
                    title: 'Requirements for creating an airline tickets and hotels website',
                    caption: 'Requirements for creating an airline tickets and hotels website',
                    image: '/assets/blogs/Design of a hotel and airline reservation website/sec4.webp',
                    body: {
                        list: [
                            {
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
                        ],
                        // order: ['para', 'list'],
                    },
                },
                {
                    title: 'Create a website for booking airline tickets and hotels with a commission',
                    caption: 'Create a website for booking airline tickets and hotels with a commission',
                    image: '/assets/blogs/Design of a hotel and airline reservation website/sec5.webp',
                    body: {
                        list: [
                            {
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
                        ],
                        // order: ['para', 'list'],
                    },
                },
                {
                    title: 'How to create, program and design a hotel reservation website',
                    caption: 'How to create, program and design a hotel reservation website',
                    image: '/assets/blogs/Design of a hotel and airline reservation website/sec6.webp',
                    body: {
                        list: [
                            {
                                title: 'A hotel and flight reservations website can be created, programmed, and designed by following the following steps:',
                                listItems: [
                                    'Define goals clearly.',
                                    'Determine target groups.',
                                    'Site planning.',
                                    'Domain and hosting.',
                                ],
                                orderedList: true,
                            },
                        ],
                        // order: ['para', 'list'],
                    },
                },
            ],
        },
        {
            slug: slugify('corporate website design'),
            mainImg: '/assets/blogs/Corporate website design/main.webp',
            timeOfDay: 'Jan 7, 2024',
            timeOfHour: '08:55am',
            category: 'Articles',
            title: 'Corporate website design - the best website design company in Egypt',
            caption: 'Corporate website design - the best website design company in Egypt',
            mainText: [
                'Core Technology Solutions provides a website design service for companies and institutions that seek excellence through a sophisticated interface on the Internet. We do not only provide website design for companies, but also integrated solutions and a distinctive identity for your company or organization. We create the website in a way that is compatible with search engines. And all internet browsers, mobile devices, tablets, iPhones, etc., in a manner consistent with international standards in designing and programming corporate websites.',
            ],
            createdBy: { name: 'Kamel Mamdouh' },
            tags: [
                'Business Web Solutions',
                'Leading Website Design Egypt',
                'Top Web Design Services',
                'Corporate Identity Online',
            ],
            sections: [
                {
                    title: 'Website design for companies',
                    caption: 'Website design for companies',
                    // image: '/assets/blogs/Design of a hotel and airline reservation website/sec1.webp',
                    body: {
                        paragraphs: [
                            'The best website design company in Egypt. AST Solutions designs and programs websites in the latest programming languages and in a way that suits the capabilities of its clients in various fields, and in professional ways in designing distinctive websites. It is also distinguished by designing websites compatible with all browsers and screens of all sizes. The company is also distinguished by designing websites. Companies that are compatible and friendly to search engines, in addition to a complete control panel that is simple to use, to save the customer time and money, enabling our customers to use the sites easily and the ability to add or change any of the site content easily.',
                        ],
                        // order: ['para', 'list'],
                    },
                },
                {
                    title: 'What distinguishes website design from our company:',
                    caption: 'What distinguishes website design from our company:',
                    // image: '/assets/blogs/Design of a hotel and airline reservation website/sec1.webp',
                    body: {
                        list: [
                            {
                                listItems: [
                                    'What distinguishes us is understanding and realizing the client’s requirements and good planning before starting work.',
                                    'All sites come with a complete control panel to control the site without the need to return to the company.',
                                    'We provide complete and complete protection for websites on our servers.',
                                    'Good planning when designing websites for places to place advertising banners to be more effective.',
                                    'Relying on simplicity in website design to make visitors comfortable and stay on the site for as long as possible.',
                                    'Reducing website loading time by avoiding flash drives and software that may affect the speed of loading the website and archiving it in search engines.',
                                    'We provide all corporate website design services that will bring you more exposure and thus more customers and sales at much lower prices.',
                                ],
                                orderedList: false,
                            },
                        ],
                        // order: ['para', 'list'],
                    },
                },
                {
                    title: 'Rank at the top and appear in the first search results by designing a website compatible with search engines',
                    caption:
                        'Rank at the top and appear in the first search results by designing a website compatible with search engines',
                    // image: '/assets/blogs/Design of a hotel and airline reservation website/sec1.webp',
                    body: {
                        paragraphs: [
                            'We design websites according to the rules of search engines to help your customers find your site faster, while archiving the site so that you get all the permissions to place words and semantic phrases with every product and every section of the site, as well as alternative texts to tell the search engines that you exist and that you have what your customers are looking for.',
                        ],
                        // order: ['para', 'list'],
                    },
                },
            ],
        },
        {
            slug: slugify('understanding seo'),
            mainImg: '/assets/blogs/Understanding SEO/main.webp',
            timeOfDay: 'Dec 5, 2024',
            timeOfHour: '12:45pm',
            category: 'Articles',
            title: 'Understanding SEO – Is It Really Necessary?',
            caption: 'Understanding SEO – Is It Really Necessary?',
            mainText: [
                "It seems like every time we turn around there's a new, seemingly simple acronym for a concept that ends up feeling cosmically infinite just by looking at it. Search Engine Optimization (SEO) is one of those concepts that you have definitely heard about or seen in articles by now. It's also one that can be a head-scratcher at first glance.",
                'Marketing teams have become widespread advocates of SEO, with companies creating entirely new roles dedicated just to it. But what if you are only one creator? Is SEO really important? Or is it something only big companies have to worry about?',
                "First, let's understand what search engine optimization (SEO) is and how it works.",
            ],
            createdBy: { name: 'Kamel Mamdouh' },
            tags: ['Search Engine Optimization Tips', 'SEO Best Practices', 'SEO Essentials'],
            sections: [
                {
                    title: 'What is search engine optimization?',
                    caption: 'What is search engine optimization?',
                    body: {
                        paragraphs: [
                            'SEO stands for search engine optimization. It sounds very technical but it has practical uses for anyone creating and/or publishing content online (yes, even on social media).',
                            'In essence, Search Engine Optimization (SEO) is used with the goal of getting greater volume and higher quality organic traffic. Think about it: People search for things on the Internet all the time. So how does Google know what results to give them? Search engine optimization (SEO) helps people find what they are looking for.',
                            'Search engine optimization (SEO) uses keywords and other techniques that make it easier for Google (and other search-based social platforms like Pinterest) to understand what your content is about. For example, if someone searches for “quick vegan enchilada recipe” and you have a blog post or video that includes your vegan enchilada recipe, you can use SEO to tell Google that your content is relevant.',
                            'Without SEO, there is a high probability that Google will not be able to read your content as relevant. Instead of appearing on page 1 of a search, they may appear on page 11. It is unlikely that someone will stay on a search long enough to get to page 11.',
                        ],
                        // order: ['para', 'list'],
                    },
                },
                {
                    title: 'A quick course on how to use search engine optimization (SEO).',
                    caption: 'A quick course on how to use search engine optimization (SEO).',
                    image: '/assets/blogs/Understanding SEO/sec2.webp',
                    body: {
                        paragraphs: [
                            'As a content creator, there is one key factor you can start using today that will dramatically improve the searchability of your content: keywords. There are other factors attributed to SEO, but keywords carry a lot of weight and are a simple way to get started.',
                            'Keywords help define the topic of your content. Think of it as a bridge between the content you create and what people are searching for.',
                            "When someone starts typing a query into Google, suggestions appear. These are good examples of potential keywords to focus on. It's an easy way to do some quick keyword research if you're not sure where to start (more on keyword research below).",
                        ],
                        // order: ['para', 'list'],
                    },
                },
                {
                    title: 'Types of keywords',
                    caption: 'Types of keywords',
                    body: {
                        paragraphs: [
                            'There are two main types of keywords: short-tail and long-tail.',
                            'Short keywords often consist of one or two words that cover a very broad topic. The problem with short-tail keywords is that they cover a wide range, resulting in a lot of competition for search results position on the first page.',
                            'However, long-tail keywords will be your bread and butter. They sound more like phrases and have a clearly defined intent.',
                            "Let's revisit the vegetarian enchilada research.",
                            'A short keyword might be “vegetarian enchiladas.” Since this is a broad concept, your content is unfortunately likely to get lost in the sauce. Not only will you be competing with other recipes, you may be competing with products being sold like frozen vegan enchiladas or vegan enchilada cheese.',
                            'However, the “quick vegetarian enchilada recipe” is more specific and has a clear purpose. There will be less competition from those ingredients or products mentioned earlier.',
                            "It's worth noting that you don't want to get too niche with your long-tail keywords, because even though the competition may be less, it probably won't be a realistic query someone would type into the search bar.",
                            'You want to hit that sweet spot between not too vague and not too specific. A good way to achieve this is to keep your long-tail keywords between 3 to 5 words.',
                        ],
                        // order: ['para', 'list'],
                    },
                },
                {
                    title: 'Search for the keyword',
                    caption: 'Search for the keyword',
                    image: '/assets/blogs/Understanding SEO/sec4.webp',
                    body: {
                        paragraphs: [
                            'In general, you want to have one primary keyword and two secondary keywords on the page/post you are optimizing.',
                            'As mentioned earlier, typing in some short-tail keywords and seeing what comes up in Google suggested searches is a good way to start identifying your long-tail keywords.',
                            "Another easy way to find keywords is to use LSI (Latent Semantic Indexing) keywords. Don't worry about the fancy wording it represents. This is basically another quick Google search hack to find keywords.",
                            "Let's say you know that your primary keyword is “quick vegetarian enchilada recipe.” LSI results are a good reference point for secondary keywords. These are the related searches you see at the bottom of the Google search page. Just scroll to the end of the page and voila!",
                        ],
                        // order: ['para', 'list'],
                    },
                },
                {
                    title: 'Keywords in action',
                    caption: 'Keywords in action',
                    body: {
                        paragraphs: [
                            "*Locating/editing the meta description and ALT text varies slightly depending on your hosting platform. Check out the helpful links below if you're not sure where to find them!",
                            'For WordPress: Meta Description | Alt text',
                            'For Squarespace: Meta Description | Alt text',
                            "If you're using a hosting platform other than these two, a quick Google search for your platform can give you the answers you need!",
                            "This is where a lot of people get stuck. It may seem like a lot, but it's actually a very simple practice once you get the hang of it. In fact, you can even break up the keyword a bit in the sentence and Google will still recognize it.",
                            "Pro tip: What you don't want to do is what's called “keyword stuffing.” This happens when you use your keywords as many times as possible, “filling” the page with them. Google reads this as spam and your site can be penalized as a result.",
                            'You want to use your keywords in a way that feels natural.',
                            'This is also where “keyword density” comes into play. Keyword density helps ensure your content is optimized, but not overstuffed. Good organic keyword density is between 1-2%.',
                            'Some tools in your website hosting platform can help you calculate this. Otherwise, there are plenty of free keyword density calculators online.',
                        ],
                        list: [
                            {
                                title: 'The general rule for using keywords on a page is as follows:',
                                listItems: [
                                    'In the page title and URL',
                                    'In at least one title (H1 tags)',
                                    'In at least one subheading (H2 and H3 tags)',
                                    'In the first paragraph',
                                    'In the last paragraph',
                                    'In the meta description*',
                                    'In the alt text of a single image*',
                                ],
                                orderedList: false,
                            },
                        ],
                        order: ['list', 'para'],
                    },
                },
                {
                    title: 'Search engine optimization for social media',
                    caption: 'Search engine optimization for social media',
                    image: '/assets/blogs/Understanding SEO/sec6.webp',
                    body: {
                        paragraphs: [
                            'Although the bulk of the SEO we talk about is designed for the web, SEO still plays a role on social media. After all, more and more people these days are using social media as a search engine, especially on TikTok.',
                        ],
                        list: [
                            {
                                title: 'The general rule for using keywords on a page is as follows:',
                                listItems: [
                                    'In the page title and URL',
                                    'In at least one title (H1 tags)',
                                    'In at least one subheading (H2 and H3 tags)',
                                    'In the first paragraph',
                                    'In the last paragraph',
                                    'In the meta description*',
                                    'In the alt text of a single image*',
                                ],
                                orderedList: false,
                            },
                            {
                                title: 'Here are some best practices for using SEO on social media in general:',
                                listItems: [
                                    'Quality over quantity',
                                    'Have a content strategy',
                                    'Make sharing easy',
                                    'Improve your profile',
                                    'Interact with your audience',
                                    'Create compelling captions',
                                ],
                                orderedList: false,
                            },
                        ],
                        order: ['list', 'para'],
                    },
                },
                {
                    title: 'Is search engine optimization necessary for creatives?',
                    caption: 'Is search engine optimization necessary for creatives?',
                    body: {
                        paragraphs: [
                            'Google recently announced an update to its SEO best practices. This Helpful Content Update may be more confusing than helpful to some.',
                            "What the update entails is that person-first content (i.e. content designed to please people first and algorithms second) is more important than SEO. Great, so you can't worry about SEO now, right?",
                            'Not so fast. The update also indicates that SEO is still a useful, if not essential, tool. So, what is it?',
                            "Let's understand what the takeaway is here.",
                            'Google is right to highlight the importance of person-focused content. You create content for people, not algorithms.',
                            "Your content should sound natural, and your voice should shine through. You don't want to look like a robot for the sake of SEO. However, it should still be useful and valuable to people, as they should leave your post or page satisfied.",
                            "If your intention is to rank for SEO purposes only, you'll need to rethink why you're creating content.",
                            "However, you don't want to completely ditch SEO either. It still helps your personal brand grow when applied to person-first content.",
                            'TL;DR: Create content for people first, implement an SEO strategy second.',
                            "We live in the information age and SEO has become an important part of our daily digital lives. It may be a little daunting at first, but ultimately it's a tool that exists to help your meaningful content cut through the noise and reach the people who matter.",
                        ],
                    },
                },
            ],
        },
        {
            slug: slugify('Website programming and development'),
            mainImg: '/assets/blogs/Website programming and development/main.webp',
            timeOfDay: 'Oct 11, 2023',
            timeOfHour: '05:45pm',
            category: 'Articles',
            title: 'Website programming and development - programming, design and development of websites',
            caption: 'Website programming and development',
            createdBy: { name: 'Kamel Mamdouh' },
            tags: ['Website Design', 'Web Programming', 'Web Development', 'Programming'],
            sections: [
                {
                    title: 'Programming, design and development of websites',
                    caption: 'Programming, design and development of websites',
                    body: {
                        paragraphs: [
                            'Website design from AST Solutions is more than just designing a website on the Internet, because the digital world is governed by first impressions, and we work to make an impressive impression from the beginning and designing a distinctive website is the key to success in light of the Internet era that we live in now, where We start working directly with you to transform your ideas into a successful and inspiring website. Website programming and development - programming, design and development of websites.',
                            'If you are looking to design a new website for your company project, you can browse our previous work. We work from a standpoint of innovation and experience, as we help companies develop their work by designing a website that presents what they have professionally to reflect the extent of their uniqueness in providing their services and products. We are able to do this through Your site, God willing. Our approach to website design begins with placing your activity and business on the Internet, earning more sales, and discovering more opportunities in this distinguished, fast-paced market.',
                            'We offer a wide range of different services and options that include website design, electronic marketing, mobile application programming, and online store design. With AST Solutions, you will gain your place in the online and mobile world and build a personality for your brand that will have a long-term impact on your customers. We believe that design makes a difference because the first impression lasts. AtCore Technology Solutions, websites must undergo rigorous testing for all types of devices, as well as different browsers and operating systems, before we launch your new website. User tests are conducted periodically to ensure the site is up to date and responsive. Our team develops effective content strategies, and we have a proven track record of success partners that is constantly increasing. We have previous work in Kuwait, Saudi Arabia and Egypt.',
                        ],
                        // order: ['para', 'list'],
                    },
                },
            ],
        },
        {
            slug: slugify('importance of creating and designing online stores'),
            mainImg: '/assets/blogs/Importance of creating and designing online stores/main.webp',
            timeOfDay: 'Apr 9, 2024',
            timeOfHour: '11:45pm',
            category: 'Articles',
            title: 'What is the importance of creating and designing online stores?',
            caption: 'What is the importance of creating and designing online stores?',
            mainText: [
                'Designing electronic stores. You can now benefit from the Internet by designing an electronic store from Core Technology Solutions and displaying all the products that you want to display and market on the Internet. Technological development has made the Internet a large market on which many products can be sold, starting from clothes to real estate. This is why the E-commerce company is interested in ST Solutions provides an online store design service at the best prices.',
            ],
            createdBy: { name: 'Kamel Mamdouh' },
            tags: [
                'E-commerce Advantages',
                'Online Business Opportunities',
                'Digital Market Presence',
                'Enhanced Customer Reach',
            ],
            sections: [
                {
                    title: 'The importance of creating and designing online stores',
                    caption: 'The importance of creating and designing online stores',
                    // image: '/assets/blogs/Design of a hotel and airline reservation website/sec1.webp',
                    body: {
                        paragraphs: [
                            'All young people and adults also now do not go by a single day without connecting to the Internet and browsing everything new. The Internet has become a daily means of communication through social networking sites and has also become a means of communication at work. Every large company has a website through which the company’s employees communicate in addition to publishing an introduction to the company and what it offers. on the Internet.',
                            'All companies, large institutions and small projects now have their own website, and small business owners market their products on the Internet through it. When you own an online store, you can market your products on it with ease and at much cheaper prices than traditional marketing. It is known that electronic marketing is less expensive and more profitable than traditional marketing. Therefore, I advise you to own an online store with a distinct design that will save you time and effort and help you achieve success.',
                            'Many people use the Internet to obtain information, shop, or communicate with friends, relatives, and acquaintances. Therefore, you will find many customers on the Internet who are interested in your products and buy them. Here in our company, we also design an online store for you. We will also help you in the electronic marketing process in the first three months of the year. Through our special offers, you can renew the marketing service at any time.',
                            'You must know that when you have an online store in which you display your products, you will have a gateway to the whole world and through it your business activity will extend from the local scope to the entire world, and this is our mission during the first period of launching your online store.',
                        ],
                        // order: ['para', 'list'],
                    },
                },
                {
                    title: 'After designing an online store, we can help you increase your profits through many methods, including:',
                    caption:
                        'After designing an online store, we can help you increase your profits through many methods, including:',
                    // image: '/assets/blogs/Design of a hotel and airline reservation website/sec1.webp',
                    body: {
                        paragraphs: [
                            'Preparing websites for search engines - SEO - This way you can attract visitors interested in your products from search engines at no cost by preparing your own website and working on it through our work team so that your online store appears at the top of the results.',
                            'Social media sites - through which you can get visitors from social media sites, such as sponsored advertisements on Facebook and Twitter, by interacting with customers and making ads with very precise targeting by specifying interests and other factors through which you can achieve the highest results from the visits you receive. will come to your site.',
                            'Paid Google ads - Google Adwords - are ads that you can benefit from to achieve very large profits because through Google campaigns you will pay by click or by views. This means that if you adjust the advertising campaign well, you will get very interested customers.',
                            'And many other ways that you will learn about us atCore Technology Solutions when you contact us to start designing your own online stores.',
                        ],
                        // order: ['para', 'list'],
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
