import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsConsumptionNotices } from "../../../utils/columnsTables";
import { Link } from "react-router-dom";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loader from "../../../components/loader/Loader";

const ConsumptionNotices = () => {
  const [notifications, setNotifications] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const getNotifications = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/ProfileNotification", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: null,
          direction: "asc",
          search,
          columns: [
            "threshold",
            "ProfileName",
            "check_counter",
            "sms_enabled",
            "telegram_enabled",
            "email_enabled",
            "webhook_enabled",
          ],
        }),
      });
      setNotifications(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyNotification = async () => {
    Swal.fire({
      title: "New threshold Name ",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      input: "text",
      inputPlaceholder: "Enter new threshold name",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiAxios.post("api/ProfileNotification/copy", {
            payload: encryptedData({
              notification_id: selectedRowData[0],
              new_threshold: result.value,
            }),
          });
          toast.success("Successful operation");
          getNotifications();
        } catch (error) {
          console.log(error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  const handleDeleteNotification = async (e) => {
    Swal.fire({
      title: "Delete threshold?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiAxios.delete(`api/profile/${selectedRowData[0]}`);
          toast.success("Successful operation");
          setLoading(false);
          getNotifications();
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  useEffect(() => {
    getNotifications();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("Consumption notices")}
          title={t("List of Consumption notices")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          setSearch={setSearch}
        >
          <div className="content">
            <Link to={"/consumption-notices/add"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>{t("global_actions_new")}</span>
            </Link>
            <Link
              to={
                selectedRowData[0] &&
                `/consumption-notices/profile/${selectedRowData[0]}/edit`
              }
              className="item"
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("global_actions_edit")}</span>
            </Link>
            <div
              className="item"
              onClick={() => selectedRowData[0] && handleCopyNotification()}
            >
              <i className="fa-regular fa-copy"></i>
              <span>{t("global_actions_copy")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && handleDeleteNotification()}
            >
              <i className="fa-solid fa-trash"></i>
              <span>{t("global_actions_delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable
          rows={notifications}
          columns={columnsConsumptionNotices}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
          uniqueIdentifier={"consumptionNotices"}
        />
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default ConsumptionNotices;
