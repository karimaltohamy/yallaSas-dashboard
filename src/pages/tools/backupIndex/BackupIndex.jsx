import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsBackupIndex } from "../../../utils/columnsTables";
import { Link } from "react-router-dom";

const BackupIndex = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="Backup"
          title="Backup / Restore"
          iconHead={<i className="ng-tns-c118-32 fa fa-hdd"></i>}
        >
          <div className="content">
            <div className="item">
              <i className="fa-solid fa-plus"></i>
              <span>Create Backup</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-download"></i>
              <span>Download</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-upload"></i>
              <span>Upload</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-rotate"></i>
              <span>Restore</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>Delete</span>
            </div>
            <Link to={"/backup-index/settings"} className="item">
              <i className="fa-solid fa-gears"></i>
              <span>Settings</span>
            </Link>
          </div>
        </HeadTable>
        <MainTable rows={[]} columns={columnsBackupIndex} />
      </div>
    </div>
  );
};

export default BackupIndex;
