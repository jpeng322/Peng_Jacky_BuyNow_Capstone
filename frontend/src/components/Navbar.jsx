import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="flex h-14 items-center justify-between px-4 my-3 md:px-6">
      <Link className="  flex items-center gap-2" to="/">
        <span className="font-bold text-green-600 text-xl">BuyNow</span>
      </Link>
      <nav className="hidden md:flex gap-4">
        <Link
          className="text-medium font-medium hover:underline hover:decoration-green-600 hover:decoration-2 underline-offset-4"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-medium font-medium hover:underline hover:decoration-green-600 hover:decoration-2 underline-offset-4"
          to="/shop"
        >
          Shop
        </Link>
        <Link
          className="text-medium font-medium hover:underline hover:decoration-green-600 hover:decoration-2 underline-offset-4"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-medium font-medium hover:underline hover:decoration-green-600 hover:decoration-2 underline-offset-4"
          to="/login"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
