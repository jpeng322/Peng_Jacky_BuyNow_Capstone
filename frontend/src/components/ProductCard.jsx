import React from "react";
import products from "../../data2";

// const ProductCard = () => {
//   const firstItem = products.data[0];
//   console.log(products);
//   return (
//     <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//       <a href="#">
//         <img
//           className="p-8 rounded-t-lg"
//           src={firstItem.product_photos[0]}
//           alt="product image"
//         />
//       </a>
//       <div className="px-5 pb-5">
//         <a href="#">
//           <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//             {firstItem.product_title}
//           </h5>
//         </a>
//         {firstItem.product_rating && (
//           <div className="flex items-center mt-2.5 mb-5">
//             <div className="flex items-center space-x-1 rtl:space-x-reverse">
//               <SvgComponent />
//             </div>
//             <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
//               {firstItem.product_rating}
//             </span>
//           </div>
//         )}
//         <div className="flex  justify-between flex-col">
//           <span className="text-3xl font-bold text-gray-900 dark:text-white">
//             Estimated Price: {firstItem.offer.price}
//           </span>
//           <a
//             href="#"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Add to cart
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

const ProductCard = ({ product }) => {
  if (!product) return;
  return (
    <div className="border  bg-white border border-gray-200 rounded-lg shadow  p-5 flex flex-col gap-3">
      <div>
        <h2 className="text-lg font-bold text-neutral-900 line-clamp-2   ">
          {" "}
          {product.product_title}
        </h2>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400 font-semibold mt-1 ">
            Estimated Price: {product.offer.price}
          </p>

          <div className="flex font-bold items-center gap-1">
            <p>{product.offer.store_rating} </p>
            <StarIcon fill="red" />
          </div>
        </div>
      </div>
      <div>
        <img
          alt="Product Image"
          className="rounded-lg object-cover w-full aspect-square"
          height={200}
          src={product.product_photos[0]}
          width={200}
        />
      </div>
      <footer className="flex flex-col gap-2 mt-4 border-red-400">
        <a
          href="#"
          className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-700  "
        >
          Add to Cart
        </a>
        <a
          href="#"
          className="border border-green-600 text-green-600 border-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-green-700 "
        >
          More Information
        </a>
      </footer>
    </div>
  );
};

function StarIcon(props) {
  return (
    <svg
      className="w-4 h-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
}

export default ProductCard;
