import React from "react";
import products from "../../data2";
import ProductCard from "../components/ProductCard";
import ErrorPage from "./ErrorPage";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
const Shop = () => {
  // console.log(products);
  const productsList = useLoaderData();
  // const listOfProducts = products.data;

  console.log(productsList);
  const [listOfProducts, setListOfProducts] = useState(productsList);
  return (
    <>
      {localStorage.getItem("token") === null ? (
        <ErrorPage />
      ) : (
        <div>
          <div className="grid grid-cols-5 gap-5 p-[3vw] pt-0">
            {listOfProducts.map((product) => {
              return <ProductCard key={product.product_id} product={product} />;
            })}
          </div>
          {/* <ProductCard /> */}
        </div>
      )}
    </>
  );
};

export default Shop;
