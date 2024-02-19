import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsCompensations } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { t } from "i18next";
import { encryptedData } from "../../../utils/utilsFunctions";
import apiAxios from "../../../utils/apiAxios";
import Loader from "../../../components/loader/Loader";

const CompensationsSubscribers = () => {
  const [compensationsSubscribers, setCompensationsSubscribers] = useState([]);
  const [numberSubscribers, setNumberSubscribers] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await apiAxios.post("/api/index/compensation", {
          payload: encryptedData({
            page: currentPage,
            count: perPage,
            sortBy: "id",
            direction: "desc",
            search,
            columns: [
              "created_at",
              "username",
              "days",
              "traffic",
              "hours",
              "created_by_username",
              "approved",
              "approved_by_username",
            ],
          }),
        });
        setCompensationsSubscribers(data.data);
        setNumberSubscribers(data.total);
        setLastePage(data.last_page);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("Subscribers")}
          title={t("menu_users_compensation")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          setSearch={setSearch}
        >
          <div className="content">
            <div className="item">
              <i className="fa-solid fa-check"></i>
              <span>{t("Approved")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>{t("global_actions_delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable
          rows={compensationsSubscribers}
          columns={columnsCompensations}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
        />
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default CompensationsSubscribers;
