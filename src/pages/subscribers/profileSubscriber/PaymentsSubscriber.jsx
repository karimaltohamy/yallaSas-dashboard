import React, { useEffect, useState } from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsPayments } from "../../../utils/columnsTables";
import { useParams } from "react-router-dom";
import CryptoJS from "crypto-js";
import { secretPass } from "../../../utils/data";
import Loader from "../../../components/loader/Loader";
import apiAxios from "../../../utils/apiAxios";

const PaymentsSubscriber = () => {
  const { id } = useParams();
  const [payments, setPayments] = useState([]);
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
          "receipt_number",
          "created_at",
          "type",
          "amount",
          "description",
          "username",
        ],
      });
      let encrypted = CryptoJS.AES.encrypt(
        dataToEncrypt,
        secretPass
      ).toString();
      setLoading(true);
      try {
        const { data } = await apiAxios.post(`api/index/UserReceipts/${id}`, {
          payload: encrypted,
        });
        setPayments(data.data);
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
        rows={payments}
        columns={columnsPayments}
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

export default PaymentsSubscriber;
