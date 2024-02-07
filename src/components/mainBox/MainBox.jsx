import React from "react";
import "./mainBox.scss";

const MainBox = ({ title, children }) => {
  return (
    <div class="main_box">
      <div class="head">
        <h5>{title}</h5>
      </div>

      <div class="content">{children}</div>
    </div>
  );
};

export default MainBox;
