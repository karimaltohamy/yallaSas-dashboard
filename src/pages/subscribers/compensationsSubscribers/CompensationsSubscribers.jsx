import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsCompensations } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { useTranslation } from "react-i18next";

const CompensationsSubscribers = () => {
  const { t } = useTranslation();

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("Subscribers")}
          title={t("Compensations")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <div className="item">
              <i className="fa-solid fa-check"></i>
              <span>{t("Approve")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>{t("Delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={[]} columns={columnsCompensations} />
      </div>
    </div>
  );
};

export default CompensationsSubscribers;
