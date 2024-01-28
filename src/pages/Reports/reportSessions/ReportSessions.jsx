import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsReportSessions } from "../../../utils/columnsTables";

const ReportSessions = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="report / users sessions"
          title="Users Sessions"
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
        />
        <MainTable rows={[]} columns={columnsReportSessions} />
      </div>
    </div>
  );
};

export default ReportSessions;
