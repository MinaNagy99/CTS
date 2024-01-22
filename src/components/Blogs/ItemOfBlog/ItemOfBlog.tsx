import { typeOfBlog } from '../../Context/BlogsContext';
interface typeOfProps {
    blog: typeOfBlog;
}
export default function ItemOfBlog({ blog }: typeOfProps) {
    return (
        <>
            <div className="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:bg-gray-50 hover:shadow-2xl hover:shadow-blue-400/80">
                <img className="aspect-video min-h-40 w-full rounded-t-md bg-cover" src={blog.mainImg.url} />
                <div className="p-4">
                    <span className="text-base font-normal text-blue-600">{blog.caption}</span>
                    <p className="py-2 text-xl font-semibold">{blog.title}</p>
                    <p className="line-clamp-3 text-justify font-light text-gray-700">{blog.body}</p>
                    <div className="mt-10 flex flex-wrap space-x-4 align-bottom">
                        <img className="h-10 w-10 rounded-full" src={blog.createdBy.avatar.url} />
                        <div className="flex flex-col space-y-0">
                            <p className="text-base font-semibold">{blog.createdBy.name}</p>
                            <p className="text-sm font-light">{blog.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
