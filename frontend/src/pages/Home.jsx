import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col ">
      <main className="flex-1 flex items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 h-full flex flex-1 justify-center items-center mt-[75px] ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  BuyNow
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A place to find the products you desire.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row ">
                <Link
                  className=" bg-green-600 hover:bg-green-700 inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium text-gray-50 shadow duration-100"
                  to="/login"
                >
                  Login to Shop
                </Link>
                <Link
                  className=" border-green-600 text-green-600 border-2 hover:text-green-700 inline-flex h-10 items-center justify-center rounded-md border duration-100 bg-white px-8 text-sm font-medium shadow-sm transition-colors "
                  to="/about"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
