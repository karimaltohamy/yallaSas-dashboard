import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { Link } from "react-router-dom";
import { columnsPackages } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import { mockDataPackages } from "../../../utils/mockData";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const PackagesList = () => {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const getPackages = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/profile", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: null,
          direction: "asc",
          search,
          columns: [
            "name",
            "price",
            "pool",
            "downrate",
            "uprate",
            "type",
            "expiration_amount",
            "users_count",
            "online_users_count",
          ],
        }),
      });
      setPackages(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyPackage = async () => {
    Swal.fire({
      title: "New Profile Name ",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      input: "text",
      inputPlaceholder: "Enter new profile name",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiAxios.post("api/profile/copy", {
            payload: encryptedData({
              profile_id: selectedRowData[0],
              new_name: result.value,
            }),
          });
          toast.success("Successful operation");
          getPackages();
        } catch (error) {
          console.log(error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  const handleDeleteGroup = async (e) => {
    Swal.fire({
      title: "Delete Package?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          if (selectedRowData.length > 1) {
            await apiAxios.delete(`api/profile/bulkDelete`, {
              payload: encryptedData(selectedRowData),
            });
          } else {
            await apiAxios.delete(`api/profile/${selectedRowData[0]}`);
          }

          toast.success("Successful operation");
          setLoading(false);
          getPackages();
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
    getPackages();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("menu_profiles_list")}
          title={t("menu_profiles_list")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          setSearch={setSearch}
        >
          <div className="content">
            <Link to={"/packages/add/1"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>{t("global_actions_new")}</span>
            </Link>
            <Link
              to={selectedRowData.length > 0 && "/packages/profile/1/edit"}
              className="item"
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("users_tab_edit")}</span>
            </Link>
            <div
              className="item"
              onClick={() => selectedRowData.length > 0 && handleCopyPackage()}
            >
              <i className="fa-regular fa-copy"></i>
              <span>{t("global_actions_copy")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData.length > 0 && handleDeleteGroup()}
            >
              <i className="fa-solid fa-trash"></i>
              <span>{t("global_actions_delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable
          rows={packages}
          columns={columnsPackages}
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

export default PackagesList;
