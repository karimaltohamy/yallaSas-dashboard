import React, { useEffect, useState } from "react";
import HeadTable from "../../components/headTable/HeadTable";
import MainTable from "../../components/mainTable/MainTable";
import { columnsSubscibers } from "../../utils/columnsTables";
import Popup from "../../components/popup/Popup";
import InputItem from "../../components/popup/inputItem/InputItem";
import SelectItem from "../../components/popup/selectItem/SelectItem";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import apiAxios from "../../utils/apiAxios";
import { secretPass } from "../../utils/data";
import CryptoJS from "crypto-js";
import Loader from "../../components/loader/Loader";
import { toast } from "react-toastify";
import { generateUUID } from "../../utils/utilsFunctions";

const Subscribers = () => {
  const { t } = useTranslation();
  const [subscribers, setSubscribers] = useState([]);
  const [numberSubscribers, setNumberSubscribers] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [subscriber, setSubscriber] = useState({});

  // opens and setOpnes popups
  const [openChangeName, setOpenChangeName] = useState(false);
  const [openDataBalance, setOpenDataBalance] = useState(false);
  const [openChangePassword, setOpenChangePassowrd] = useState(false);
  const [openJointCompensation, setOpenJointCompensation] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [openDiscountAmount, setOpenDiscountAmount] = useState(false);
  const [openPayOffDebts, setOpenPayOffDebts] = useState(false);

  // inputs data of popups
  const [newName, setNewName] = useState("");
  const [quantityMb, setQuantityMb] = useState("");
  const [noticeDataBalance, setNoticeDataBalance] = useState("");
  const [dataTypeBalance, setDataTypeBalance] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [typeCompensation, setTypeCompensation] = useState("");
  const [amountDeposit, setAmountDeposot] = useState("");
  const [noticeDeposite, setNoticeDeposite] = useState("");
  const [amountDiscount, setAmountDiscount] = useState("");
  const [noticeDiscount, setNoticeDiscount] = useState("");
  const [amountPayDebts, setAmountPayDebts] = useState("");
  const [noticePayDebts, setNoticePayDebts] = useState("");

  const statusFilter = [
    {
      color: "#9fe22b",
      name: t("users_status_active"),
    },
    {
      color: "#ff9416",
      name: t("users_status_expired"),
    },
    {
      color: "#e3dd4e",
      name: t("users_status_traffic_depleted"),
    },
    {
      color: "#bb3436",
      name: t("users_status_disabled"),
    },
  ];

  const encryptedData = (data) => {
    const dataToEncrypt = JSON.stringify(data);
    let encrypted = CryptoJS.AES.encrypt(dataToEncrypt, secretPass).toString();

    return encrypted;
  };

  // get subscriber to use data in popups
  const selectSubscriber = () => {
    setSubscriber(subscribers.find((item) => item.id == selectedRowData));
  };

  const getSubscriber = async () => {
    let encrypted;
    const dataToEncrypt = JSON.stringify({
      page: currentPage,
      count: perPage,
      sortBy: "username",
      direction: "asc",
      search,
      columns: [
        "idx",
        "username",
        "firstname",
        "lastname",
        "expiration",
        "parent_username",
        "name",
        "loan_balance",
        "traffic",
        "remaining_days",
      ],
    });
    encrypted = CryptoJS.AES.encrypt(dataToEncrypt, secretPass).toString();
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/user", {
        payload: encrypted,
      });
      setSubscribers(data.data);
      setNumberSubscribers(data.total);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChangeName = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post(`api/user/rename/${subscriber.id}`, {
        payload: encryptedData({ new_username: newName }),
      });
      toast.success("Successful operation");
      setOpenChangeName(false);
      setLoading(false);
      getSubscriber();
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
      setLoading(false);
    }
  };

  // handle Add or withdraw data balance
  const handleDataBalance = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await apiAxios.post(`api/user/addTraffic`, {
        payload: encryptedData({
          user_id: subscriber.id,
          username: subscriber.username,
          amount: quantityMb,
          comment: noticeDataBalance,
          transaction_id: generateUUID(),
          target: dataTypeBalance,
        }),
      });
      toast.success("Successful operation");
      setOpenDataBalance(false);
      setQuantityMb("");
      setNoticeDataBalance("");
      setDataTypeBalance("");
      setLoading(false);
      getSubscriber();
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
      setLoading(false);
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log({ password, confirmPassword });
  };

  const handleJointCompensation = (e) => {
    e.preventDefault();
    console.log({ typeCompensation });
  };

  const handleDeposite = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post("api/user/deposit", {
        payload: encryptedData({
          user_id: subscriber.id,
          username: subscriber.username,
          amount: amountDeposit,
          transaction_id: generateUUID(),
        }),
      });
      toast.success("Successful operation");
      setLoading(false);
      setOpenDeposit(false);
      setAmountDeposot("");
      setNoticeDeposite("");
      getSubscriber();
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
      setLoading(false);
    }
  };

  const handleDicountAmount = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post("api/user/withdraw", {
        payload: encryptedData({
          user_id: subscriber.id,
          username: subscriber.username,
          amount: amountDiscount,
          transaction_id: generateUUID(),
        }),
      });
      toast.success("Successful operation");
      setLoading(false);
      setOpenDiscountAmount(false);
      setAmountDiscount("");
      setNoticeDiscount("");
      getSubscriber();
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
      setLoading(false);
    }
  };

  const handlePayOffDebts = async (e) => {
    e.preventDefault();
  };

  const handleDeleteSubsciber = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (selectedRowData.length > 1) {
        await apiAxios.post(`api/user/bulkDelete`, {
          payload: encryptedData(selectedRowData),
        });
      } else {
        await apiAxios.delete(`api/user/${subscriber.id}`);
      }
      toast.success("Successful operation");
      setLoading(false);
      getSubscriber();
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSubscriber();
  }, [search, perPage, currentPage]);

  useEffect(() => {
    selectSubscriber();
  }, [selectedRowData]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("users - index")}
          statusFilter={statusFilter}
          title={[
            t("users_table_title"),
            ` | `,
            t("global_table_label_found"),
            `${numberSubscribers}`,
            t("global_table_label_records"),
          ]}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          setSearch={setSearch}
        >
          <div className="content">
            <Link to={"/subscribers/add"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>{t("global_actions_new")}</span>
            </Link>
            <Link
              to={
                selectedRowData.length > 0 &&
                `/subscribers/${selectedRowData[0]}/edit`
              }
              className="item"
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("global_actions_edit")}</span>
            </Link>
            <div
              className="item btn_open_model"
              onClick={() =>
                selectedRowData.length > 0 && setOpenChangeName(true)
              }
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("global_actions_rename")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() =>
                selectedRowData.length > 0 && setOpenDataBalance(true)
              }
            >
              <i className="fa-solid fa-person-chalkboard"></i>
              <span>{t("users_action_add_traffic")}</span>
            </div>
            <Link
              to={
                selectedRowData.length > 0 &&
                `/subscribers/activate/${selectedRowData[0]}`
              }
              className="item"
            >
              <i className="fa-solid fa-play"></i>
              <span>{t("users_action_activate")}</span>
            </Link>
            <Link
              to={
                selectedRowData.length > 0 &&
                `/subscribers/extend/${selectedRowData[0]}`
              }
              className="item"
            >
              <i className="fa-solid fa-star-of-life"></i>
              <span>{t("users_action_extend")}</span>
            </Link>
            <div
              className="item btn_open_model"
              onClick={() =>
                selectedRowData.length > 0 && setOpenChangePassowrd(true)
              }
            >
              <i className="fa-solid fa-key"></i>
              <span>{t("users_action_change_password")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() =>
                selectedRowData.length > 0 && setOpenJointCompensation(true)
              }
            >
              <i className="fa-light fa-puzzle-piece"></i>
              <span> {t("users_action_compensate")}</span>
            </div>
            <Link
              to={
                selectedRowData.length > 0 &&
                `/subscribers/addon/${selectedRowData[0]}`
              }
              className="item"
            >
              <i className="fa-solid fa-star-of-life"></i>
              <span>{t("users_action_addon")}</span>
            </Link>
            <Link
              to={
                selectedRowData.length > 0 &&
                `/subscribers/change-package/${selectedRowData[0]}`
              }
              className="item"
            >
              <i className="fa-light fa-puzzle-piece"></i>
              <span>{t("users_action_change_profile")}</span>
            </Link>
            <div
              className="item btn_open_model"
              onClick={() => selectedRowData.length > 0 && setOpenDeposit(true)}
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>{t("global_actions_deposit")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() =>
                selectedRowData.length > 0 && setOpenDiscountAmount(true)
              }
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>{t("global_actions_withdrawal")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() =>
                selectedRowData.length > 0 && setOpenPayOffDebts(true)
              }
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>{t("global_actions_pay_debt")}</span>
            </div>
            <div className="item">
              <i className="fa-regular fa-handshake"></i>
              <span> {t("users_action_cancel")}</span>
            </div>
            <div
              className="item"
              onClick={selectedRowData.length > 0 && handleDeleteSubsciber}
            >
              <i className="fa-solid fa-trash"></i>
              <span>{t("global_actions_delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable
          rows={subscribers}
          columns={columnsSubscibers}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
          uniqueIdentifier={"subscriber"}
        />
      </div>
      {loading && <Loader />}
      {/* popup change name*/}
      <Popup
        title={t("user_rename_form_title")}
        openPopup={openChangeName}
        setOpenPopup={setOpenChangeName}
        onSubmit={handleChangeName}
      >
        <InputItem
          label={t("user_rename_form_current_username")}
          type={"text"}
          value={subscriber ? subscriber.firstname : null}
          classes={"disabled"}
        />
        <InputItem
          label={t("user_rename_form_new_username")}
          type={"text"}
          value={newName}
          onChange={setNewName}
          placeholder={"enter new name"}
        />
      </Popup>
      {/* popup Add or withdraw data balance*/}
      <Popup
        title={t("user_traffic_form_title")}
        openPopup={openDataBalance}
        setOpenPopup={setOpenDataBalance}
        onSubmit={handleDataBalance}
      >
        <InputItem
          label={t("global_username")}
          type={"text"}
          value={subscriber ? subscriber.firstname : null}
          classes={"disabled"}
        />
        <SelectItem
          label={t("user_traffic_form_target")}
          value={dataTypeBalance}
          onChange={setDataTypeBalance}
          options={[
            { name: "Download + Upload", value: "rxtx_mbytes" },
            { name: "Download", value: "rx_mbytes" },
            { name: "Upload", value: "tx_mbytes" },
          ]}
        />
        <InputItem
          label={t("user_traffic_form_amount")}
          type={"number"}
          value={quantityMb}
          onChange={setQuantityMb}
          placeholder={"0"}
        />
        <InputItem
          label={t("global_comment")}
          type={"text"}
          value={noticeDataBalance}
          onChange={setNoticeDataBalance}
          placeholder={""}
        />
      </Popup>
      {/* popup change psassword*/}
      <Popup
        title={t("users_action_change_password")}
        openPopup={openChangePassword}
        setOpenPopup={setOpenChangePassowrd}
        onSubmit={handleChangePassword}
      >
        <InputItem
          label={t("user_form_label_password")}
          type={"password"}
          value={password}
          onChange={setPassowrd}
          placeholder={""}
        />
        <InputItem
          label={t("user_form_label_password_confirm")}
          type={"password"}
          value={confirmPassword}
          onChange={setConfirmPassowrd}
          placeholder={""}
        />
      </Popup>
      {/* popup Joint compensation */}
      <Popup
        title={t("user_compensation_title")}
        openPopup={openJointCompensation}
        setOpenPopup={setOpenJointCompensation}
        onSubmit={handleJointCompensation}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <InputItem
            label={t("global_username")}
            type={"text"}
            classes={"disabled"}
            value={"demo1"}
          />
          <InputItem
            label={t("global_owner")}
            type={"text"}
            classes={"disabled"}
            value={"Manager_2"}
          />
          <InputItem
            label={t("global_profile")}
            type={"text"}
            classes={"disabled"}
            value={"slow"}
          />
          <InputItem
            label={t("global_expiration")}
            type={"text"}
            classes={"disabled"}
            value={"2021-10-08 13:06:00"}
          />
          <SelectItem
            label={t("user_compensation_target")}
            value={typeCompensation}
            onChange={setTypeCompensation}
            options={[
              { name: "What to compensate ?", value: "" },
              { name: "Uptime", value: "uptime" },
              { name: "Traffic", value: "traffic" },
              { name: "Days", value: "days" },
            ]}
          />
        </div>
      </Popup>
      {/* popup Deposit */}
      <Popup
        title={t("user_depodrawal_form_title_deposit")}
        openPopup={openDeposit}
        setOpenPopup={setOpenDeposit}
        onSubmit={handleDeposite}
      >
        <InputItem
          label={t("user_depodrawal_form_username")}
          type={"text"}
          classes={"disabled"}
          value={subscriber ? subscriber.username : null}
        />
        <InputItem
          label={t("user_depodrawal_form_amount")}
          type={"number"}
          value={amountDeposit}
          onChange={setAmountDeposot}
          placeholder={""}
        />
        <InputItem
          label={t("user_depodrawal_form_comment")}
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
          label={t("user_depodrawal_form_username")}
          type={"text"}
          classes={"disabled"}
          value={subscriber ? subscriber.username : null}
        />
        <InputItem
          label={t("user_depodrawal_form_amount")}
          type={"number"}
          value={amountDiscount}
          onChange={setAmountDiscount}
          placeholder={""}
        />
        <InputItem
          label={t("user_depodrawal_form_comment")}
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
          label={t("user_depodrawal_form_username")}
          type={"text"}
          classes={"disabled"}
          value={subscriber ? subscriber.username : null}
        />
        <InputItem
          label={"user_depodrawal_form_amount"}
          type={"number"}
          value={amountPayDebts}
          onChange={setAmountPayDebts}
          placeholder={""}
        />
        <InputItem
          label={t("user_depodrawal_form_comment")}
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
    </div>
  );
};

export default Subscribers;
