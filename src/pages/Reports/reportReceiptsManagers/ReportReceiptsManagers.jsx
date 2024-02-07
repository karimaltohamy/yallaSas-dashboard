import React from "react";
import { columnsReportReceiptManagers } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import HeadTable from "../../../components/headTable/HeadTable";
import { t } from "i18next";

const ReportReceiptsManagers = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report / receipts")}
          title={t("Manager Receipts")}
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
        />
        <MainTable rows={[]} columns={columnsReportReceiptManagers} />
      </div>
    </div>
  );
};

export default ReportReceiptsManagers;
