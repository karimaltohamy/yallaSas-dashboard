import React, { useEffect, useState } from "react";
import HeadTable from "../../components/headTable/HeadTable";
import MainTable from "../../components/mainTable/MainTable";
import { columnsSubscribersInvoices } from "../../utils/columnsTables";
import { mockDataSubscriberInvoices } from "../../utils/mockData";
import { Link } from "react-router-dom";
import { t } from "i18next";
import apiAxios from "../../utils/apiAxios";
import { encryptedData } from "../../utils/utilsFunctions";
import Loader from "../../components/loader/Loader";
import { toast } from "react-toastify";

const SubscriberInvoices = () => {
  const [subscriberInvoices, setSubscriberInvoices] = useState([]);
  const [numberSubscriberInvoices, setNumberSubscriberInvoices] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const handleInvoicesPay = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get(
        `api/user/invoice/pay/${selectedRowData[0]}`
      );
      toast.success(data?.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  const handleInvoicesUnPay = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get(
        `api/user/invoice/unpay/${selectedRowData[0]}`
      );
      toast.success(data?.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInvoicesDownload = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get(
        `api/userInvoice/download/${selectedRowData[0]}`
      );
      toast.success(data?.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const getSubscriberInvoices = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("/api/index/UserInvoices", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "created_at",
          direction: "desc",
          search,
          columns: [
            "invoice_number",
            "due_date",
            "username",
            "type",
            "amount",
            "description",
            "username",
            "payment_method",
            "paid",
          ],
        }),
      });
      setSubscriberInvoices(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSubscriberInvoices();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("users invoices")}
          title={t("List of Users Invoices")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          setSearch={setSearch}
        >
          <div className="content">
            <div
              className="item"
              onClick={() => selectedRowData[0] && handleInvoicesPay()}
            >
              <span>{t("manager_invoice_action_pay")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && handleInvoicesUnPay()}
            >
              <span>{t("manager_invoice_action_unpay")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && handleInvoicesDownload()}
            >
              <span>{t("global_download")}</span>
            </div>
            <Link
              to={selectedRowData[0] && "/user-invoice-designer"}
              className="item"
            >
              <span>{t("user_invoice_title_action")}</span>
            </Link>
          </div>
        </HeadTable>
        <MainTable
          rows={subscriberInvoices}
          columns={columnsSubscribersInvoices}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
        />
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default SubscriberInvoices;
