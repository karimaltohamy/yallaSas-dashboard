import React from "react";
import "./mainSection.scss";

const MainSection = ({ title, icon, children }) => {
  return (
    <div className="main_section">
      <div className="head">
        {icon}
        <h5>{title}</h5>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default MainSection;
