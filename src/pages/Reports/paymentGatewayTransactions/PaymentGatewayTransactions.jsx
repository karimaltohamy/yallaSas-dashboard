import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsPaymentGatewayTransactions } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { t } from "i18next";

const PaymentGatewayTransactions = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report / payment gateway transactions")}
          title={t("Payment Gateway Transactions")}
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
        />
        <MainTable rows={[]} columns={columnsPaymentGatewayTransactions} />
      </div>
    </div>
  );
};

export default PaymentGatewayTransactions;
