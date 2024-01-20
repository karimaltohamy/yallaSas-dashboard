import React from "react";
import MainDetails from "../../../components/profileComponents/MainDetails";
import InfoDetails from "../../../components/profileComponents/InfoDetails";

const GeneralManager = () => {
  return (
    <div className="general_information">
      <div className="line">
        <MainDetails />
        <InfoDetails />
      </div>
    </div>
  );
};

export default GeneralManager;
