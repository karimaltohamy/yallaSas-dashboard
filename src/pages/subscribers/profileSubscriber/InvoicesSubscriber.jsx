import React, { useEffect, useState } from "react";
import { columnsInvoices } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { useParams } from "react-router-dom";
import CryptoJS from "crypto-js";
import { secretPass } from "../../../utils/data";
import Loader from "../../../components/loader/Loader";
import apiAxios from "../../../utils/apiAxios";

const InvoicesSubscriber = () => {
  const { id } = useParams();
  const [invoices, setInvoices] = useState([]);
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
          "invoice_number",
          "created_at",
          "type",
          "amount",
          "description",
          "username",
          "payment_method",
          "paid",
        ],
      });
      let encrypted = CryptoJS.AES.encrypt(
        dataToEncrypt,
        secretPass
      ).toString();
      setLoading(true);
      try {
        const { data } = await apiAxios.post(`api/index/UserInvoices/${id}`, {
          payload: encrypted,
        });
        setInvoices(data.data);
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
        rows={invoices}
        columns={columnsInvoices}
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

export default InvoicesSubscriber;
