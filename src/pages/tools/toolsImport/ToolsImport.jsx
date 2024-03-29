import React from "react";
import "./toolsImport.scss";
import { t } from "i18next";

const ToolsImport = () => {
  return (
    <div className="tools_import_section">
      <form className="form_import">
        <div className="input_item">
          <label htmlFor="">{t("Import")}</label>
          <select name="" id="">
            <option value="">Users</option>
            <option value="">Managers</option>
            <option value="">Refill Card</option>
            <option value="">Card Users</option>
          </select>
        </div>
        <div className="input_check">
          <input type="checkbox" id="ignore" />
          <label htmlFor="ignore"> {t("Ignore Header (first row) ")}</label>
        </div>
        <div className="input_file">
          <label htmlFor="import_file">
            <i className="fa-solid fa-upload"></i>
            <span>{t("Upload File")}</span>
          </label>
          <input type="file" id="import_file" />
        </div>
      </form>

      <div className="content_card"></div>
    </div>
  );
};

export default ToolsImport;
