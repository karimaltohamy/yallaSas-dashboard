import React from "react";
import { columnsReportCardsTransfer } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import HeadTable from "../../../components/headTable/HeadTable";

const ReportCardsTransfer = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="Cards Transfers Log"
          title="List of Cards Transfers Log"
          iconHead={<i className="fa-solid fa-people-group"></i>}
          actions={false}
        />
        <MainTable rows={[]} columns={columnsReportCardsTransfer} />
      </div>
    </div>
  );
};

export default ReportCardsTransfer;
