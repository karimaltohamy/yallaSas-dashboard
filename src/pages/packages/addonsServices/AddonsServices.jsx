import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { Link } from "react-router-dom";
import { columnsAddonsServices } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { t } from "i18next";

const AddonsServices = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("addons")}
          title={t("List of Addons")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <Link to={"/additional-services/add/1"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>{t("Add")}</span>
            </Link>
            <Link to={"/additional-services/profile/1/edit"} className="item">
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("Edit")}</span>
            </Link>
            <div className="item">
              <i className="fa-regular fa-copy"></i>
              <span>{t("Copy")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>{t("Delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={[]} columns={columnsAddonsServices} />
      </div>
    </div>
  );
};

export default AddonsServices;
