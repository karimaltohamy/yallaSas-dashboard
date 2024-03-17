import React, { useEffect, useState } from "react";
import HeadTable from "../../components/headTable/HeadTable";
import { Link } from "react-router-dom";
import { columnsNas } from "../../utils/columnsTables";
import MainTable from "../../components/mainTable/MainTable";
import { t } from "i18next";
import apiAxios from "../../utils/apiAxios";
import { encryptedData } from "../../utils/utilsFunctions";
import Swal from "sweetalert2";
import Loader from "../../components/loader/Loader";
import { toast } from "react-toastify";

const Nas = () => {
  const [nas, setNas] = useState([]);
  const [numberNas, setNumberNas] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const getNas = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/nas", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: null,
          direction: "asc",
          search,
          columns: [
            "shortname",
            "nasname",
            "type",
            "secret",
            "online_users_count",
            "ping_time",
            "ping_loss",
          ],
        }),
      });
      setNas(data.data);
      setNumberNas(data.total);
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
      title: "Delete Nas?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          if (selectedRowData.length > 1) {
            await apiAxios.post(`api/nas/bulkDelete`, {
              payload: encryptedData(selectedRowData),
            });
          } else {
            await apiAxios.delete(`api/nas/${selectedRowData[0]}`);
          }
          toast.success("Successful operation");
          getNas();
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
    getNas();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("NAS")}
          title={t("List of nas")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          setSearch={setSearch}
        >
          <div className="content">
            <Link to={"/NAS/add"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>{t("global_actions_new")}</span>
            </Link>
            <div
              className="item"
              onClick={() => selectedRowData.length > 0 && handleDeleteNas()}
            >
              <i className="fa-solid fa-trash"></i>
              <span>{t("global_actions_delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable
          rows={nas}
          columns={columnsNas}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
          uniqueIdentifier={"nas"}
        />
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Nas;
