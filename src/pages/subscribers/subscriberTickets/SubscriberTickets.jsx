import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsUserTickets } from "../../../utils/columnsTables";
import Popup from "../../../components/popup/Popup";
import InputItem from "../../../components/popup/inputItem/InputItem";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";

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

  useEffect(() => {
    (async () => {
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
    })();
  }, [search, perPage, currentPage]);

  const handleSupportTicket = async () => {};

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
            <div className="item">
              <i className="fa-solid fa-xmark"></i>
              <span>{t("tickets_action_close")}</span>
            </div>
            <div className="item">
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
        onSubmit={handleSupportTicket}
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
