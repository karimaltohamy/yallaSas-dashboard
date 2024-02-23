import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { Link } from "react-router-dom";
import { columnsAddonsServices } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";

const AddonsServices = () => {
  const [addons, setAddons] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const getAddons = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/Addon", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: null,
          direction: "asc",
          search,
          columns: [
            "name",
            "expiration_amount",
            "set_address_list",
            "set_pool_name",
            "call_url",
          ],
        }),
      });
      setAddons(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAddons = async (e) => {
    Swal.fire({
      title: "Delete Addons?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiAxios.delete(`api/Addon/${selectedRowData[0]}`);
          toast.success("Successful operation");
          setLoading(false);
          getAddons();
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
    getAddons();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("addons")}
          title={t("List of Addons")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <Link to={"/additional-services/add"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>{t("Add")}</span>
            </Link>
            <Link
              to={
                selectedRowData[0] &&
                `/additional-services/profile/${selectedRowData[0]}/edit`
              }
              className="item"
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("Edit")}</span>
            </Link>
            <div
              className="item"
              onClick={() => selectedRowData[0] && handleDeleteAddons()}
            >
              <i className="fa-solid fa-trash"></i>
              <span>{t("Delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable
          rows={addons}
          columns={columnsAddonsServices}
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

export default AddonsServices;
