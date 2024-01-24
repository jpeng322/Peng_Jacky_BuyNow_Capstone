import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    console.log(`Email: ${email}, Password: ${password}`);
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/login`, {
        email,
        password,
      });
      if (response) {
        const data = response.data;
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.userId);
        window.location.href = `/shop`;
      } else {
        console.log("Login failed");
      }
    } catch (e) {
      console.log(e);
      setMessage(e.response.data.message);
      setTimeout(() => {
        setMessage("");
      }, 10000);
    }
  };
  return (
    <div className="h-[90.9vh] bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 dark:bg-gray-800">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-6xl text-green-600 font-bold text-center">
          BuyNow
        </h1>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-200">
          Sign In To Your Account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-gray-900">
          <form action="#" className="space-y-6" onSubmit={handleSubmit}>
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
                type="text"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {message && (
              <div className=" h-[20px] text-center text-green-600 !mt-0">
                <p className="font-semibold">{message} </p>
              </div>
            )}
            <div className="flex justify-center items-center">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow duration-100">
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="text-center flex justify-center gap-2">
              <p>Don't Have an Account?</p>
              <Link
                className="font-medium text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 hover:underline "
                to="/signup"
              >
                Sign Up Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
