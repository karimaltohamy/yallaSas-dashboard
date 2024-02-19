import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { Link } from "react-router-dom";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsOnlineSubscibers } from "../../../utils/columnsTables";
import { useTranslation } from "react-i18next";
import CryptoJS from "crypto-js";
import apiAxios from "../../../utils/apiAxios";
import { secretPass } from "../../../utils/data";
import Loader from "../../../components/loader/Loader";

const OnlineSubscribers = () => {
  const { t } = useTranslation();
  const [onlineSubscribers, setOnlineSubscribers] = useState([]);
  const [numberOnlineSubscribers, setNumberOnlineSubscribers] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const statusFilter = [
    {
      color: "#9fe22b",
      name: t("users_status_active"),
    },
    {
      color: "#ff9416",
      name: t("users_status_expired"),
    },
    {
      color: "#bb3436",
      name: t("users_status_disabled"),
    },
    {
      color: "#7c40a5",
      name: t("users_status_fup"),
    },
    {
      color: "black",
      name: t("users_status_zombie"),
    },
  ];

  useEffect(() => {
    (async () => {
      let encrypted;
      const dataToEncrypt = JSON.stringify({
        page: currentPage,
        count: perPage,
        sortBy: null,
        direction: "asc",
        search,
        columns: [
          "id",
          "username",
          "acctoutputoctets",
          "acctinputoctets",
          "user_profile_name",
          "framedipaddress",
          "callingstationid",
          "acctsessiontime",
          "oui",
        ],
      });
      encrypted = CryptoJS.AES.encrypt(dataToEncrypt, secretPass).toString();
      setLoading(true);
      try {
        const { data } = await apiAxios.post("api/index/online", {
          payload: encrypted,
        });
        setOnlineSubscribers(data.data);
        setNumberOnlineSubscribers(data.total);
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
          statusFilter={statusFilter}
          title={t("menu_users_online")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <div className="item">
              <span>{t("users_action_live_traffic")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-eye"></i>
              <span>{t("users_action_view")}</span>
            </div>
            <div className="item">
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("users_tab_edit")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-plug-circle-xmark"></i>
              <span>{t("users_action_disconnect")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-lock"></i>
              <span>{t("user_form_label_mac_lock")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-arrows-left-right"></i>
              <span>{t("users_action_ping")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable
          rows={onlineSubscribers}
          columns={columnsOnlineSubscibers}
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

export default OnlineSubscribers;
