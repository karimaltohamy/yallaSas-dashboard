import React from "react";
import MainTable from "../../../components/mainTable/MainTable";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsSysLog } from "../../../utils/columnsTables";
import { mockDataSysLog } from "../../../utils/mockData";

const SysLog = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="system log"
          title="System log"
          iconHead={<i className="fa-solid fa-user-secret"></i>}
          actions={false}
        />
        <MainTable rows={mockDataSysLog} columns={columnsSysLog} />
      </div>
    </div>
  );
};

export default SysLog;
