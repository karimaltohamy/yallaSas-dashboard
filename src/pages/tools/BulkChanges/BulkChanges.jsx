import React from "react";
import "./bulkChanges.scss";
import MainSection from "../../../components/mainSection/MainSection";
import { t } from "i18next";

const BulkChanges = () => {
  return (
    <div className="m-[10px]">
      <MainSection
        title={t("Bulk Changes")}
        icon={<i className="fa-solid fa-people-group"></i>}
      >
        <div className="bulk_changes_content">
          <form action="">
            <div className="input_item">
              <label htmlFor="">{t("Attribute")}</label>
              <select name="" id="">
                <option value="">Username</option>
                <option value="">Fisrt Name</option>
                <option value="">Last Name</option>
              </select>
            </div>
            <div className="input_item">
              <select name="" id="">
                <option value="">=</option>
                <option value="">!=</option>
                <option value="">&gt;</option>
                <option value="">&lt;</option>
                <option value="">like</option>
              </select>
            </div>
            <div className="input_item">
              <label htmlFor="">{t("Value")}</label>
              <input type="text" />
            </div>
            <div className="btns_actions">
              <button className="btn_action">
                <i className="fa-solid fa-plus"></i>
              </button>
              <button className="btn_action">
                <i className="fa-solid fa-rotate"></i>
              </button>
            </div>
          </form>
        </div>
      </MainSection>
    </div>
  );
};

export default BulkChanges;
