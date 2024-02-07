import { t } from "i18next";
import React from "react";

const InfoDetails = () => {
  return (
    <div className="info_details">
      <div className="row">
        <div className="col-12">
          <div className="item">
            <h6>{t("Log in name")}</h6>
            <span>demo1</span>
          </div>
          <div className="item">
            <h6>{t("Password")}</h6>
            <span>12345</span>
          </div>
          <div className="item">
            <h6>{t("Balance")}</h6>
            <span>$25.00</span>
          </div>
          <div className="item">
            <h6>{t("Continue to")}</h6>
            <span>Manager_2</span>
          </div>
          <div className="item">
            <h6>{t("Package")}</h6>
            <span>slow</span>
          </div>
          <div className="item">
            <h6>{t("Expiry date")}</h6>
            <span>demo1</span>
          </div>
          <div className="item">
            <h6>{t("Number of incorrect refill attempts")}</h6>
            <span>0</span>
          </div>
          <div className="item">
            <h6>{t("Status")}</h6>
            <span>Inactive </span>
          </div>
          <div className="item">
            <h6>{t("Last contact")}</h6>
            <span>0</span>
          </div>
          <div className="item">
            <h6>{t("Remaining download")}</h6>
            <span>0</span>
          </div>
          <div className="item">
            <h6>{t("Remaining aploid")}</h6>
            <span>0</span>
          </div>
          <div className="item">
            <h6>{t("Amount of remaining data")}</h6>
            <span>0</span>
          </div>
          <div className="item">
            <h6>{t("Remaining time")}</h6>
            <span>0 </span>
          </div>
          <div className="item">
            <h6>{t("Total Purchases")}</h6>
            <span>0 </span>
          </div>
          <div className="item">
            <h6>{t("Added on date")}</h6>
            <span>08 Sep 2021 - 13:05:51 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDetails;
