import React, { useEffect, useState } from "react";
import HeadTable from "../../components/headTable/HeadTable";
import MainTable from "../../components/mainTable/MainTable";
import Loader from "../../components/loader/Loader";
import { t } from "i18next";
import apiAxios from "../../utils/apiAxios";
import { encryptedData } from "../../utils/utilsFunctions";
import { columnsCardsList } from "../../utils/columnsTables";
import { useParams } from "react-router-dom";
import "./cardsList.scss";

const CardsList = () => {
  const { series } = useParams();
  const [cardsList, setCardsList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [seriesInfo, setSeriesInfo] = useState({});

  const getCardsList = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post(`api/index/card/${series}`, {
        payload: encryptedData({
          page: 1,
          count: 10,
          sortBy: "id",
          direction: "desc",
          search,
          columns: [
            "id",
            "serialnumber",
            "pin",
            "username",
            "password",
            "used_at",
            "username",
            "username",
          ],
        }),
      });
      setCardsList(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getSeriesInfo = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get(`api/cards/series/${series}`);
      setSeriesInfo(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCardsList();
  }, [search, perPage, currentPage]);

  useEffect(() => {
    getSeriesInfo();
  }, []);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        {seriesInfo && (
          <div className="series_info">
            <div className="items">
              <div className="item">
                <span className="text-gray-500">Series</span>
                <h4 className="font-semibold">{seriesInfo.series}</h4>
              </div>
              <div className="item">
                <span className="text-gray-500">Expiration</span>
                <h4 className="font-semibold">{seriesInfo.expiration}</h4>
              </div>
              <div className="item">
                <span className="text-gray-500">Value</span>
                <h4 className="font-semibold">{seriesInfo.value}</h4>
              </div>
              <div className="item">
                <span className="text-gray-500">Owner</span>
                <h4 className="font-semibold">{seriesInfo.owner}</h4>
              </div>
              <div className="item">
                <span className="text-gray-500">Created By</span>
                <h4 className="font-semibold">{seriesInfo.created_by}</h4>
              </div>
              <div className="item">
                <span className="text-gray-500">Created At</span>
                <h4 className="font-semibold">{seriesInfo.created_at}</h4>
              </div>
            </div>
          </div>
        )}
        <HeadTable
          path={t("Cards List")}
          title={t("List of Cards List")}
          iconHead={<i className="fa-regular fa-credit-card"></i>}
          setSearch={setSearch}
          actions={false}
        />

        <MainTable
          rows={cardsList}
          columns={columnsCardsList}
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

export default CardsList;
