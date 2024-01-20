import React from "react";
import "./sectionForm.scss";

const SectionForm = ({ title, children }) => {
  return (
    <div className="section_form">
      <div className="head">
        <h4>{title}</h4>
      </div>
      <form action="">{children}</form>
    </div>
  );
};

export default SectionForm;
