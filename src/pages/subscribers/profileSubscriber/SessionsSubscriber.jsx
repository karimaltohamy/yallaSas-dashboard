import React, { useEffect, useState } from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsSessions } from "../../../utils/columnsTables";
import apiAxios from "../../../utils/apiAxios";
import { useParams } from "react-router-dom";
import CryptoJS from "crypto-js";
import { secretPass } from "../../../utils/data";
import Loader from "../../../components/loader/Loader";

const SessionsSubscriber = () => {
  const { id } = useParams();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);

  useEffect(() => {
    (async () => {
      const dataToEncrypt = JSON.stringify({
        page: currentPage,
        count: perPage,
        sortBy: "acctstarttime",
        direction: "desc",
        search: "",
        columns: [
          "acctstarttime",
          "acctstoptime",
          "framedipaddress",
          "acctoutputoctets",
          "acctinputoctets",
          "callingstationid",
          "calledstationid",
          "nasipaddress",
          "name",
          "acctterminatecause",
        ],
      });
      let encrypted = CryptoJS.AES.encrypt(
        dataToEncrypt,
        secretPass
      ).toString();
      setLoading(true);
      try {
        const { data } = await apiAxios.post(`api/index/UserSessions/${id}`, {
          payload: encrypted,
        });
        setSessions(data.data);
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
        rows={sessions}
        columns={columnsSessions}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPage={perPage}
        setPerPage={setPerPage}
        lastPage={lastPage}
        rowId={"radacctid"}
        showToolbar={false}
      />
      {loading && <Loader />}
    </div>
  );
};

export default SessionsSubscriber;
