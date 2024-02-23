import React, { useEffect, useState } from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsInvoicesManagers } from "../../../utils/columnsTables";
import { mockDataInvoicesManagers } from "../../../utils/mockData";
import apiAxios from "../../../utils/apiAxios";
import { useParams } from "react-router-dom";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";

const InvoicesManager = () => {
  const { id } = useParams();
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);

  const getInvoices = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post(`api/index/ManagerInvoices/${id}`, {
        payload: encryptedData({
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
        }),
      });
      setInvoices(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInvoices();
  }, [perPage, currentPage]);

  return (
    <div>
      <MainTable
        rows={invoices}
        columns={columnsInvoicesManagers}
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

export default InvoicesManager;
