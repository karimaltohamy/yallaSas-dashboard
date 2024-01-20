import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsCardsJobs } from "../../../utils/columnsTables";
import { mockDataCardsJobs } from "../../../utils/mockData";

const CardJobsQueue = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="cards/jobs"
          title="Card Jobs Queue"
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <div className="item">
              <i className="fa-solid fa-xmark"></i>
              <span>Cancel</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-play"></i>
              <span>Continue</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={mockDataCardsJobs} columns={columnsCardsJobs} />
      </div>
    </div>
  );
};

export default CardJobsQueue;
