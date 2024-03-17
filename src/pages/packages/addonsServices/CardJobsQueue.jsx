import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsCardsJobs } from "../../../utils/columnsTables";
import { mockDataCardsJobs } from "../../../utils/mockData";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";

const CardJobsQueue = () => {
  const [cardsJobs, setCardsJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const getCardsJobs = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/cardJob", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "id",
          direction: "desc",
          search,
          columns: [
            "type",
            "username",
            "username",
            "created_at",
            "qty",
            "value",
            "name",
            "series",
            "status",
          ],
        }),
      });
      setCardsJobs(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCardsJobs();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("cards / jobs")}
          title={t("Card Jobs Queue")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          setSearch={setSearch}
        >
          <div className="content">
            <div className="item">
              <i className="fa-solid fa-xmark"></i>
              <span>{t("global_button_cancel")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-play"></i>
              <span>{t("Continue")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable
          rows={cardsJobs}
          columns={columnsCardsJobs}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
          uniqueIdentifier={"cardsJobsQueue"}
        />
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default CardJobsQueue;
