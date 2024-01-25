import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    console.log(`Email: ${email}, Password: ${password}`);
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_PORT}/signup`, {
        email,
        password,
        fname,
        lname,
      });
      if (response) {
        const data = response.data;
        console.log(data);
        setMessage(data.message);
        setTimeout(() => {
          setMessage("");
        }, 10000);
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
    <div className="h-[90.9vh] bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* <img
              alt="Workflow"
              className="mx-auto h-12 w-auto"
              src="/placeholder.svg"
            /> */}
        <h1 className="text-6xl text-green-600 font-bold text-center">
          BuyNow
        </h1>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 ">
          Sign Up Your Account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
          <form action="#" className="space-y-3" onSubmit={handleSubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={fname}
                onChange={(e) => setFname(e.target.value)}
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
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold  "
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-2"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className=" h-[20px] text-center text-green-600 !mt-0">
              <p className="font-semibold">{message} </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow duration-100">
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="text-center flex justify-center gap-2">
              <p>Already Have an Account?</p>
              <Link
                className="font-medium text-green-600 hover:text-green-500  hover:underline"
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
