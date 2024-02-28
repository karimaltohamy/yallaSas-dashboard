import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsReportSessions } from "../../../utils/columnsTables";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";

const ReportSessions = () => {
  const [reportsSessions, setReportsSessions] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);

  const getReportsSessions = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/UserSessions", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "id",
          direction: "desc",
          search,
          columns: [
            "username",
            "acctstarttime",
            "acctstoptime",
            "framedipaddress",
            "nasipaddress",
            "callingstationid",
            "acctinputoctets",
            "acctoutputoctets",
            "calledstationid",
            "acctterminatecause",
          ],
        }),
      });
      setReportsSessions(data.data);
      setLastePage(data.last_page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportsSessions();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report / users sessions")}
          title={t("Users Sessions")}
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
          setSearch={setSearch}
        />
        <MainTable
          rows={reportsSessions}
          columns={columnsReportSessions}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
          showToolbar={false}
        />
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default ReportSessions;
