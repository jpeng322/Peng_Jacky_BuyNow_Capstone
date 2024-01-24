import React from "react";

const About = () => {
  return (
    <main className="h-[90.9vh] flex flex-col items-center justify-center  p-10 bg-gray-100">
      <header className="text-center">
        <h1 className="text-6xl text-green-600 font-bold mb-[70px]">BuyNow</h1>
        <h1 className="text-4xl font-bold">About Our Ecommerce Site</h1>
        <p className="text-lg text-gray-600">
          Welcome to our platform. Let's explore what we offer.
        </p>
      </header>
      <section className="grid grid-cols-2 gap-10 w-full max-w-2xl mt-10">
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Who We Are?</h2>
          <p className="font-medium">
            We are a newly established ecommerce platform, dedicated to providing a
            seamless shopping experience and providing data to products in one stop. We offer a wide range of products,
            from electronics to fashion and everything in between!
          </p>
        </div>
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-green-600">What We Do?</h2>
          <p className="font-medium">
            We connect buyers and sellers from all over the world. Our platform
            is designed to be convenient, accessible, and efficient. We ensure
            that your shopping experience is smooth like butter and every transaction is satisfactory.
          </p>
        </div>
      </section>
      <footer className="w-full max-w-2xl text-center mt-10">
        <p className="text-gray-600 font-medium">
          Thank you for visiting our site. Feel free to reach out to us for any
          inquiries or collaborations.
        </p>
      </footer>
    </main>
  );
};

export default About;
