import { t } from "i18next";
import React from "react";

const ManagerInfoDetails = ({ manager }) => {
  return (
    <div className="info_details">
      <div className="row">
        <div className="col-12">
          <div className="item">
            <h6>{t("user_form_label_username")}</h6>
            <span>{manager.username && manager.username}</span>
          </div>
          <div className="item">
            <h6>{t("users_table_balance")}</h6>
            <span>{manager.balance && manager.balance}</span>
          </div>
          <div className="item">
            <h6>{t("manager_overview_outstanding_debts")}</h6>
            <span>{manager.debts && manager.debts}</span>
          </div>
          <div className="item">
            <h6>{t("managers_table_reward_points")}</h6>
            <span>{manager.reward_points && manager.reward_points}</span>
          </div>
          <div className="item">
            <h6>{t("global_owner")}</h6>
            <span>{manager.parent_username && manager.parent_username}</span>
          </div>
          <div className="item">
            <h6>{t("manager_overview_acl_group")}</h6>
            <span>{manager.acl_group_name && manager.acl_group_name}</span>
          </div>
          <div className="item">
            <h6>{t("global_status")}</h6>
            <span>{manager.status == 1 ? "active" : "Inactive"} </span>
          </div>
          <div className="item">
            <h6>{t("manager_overview_total_users")}</h6>
            <span>{manager.users ? manager.users : ""}</span>
          </div>
          <div className="item">
            <h6>{t("manager_overview_active_users")}</h6>
            <span>{manager.active_users ? manager.active_users : ""}</span>
          </div>
          <div className="item">
            <h6>{t("manager_overview_expired_users")}</h6>
            <span>{manager.expired_users ? manager.expired_users : ""}</span>
          </div>
          <div className="item">
            <h6>{t("manager_overview_submanagers")}</h6>
            <span>{manager.submanagers ? manager.submanagers : ""}</span>
          </div>
          <div className="item">
            <h6>{t("manager_overview_created_on")}</h6>
            <span>{manager.created_by ? manager.created_by : "0"}</span>
          </div>
          <div className="item">
            <h6>{t("manager_overview_created_by")}</h6>
            <span>{manager.created_at && manager.created_at}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerInfoDetails;
