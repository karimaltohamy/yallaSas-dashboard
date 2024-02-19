import React, { Fragment, useEffect, useRef, useState } from "react";
import "./headTable.scss";
import { useTranslation } from "react-i18next";

const HeadTable = ({
  children,
  path,
  statusFilter,
  title,
  iconHead,
  actions = true,
  setSearch,
}) => {
  const [openProcesses, setOpenProcesses] = useState(false);
  const processesRef = useRef();
  const lang = localStorage.getItem("lang");
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        processesRef.current &&
        !processesRef.current.contains(event.target)
      ) {
        setOpenProcesses(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Fragment>
      <div className="path">
        <span>{path}</span>
      </div>
      {statusFilter && (
        <div className="status_filter">
          {statusFilter.map((item, index) => {
            return (
              <div className="item" key={index}>
                <span style={{ backgroundColor: item.color }}></span>
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

        <div className="flex items-center gap-2 md:gap-3 flex-col md:flex-row">
          <div className="utils" ref={processesRef}>
            {actions && (
              <div className="actions_box">
                <button
                  className="btn_actions"
                  onClick={() => setOpenProcesses(!openProcesses)}
                >
                  <i className="fa-solid fa-wrench"></i>
                  {t("global_table_actions")}
                </button>

                <div
                  className={`box box_utils ${openProcesses ? "active" : ""} ${
                    lang == "ar" ? "ar" : ""
                  }`}
                >
                  {children}
                </div>
              </div>
            )}
          </div>
          <div className="input_search">
            <input
              type="text"
              placeholder={t("placeholder_search")}
              onChange={(e) => setSearch(e.target.value)}
            />
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
        </div>
      </div>
    </Fragment>
  );
};

export default HeadTable;
