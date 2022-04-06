import React from "react";

import photo from "../../images/niranjan.png";
import { heroData } from "../../data";

const index = () => {
  return (
    <div class="container mx-auto flex flex-wrap md:flex-nowrap items-center md:pt-10">
      <div className="">
        <img
          src={photo}
          alt="niranjan adhikari"
          className="rounded-xl h-24 w-24 md:rounded-sm md:h-auto md:w-full object-cover"
        />
      </div>
      <div className="mt-4 md:mt-0 md:mx-16">
        <div className="profile">
          <h1 className="text-3xl md:text-6xl font-bold">
            <p className="text-2xl md:text-4xl font-medium text-gray-700 mb-2">
              Hi, I'm 👋
            </p>
            Niranjan Adhikari
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mt-2">
            UI/UX Designer
          </p>
        </div>
        <p className="mt-5 text-gray-500 text-base pr-8">
          {heroData.para}
          {/* I am a creative designer with a passion for solving business problems.
          I love good design, coffee, movies and design discussions. I aspire to
          create solutions that make an Impact in the society we live in. */}
        </p>
      </div>
    </div>
  );
};

export default index;
