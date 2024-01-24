import React from "react";
import products from "../../data2";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  console.log(products);
  const listOfProducts = products.data;
  return (
    <div>
      <h1>This is the Shop page</h1>
      <div className="grid grid-cols-5 gap-5 border border-blue-200 p-[3vw]">
        {listOfProducts.map((product) => {
          console.log(product);
          return <ProductCard key={product.product_id} product={product} />;
        })}
      </div>
      {/* <ProductCard /> */}
    </div>
  );
};

export default Shop;
