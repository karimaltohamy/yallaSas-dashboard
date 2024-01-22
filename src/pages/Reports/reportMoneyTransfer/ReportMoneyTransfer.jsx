import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsReportMonetTransfer } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { mockDataReportsMoneyTransfer } from "../../../utils/mockData";

const ReportMoneyTransfer = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path=" report / money transfer"
          title="Money transfer"
          iconHead={<i class="fa-solid fa-book"></i>}
          actions={false}
        />
        <MainTable
          rows={mockDataReportsMoneyTransfer}
          columns={columnsReportMonetTransfer}
        />
      </div>
    </div>
  );
};

export default ReportMoneyTransfer;
