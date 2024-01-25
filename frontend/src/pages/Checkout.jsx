import React from "react";
import { useLoaderData } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { useState } from "react";

const Checkout = () => {
  const cartItems = useLoaderData();

  const [listOfCartItems, setListOfCartItems] = useState(cartItems);
  console.log(cartItems);

  const updateCart = (id) => {
    const updatedCartItems = listOfCartItems.filter((item) => {
      console.log(item);
      return id !== item._id;
    });
    setListOfCartItems(updatedCartItems);
  };

  const updateItemQuantityList = (id, type) => {
    console.log("hitupdatequant");
    const updatedCartItems = listOfCartItems.map((item) => {
      let quantity = item.quantity;
      if (type === "increase") {
        quantity += 1;
      } else if (type === "decrease") {
        quantity -= 1;
      } else {
        return;
      }
      if (id === item._id) {
        return { ...item, quantity: quantity };
      } else {
        return item;
      }
    });
    setListOfCartItems(updatedCartItems);
  };
  return (
    <div className="flex">
      <div className="px-[3vw] py-[2vw] w-1/2 flex flex-col gap-3">
        {listOfCartItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              // listOfCartItems={listOfCartItems}
              // setListOfCartItems={setListOfCartItems}
              updateCart={updateCart}
              updateItemQuantityList={updateItemQuantityList}
            />
          );
        })}
      </div>
      <div className="w-1/2 ">
        <button className="bg-green-600 p-5 rounded text-white font-bold tracking-wider hover:bg-green-700 duration-100 text-3xl">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
