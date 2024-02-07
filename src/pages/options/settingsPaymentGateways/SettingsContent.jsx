import React from "react";

const SettingsContent = ({ title, children }) => {
  return (
    <div class="payment_gateways_content">
      <h4 class="title">{title}</h4>
      <form class="form_payment_gateways">
        {children}
        <div class="btns_add">
          <button class="btn_add">موافق</button>
          <button class="btn_close">الغاء</button>
        </div>
      </form>
    </div>
  );
};

export default SettingsContent;
