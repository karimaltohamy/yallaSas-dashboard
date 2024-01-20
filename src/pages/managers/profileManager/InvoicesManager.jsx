import React from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsInvoicesManagers } from "../../../utils/columnsTables";
import { mockDataInvoicesManagers } from "../../../utils/mockData";

const InvoicesManager = () => {
  return (
    <div>
      <MainTable
        rows={mockDataInvoicesManagers}
        columns={columnsInvoicesManagers}
      />
    </div>
  );
};

export default InvoicesManager;
