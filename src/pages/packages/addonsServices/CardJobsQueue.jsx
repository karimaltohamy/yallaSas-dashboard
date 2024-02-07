import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsCardsJobs } from "../../../utils/columnsTables";
import { mockDataCardsJobs } from "../../../utils/mockData";
import { t } from "i18next";

const CardJobsQueue = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("cards / jobs")}
          title={t("Card Jobs Queue")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <div className="item">
              <i className="fa-solid fa-xmark"></i>
              <span>{t("Cancel")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-play"></i>
              <span>{t("Continue")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={mockDataCardsJobs} columns={columnsCardsJobs} />
      </div>
    </div>
  );
};

export default CardJobsQueue;
