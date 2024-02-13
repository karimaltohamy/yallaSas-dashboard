import React from "react";

const SettingsContent = ({ title, children }) => {
  return (
    <div className="payment_gateways_content">
      <h4 className="title">{title}</h4>
      <form className="form_payment_gateways">
        {children}
        <div className="btns_add">
          <button className="btn_add">موافق</button>
          <button className="btn_close">الغاء</button>
        </div>
      </form>
    </div>
  );
};

export default SettingsContent;
