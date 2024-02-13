import { t } from "i18next";
import React from "react";

const InfoDetails = ({ subsciberData }) => {
  return (
    <div className="info_details">
      <div className="row">
        <div className="col-12">
          <div className="item">
            <h6>{t("Log in name")}</h6>
            <span>{subsciberData.username && subsciberData.username}</span>
          </div>
          <div className="item">
            <h6>{t("Password")}</h6>
            <span>{subsciberData.password && subsciberData.password}</span>
          </div>
          <div className="item">
            <h6>{t("Balance")}</h6>
            <span>{subsciberData.balance && subsciberData.balance}</span>
          </div>
          <div className="item">
            <h6>{t("Continue to")}</h6>
            <span>
              {subsciberData.parent_username && subsciberData.parent_username}
            </span>
          </div>
          <div className="item">
            <h6>{t("Package")}</h6>
            <span>
              {subsciberData.profile_name && subsciberData.profile_name}
            </span>
          </div>
          <div className="item">
            <h6>{t("Expiry date")}</h6>
            <span>{subsciberData.expiration && subsciberData.expiration}</span>
          </div>
          <div className="item">
            <h6>{t("Number of incorrect refill attempts")}</h6>
            <span>0</span>
          </div>
          <div className="item">
            <h6>{t("Status")}</h6>
            <span>{subsciberData.status ? "active" : "Inactive"} </span>
          </div>
          <div className="item">
            <h6>{t("Last contact")}</h6>
            <span>
              {subsciberData.last_online && subsciberData.last_online}
            </span>
          </div>
          <div className="item">
            <h6>{t("Remaining download")}</h6>
            <span>
              {subsciberData.remaining_rx && subsciberData.remaining_rx}
            </span>
          </div>
          <div className="item">
            <h6>{t("Remaining upload")}</h6>
            <span>
              {subsciberData.remaining_tx && subsciberData.remaining_tx}
            </span>
          </div>
          <div className="item">
            <h6>{t("Amount of remaining data")}</h6>
            <span>
              {subsciberData.remaining_rxtx && subsciberData.remaining_rxtx}
            </span>
          </div>
          <div className="item">
            <h6>{t("Remaining time")}</h6>
            <span>
              {subsciberData.remaining_uptime && subsciberData.remaining_uptime}
            </span>
          </div>
          <div className="item">
            <h6>{t("Total Purchases")}</h6>
            <span>0 </span>
          </div>
          <div className="item">
            <h6>{t("Added on date")}</h6>
            <span>{subsciberData.created_at && subsciberData.created_at} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDetails;
