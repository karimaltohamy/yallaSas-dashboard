import React, { useEffect, useState } from "react";
import { columnsReportReceiptManagers } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import HeadTable from "../../../components/headTable/HeadTable";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";

const ReportReceiptsManagers = () => {
  const [reportsManagerReceipts, setReportsManagerReceipts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);

  const getReportsManagerReceipts = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/ManagerReceipts", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "id",
          direction: "desc",
          search,
          columns: [
            "receipt_number",
            "created_at",
            "username",
            "type",
            "amount",
            "description",
            "username",
          ],
        }),
      });
      setReportsManagerReceipts(data.data);
      setLastePage(data.last_page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportsManagerReceipts();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report / receipts")}
          title={t("Manager Receipts")}
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
          setSearch={setSearch}
        />
        <MainTable
          rows={reportsManagerReceipts}
          columns={columnsReportReceiptManagers}
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

export default ReportReceiptsManagers;
