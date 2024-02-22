import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { Link } from "react-router-dom";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsOnlineSubscibers } from "../../../utils/columnsTables";
import { useTranslation } from "react-i18next";
import apiAxios from "../../../utils/apiAxios";
import Loader from "../../../components/loader/Loader";
import { encryptedData } from "../../../utils/utilsFunctions";
import Swal from "sweetalert2";

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

  const showAlertDisconnect = () => {
    Swal.fire({
      title: "Disconnect User",
      text: "Disconnect Selected User(s) ?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await apiAxios.get(
            `api/user/disconnect/userid/${selectedRowData[0]}`
          );
          toast.success(data.status == 200 && data.message);
        } catch (error) {
          console.log(error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await apiAxios.post("api/index/online", {
          payload: encryptedData({
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
          }),
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
          setSearch={setSearch}
        >
          <div className="content">
            <div className="item">
              <span>{t("users_action_live_traffic")}</span>
            </div>
            <Link
              to={
                selectedRowData.length > 0 &&
                `/subscribers/${selectedRowData[0]}/general`
              }
              className="item"
            >
              <i className="fa-solid fa-eye"></i>
              <span>{t("users_action_view")}</span>
            </Link>
            <Link
              to={
                selectedRowData.length > 0 &&
                `/subscribers/${selectedRowData[0]}/edit`
              }
              className="item"
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("global_actions_edit")}</span>
            </Link>
            <div
              className="item"
              onClick={selectedRowData.length > 0 && showAlertDisconnect}
            >
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
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
          rowId={"user_details"}
        />
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default OnlineSubscribers;
