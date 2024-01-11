import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-center space-y-8 lg:flex-row lg:space-x-8">
                {/* Website Management Dashboard Card */}
                <Link
                    to="/dashboard/portfolio"
                    className="transform rounded-lg bg-white p-12 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                    style={{
                        backgroundImage: `url(/portfolio-dashboard.webp)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h2 className="mb-1 bg-black/75 text-2xl font-bold text-white">Portfolio Dashboard</h2>
                    <p className="bg-black/75 text-gray-200">Manage your projects</p>
                </Link>

                {/* Blogs Dashboard Card */}
                <Link
                    to="/dashboard/blog"
                    className="transform rounded-lg bg-white p-12 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                    style={{
                        backgroundImage: `url(/blogs-dashboard.webp)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h2 className="mb-1 bg-black/75 text-2xl font-bold text-white">Blogs Dashboard</h2>
                    <p className="bg-black/75 text-gray-200">Manage your blog content</p>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
