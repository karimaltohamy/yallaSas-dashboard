import React from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsReceiptManagers } from "../../../utils/columnsTables";
import { mockDataReceiptManagers } from "../../../utils/mockData";

const ReceiptManager = () => {
  return (
    <div>
      <MainTable
        rows={mockDataReceiptManagers}
        columns={columnsReceiptManagers}
      />
    </div>
  );
};

export default ReceiptManager;
