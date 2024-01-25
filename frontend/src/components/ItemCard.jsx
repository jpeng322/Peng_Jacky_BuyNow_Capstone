import axios from "axios";
import { useState } from "react";
const ItemCard = ({
  item,
  listOfCartItems,
  setListOfCartItems,
  updateCart,
  updateItemQuantityList,
}) => {
  const removeItem = async (e, id) => {
    console.log("asdasda");
    e.preventDefault();
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_PORT}/api/cart/removeCartItem/${id}`
      );

      if (response) {
        const data = response.data;
      } else {
        console.log("Delete failed");
      }
    } catch (e) {}
  };

  const updateItem = async (e, id, type) => {
    console.log("asdasda");
    e.preventDefault();
    let quantity = item.quantity;
    if (type === "increase") {
      quantity += 1;
    } else if (type === "decrease") {
      quantity -= 1;
    } else {
      return;
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_PORT}/api/cart/updateCartItem/${id}`,
        {
          quantity: quantity,
        }
      );

      if (response) {
        const data = response.data;
        console.log(data);
      } else {
        console.log("Update failed");
      }
    } catch (e) {}
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center p-4 md:p-6 bg-white shadow-lg rounded-lg">
      <div className="w-full md:w-1/4">
        <img
          alt="Product Image"
          className="aspect-square object-cover w-full rounded-lg overflow-hidden"
          src={item.photo}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{item.productTitle}</h3>
        <p className="text-gray-500 dark:text-gray-400">${item.price}</p>
      </div>
      <div className="w-full md:w-1/4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <button
            className="border border-gray-300 rounded-full p-2 hover:bg-gray-100 "
            onClick={(e) => {
              updateItem(e, item._id, "decrease");
              updateItemQuantityList(item._id, "decrease");
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 12H6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            <span className="sr-only">Decrease quantity</span>
          </button>
          <span className="font-semibold">{item.quantity}</span>
          <button
            className="border border-gray-300 rounded-full p-2 hover:bg-gray-100"
            onClick={(e) => {
              updateItem(e, item._id, "increase");
              updateItemQuantityList(item._id, "increase");
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            <span className="sr-only">Increase quantity</span>
          </button>
        </div>
        <button
          className="border border-gray-300 rounded-md p-2 hover:bg-gray-100 mt-auto flex items-center gap-2"
          onClick={(e) => {
            updateCart(item._id);
            removeItem(e, item._id);
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 16V8a2 2 0 00-2-2h-5.38a1 1 0 01-.894-.553L12 4 9.273 5.447a1 1 0 01-.894.553H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2zM7 10a1 1 0 011-1h3a1 1 0 110 2H8a1 1 0 01-1-1zm5 0a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
