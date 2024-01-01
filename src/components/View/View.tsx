import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  PortfolioContext,
  PortfolioContextValue,
  SiteType,
} from "../Context/WebsiteContext";
import { Loading } from "../Loading/Loading";

export default function View() {
  const { id } = useParams();
  const { websites, handleDelete } = useContext(
    PortfolioContext
  ) as PortfolioContextValue;
  const [Website, setWebsite] = useState<SiteType>();
  const navigator = useNavigate();
  const [IsLoading, setIsLoading] = useState(true);
  const DeleteSite = async (id: string) => {
    await handleDelete(id);
    navigator("/dashboard");
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

      <div className="grid grid-cols-2 py-5  w-1/2 m-auto">
        <div className="col-span-1   ">
          <img
            className="m-auto  p-10 "
            src={Website?.logo.url}
            alt=""
          />
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <h1 className="text-5xl text-slate-300 font-serif">
            {Website?.title}
          </h1>
        </div>
      </div>
      <div
        className={`grid grid-cols-${Website?.previewImgs?.length} gap-x-10  w-2/3 m-auto`}
      >
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
      <div className="flex justify-between py-10 w-1/4   m-auto">
        <a href={Website?.link}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group  group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-gray-500 text-gray-200 hover:text-black  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Link
            </span>
          </button>
        </a>
        <Link to={`/update/${Website?._id}`}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group  group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-sky-500 text-gray-200 hover:text-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group  group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-red-500 text-gray-200 hover:text-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Delete
          </span>
        </button>
      </div>
    </>
  );
}
