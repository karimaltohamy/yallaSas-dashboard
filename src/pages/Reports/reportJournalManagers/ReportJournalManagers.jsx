import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsReportJournalManagers } from "../../../utils/columnsTables";
import { mockDataReportsJournalManagers } from "../../../utils/mockData";
import { t } from "i18next";

const ReportJournalManagers = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report / manager journal")}
          title={t("Report manager journa")}
          iconHead={<i className="fa-solid fa-book"></i>}
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
