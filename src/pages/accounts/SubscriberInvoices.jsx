import React from "react";
import HeadTable from "../../components/headTable/HeadTable";
import MainTable from "../../components/mainTable/MainTable";
import { columnsSubscribersInvoices } from "../../utils/columnsTables";
import { mockDataSubscriberInvoices } from "../../utils/mockData";
import { Link } from "react-router-dom";
import { t } from "i18next";

const SubscriberInvoices = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("users invoices")}
          title={t("List of Users Invoices")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <div className="item">
              <span>{t("Payment")}</span>
            </div>
            <div className="item">
              <span>{t("Cancel payment")}</span>
            </div>
            <div className="item">
              <span>{t("Download")}</span>
            </div>
            <Link to={"/user-invoice-designer"} className="item">
              <span>{t("Invoice design")}</span>
            </Link>
          </div>
        </HeadTable>
        <MainTable
          rows={mockDataSubscriberInvoices}
          columns={columnsSubscribersInvoices}
        />
      </div>
    </div>
  );
};

export default SubscriberInvoices;
