import React, { useEffect, useState } from "react";
import HeadTable from "../../components/headTable/HeadTable";
import MainTable from "../../components/mainTable/MainTable";
import { Link } from "react-router-dom";
import Popup from "../../components/popup/Popup";
import InputItem from "../../components/popup/inputItem/InputItem";
import SelectItem from "../../components/popup/selectItem/SelectItem";
import { columnsManagers } from "../../utils/columnsTables";
import { t } from "i18next";
import { encryptedData, generateUUID } from "../../utils/utilsFunctions";
import Loader from "../../components/loader/Loader";
import apiAxios from "../../utils/apiAxios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Managers = () => {
  const [managers, setManagers] = useState([]);
  const [manager, setManager] = useState({});
  const [numberManagers, setNumberManagers] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [sites, setSites] = useState([]);
  const [groups, setGroups] = useState([]);

  // opens and setOpnes popups
  const [openEditName, setOpenEditName] = useState(false);
  const [openEditSite, setOpenEditSite] = useState(false);
  const [openEditGroup, setOpenEditGroup] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [openDiscountAmount, setOpenDiscountAmount] = useState(false);
  const [openPayOffDebts, setOpenPayOffDebts] = useState(false);
  const [openAddPoints, setOpenAddPoints] = useState(false);
  const [openRecoverPoints, setOpenRecoverPoints] = useState(false);

  // inputs data of popups
  const [newName, setNewName] = useState("");
  const [newSite, setNewSite] = useState("");
  const [newGroup, setNewGroup] = useState("");
  const [amountDeposit, setAmountDeposot] = useState("");
  const [noticeDeposite, setNoticeDeposite] = useState("");
  const [amountDiscount, setAmountDiscount] = useState("");
  const [noticeDiscount, setNoticeDiscount] = useState("");
  const [amountPayDebts, setAmountPayDebts] = useState("");
  const [noticePayDebts, setNoticePayDebts] = useState("");
  const [addPoints, setAddPoints] = useState("");
  const [recoverPoints, setRecoverPoints] = useState("");

  const getManagers = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/manager", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "username",
          direction: "asc",
          search,
          columns: [
            "username",
            "firstname",
            "lastname",
            "balance",
            "loan_balance",
            "name",
            "username",
            "users_count",
          ],
        }),
      });
      setManagers(data.data);
      setNumberManagers(data.total);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // get subscriber to use data in popups
  const getManager = () => {
    setManager(managers.find((item) => item.id == selectedRowData));
  };

  const handleChangeName = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.put(`api/manager/${selectedRowData[0]}`, {
        payload: encryptedData({ username: newName }),
      });
      toast.success("Successful operation");
      setOpenEditName(false);
      setNewName("");
      getManagers();
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      setLoading(false);
    }
  };

  const handleEditSite = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post(`api/manager/site`, {
        payload: encryptedData({
          manager_id: selectedRowData[0],
          site_id: newSite,
          propagate_managers: 1,
          propagate_users: 1,
        }),
      });
      toast.success("Successful operation");
      setOpenEditSite(false);
      setNewSite("");
      getManagers();
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      setLoading(false);
    }
  };

  const handleEditGroup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post(`api/manager/group`, {
        payload: encryptedData({
          manager_id: selectedRowData[0],
          group_id: newGroup,
          propagate_managers: 1,
          propagate_users: 1,
        }),
      });
      toast.success("Successful operation");
      setOpenEditGroup(false);
      setNewGroup("");
      getManagers();
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      setLoading(false);
    }
  };

  const handleDeposite = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post("api/manager/deposit", {
        payload: encryptedData({
          manager_id: selectedRowData[0],
          manager_username: manager.username,
          amount: amountDeposit,
          comment: noticeDeposite,
          transaction_id: generateUUID(),
          is_loan: false,
        }),
      });
      toast.success("Successful operation");
      setOpenDeposit(false);
      setAmountDeposot("");
      setNoticeDeposite("");
      getManagers();
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDicountAmount = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post("api/manager/withdraw", {
        payload: encryptedData({
          manager_id: selectedRowData[0],
          manager_username: manager.username,
          amount: amountDiscount,
          comment: noticeDiscount,
          transaction_id: generateUUID(),
          is_loan: false,
        }),
      });
      toast.success("Successful operation");
      setOpenDiscountAmount(false);
      setAmountDiscount("");
      setNoticeDiscount("");
      getManagers();
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePayOffDebts = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post("api/manager/payDebt", {
        payload: encryptedData({
          manager_id: selectedRowData[0],
          manager_username: manager.username,
          amount: amountDiscount,
          comment: noticeDiscount,
          transaction_id: generateUUID(),
          is_loan: false,
        }),
      });
      toast.success("Successful operation");
      setLoading(false);
      setOpenPayOffDebts(false);
      setAmountPayDebts("");
      setNoticePayDebts("");
      getManagers();
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      setLoading(false);
    }
  };

  const handleAddPoints = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post("api/manager/addRewardPoints", {
        payload: encryptedData({
          manager_id: selectedRowData[0],
          amount: addPoints,
        }),
      });
      toast.success("Successful operation");
      setOpenAddPoints(false);
      setAddPoints("");
      getManagers();
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRecoverPoints = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post("api/manager/deductRewardPoints", {
        payload: encryptedData({
          manager_id: selectedRowData[0],
          amount: recoverPoints,
        }),
      });
      toast.success("Successful operation");
      setOpenRecoverPoints(false);
      setRecoverPoints("");
      getManagers();
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteManager = (e) => {
    Swal.fire({
      title: "Delete Manager?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          if (selectedRowData.length > 1) {
            await apiAxios.post(`api/manager/bulkDelete`, {
              payload: encryptedData(selectedRowData),
            });
          } else {
            await apiAxios.delete(`api/manager/${selectedRowData[0]}`);
          }
          toast.success("Successful operation");
          setLoading(false);
          navigate(-1);
          getManagers();
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
    (async () => {
      try {
        const { data } = await apiAxios.get("api/site");
        setSites(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await apiAxios.get("api/group");
        setGroups(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    getManagers();
  }, [search, perPage, currentPage]);

  useEffect(() => {
    getManager();
  }, [selectedRowData]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("prm_managers_index")}
          title={t("managers_table_title")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          setSearch={setSearch}
        >
          <div className="content">
            <Link to={"/managers/add"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>{t("global_actions_new")}</span>
            </Link>
            <Link
              to={
                selectedRowData[0] &&
                `/managers/profile/${selectedRowData[0]}/edit`
              }
              className="item"
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("managers_tab_edit")}</span>
            </Link>
            <div
              className="item"
              onClick={() => selectedRowData[0] && setOpenEditName(true)}
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("global_actions_rename")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && setOpenEditSite(true)}
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("manager_actions_assign_site")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && setOpenEditGroup(true)}
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("manager_actions_assign_group")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && setOpenDeposit(true)}
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>{t("global_actions_deposit")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && setOpenDiscountAmount(true)}
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>{t("global_actions_withdrawal")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => selectedRowData[0] && setOpenPayOffDebts(true)}
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>{t("global_actions_pay_debt")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => selectedRowData[0] && setOpenAddPoints(true)}
            >
              <i className="fa-regular fa-file-powerpoint"></i>
              <span>{t("manager_label_add_reward_point")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => selectedRowData[0] && setOpenRecoverPoints(true)}
            >
              <i className="fa-regular fa-file-powerpoint"></i>
              <span>{t("manager_label_deduct_reward_point")}</span>
            </div>
            <div
              className="item"
              onClick={() =>
                selectedRowData.length > 0 && handleDeleteManager()
              }
            >
              <i className="fa-solid fa-trash"></i>
              <span>{t("global_actions_delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable
          rows={managers}
          columns={columnsManagers}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
          uniqueIdentifier={"managers"}
        />
      </div>
      {loading && <Loader />}
      {/* popup edit name */}
      <Popup
        title={t("manager_rename_form_title")}
        openPopup={openEditName}
        setOpenPopup={setOpenEditName}
        onSubmit={handleChangeName}
      >
        <InputItem
          label={t("user_rename_form_current_username")}
          type={"text"}
          classes={"disabled"}
          value={manager && manager.id}
        />
        <InputItem
          label={t("user_rename_form_new_username")}
          type={"text"}
          value={newName}
          onChange={setNewName}
          placeholder={""}
        />
      </Popup>

      {/* popup detect location */}
      <Popup
        title={t("manager_actions_assign_site")}
        openPopup={openEditSite}
        setOpenPopup={setOpenEditSite}
        onSubmit={handleEditSite}
      >
        <InputItem
          label={t("user_rename_form_current_username")}
          type={"text"}
          classes={"disabled"}
          value={manager && manager.id}
        />
        <SelectItem
          label={t("user_form_label_site")}
          value={newSite}
          onChange={setNewSite}
          options={
            sites &&
            sites.map((item) => {
              return { name: item.name, value: item.id };
            })
          }
        />
      </Popup>

      {/* popup detect group */}
      <Popup
        title={t("manager_actions_assign_group")}
        openPopup={openEditGroup}
        setOpenPopup={setOpenEditGroup}
        onSubmit={handleEditGroup}
      >
        <InputItem
          label={t("user_rename_form_current_username")}
          type={"text"}
          classes={"disabled"}
          value={manager && manager.id}
        />
        <SelectItem
          label={t("global_group")}
          value={newGroup}
          onChange={setNewGroup}
          options={
            groups &&
            groups.map((item) => {
              return { name: item.name, value: item.id };
            })
          }
        />
      </Popup>

      {/* popup Deposit */}
      <Popup
        title={t("user_depodrawal_form_title_deposit")}
        openPopup={openDeposit}
        setOpenPopup={setOpenDeposit}
        onSubmit={handleDeposite}
      >
        <InputItem
          label={t("user_rename_form_current_username")}
          type={"text"}
          classes={"disabled"}
          value={manager && manager.id}
        />
        <InputItem
          label={`Balance (${manager && manager.username})`}
          type={"text"}
          classes={"disabled"}
          value={manager && manager.balance}
        />
        <InputItem
          label={`Balance (${manager && manager?.parent_details?.username})`}
          type={"text"}
          classes={"disabled"}
          value={manager && manager.balance}
        />
        <InputItem
          label={t("user_depodrawal_form_amount")}
          type={"number"}
          value={amountDeposit}
          onChange={setAmountDeposot}
          placeholder={""}
        />
        <InputItem
          label={t("global_comment")}
          type={"text"}
          value={noticeDeposite}
          onChange={setNoticeDeposite}
          placeholder={""}
        />
      </Popup>
      {/* popup Discount amount */}
      <Popup
        title={t("user_depodrawal_form_title_withdrawal")}
        openPopup={openDiscountAmount}
        setOpenPopup={setOpenDiscountAmount}
        onSubmit={handleDicountAmount}
      >
        <InputItem
          label={t("user_rename_form_current_username")}
          type={"text"}
          classes={"disabled"}
          value={manager && manager.id}
        />
        <InputItem
          label={`Balance (${manager && manager.username})`}
          type={"text"}
          classes={"disabled"}
          value={manager && manager.balance}
        />
        <InputItem
          label={`Balance (${manager && manager?.parent_details?.username})`}
          type={"text"}
          classes={"disabled"}
          value={manager && manager.balance}
        />
        <InputItem
          label={t("user_depodrawal_form_amount")}
          type={"number"}
          value={amountDiscount}
          onChange={setAmountDiscount}
          placeholder={""}
        />
        <InputItem
          label={t("global_comment")}
          type={"text"}
          value={noticeDiscount}
          onChange={setNoticeDiscount}
          placeholder={""}
        />
      </Popup>
      {/* popup Pay off debts*/}
      <Popup
        title={t("global_actions_pay_debt")}
        openPopup={openPayOffDebts}
        setOpenPopup={setOpenPayOffDebts}
        onSubmit={handlePayOffDebts}
      >
        <InputItem
          label={t("user_rename_form_current_username")}
          type={"text"}
          classes={"disabled"}
          value={manager && manager.id}
        />
        <InputItem
          label={`Balance (${manager && manager.username})`}
          type={"text"}
          classes={"disabled"}
          value={manager && manager.balance}
        />
        <InputItem
          label={`Balance (${manager && manager?.parent_details?.username})`}
          type={"text"}
          classes={"disabled"}
          value={manager && manager.balance}
        />
        <InputItem
          label={t("user_depodrawal_form_amount")}
          type={"number"}
          value={amountPayDebts}
          onChange={setAmountPayDebts}
          placeholder={""}
        />
        <InputItem
          label={t("global_comment")}
          type={"text"}
          value={noticePayDebts}
          onChange={setNoticePayDebts}
          placeholder={""}
        />
        <div className="text">
          <div className="item">
            <span>Debts incurred by demo1</span>
            <h6>$ 40040</h6>
          </div>
          <div className="item">
            <span> Debts owed by demo1 to admin</span>
            <h6>$40</h6>
          </div>
        </div>
      </Popup>
      {/* popup add points*/}
      <Popup
        title={t("manager_label_add_reward_point")}
        openPopup={openAddPoints}
        setOpenPopup={setOpenAddPoints}
        onSubmit={handleAddPoints}
      >
        <InputItem
          label={t("points")}
          type={"text"}
          value={addPoints}
          onChange={setAddPoints}
        />
      </Popup>
      {/* popup recover points*/}
      <Popup
        title={t("manager_label_deduct_reward_point")}
        openPopup={openRecoverPoints}
        setOpenPopup={setOpenRecoverPoints}
        onSubmit={handleRecoverPoints}
      >
        <InputItem
          label={t("points")}
          type={"text"}
          value={recoverPoints}
          onChange={setRecoverPoints}
        />
      </Popup>
    </div>
  );
};

export default Managers;
