// import React from "react";

// const ErrorPage = () => {
//   return (
//     <div>
//       <h1>404 - Page Not Found</h1>
//       <p>Sorry, the page you are looking for could not be found.</p>
//     </div>
//   );
// };

// import { Button } from "@/components/ui/button";

function ErrorPage() {
  return (
    <div className="h-[90.9vh] flex flex-col items-center justify-center bg-gray-100 ">
      <div className="space-y-4">
        <div className="flex items-center gap-2 ">
          <FrownIcon className="h-14 w-14 text-gray-500 border " />
          <h1 className="text-6xl text-green-600 font-bold text-center">
            BuyLater
          </h1>
        </div>
        <h1 className="text-2xl font-bold text-gray-700 ">
          Oops! Something went wrong.
        </h1>
        {localStorage.getItem("token") === null ? (
          <p className="text-gray-600 ">
            Please login to visit the shop.
          </p>
        ) : (
          <p className="text-gray-600 ">
            We're sorry, but an unexpected error has occurred. Please try again
            later.
          </p>
        )}
        {/* <Button variant="outline">Return to Homepage</Button> */}
      </div>
    </div>
  );
}

function FrownIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

export default ErrorPage;
