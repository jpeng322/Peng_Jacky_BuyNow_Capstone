import React from "react";
import products from "../../data2";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  console.log(products);
  return (
    <div>
      <h1>This is the Shop page</h1>
      <ProductCard />
    </div>
  );
};

export default Shop;
