import React from "react";
import "./mainBox.scss";

const MainBox = ({ title, children }) => {
  return (
    <div className="main_box">
      <div className="head">
        <h5>{title}</h5>
      </div>

      <div className="content">{children}</div>
    </div>
  );
};

export default MainBox;
