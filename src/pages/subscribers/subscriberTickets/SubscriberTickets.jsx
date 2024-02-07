import React, { useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsUserTickets } from "../../../utils/columnsTables";
import { mockDataUserTickets } from "../../../utils/mockData";
import Popup from "../../../components/popup/Popup";
import InputItem from "../../../components/popup/inputItem/InputItem";
import { t } from "i18next";

const SubscriberTickets = () => {
  const [openSupportTicket, setOpenSupportTicket] = useState(false);
  const [clientSuport, setClientSupport] = useState("");
  const [subjectSuport, setSubjectSuport] = useState("");

  const handleSupportTicket = () => {
    console.log(true);
  };

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
              <span>{"Add"}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-xmark"></i>
              <span>{"Closing request"}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>{"Delete"}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={mockDataUserTickets} columns={columnsUserTickets} />
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
