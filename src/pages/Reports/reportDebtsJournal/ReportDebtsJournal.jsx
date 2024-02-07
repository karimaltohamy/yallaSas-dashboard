import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsReportDebtsJournal } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { t } from "i18next";

const ReportDebtsJournal = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report / debts journal")}
          title={t("report debts journal")}
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
        />
        <MainTable rows={[]} columns={columnsReportDebtsJournal} />
      </div>
    </div>
  );
};

export default ReportDebtsJournal;
