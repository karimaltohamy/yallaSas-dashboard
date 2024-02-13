import { t } from "i18next";
import React from "react";

const Hardware = () => {
  return (
    <div className="section_profile details_info">
      <div className="boxs_details">
        <div className="item">
          <h6>{t("License ID")}</h6>
          <span>4173 </span>
        </div>
        <div className="item">
          <h6>{t("Computer")}</h6>
          <span>Server Type </span>
        </div>
        <div className="item">
          <h6>{t("Droplet")}</h6>
          <span className="status"></span>
        </div>
        <div className="item">
          <h6>{t("DigitalOcean")}</h6>
          <span className="status"></span>
        </div>
        <div className="item">
          <h6>{t("DO-Regular")}</h6>
          <span className="status">CPU </span>
        </div>
        <div className="item">
          <h6>{t("2 GiB")}</h6>
          <span className="status">RAM</span>
        </div>
      </div>
    </div>
  );
};

export default Hardware;
