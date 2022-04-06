import React from "react";


import { contactList } from "../../data";

const index = () => {


  return (
    <div className="flex flex-wrap space-y-4 md:space-x-6 md:space-y-0 justify-between pr-16 py-16">
      {contactList.map(({ id, title, icon, value }) => {
        return (
          <div className="flex items-start" key={id}>
            <div className="bg-gray-800 text-white rounded-2xl p-4">{icon}</div>
            <div className="ml-2 font-medium">
              <p className="leading-5 text-gray-400">{title}</p>
              <p className="break-all">{value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default index;
