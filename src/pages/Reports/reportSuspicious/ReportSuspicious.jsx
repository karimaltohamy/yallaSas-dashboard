import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsReportSuspicious } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";

const ReportSuspicious = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="report / suspicious users"
          title="Suspicious Users"
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
        />
        <MainTable rows={[]} columns={columnsReportSuspicious} />
      </div>
    </div>
  );
};

export default ReportSuspicious;
