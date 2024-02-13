import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="container_loader absolute top-[50%] left-[50%]">
      <div className="loader">
        <li className="ball"></li>
        <li className="ball"></li>
        <li className="ball"></li>
      </div>
    </div>
  );
};

export default Loader;
