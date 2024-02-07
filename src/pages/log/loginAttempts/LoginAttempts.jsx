import React from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsLoginAttempts } from "../../../utils/columnsTables";
import { t } from "i18next";

const LoginAttempts = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("users authentication log")}
          title={t("Users authentication log")}
          iconHead={<i className="fa-solid fa-server"></i>}
          actions={false}
        />
        <MainTable rows={[]} columns={columnsLoginAttempts} />
      </div>
    </div>
  );
};

export default LoginAttempts;
