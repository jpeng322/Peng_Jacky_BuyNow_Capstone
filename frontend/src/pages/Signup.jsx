import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 dark:bg-gray-800">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* <img
              alt="Workflow"
              className="mx-auto h-12 w-auto"
              src="/placeholder.svg"
            /> */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-200">
          Sign Up Your Account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-gray-900">
          <form action="#" className="space-y-3" method="POST">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fname"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fname"
                type="text"
                placeholder="John"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lname"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lname"
                type="text"
                placeholder="Smith"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="text-center flex justify-center gap-2">
              <p>Already Have an Account?</p>
              <Link
                className="font-medium text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 hover:underline"
                to="/login"
              >
                Login Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
