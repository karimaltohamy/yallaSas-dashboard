import React from "react";
import MainDetails from "../../../components/profileComponents/MainDetails";
import InfoDetails from "../../../components/profileComponents/InfoDetails";
import "../../../sass/generalProfile.scss";

const GeneralSubscriber = () => {
  return (
    <div className="general_information">
      <div className="line">
        <MainDetails />
        <InfoDetails />
      </div>
    </div>
  );
};

export default GeneralSubscriber;
