import React, { Fragment } from "react";
import MainSection from "../../../components/mainSection/MainSection";

const SystemUpdate = () => {
  return (
    <div className="m-[10px]">
      <MainSection
        title={"System Update"}
        icon={<i className="fa-solid fa-rotate"></i>}
      ></MainSection>
      <MainSection
        title={"System History"}
        icon={<i className="fa-solid fa-rotate"></i>}
      ></MainSection>
    </div>
  );
};

export default SystemUpdate;
