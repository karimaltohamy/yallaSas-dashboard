import React, { Fragment } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import { t } from "i18next";

const SystemUpdate = () => {
  return (
    <div className="m-[10px]">
      <MainSection
        title={t("System Update")}
        icon={<i className="fa-solid fa-rotate"></i>}
      ></MainSection>
      <MainSection
        title={t("System History")}
        icon={<i className="fa-solid fa-rotate"></i>}
      ></MainSection>
    </div>
  );
};

export default SystemUpdate;
