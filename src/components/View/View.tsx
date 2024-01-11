import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PortfolioContext, PortfolioContextValue, SiteType } from '../Context/WebsiteContext';
import { Loading } from '../Loading/Loading';

export default function View() {
    const { id } = useParams();
    const { websites, handleDelete } = useContext(PortfolioContext) as PortfolioContextValue;
    const [Website, setWebsite] = useState<SiteType>();
    const navigator = useNavigate();
    const [IsLoading, setIsLoading] = useState(true);
    const DeleteSite = async (id: string) => {
        await handleDelete(id);
        navigator('/dashboard');
    };
    useEffect(() => {
        // Use optional chaining to avoid errors if websites is undefined
        const founded = websites?.find((site: SiteType) => site._id === id);
        if (founded) {
            setWebsite(founded);
            setIsLoading(false);
        }
    }, [id, websites]);

    return (
        <>
            {IsLoading && <Loading />}

            <div className="m-auto grid w-1/2  grid-cols-2 py-5">
                <div className="col-span-1   ">
                    <img className="m-auto  p-10 " src={Website?.logo.url} alt="" />
                </div>
                <div className="col-span-1  flex flex-col items-center justify-evenly">
                    <h1 className="font-serif text-4xl text-slate-300">{Website?.title}</h1>
                    <h1 className="font-serif text-4xl text-slate-300">{Website?.titleInArabic}</h1>
                </div>
                <div className="col-span-1  flex items-center justify-center"></div>
            </div>
            <div className={`grid grid-cols-${Website?.previewImgs?.length} m-auto  w-2/3 gap-x-10`}>
                {Website?.previewImgs?.map((img, index) => {
                    return (
                        <>
                            <div className="col-span-1 ">
                                <img key={index} src={img.url} />
                            </div>
                        </>
                    );
                })}
            </div>
            <div className="m-auto flex w-1/4 justify-between   py-10">
                <a href={Website?.link}>
                    <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg p-0.5 text-sm font-medium text-gray-900  hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800">
                        <span className="relative rounded-md bg-gray-500 px-10 py-2.5 text-gray-200 transition-all duration-75 ease-in  hover:text-black group-hover:bg-opacity-0 dark:bg-gray-900">
                            Link
                        </span>
                    </button>
                </a>
                <Link to={`/update/${Website?._id}`}>
                    <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg p-0.5 text-sm font-medium text-gray-900  hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white dark:focus:ring-pink-800">
                        <span className="relative rounded-md bg-sky-500 px-10 py-2.5 text-gray-200 transition-all duration-75 ease-in hover:text-black group-hover:bg-opacity-0 dark:bg-gray-900">
                            Update
                        </span>
                    </button>
                </Link>
                <button
                    onClick={() => {
                        if (Website?._id) {
                            DeleteSite(Website?._id);
                        }
                    }}
                    className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg p-0.5 text-sm font-medium text-gray-900  hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white dark:focus:ring-pink-800"
                >
                    <span className="relative rounded-md bg-red-500 px-10 py-2.5 text-gray-200 transition-all duration-75 ease-in hover:text-black group-hover:bg-opacity-0 dark:bg-gray-900">
                        Delete
                    </span>
                </button>
            </div>
        </>
    );
}
