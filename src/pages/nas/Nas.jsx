import React from "react";
import HeadTable from "../../components/headTable/HeadTable";
import { Link } from "react-router-dom";
import { columnsNas } from "../../utils/columnsTables";
import { mockDataNas } from "../../utils/mockData";
import MainTable from "../../components/mainTable/MainTable";

const Nas = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="nas"
          title="List of nas"
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <Link to={"/NAS/add/1"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>Add</span>
            </Link>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>Delete</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={mockDataNas} columns={columnsNas} />
      </div>
    </div>
  );
};

export default Nas;
