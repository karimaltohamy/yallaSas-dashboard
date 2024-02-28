import React, { useEffect, useState } from "react";
import { columnsReportCardsTransfer } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import HeadTable from "../../../components/headTable/HeadTable";
import { t } from "i18next";
import Loader from "../../../components/loader/Loader";
import { encryptedData } from "../../../utils/utilsFunctions";
import apiAxios from "../../../utils/apiAxios";

const ReportCardsTransfer = () => {
  const [cardsTransfer, setCardsTransfer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);

  const getReportsCardsTransfer = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/cardsTransferLog", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "id",
          direction: "desc",
          search,
          columns: [
            "created_at",
            "old_owner_username",
            "new_owner_username",
            "qty",
            "unit_value",
            "total_value",
            "card_type",
            "range_start",
            "range_end",
            "username",
          ],
        }),
      });
      setCardsTransfer(data.data);
      setLastePage(data.last_page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportsCardsTransfer();
  }, [perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("cards_log_report_title")}
          title={t("cards_log_report_title")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          actions={false}
          setSearch={setSearch}
        />
        <MainTable
          rows={cardsTransfer}
          columns={columnsReportCardsTransfer}
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

export default ReportCardsTransfer;
