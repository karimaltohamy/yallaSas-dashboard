import React, { useEffect, useState } from "react";
import MainTable from "../../components/mainTable/MainTable";
import { columnsReportsActivations } from "../../utils/columnsTables";
import apiAxios from "../../utils/apiAxios";
import { encryptedData } from "../../utils/utilsFunctions";
import Loader from "../../components/loader/Loader";
import HeadTable from "../../components/headTable/HeadTable";
import { t } from "i18next";

const ReportsActivations = () => {
  const [reportsActivations, setReportsActivations] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);

  const getReportsActivations = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/activations", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "id",
          direction: "desc",
          search,
          columns: [
            "created_at",
            "username",
            "firstname",
            "lastname",
            "username",
            "name",
            "price",
            "user_price",
            "old_expiration",
            "new_expiration",
            "activation_method",
            "user_activations_count",
            "refunded",
          ],
        }),
      });
      setReportsActivations(data.data);
      setLastePage(data.last_page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportsActivations();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report_activations_title")}
          title={t("report_activations_title")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          actions={false}
          setSearch={setSearch}
        />
        <MainTable
          rows={reportsActivations}
          columns={columnsReportsActivations}
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

export default ReportsActivations;
