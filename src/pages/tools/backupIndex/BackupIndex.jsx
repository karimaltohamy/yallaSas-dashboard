import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsBackupIndex } from "../../../utils/columnsTables";
import { Link } from "react-router-dom";
import { t } from "i18next";

const BackupIndex = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("Backup")}
          title={t("Backup / Restore")}
          iconHead={<i className="ng-tns-c118-32 fa fa-hdd"></i>}
        >
          <div className="content">
            <div className="item">
              <i className="fa-solid fa-plus"></i>
              <span>{t("Create Backup")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-download"></i>
              <span>{t("Download")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-upload"></i>
              <span>{t("Upload")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-rotate"></i>
              <span>{t("Restore")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>{t("Delete")}</span>
            </div>
            <Link to={"/backup-index/settings"} className="item">
              <i className="fa-solid fa-gears"></i>
              <span>{t("Settings")}</span>
            </Link>
          </div>
        </HeadTable>
        <MainTable rows={[]} columns={columnsBackupIndex} />
      </div>
    </div>
  );
};

export default BackupIndex;
