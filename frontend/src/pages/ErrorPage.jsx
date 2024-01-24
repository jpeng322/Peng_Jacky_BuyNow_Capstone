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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="space-y-4">
        <FrownIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          We're sorry, but an unexpected error has occurred. Please try again
          later.
        </p>
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
