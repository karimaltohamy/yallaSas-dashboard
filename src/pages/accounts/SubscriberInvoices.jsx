import React from "react";
import HeadTable from "../../components/headTable/HeadTable";
import MainTable from "../../components/mainTable/MainTable";
import { columnsSubscribersInvoices } from "../../utils/columnsTables";
import { mockDataSubscriberInvoices } from "../../utils/mockData";
import { Link } from "react-router-dom";

const SubscriberInvoices = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="users invoices"
          title="List of Users Invoices"
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <div className="item">
              <span>Payment</span>
            </div>
            <div className="item">
              <span>Cancel payment</span>
            </div>
            <div className="item">
              <span>Download</span>
            </div>
            <Link to={"/user-invoice-designer"} className="item">
              <span>Invoice design</span>
            </Link>
          </div>
        </HeadTable>
        <MainTable
          rows={mockDataSubscriberInvoices}
          columns={columnsSubscribersInvoices}
        />
      </div>
    </div>
  );
};

export default SubscriberInvoices;
