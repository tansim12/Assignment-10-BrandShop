import { Link } from "react-router-dom";
import LoginWith from "../Components/LoginWith/LoginWith";
import { Toaster } from "react-hot-toast";


const Login = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5">
      <div className="flex justify-center ">
        <div className="flex flex-col   max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Login</h1>
            <p className="text-sm dark:text-gray-400">
              Login to access your account
            </p>
          </div>
          <form className="space-y-12" >
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Email address</label>
                <input
                  type="email"
                  name="email"
                  
                  required
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm">Password</label>
                  <Link
                    rel="noopener noreferrer"
                   
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  required
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full btn  px-8 py-3 font-semibold rounded-md dark:text-gray-900"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <div>
            <LoginWith></LoginWith>
            <p className=" my-2 px-6 text-sm text-center dark:text-gray-400">
              Do not have an account yet?
              <Link
                rel="noopener noreferrer"
                to={"/register"}
                className="hover:underline dark:text-violet-400"
              >
                Register
              </Link>
              .
            </p>
          </div>
        </div>
        <Toaster></Toaster>
      </div>
    </section>
  );
};


export default Login;