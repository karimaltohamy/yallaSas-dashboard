import React from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsFinamialRecord } from "../../../utils/columnsTables";

const FinancialRecordSubscriber = () => {
  return (
    <div>
      <MainTable rows={[]} columns={columnsFinamialRecord} />
    </div>
  );
};

export default FinancialRecordSubscriber;
