import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsPaymentGatewayTransactions } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";

const PaymentGatewayTransactions = () => {
  const [reportsPaymenyGateway, setReportsPaymenyGateway] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);

  const getReportsPaymenyGateway = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post(
        "api/index/PaymentGatewayTransaction",
        {
          payload: encryptedData({
            page: currentPage,
            count: perPage,
            sortBy: "id",
            direction: "desc",
            search,
            columns: [
              "created_at",
              "gateway_name",
              "manager_name",
              "user_name",
              "amount",
              "currency",
              "status",
            ],
          }),
        }
      );
      setReportsPaymenyGateway(data.data);
      setLastePage(data.last_page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportsPaymenyGateway();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("report / payment gateway transactions")}
          title={t("Payment Gateway Transactions")}
          iconHead={<i className="fa-solid fa-book"></i>}
          actions={false}
          setSearch={setSearch}
        />
        <MainTable
          rows={reportsPaymenyGateway}
          columns={columnsPaymentGatewayTransactions}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
          showToolbar={false}
        />
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default PaymentGatewayTransactions;
