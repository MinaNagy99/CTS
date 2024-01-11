import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigator = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigator('/');
    };
    return (
        <>
            <div className="flex min-h-16 items-center justify-between bg-green-900	  px-10   ">
                <Link to="/dashboard">
                    <h1 className="text-black-500 text-3xl font-bold">DashBoard</h1>
                </Link>
                <button
                    onClick={logout}
                    type="button"
                    className="text-black-700 border-black-700 hover:bg-black-800 mb-2 me-2 rounded-lg border px-5 py-2.5 text-center text-sm font-medium hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                >
                    Logout
                </button>
            </div>
        </>
    );
}
