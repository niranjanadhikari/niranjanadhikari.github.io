import React from "react";
import Title from "../../components/Title";

import ai from "../../images/ai.svg"
import ps from "../../images/ps.svg"
import bs from "../../images/bootstrap.svg"
import css from "../../images/css.svg"
import figma from "../../images/figma.svg"
import html from "../../images/html.svg"
import jquery from "../../images/jquery.svg"
import react from "../../images/react.svg"
import sass from "../../images/sass.svg"
import xd from "../../images/xd.svg"

const index = () => {
  return (
    <div>
      <Title title="Tools I use" />
      <div class="grid grid-cols-5 md:grid-cols-10 gap-1 md:gap-2 items-center justify-center max-w-xs md:max-w-none mt-10 md:w-1/2 mx-auto">
          <div className="flex justify-center" > <img className="w-8" alt="ai logo" src={ai} /> </div>
          <div className="flex justify-center" > <img className="w-8" alt="photoshop logo" src={ps} /> </div>
          <div className="flex justify-center" > <img className="w-8" alt="bootstrap logo" src={bs} /> </div>
          <div className="flex justify-center" > <img className="w-8" alt="css logo" src={css} /> </div>
          <div className="flex justify-center" > <img className="w-6" alt="figma logo" src={figma} /> </div>
          <div className="flex justify-center" > <img className="w-8" alt="html logo" src={html} /> </div>
          <div className="flex justify-center" > <img className="w-8" alt="jquery logo" src={jquery} /> </div>
          <div className="flex justify-center" > <img className="w-8" alt="react logo" src={react} /> </div>
          <div className="flex justify-center" > <img className="w-8" alt=" scss logo" src={sass} /> </div>
          <div className="flex justify-center" > <img className="w-8" alt="adobe xd logo" src={xd} /> </div>
      </div>
    </div>
  );
};

export default index;
