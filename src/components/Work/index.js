import React from "react";
import Title from "../Title";

import behance from "../../images/behance.svg";

const index = () => {
  return (
    <div className="py-16">
      <Title title="Have a look at my work!" />
      <div className="flex mt-10 items-center justify-center space-x-2">
        <img src={behance} className="w-16" />
        <a
          className="font-medium leading-5"
          target="_blank"
          href="https://www.behance.net/niranjanadhikari"
        >
          <div className="text-gray-700">www.behance.net</div>
          <div className="text-blue-600">/niranjanadhikari</div>
        </a>
      </div>
    </div>
  );
};

export default index;
