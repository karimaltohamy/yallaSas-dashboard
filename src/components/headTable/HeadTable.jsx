import React, { Fragment, useState } from "react";
import "./headTable.scss";

const HeadTable = ({
  children,
  path,
  statusFilter,
  title,
  iconHead,
  setOpenChangeName,
  setOpenDataBalance,
  actions = true,
}) => {
  const [openProcesses, setOpenProcesses] = useState(false);
  return (
    <Fragment>
      <div className="path">
        <span>Home</span> /<span>{path}</span>
      </div>
      {statusFilter && (
        <div className="status_filter">
          {statusFilter.map((item, index) => {
            return (
              <div className="item" key={index}>
                <span></span>
                <h6>{item.name}</h6>
              </div>
            );
          })}
        </div>
      )}
      <div className="head_table">
        <div className="info">
          <p className="text_details">
            {iconHead}
            {title}
          </p>
        </div>

        <div className="input_search">
          <input type="text" placeholder="Search..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </div>

        <div className="utils">
          {actions && (
            <div className="actions_box">
              <button
                className="btn_actions"
                onClick={() => setOpenProcesses(!openProcesses)}
              >
                <i className="fa-solid fa-wrench"></i>
                Processes
              </button>

              <div className={`box box_utils ${openProcesses ? "active" : ""}`}>
                {children}
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default HeadTable;
