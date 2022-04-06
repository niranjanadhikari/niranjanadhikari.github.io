import React from "react";

const index = ({ title }) => {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-medium text-center">{title}</h2>
      <div className="flex justify-center mt-4">
        <div className="w-8  h-1.5 rounded-md bg-gray-900"></div>
        <div className="w-24 h-1.5 rounded-md bg-green-500 ml-2"></div>
      </div>
    </div>
  );
};

export default index;
