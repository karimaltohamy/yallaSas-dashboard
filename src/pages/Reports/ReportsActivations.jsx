import React from "react";
import MainTable from "../../components/mainTable/MainTable";
import { columnsReportsActivations } from "../../utils/columnsTables";
import { mockDataReportsActivations } from "../../utils/mockData";

const ReportsActivations = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <MainTable
          rows={mockDataReportsActivations}
          columns={columnsReportsActivations}
        />
      </div>
    </div>
  );
};

export default ReportsActivations;
