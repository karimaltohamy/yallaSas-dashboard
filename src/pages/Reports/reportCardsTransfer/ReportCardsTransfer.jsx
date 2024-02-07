import React from "react";
import { columnsReportCardsTransfer } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import HeadTable from "../../../components/headTable/HeadTable";
import { t } from "i18next";

const ReportCardsTransfer = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("Cards Transfers Log")}
          title={t("List of Cards Transfers Log")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          actions={false}
        />
        <MainTable rows={[]} columns={columnsReportCardsTransfer} />
      </div>
    </div>
  );
};

export default ReportCardsTransfer;
