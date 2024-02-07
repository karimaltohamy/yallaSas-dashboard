import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="absolute top-[50%] left-[50%]">
      <div class="loader">
        <li class="ball"></li>
        <li class="ball"></li>
        <li class="ball"></li>
      </div>
    </div>
  );
};

export default Loader;
