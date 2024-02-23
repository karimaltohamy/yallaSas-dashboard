import React, { useEffect, useState } from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsRegisterAccountsManagers } from "../../../utils/columnsTables";
import { useParams } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import { encryptedData } from "../../../utils/utilsFunctions";
import apiAxios from "../../../utils/apiAxios";

const RegisterAccountsManager = () => {
  const { id } = useParams();
  const [accountsManager, setAccountsManager] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);

  const getAccountManager = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post(`api/index/ManagerJournal/${id}`, {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "created_at",
          direction: "desc",
          search: "",
          columns: [
            "created_at",
            "cr",
            "dr",
            "amount",
            "balance",
            "operation",
            "description",
          ],
        }),
      });
      setAccountsManager(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAccountManager();
  }, [perPage, currentPage]);

  return (
    <div>
      <MainTable
        rows={accountsManager}
        columns={columnsRegisterAccountsManagers}
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

export default RegisterAccountsManager;
