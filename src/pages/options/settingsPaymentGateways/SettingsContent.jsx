import { t } from "i18next";
import React from "react";

const SettingsContent = ({ title, handlSubmit, children }) => {
  return (
    <div className="payment_gateways_content">
      <h4 className="title">{title}</h4>
      <form className="form_payment_gateways">
        {children}
        <div className="btns_add">
          <button className="btn_add" onClick={handlSubmit}>
            {t("Save")}
          </button>
          <button className="btn_close">{t("global_button_cancel")}</button>
        </div>
      </form>
    </div>
  );
};

export default SettingsContent;
