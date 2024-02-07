import React from "react";
import HeadTable from "../../components/headTable/HeadTable";
import { Link } from "react-router-dom";
import MainTable from "../../components/mainTable/MainTable";
import { columnsGroups } from "../../utils/columnsTables";
import { t } from "i18next";

const Groups = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("Groups")}
          title={t("List of groups")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <Link to={"/groups/add/1"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>{t("Add")}</span>
            </Link>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>{t("Delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={[]} columns={columnsGroups} />
      </div>
    </div>
  );
};

export default Groups;
