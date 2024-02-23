import React, { useEffect, useState } from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsReceiptManagers } from "../../../utils/columnsTables";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { useParams } from "react-router-dom";
import Loader from "../../../components/loader/Loader";

const ReceiptManager = () => {
  const { id } = useParams();
  const [receipt, setReceipt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);

  const getReceipt = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post(`api/index/ManagerReceipts/${id}`, {
        payload: encryptedData({
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
        }),
      });
      setReceipt(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReceipt();
  }, [perPage, currentPage]);
  return (
    <div>
      <MainTable
        rows={receipt}
        columns={columnsReceiptManagers}
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

export default ReceiptManager;
