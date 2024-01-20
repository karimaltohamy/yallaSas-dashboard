import React from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsPayments } from "../../../utils/columnsTables";

const PaymentsSubscriber = () => {
  return (
    <div>
      <MainTable rows={[]} columns={columnsPayments} />
    </div>
  );
};

export default PaymentsSubscriber;
