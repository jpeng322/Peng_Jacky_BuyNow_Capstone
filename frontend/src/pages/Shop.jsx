import React from "react";
import products from "../../data2";
import ProductCard from "../components/ProductCard";
import ErrorPage from "./ErrorPage";
import { useLoaderData } from "react-router-dom";
import { useState, useNavigate } from "react";
const Shop = () => {

  const productsList = useLoaderData();

  console.log(productsList);
  const [listOfProducts, setListOfProducts] = useState(productsList);
  const [productValue, setProductValue] = useState("");

  const searchProduct = () => {
    window.location.href = `/shop/${productValue}`;
  };

  // const navigate = useNavigate();

  return (
    <>
      {localStorage.getItem("token") === null ? (
        <ErrorPage />
      ) : (
        <>
          <div className="flex gap-3 m-3 justify-center">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5"
              placeholder="Search"
              value={productValue}
              onChange={(e) => setProductValue(e.target.value)}
              required
            />
            <button
              onClick={() => searchProduct(productValue)}
              // onClick={() => navigate(`/shop/${productValue}`)}
              className="bg-green-600 text-white font-bold rounded px-3 hover:bg-green-700"
            >
              Submit
            </button>
          </div>
          <div>
            <div className="grid grid-cols-5 gap-5 p-[3vw] pt-0">
              {listOfProducts.map((product) => {
                return (
                  <ProductCard key={product.product_id} product={product} />
                );
              })}
            </div>
            {/* <ProductCard /> */}
          </div>
        </>
      )}
    </>
  );
};

export default Shop;
