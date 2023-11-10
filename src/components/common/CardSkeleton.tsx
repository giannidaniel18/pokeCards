import React from "react";

const CardSkeleton = () => {
  return (
    <div
      role="status"
      className="w-[250px] h-[350px]  p-4 border border-gray-200 rounded-lg shadow animate-pulse md:p-6 dark:border-gray-700"
    >
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
      <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 mb-2" />
      <div className="h-1 bg-gray-200  dark:bg-gray-700 mb-1.5" />
      <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 mb-2" />
      <div className="h-1 bg-gray-200  dark:bg-gray-700 mb-5" />
      <div className="h-2 bg-gray-200  dark:bg-gray-700 mb-1" />
    </div>
  );
};

export default CardSkeleton;
