import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsReportMonetTransfer } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { mockDataReportsMoneyTransfer } from "../../../utils/mockData";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";

const ReportMoneyTransfer = () => {
  const [reportsMoneyTransfer, setReportsMoneyTransfer] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);

  const getReportsMoneyTransfer = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/report/depodrawal", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "id",
          direction: "desc",
          search,
          columns: [
            "created_at",
            "operation",
            "cr_manager",
            "dr_manager",
            "amount",
            "comment",
          ],
        }),
      });
      setReportsMoneyTransfer(data.data);
      setLastePage(data.last_page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportsMoneyTransfer();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t(" report / money transfer")}
          title={t("Money transfer")}
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
          setSearch={setSearch}
        />
        <MainTable
          rows={reportsMoneyTransfer}
          columns={columnsReportMonetTransfer}
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

export default ReportMoneyTransfer;
