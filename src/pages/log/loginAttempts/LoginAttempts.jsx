import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsLoginAttempts } from "../../../utils/columnsTables";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";

const LoginAttempts = () => {
  const [loginAttempts, setLoginAttempts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const getLoginAttempts = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/userauthlog", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "created_at",
          direction: "desc",
          search,
          columns: ["created_at", "username", "reply", "nas_ip_address", "mac"],
        }),
      });
      setLoginAttempts(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLoginAttempts();
  }, []);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report_user_auth_log_title")}
          title={t("report_user_auth_log_title")}
          iconHead={<i className="fa-solid fa-server"></i>}
          actions={false}
        />
        <MainTable
          rows={loginAttempts}
          columns={columnsLoginAttempts}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
          showToolbar={false}
        />
      </div>
    </div>
  );
};

export default LoginAttempts;
