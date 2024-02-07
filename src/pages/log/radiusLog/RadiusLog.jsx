import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { t } from "i18next";

const RadiusLog = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("radius log")}
          title={t("FreeRADIUS Log")}
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
        />
        <div className="container_log">
          <div
            className="log h-[550px] w-full rounded-md bg-[#464646]"
            id="log"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RadiusLog;
