import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { Link } from "react-router-dom";
import { columnsAddonsServices } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";

const AddonsServices = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="addons"
          title="List of Addons  "
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <Link to={"/additional-services/add/1"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>Add</span>
            </Link>
            <Link to={"/additional-services/profile/1/edit"} className="item">
              <i className="fa-regular fa-pen-to-square"></i>
              <span>Edit</span>
            </Link>
            <div className="item">
              <i className="fa-regular fa-copy"></i>
              <span>Copy</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>Delete</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={[]} columns={columnsAddonsServices} />
      </div>
    </div>
  );
};

export default AddonsServices;
