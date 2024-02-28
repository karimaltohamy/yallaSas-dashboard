import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsReportJournalManagers } from "../../../utils/columnsTables";
import { mockDataReportsJournalManagers } from "../../../utils/mockData";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";

const ReportJournalManagers = () => {
  const [reportsJournalManager, setReportsJournalManager] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);

  const getReportsJournalManager = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/ManagerJournal", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "id",
          direction: "desc",
          search,
          columns: [
            "created_at",
            "cr",
            "dr",
            "amount",
            "balance",
            "operation",
            "description",
            "comment",
          ],
        }),
      });
      setReportsJournalManager(data.data);
      setLastePage(data.last_page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportsJournalManager();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report / manager journal")}
          title={t("Report manager journa")}
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
          setSearch={setSearch}
        />
        <MainTable
          rows={reportsJournalManager}
          columns={columnsReportJournalManagers}
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

export default ReportJournalManagers;
