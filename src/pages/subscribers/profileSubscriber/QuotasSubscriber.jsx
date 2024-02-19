import React, { useEffect, useState } from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsQuotas } from "../../../utils/columnsTables";
import { useParams } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import CryptoJS from "crypto-js";
import { secretPass } from "../../../utils/data";
import apiAxios from "../../../utils/apiAxios";

const QuotasSubscriber = () => {
  const { id } = useParams();
  const [quotas, setQuotas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);

  useEffect(() => {
    (async () => {
      const dataToEncrypt = JSON.stringify({
        page: currentPage,
        count: perPage,
        sortBy: "created_at",
        direction: "desc",
        search: "",
        columns: [
          "created_at",
          "rx_mbytes",
          "tx_mbytes",
          "rxtx_mbytes",
          "effective_date",
          "comment",
        ],
      });
      let encrypted = CryptoJS.AES.encrypt(
        dataToEncrypt,
        secretPass
      ).toString();
      setLoading(true);
      try {
        const { data } = await apiAxios.post(`api/index/Quota/${id}`, {
          payload: encrypted,
        });
        setQuotas(data.data);
        setLastePage(data.last_page);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [perPage, currentPage]);

  return (
    <div>
      <MainTable
        rows={quotas}
        columns={columnsQuotas}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPage={perPage}
        setPerPage={setPerPage}
        lastPage={lastPage}
        showToolbar={false}
      />
      {loading && <Loader />}
    </div>
  );
};

export default QuotasSubscriber;
