import React from "react";
import { columnsInvoices } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";

const InvoicesSubscriber = () => {
  return (
    <div>
      <MainTable rows={[]} columns={columnsInvoices} />
    </div>
  );
};

export default InvoicesSubscriber;
