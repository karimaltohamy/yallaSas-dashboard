import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsSettingsAcl } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import Popup from "../../../components/popup/Popup";
import "./settingsAcl.scss";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Select from "react-select";
import SelectItem from "../../../components/popup/selectItem/SelectItem";
import { getTreeViewUtilityClass } from "@mui/x-tree-view";

const SettingsAcl = () => {
  const [settingsAcl, setSettingsAcl] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [managers, setManagers] = useState([]);
  const [dashboards, setDashboards] = useState([]);
  const [givenPermissions, setGivenPermissions] = useState([]);
  const [availablePermissions, setAvailablePermissions] = useState([]);
  const [data, setData] = useState([
    {
      id: "1",
      text: "Parent Node",
      children: [
        { id: "2", text: "Child Node 1" },
        { id: "3", text: "Child Node 2" },
      ],
    },
  ]);
  // opens and setOpnes popups
  const [openRestrictGroup, setOpenRestrictGroup] = useState(false);
  const [openGroupDashboard, setOpenGroupDashboard] = useState(false);

  // inputs data of popups
  const [restrictManagers, setRestrictManagers] = useState("");
  const [selectedDashboard, setSelectedDashboard] = useState("");

  const getSettingsAcl = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/acl", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: null,
          direction: "asc",
          search,
          columns: ["name", "dashboard_name", "total"],
        }),
      });
      setSettingsAcl(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getManagers = async () => {
    try {
      const { data } = await apiAxios.get("api/index/manager");
      setManagers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDashboards = async () => {
    try {
      const { data } = await apiAxios.get("api/dashboardManager");
      setDashboards(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGivenPermissions = async () => {
    try {
      const { data } = await apiAxios.get(
        `api/acl/given/${selectedRowData[0]}`
      );
      setGivenPermissions(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAvailablePermissions = async () => {
    try {
      const { data } = await apiAxios.get(
        `api/acl/available/${selectedRowData[0]}`
      );
      setAvailablePermissions(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddGroup = (e) => {
    Swal.fire({
      title: "Group Name?",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.post(`api/aclgroup`, {
            payload: encryptedData({ name: result.value }),
          });
          toast.success("Successful operation");
          getSettingsAcl();
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

  const handleCopyGroup = (e) => {
    Swal.fire({
      title: "New Group Name?",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.post(`api/aclgroup/copy`, {
            payload: encryptedData({
              group_id: selectedRowData[0],
              name: result.value,
            }),
          });
          toast.success("Successful operation");
          getSettingsAcl();
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

  const handleRestrict = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post("api/acl/restrict", {
        payload: encryptedData({
          group_id: selectedRowData[0],
          managers: restrictManagers,
        }),
      });
      toast.success("Successfull Operation");
      setOpenRestrictGroup(false);
      setRestrictManagers([]);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSetGroupDashboard = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.put(`api/aclgroup/${selectedRowData[0]}`, {
        payload: encryptedData({
          dashboard_id: selectedDashboard,
        }),
      });
      toast.success("Successfull Operation");
      setOpenGroupDashboard(false);
      setSelectedDashboard("");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRenameGroup = (e) => {
    Swal.fire({
      title: "New Group Name?",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.put(`api/aclgroup/${selectedRowData[0]}`, {
            payload: encryptedData({ name: result.value }),
          });
          toast.success("Successful operation");
          getSettingsAcl();
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

  const handleDeleteGroup = (e) => {
    Swal.fire({
      title: "Delete Group?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(getTreeViewUtilityClass);
        try {
          await apiAxios.delete(`api/aclgroup/${selectedRowData[0]}`);
          toast.success("Successful operation");
          setLoading(false);
          getSettingsAcl();
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
          setLoading(false);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  useEffect(() => {
    getSettingsAcl();
    getManagers();
    getDashboards();
  }, []);

  useEffect(() => {
    selectedRowData[0] && getGivenPermissions();
    selectedRowData[0] && getAvailablePermissions();
  }, [selectedRowData]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("settings / acl")}
          title={t("Security Groups")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          setSearch={setSearch}
        >
          <div className="content">
            <div className="item" onClick={() => handleAddGroup()}>
              <i className="fa-solid fa-plus"></i>
              <span>{t("global_actions_new")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && handleCopyGroup()}
            >
              <i class="fa-regular fa-copy"></i>
              <span>{t("global_actions_copy")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && setOpenRestrictGroup(true)}
            >
              <i class="fa-solid fa-users-line"></i>
              <span>{t("Restrict To...")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && setOpenGroupDashboard(true)}
            >
              <i class="fa-solid fa-gauge"></i>
              <span>{t("Set Dashboard...")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && handleRenameGroup()}
            >
              <i class="fa-regular fa-pen-to-square"></i>
              <span>{t("Rename")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && handleDeleteGroup()}
            >
              <i class="fa-regular fa-trash-can"></i>
              <span>{t("Delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable
          rows={settingsAcl}
          columns={columnsSettingsAcl}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
        />
      </div>

      <div className="boxs_trees">
        <div className="row line">
          <div className="col-12 col-md-5">
            <div className="box_tree">
              <div className="head">
                <i className="fa-solid fa-user"></i>
                <h4>{t("Given Permissions")}</h4>
              </div>
              <div className="box_content"></div>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div className="btns">
              <button className="btn_exchange">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="btn_exchange">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="box_tree">
              <div className="head">
                <i className="fa-solid fa-desktop"></i>
                <h4>{t("Available Permissions")}</h4>
              </div>
              <div className="box_content"></div>
            </div>
          </div>
        </div>
      </div>
      {/* popup */}
      <Popup
        title={t("Restrict Group")}
        openPopup={openRestrictGroup}
        setOpenPopup={setOpenRestrictGroup}
        onSubmit={handleRestrict}
      >
        <Select
          isMulti
          onChange={(newValue) =>
            setRestrictManagers(newValue.map((item) => item.value))
          }
          options={
            managers &&
            managers.map((item) => ({ value: item.id, label: item.username }))
          }
        />
      </Popup>

      {/* popup Set Group Dashboard */}
      <Popup
        title={t("Set Group Dashboard")}
        openPopup={openGroupDashboard}
        setOpenPopup={setOpenGroupDashboard}
        onSubmit={handleSetGroupDashboard}
      >
        <SelectItem
          label={"Select Dashboard"}
          value={selectedDashboard}
          onChange={setSelectedDashboard}
          options={dashboards && dashboards}
        />
      </Popup>
      {loading && <Loader />}
    </div>
  );
};

export default SettingsAcl;
