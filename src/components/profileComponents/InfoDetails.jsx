import { t } from "i18next";
import React from "react";

const InfoDetails = ({ subsciberData }) => {
  return (
    <div className="info_details">
      <div className="row">
        <div className="col-12">
          <div className="item">
            <h6>{t("user_form_label_username")}</h6>
            <span>{subsciberData.username && subsciberData.username}</span>
          </div>
          <div className="item">
            <h6>{t("user_form_label_password")}</h6>
            <span>{subsciberData.password && subsciberData.password}</span>
          </div>
          <div className="item">
            <h6>{t("users_table_balance")}</h6>
            <span>{subsciberData.balance && subsciberData.balance}</span>
          </div>
          <div className="item">
            <h6>{t("users_table_parent")}</h6>
            <span>
              {subsciberData.parent_username && subsciberData.parent_username}
            </span>
          </div>
          <div className="item">
            <h6>{t("users_table_profile")}</h6>
            <span>
              {subsciberData.profile_name && subsciberData.profile_name}
            </span>
          </div>
          <div className="item">
            <h6>{t("global_expiration")}</h6>
            <span>{subsciberData.expiration && subsciberData.expiration}</span>
          </div>
          <div className="item">
            <h6>{t("user_overview_debt_days")}</h6>
            <span>0</span>
          </div>
          <div className="item">
            <h6>{t("global_status")}</h6>
            <span>{subsciberData.status ? "active" : "Inactive"} </span>
          </div>
          <div className="item">
            <h6>{t("user_overview_last_login")}</h6>
            <span>
              {subsciberData.last_online ? subsciberData.last_online : ""}
            </span>
          </div>
          <div className="item">
            <h6>{t("user_overview_remaining_download")}</h6>
            <span>
              {subsciberData.remaining_rx ? subsciberData.remaining_rx : ""}
            </span>
          </div>
          <div className="item">
            <h6>{t("user_overview_remaining_upload")}</h6>
            <span>
              {subsciberData.remaining_tx ? subsciberData.remaining_tx : ""}
            </span>
          </div>
          <div className="item">
            <h6>{t("user_overview_remaining_traffic")}</h6>
            <span>
              {subsciberData.remaining_rxtx ? subsciberData.remaining_rxtx : ""}
            </span>
          </div>
          <div className="item">
            <h6>{t("user_overview_remaining_uptime")}</h6>
            <span>
              {subsciberData.remaining_uptime
                ? subsciberData.remaining_uptime
                : "0"}
            </span>
          </div>
          <div className="item">
            <h6>{t("user_overview_purchases")}</h6>
            <span>0 </span>
          </div>
          <div className="item">
            <h6>{t("user_overview_created_on")}</h6>
            <span>{subsciberData.created_at && subsciberData.created_at} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDetails;
