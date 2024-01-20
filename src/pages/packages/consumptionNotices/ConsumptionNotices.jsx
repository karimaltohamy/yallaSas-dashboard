import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsConsumptionNotices } from "../../../utils/columnsTables";
import { Link } from "react-router-dom";

const ConsumptionNotices = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="Consumption notices"
          title="List of Consumption notices"
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <Link to={"/consumption-notices/add/1"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>Add</span>
            </Link>
            <Link to={"/consumption-notices/profile/1/edit"} className="item">
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
        <MainTable rows={[]} columns={columnsConsumptionNotices} />
      </div>
    </div>
  );
};

export default ConsumptionNotices;
