import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { Link } from "react-router-dom";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsSubscibers } from "../../../utils/columnsTables";

const statusFilter = [
  {
    color: "rgb(235, 219, 1)",
    name: "Effective",
  },
  {
    color: "#257e67",
    name: "Expired",
  },
  {
    color: "rgb(1, 235, 20)",
    name: "Consumer",
  },
  {
    color: "#bb3436",
    name: "Disabled",
  },
  {
    color: "#7c40a5",
    name: "Connected to a secondary package",
  },
  {
    color: "black",
    name: "Online, unblocked",
  },
];

const OnlineSubscribers = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="subscribers"
          statusFilter={statusFilter}
          title="List of online subscribers "
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <div className="item">
              <span>data flow</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-eye"></i>
              <span>Show</span>
            </div>
            <div className="item">
              <i className="fa-regular fa-pen-to-square"></i>
              <span>Edit</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-plug-circle-xmark"></i>
              <span>Disconnect</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-lock"></i>
              <span>MAC lock</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-arrows-left-right"></i>
              <span>Ping</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={[]} columns={columnsSubscibers} />
      </div>
    </div>
  );
};

export default OnlineSubscribers;
