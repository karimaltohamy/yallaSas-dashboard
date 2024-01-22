import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsReportDaraExportJobs } from "../../../utils/columnsTables";

const ReportDataExportJobs = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="report / data export jobs"
          title="Data Export Jobs"
          iconHead={<i className="fa-solid fa-people-group"></i>}
          actions={false}
        />
        <MainTable rows={[]} columns={columnsReportDaraExportJobs} />
      </div>
    </div>
  );
};

export default ReportDataExportJobs;
