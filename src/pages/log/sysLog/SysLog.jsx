import React, { useEffect, useState } from "react";
import MainTable from "../../../components/mainTable/MainTable";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsSysLog } from "../../../utils/columnsTables";
import { mockDataSysLog } from "../../../utils/mockData";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";

const SysLog = () => {
  const [sysLog, setSysLog] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const getSysLog = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/syslog", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "created_at",
          direction: "desc",
          search,
          columns: ["created_at", "event", "username", "description", "ip"],
        }),
      });
      setSysLog(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSysLog();
  }, []);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("system log")}
          title={t("System log")}
          iconHead={<i className="fa-solid fa-user-secret"></i>}
          actions={false}
          setSearch={setSearch}
        />
        <MainTable
          rows={sysLog}
          columns={columnsSysLog}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
          showToolbar={false}
        />
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default SysLog;
