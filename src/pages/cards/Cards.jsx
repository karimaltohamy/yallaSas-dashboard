import React from "react";
import HeadTable from "../../components/headTable/HeadTable";
import MainTable from "../../components/mainTable/MainTable";
import { columnsCards } from "../../utils/columnsTables";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="cards systems"
          title="List of Cards Systems"
          iconHead={<i className="fa-regular fa-credit-card"></i>}
        >
          <div className="content">
            <Link to={"/cards/add/1"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>Generate</span>
            </Link>
            <Link to={"/cards/verify"} className="item">
              <i className="fa-solid fa-magnifying-glass"></i>
              <span>Verify</span>
            </Link>
            <Link to={"/cards/jobs-queue"} className="item">
              <i className="fa-solid fa-tower-observation"></i>
              <span>Jobs Queue</span>
            </Link>
            <div className="item">
              <i className="fa-solid fa-list-ul"></i>
              <span>List</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-download"></i>
              <span>Download (CSV)</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-download"></i>
              <span>Download (PDF)</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-pause"></i>
              <span>Suspend</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-play"></i>
              <span>Release</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-user"></i>
              <span>Change Owner</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-user"></i>
              <span>Change Owner (Range)</span>
            </div>
            <div className="item">
              <i className="fa-regular fa-address-card"></i>
              <span>Card Designer</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>Delete</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={[]} columns={columnsCards} />
      </div>
    </div>
  );
};

export default Cards;
