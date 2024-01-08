import { TEInput } from "tw-elements-react";
import { Formik, Form, useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(): JSX.Element {
  const [IsLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();
  interface userDataType {
    email: string;
    password: string;
  }
  const [Error, setError] = useState("");
  const handleSubmit = (values: userDataType) => {
    sendData(values);
  };

  const sendData = async (values: userDataType) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3003/user",
        values
      );

      if (data.message == "success") {
        
        setIsLoading(false);
        localStorage.setItem('token',data.data);
        navigator("/dashboard");
      }
    } catch (error) {
      if (error) {
        setIsLoading(false);
        setError("incorrect email or password");
      }
    }
  };
  const loginFormik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: handleSubmit,
  });

  return (
    <section className="h-screen">
      <div className="h-full">
        {/* Left column container with background */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* Right column container */}

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={handleSubmit}
            >
              <Form onSubmit={loginFormik.handleSubmit} className=" p-10 me-5">
                {Error && (
                  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 ">
                    {Error}
                  </div>
                )}
                {/* Email input */}
                <TEInput
                  type="email"
                  size="lg"
                  name="email"
                  placeholder="Email"
                  className="mb-6 p-2 bg-gray-200 "
                  onChange={loginFormik.handleChange}
                />

                {/* Password input */}
                <TEInput
                  type="password"
                  size="lg"
                  name="password"
                  placeholder="Password"
                  onChange={loginFormik.handleChange}
                  className="mb-6 p-2 bg-gray-200 "
                />

                {/* Login button */}
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className=" bg-black rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    {IsLoading && 
                    <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                    }
                    {!IsLoading && "Login"}
                  </button>

                  <p className="mb-0  mt-2 pt-1 text-sm font-semibold">
                    Don't have an account?{" "}
                    <a
                      href="#!"
                      className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Register
                    </a>
                  </p>
                </div>
              </Form>
            </Formik>

            {/* Display form state */}
          </div>
        </div>
      </div>
    </section>
  );
}
