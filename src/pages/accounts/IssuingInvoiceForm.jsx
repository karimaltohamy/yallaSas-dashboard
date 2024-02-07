import React from "react";
import "./IssuingInvoiceForm.scss";
import { t } from "i18next";

const IssuingInvoiceForm = () => {
  return (
    <div className="issuing_invoice_section">
      <div className="head">
        <i className="fa-solid fa-file-invoice-dollar"></i>
        <h4>{t("User Invoice Form")}</h4>
      </div>

      <div className="issuing_invoice_content">
        <form action="">
          <div className="input">
            <input type="text" placeholder={t("select client")} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default IssuingInvoiceForm;
