import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsReportJournalManagers } from "../../../utils/columnsTables";
import { mockDataReportsJournalManagers } from "../../../utils/mockData";

const ReportJournalManagers = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="report / manager journal"
          title="Report manager journa"
          iconHead={<i class="fa-solid fa-book"></i>}
          actions={false}
        />
        <MainTable
          rows={mockDataReportsJournalManagers}
          columns={columnsReportJournalManagers}
        />
      </div>
    </div>
  );
};

export default ReportJournalManagers;
