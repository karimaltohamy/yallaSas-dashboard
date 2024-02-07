import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsReportSessions } from "../../../utils/columnsTables";
import { t } from "i18next";

const ReportSessions = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report / users sessions")}
          title={t("Users Sessions")}
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
        />
        <MainTable rows={[]} columns={columnsReportSessions} />
      </div>
    </div>
  );
};

export default ReportSessions;
