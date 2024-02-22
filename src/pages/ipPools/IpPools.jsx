import React, { useEffect, useState } from "react";
import HeadTable from "../../components/headTable/HeadTable";
import { Link } from "react-router-dom";
import MainTable from "../../components/mainTable/MainTable";
import { columnsIpPools } from "../../utils/columnsTables";
import { t } from "i18next";
import apiAxios from "../../utils/apiAxios";
import { encryptedData } from "../../utils/utilsFunctions";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const IpPools = () => {
  const [ipPools, setIpPools] = useState([]);
  const [numberIpPools, setNumberIpPools] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const getIpPools = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/ippool", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: null,
          direction: "asc",
          search,
          columns: ["name", "start_ip", "end_ip", "lease_time"],
        }),
      });
      setIpPools(data.data);
      setNumberIpPools(data.total);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteNas = async (e) => {
    Swal.fire({
      title: "Delete Ip Pools?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.delete(`api/ippool/${selectedRowData[0]}`);

          toast.success("Successful operation");
          getIpPools();
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        } finally {
          setLoading(false);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  useEffect(() => {
    getIpPools();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("IP Pools")}
          title={t("IP Pools")}
          iconHead={<i className="ng-tns-c118-58 fa-cabinet-filing fal"></i>}
          setSearch={setSearch}
        >
          <div className="content">
            <Link to={"/add-ip-pools"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>{t("global_actions_new")}</span>
            </Link>
            <div
              className="item"
              onClick={() => encryptedData.length > 0 && handleDeleteNas()}
            >
              <i className="fa-solid fa-trash"></i>
              <span>{t("global_actions_delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable
          rows={ipPools}
          columns={columnsIpPools}
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

export default IpPools;
