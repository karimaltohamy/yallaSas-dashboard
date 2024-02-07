import React from "react";
import "./managersTreeBox.scss";
import { t } from "i18next";
const ManagersTreeBox = () => {
  return (
    <div className="managers_tree_box">
      <div className="head">
        <i className="fa-solid fa-cubes"></i>
        <h4>{t("Managers Tree")}</h4>
      </div>
      <div className="content_box">
        <div className="search_input">
          <input type="text" placeholder={t("search managers...")} />
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="result"></div>
      </div>
    </div>
  );
};

export default ManagersTreeBox;
