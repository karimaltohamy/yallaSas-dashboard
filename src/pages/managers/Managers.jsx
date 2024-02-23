import React, { useEffect, useState } from "react";
import HeadTable from "../../components/headTable/HeadTable";
import MainTable from "../../components/mainTable/MainTable";
import { Link } from "react-router-dom";
import Popup from "../../components/popup/Popup";
import InputItem from "../../components/popup/inputItem/InputItem";
import SelectItem from "../../components/popup/selectItem/SelectItem";
import { mockDataManagers } from "../../utils/mockData";
import { columnsManagers } from "../../utils/columnsTables";
import { t } from "i18next";
import { encryptedData } from "../../utils/utilsFunctions";
import Loader from "../../components/loader/Loader";
import apiAxios from "../../utils/apiAxios";

const Managers = () => {
  const [managers, setManagers] = useState([]);
  const [numberManagers, setNumberManagers] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);
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

  const handleEditName = (e) => {
    e.preventDefault();
    console.log({});
  };

  const handleEditSite = (e) => {
    e.preventDefault();
    console.log({});
  };

  const handleEditGroup = (e) => {
    e.preventDefault();
    console.log({});
  };

  const handleDeposite = () => {
    e.preventDefault();
    console.log({ noticeDeposite, amountDeposit });
  };

  const handleDicountAmount = () => {
    e.preventDefault();
    console.log({ noticeAmount, amountAmount });
  };

  const handlePayOffDebts = (e) => {
    e.preventDefault();
    console.log({});
  };

  const handleAddPoints = (e) => {
    e.preventDefault();
    console.log({});
  };

  const handleRecoverPoints = (e) => {
    e.preventDefault();
    console.log({});
  };

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

  useEffect(() => {
    getManagers();
  }, [search, perPage, currentPage]);

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
            <div className="item">
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
        />
      </div>
      {loading && <Loader />}
      {/* popup edit name */}
      <Popup
        title={"Edit name"}
        openPopup={openEditName}
        setOpenPopup={setOpenEditName}
        onSubmit={handleEditName}
      >
        <InputItem
          label={"Username"}
          type={"text"}
          classes={"disabled"}
          value={"demo1"}
        />
        <InputItem
          label={"New name"}
          type={"text"}
          value={newName}
          onChange={setNewName}
          placeholder={""}
        />
      </Popup>

      {/* popup detect location */}
      <Popup
        title={"Detect location"}
        openPopup={openEditSite}
        setOpenPopup={setOpenEditSite}
        onSubmit={handleEditSite}
      >
        <InputItem
          label={"Username"}
          type={"text"}
          classes={"disabled"}
          value={"demo1"}
        />
        <SelectItem
          label={"The site"}
          value={newGroup}
          onChange={setNewGroup}
          options={[{ name: "default", value: "default" }]}
        />
      </Popup>

      {/* popup detect group */}
      <Popup
        title={"Detect group"}
        openPopup={openEditGroup}
        setOpenPopup={setOpenEditGroup}
        onSubmit={handleEditGroup}
      >
        <InputItem
          label={"Username"}
          type={"text"}
          classes={"disabled"}
          value={"demo1"}
        />
        <SelectItem
          label={"The group"}
          value={newSite}
          onChange={setNewSite}
          options={[{ name: "default", value: "default" }]}
        />
      </Popup>

      {/* popup Deposit */}
      <Popup
        title={"Deposit"}
        openPopup={openDeposit}
        setOpenPopup={setOpenDeposit}
        onSubmit={handleDeposite}
      >
        <InputItem
          label={"Username"}
          type={"text"}
          classes={"disabled"}
          value={"demo1"}
        />
        <InputItem
          label={"Balance (Manager_4)"}
          type={"text"}
          classes={"disabled"}
          value={"2,011,721.00"}
        />
        <InputItem
          label={"Balance (admin)"}
          type={"text"}
          classes={"disabled"}
          value={"2,011,721.00"}
        />
        <InputItem
          label={"Amount"}
          type={"number"}
          value={amountDeposit}
          onChange={setAmountDeposot}
          placeholder={""}
        />
        <InputItem
          label={"Notice"}
          type={"text"}
          value={noticeDeposite}
          onChange={setNoticeDeposite}
          placeholder={""}
        />
      </Popup>
      {/* popup Discount amount */}
      <Popup
        title={"Discount amount"}
        openPopup={openDiscountAmount}
        setOpenPopup={setOpenDiscountAmount}
        onSubmit={handleDicountAmount}
      >
        <InputItem
          label={"Username"}
          type={"text"}
          classes={"disabled"}
          value={"demo1"}
        />
        <InputItem
          label={"Balance (Manager_4)"}
          type={"text"}
          classes={"disabled"}
          value={"2,011,721.00"}
        />
        <InputItem
          label={"Balance (admin)"}
          type={"text"}
          classes={"disabled"}
          value={"2,011,721.00"}
        />
        <InputItem
          label={"Amount"}
          type={"number"}
          value={amountDiscount}
          onChange={setAmountDiscount}
          placeholder={""}
        />
        <InputItem
          label={"Notice"}
          type={"text"}
          value={noticeDiscount}
          onChange={setNoticeDiscount}
          placeholder={""}
        />
      </Popup>
      {/* popup Pay off debts*/}
      <Popup
        title={"Pay off debts"}
        openPopup={openPayOffDebts}
        setOpenPopup={setOpenPayOffDebts}
        onSubmit={handlePayOffDebts}
      >
        <InputItem
          label={"Username"}
          type={"text"}
          classes={"disabled"}
          value={"demo1"}
        />
        <InputItem
          label={"Balance (Manager_4)"}
          type={"text"}
          classes={"disabled"}
          value={"2,011,721.00"}
        />
        <InputItem
          label={"Balance (admin)"}
          type={"text"}
          classes={"disabled"}
          value={"2,011,721.00"}
        />
        <InputItem
          label={t("Amount")}
          type={"number"}
          value={amountPayDebts}
          onChange={setAmountPayDebts}
          placeholder={""}
        />
        <InputItem
          label={"Notice"}
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
        title={"Add points"}
        openPopup={openAddPoints}
        setOpenPopup={setOpenAddPoints}
        onSubmit={handleAddPoints}
      >
        <InputItem
          label={"points"}
          type={"text"}
          value={addPoints}
          onChange={setAddPoints}
        />
      </Popup>
      {/* popup recover points*/}
      <Popup
        title={"Recover points"}
        openPopup={openRecoverPoints}
        setOpenPopup={setOpenRecoverPoints}
        onSubmit={handleRecoverPoints}
      >
        <InputItem
          label={"points"}
          type={"text"}
          value={recoverPoints}
          onChange={setRecoverPoints}
        />
      </Popup>
    </div>
  );
};

export default Managers;
