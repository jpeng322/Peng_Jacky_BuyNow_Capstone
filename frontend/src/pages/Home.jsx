import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Acme Inc
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    We provide high-quality products at affordable prices.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Shop Now
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Featured Products
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Check out our latest products.
                </p>
              </div>
              <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
                <div className="flex flex-col space-y-2">
                  <img
                    alt="Product Image"
                    className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                  <h3 className="text-lg font-bold">Product 1</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Description for Product 1
                  </p>
   
                </div>
                <div className="flex flex-col space-y-2">
                  <img
                    alt="Product Image"
                    className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                  <h3 className="text-lg font-bold">Product 2</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Description for Product 2
                  </p>
           
                </div>
                <div className="flex flex-col space-y-2">
                  <img
                    alt="Product Image"
                    className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                  <h3 className="text-lg font-bold">Product 3</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Description for Product 3
                  </p>
    
                </div>
                <div className="flex flex-col space-y-2">
                  <img
                    alt="Product Image"
                    className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                  <h3 className="text-lg font-bold">Product 4</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Description for Product 4
                  </p>
   
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Customer Testimonials
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  What our customers have to say.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col space-y-2">
                  <img
                    alt="Customer Image"
                    className="aspect-square overflow-hidden rounded-full object-cover object-center"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                  <h3 className="text-lg font-bold">Customer 1</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Testimonial for Customer 1
                  </p>
                </div>
                <div className="flex flex-col space-y-2">
                  <img
                    alt="Customer Image"
                    className="aspect-square overflow-hidden rounded-full object-cover object-center"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                  <h3 className="text-lg font-bold">Customer 2</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Testimonial for Customer 2
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Acme Inc. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>

  );
};

export default Home;
