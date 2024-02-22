import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsUserTickets } from "../../../utils/columnsTables";
import Popup from "../../../components/popup/Popup";
import InputItem from "../../../components/popup/inputItem/InputItem";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const SubscriberTickets = () => {
  const [subscriberTickets, setSubscriberTickets] = useState([]);
  const [numberSubscribers, setNumberSubscribers] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const [openSupportTicket, setOpenSupportTicket] = useState(false);
  const [clientSuport, setClientSupport] = useState("");
  const [subjectSuport, setSubjectSuport] = useState("");

  const getSubscribersTickets = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/tickets", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "id",
          direction: "desc",
          search,
          columns: [
            "created_at",
            "subject",
            "username",
            "firstname",
            "lastname",
            "closed",
          ],
        }),
      });
      setSubscriberTickets(data.data);
      setNumberSubscribers(data.total);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleAddTicket = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/ticket/create", {
        payload: encryptedData({ subject: subjectSuport }),
      });
      toast.success(data.status == 200 && data.message);
      setOpenSupportTicket(false);
      setClientSupport("");
      setSubjectSuport("");
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseTicket = () => {
    Swal.fire({
      title: "Close Tickets",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      input: "checkbox",
      inputValue: false,
      inputPlaceholder: "Problem Solved",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await apiAxios.post(`api/ticket/close`, {
            payload: encryptedData({
              thread_id: selectedRowData[0],
              is_solved: result.value ? 1 : 0,
            }),
          });
          toast.success(data.status == 200 && data.message);
          getSubscribersTickets();
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  const handleDeleteSubsciberTicket = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Delete Ticket?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          if (selectedRowData.length > 1) {
            await apiAxios.post(`api/user/bulkDelete`, {
              payload: encryptedData(selectedRowData),
            });
          } else {
            await apiAxios.delete(`api/ticket/${selectedRowData[0]}`);
          }
          toast.success("Successful operation");
          setLoading(false);
          getSubscribersTickets();
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
    getSubscribersTickets();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("User Tickets")}
          title={t("User Tickets")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <div className="item" onClick={() => setOpenSupportTicket(true)}>
              <i className="fa-solid fa-plus"></i>
              <span>{t("tickets_action_create")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData.length > 0 && handleCloseTicket()}
            >
              <i className="fa-solid fa-xmark"></i>
              <span>{t("tickets_action_close")}</span>
            </div>
            <div
              className="item"
              onClick={
                selectedRowData.length > 0 && handleDeleteSubsciberTicket
              }
            >
              <i className="fa-solid fa-trash"></i>
              <span>{t("global_actions_delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable
          rows={subscriberTickets}
          columns={columnsUserTickets}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
        />
      </div>

      {/* popup change name*/}
      <Popup
        title={t("New Support Ticket")}
        openPopup={openSupportTicket}
        setOpenPopup={setOpenSupportTicket}
        onSubmit={handleAddTicket}
      >
        <InputItem
          label={t("Client")}
          type={"text"}
          value={clientSuport}
          onChange={setClientSupport}
          placeholder={"enter client"}
        />
        <InputItem
          label={t("Subject")}
          type={"text"}
          value={subjectSuport}
          onChange={setSubjectSuport}
          placeholder={"enter subject"}
        />
      </Popup>
    </div>
  );
};

export default SubscriberTickets;
