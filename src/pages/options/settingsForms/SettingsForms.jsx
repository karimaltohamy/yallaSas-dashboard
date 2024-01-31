import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsFormSettings } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { Link } from "react-router-dom";

const SettingsForms = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="form settings"
          title="Form Settings"
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <Link className="item">
              <i className="fa-solid fa-plus"></i>
              <span>Add</span>
            </Link>
            <Link className="item">
              <i className="fa-regular fa-pen-to-square"></i>
              <span>Edit</span>
            </Link>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>Delete</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={[]} columns={columnsFormSettings} />
      </div>
    </div>
  );
};

export default SettingsForms;