import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsReportSuspicious } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import Loader from "../../../components/loader/Loader";

const ReportSuspicious = () => {
  const [reportSuspicious, setReportSuspicious] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);

  const getReportsSuspicious = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get("api/user/suspicious");
      setReportSuspicious(data.data);
      setLastePage(data.last_page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportsSuspicious();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report / suspicious users")}
          title={t("Suspicious Users")}
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
        />
        <MainTable
          rows={[]}
          columns={columnsReportSuspicious}
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

export default ReportSuspicious;
