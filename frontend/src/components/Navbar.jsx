import { useNavigate, Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { getCartItems } from "../api";
import { useEffect, useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  // console.log(cartItems.length);
  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/");
  };

  const [numOfCartItems, setNumOfCartItems] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      const cartItems = await getCartItems();
      console.log(cartItems);
      setNumOfCartItems(cartItems.length);
      console.log("USEFECCET");
    };

    fetchCartItems();
  }, []);
  return (
    <header className="flex h-14 items-center justify-between px-4 my-3 md:px-6 z-100">
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

        {localStorage.getItem("token") ? (
          <div
            className="text-medium font-medium hover:underline hover:decoration-green-600 hover:decoration-2 underline-offset-4 cursor-pointer"
            onClick={logout}
          >
            Logout
          </div>
        ) : (
          <Link
            className="text-medium font-medium hover:underline hover:decoration-green-600 hover:decoration-2 underline-offset-4"
            to="/login"
          >
            Login
          </Link>
        )}
        <div>
          <Link className="text-medium font-medium relative" to="/checkout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[25px] h-[25px] cursor-pointer"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            <div className="absolute bg-green-600 text-center w-[16px] text-sm rounded text-white right-[-8px] top-3">{numOfCartItems}</div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
