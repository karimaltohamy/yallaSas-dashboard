import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsReportDaraExportJobs } from "../../../utils/columnsTables";
import { t } from "i18next";

const ReportDataExportJobs = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report / data export jobs")}
          title={t("Data Export Jobs")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          actions={false}
        />
        <MainTable rows={[]} columns={columnsReportDaraExportJobs} />
      </div>
    </div>
  );
};

export default ReportDataExportJobs;
