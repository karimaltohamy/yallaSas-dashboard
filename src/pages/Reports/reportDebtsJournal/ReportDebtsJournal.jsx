import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsReportDebtsJournal } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";

const ReportDebtsJournal = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="report / debts journal"
          title="report debts journal"
          iconHead={<i class="fa-solid fa-book"></i>}
          actions={false}
        />
        <MainTable rows={[]} columns={columnsReportDebtsJournal} />
      </div>
    </div>
  );
};

export default ReportDebtsJournal;
