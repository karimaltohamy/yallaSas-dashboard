import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsPaymentGatewayTransactions } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";

const PaymentGatewayTransactions = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="report / payment gateway transactions"
          title="Payment Gateway Transactions"
          iconHead={<i class="fa-solid fa-book"></i>}
          actions={false}
        />
        <MainTable rows={[]} columns={columnsPaymentGatewayTransactions} />
      </div>
    </div>
  );
};

export default PaymentGatewayTransactions;
