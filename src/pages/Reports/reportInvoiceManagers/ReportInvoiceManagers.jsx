import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsReportInvoiceManagers } from "../../../utils/columnsTables";
import { mockDataReportsInvoiceManagers } from "../../../utils/mockData";

const ReportInvoiceManagers = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="report / managers invoices"
          title="Managers invoices"
          iconHead={<i class="fa-solid fa-file-invoice-dollar"></i>}
          actions={false}
        />
        <MainTable
          rows={mockDataReportsInvoiceManagers}
          columns={columnsReportInvoiceManagers}
        />
      </div>
    </div>
  );
};

export default ReportInvoiceManagers;
