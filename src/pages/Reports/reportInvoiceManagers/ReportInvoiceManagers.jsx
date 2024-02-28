import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsReportInvoiceManagers } from "../../../utils/columnsTables";
import { mockDataReportsInvoiceManagers } from "../../../utils/mockData";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";
import { toast } from "react-toastify";

const ReportInvoiceManagers = () => {
  const [reportsInvoiceManager, setReportsInvoiceManager] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const getReportsInvoiceManager = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/ManagerInvoices", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "id",
          direction: "desc",
          search,
          columns: [
            "invoice_number",
            "created_at",
            "type",
            "username",
            "amount",
            "description",
            "username",
            "payment_method",
            "comments",
            "paid",
          ],
        }),
      });
      setReportsInvoiceManager(data.data);
      setLastePage(data.last_page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePay = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/invoice/pay", {
        payload: encryptedData({
          invoice_id: selectedRowData[0],
          comments: "11",
        }),
      });
      toast.success("Successfull Operation");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportsInvoiceManager();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report / managers invoices")}
          title={t("Managers invoices")}
          iconHead={<i className="fa-solid fa-file-invoice-dollar"></i>}
          setSearch={setSearch}
        >
          <div
            className="item"
            onClick={() => selectedRowData[0] && handlePay()}
          >
            <span>{t("Pay Invoice")}</span>
          </div>
        </HeadTable>
        <MainTable
          rows={reportsInvoiceManager}
          columns={columnsReportInvoiceManagers}
          setSelectedRowData={setSelectedRowData}
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

export default ReportInvoiceManagers;
