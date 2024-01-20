import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsCompensations } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";

const CompensationsSubscribers = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="subscribers"
          title="Compensations"
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <div className="item">
              <i className="fa-solid fa-check"></i>
              <span>Approve</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>Delete</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={[]} columns={columnsCompensations} />
      </div>
    </div>
  );
};

export default CompensationsSubscribers;
