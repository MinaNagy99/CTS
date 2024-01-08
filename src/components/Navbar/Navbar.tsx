import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigator = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigator("/");
  };
  return (
    <>
      <div className="bg-green-900 flex justify-between items-center min-h-16	  px-10   ">
        <Link to="/dashboard">
          <h1 className="text-black-500 text-3xl font-bold">DashBoard</h1>
        </Link>
        <button
          onClick={logout}
          type="button"
          className="text-black-700 hover:text-white border border-black-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Logout
        </button>
      </div>
    </>
  );
}
