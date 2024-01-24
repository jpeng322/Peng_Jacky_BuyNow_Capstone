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

const ProductCard = () => {
  const firstItem = products.data[0];
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5 flex flex-col gap-3">
      <div>
        <h2 className="text-lg font-bold text-neutral-900">
          {" "}
          {firstItem.product_title}
        </h2>
        <p className="text-sm text-gray-400 font-semibold mt-1">
          Estimated Price: {firstItem.offer.price}
        </p>
      </div>
      <div>
        <img
          alt="Product Image"
          className="rounded-lg object-cover w-full aspect-square"
          height={200}
          src={firstItem.product_photos[0]}
          width={200}
        />
      </div>
      <footer className="flex flex-col gap-2 mt-4">
        <a
          href="#"
          className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-700  "
        >
          Add to cart
        </a>
      </footer>
    </div>
  );
};

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default ProductCard;
