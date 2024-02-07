import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsReportMonetTransfer } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { mockDataReportsMoneyTransfer } from "../../../utils/mockData";
import { t } from "i18next";

const ReportMoneyTransfer = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t(" report / money transfer")}
          title={t("Money transfer")}
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
        />
        <MainTable
          rows={mockDataReportsMoneyTransfer}
          columns={columnsReportMonetTransfer}
        />
      </div>
    </div>
  );
};

export default ReportMoneyTransfer;
