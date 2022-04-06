import React from "react";

import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Companies from "../components/Companies";
import Roles from "../components/Roles";
import Academics from "../components/Academics";
import Tools from "../components/Tools";

const index = () => {
  return (
    <div className="bg-blue-50 px-3 py-4 main-wrapper md:px-8 md:py-16 relative">
      <div className="circles-wrapper">
        <div className="circles"></div>
        <div className="bg-white p-4 md:p-8 rounded-3xl max-w-screen-lg mx-auto main-wrapper shadow">
          <Hero />
          <Contact />
          <Work />
          <Companies />
          <Roles />
          <Academics />
          <Tools />
        </div>
      </div>
    </div>
  );
};

export default index;
