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
      name: t("Effective"),
    },
    {
      color: "#ff9416",
      name: t("Expired"),
    },
    {
      color: "#e3dd4e",
      name: t("Consumer"),
    },
    {
      color: "#bb3436",
      name: t("Disabled"),
    },
  ];

  const handleChangeName = (e) => {
    e.preventDefault();
    console.log({ newName });
  };

  const handleDataBalance = (e) => {
    e.preventDefault();
    console.log({ quantityMb, noticeDataBalance });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log({ password, confirmPassword });
  };

  const handleJointCompensation = (e) => {
    e.preventDefault();
    console.log({ typeCompensation });
  };

  const handleDeposite = (e) => {
    e.preventDefault();
    console.log({ noticeDeposite, amountDeposit });
  };

  const handleDicountAmount = (e) => {
    e.preventDefault();
    console.log({ noticeAmount, amountAmount });
  };

  const handlePayOffDebts = (e) => {
    e.preventDefault();
    console.log({});
  };

  useEffect(() => {
    (async () => {
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
    })();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("Subscribers")}
          statusFilter={statusFilter}
          title={[
            t("List of subscribers"),
            ` | ${numberSubscribers}`,
            t("records found"),
          ]}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          setSearch={setSearch}
        >
          <div className="content">
            <Link to={"/subscribers/add"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>{t("Add")}</span>
            </Link>
            <Link
              to={
                selectedRowData.length > 0 &&
                `subscribers/${selectedRowData[0]}/edit`
              }
              className="item"
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("Edit")}</span>
            </Link>
            <div
              className="item btn_open_model"
              onClick={() => setOpenChangeName(true)}
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("Name changed")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => setOpenDataBalance(true)}
            >
              <i className="fa-solid fa-person-chalkboard"></i>
              <span>{t("Add data balance")}</span>
            </div>
            <Link
              to={
                selectedRowData.length > 0 &&
                `/subscribers/activate/${selectedRowData[0]}`
              }
              className="item"
            >
              <i className="fa-solid fa-play"></i>
              <span>Activate</span>
            </Link>
            <Link
              to={
                selectedRowData.length > 0 &&
                `/subscribers/extend/${selectedRowData[0]}`
              }
              className="item"
            >
              <i className="fa-solid fa-star-of-life"></i>
              <span>{t("extension")}</span>
            </Link>
            <div
              className="item btn_open_model"
              onClick={() => setOpenChangePassowrd(true)}
            >
              <i className="fa-solid fa-key"></i>
              <span>{t("Change password")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => setOpenJointCompensation(true)}
            >
              <i className="fa-light fa-puzzle-piece"></i>
              <span> {t("compensation")}</span>
            </div>
            <Link
              to={
                selectedRowData.length > 0 &&
                `/subscribers/addon/${selectedRowData[0]}`
              }
              className="item"
            >
              <i className="fa-solid fa-star-of-life"></i>
              <span>{t("Purchase additional service")}</span>
            </Link>
            <Link
              to={
                selectedRowData.length > 0 &&
                `/subscribers/change-package/${selectedRowData[0]}`
              }
              className="item"
            >
              <i className="fa-light fa-puzzle-piece"></i>
              <span>{t("Change the package")}</span>
            </Link>
            <div
              className="item btn_open_model"
              onClick={() => setOpenDeposit(true)}
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>{t("Deposit")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => setOpenDiscountAmount(true)}
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>{t("Discount amount")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => setOpenPayOffDebts(true)}
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>{t("Pay off debts")}</span>
            </div>
            <div className="item">
              <i className="fa-regular fa-handshake"></i>
              <span> {t("End subscription")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>{t("Delete")}</span>
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
        />
      </div>
      {loading && <Loader />}
      {/* popup change name*/}
      <Popup
        title={t("Change Name")}
        openPopup={openChangeName}
        setOpenPopup={setOpenChangeName}
        onSubmit={handleChangeName}
      >
        <InputItem
          label={t("Current name")}
          type={"text"}
          value={"demo1"}
          classes={"disabled"}
        />
        <InputItem
          label={t("New name")}
          type={"text"}
          value={newName}
          onChange={setNewName}
          placeholder={"enter new name"}
        />
      </Popup>
      {/* popup Add or withdraw data balance*/}
      <Popup
        title={"Add or withdraw data balance"}
        openPopup={openDataBalance}
        setOpenPopup={setOpenDataBalance}
        onSubmit={handleDataBalance}
      >
        <InputItem
          label={t("Current name")}
          type={"text"}
          value={"demo1"}
          classes={"disabled"}
        />
        <SelectItem
          label={t("Data type")}
          value={dataTypeBalance}
          onChange={setDataTypeBalance}
          options={[
            { name: "Download + Upload", value: "rxtx_mbytes" },
            { name: "Download", value: "rx_mbytes" },
            { name: "Download", value: "tx_mbytes" },
          ]}
        />
        <InputItem
          label={t("Quantity (MB)")}
          type={"number"}
          value={quantityMb}
          onChange={setQuantityMb}
          placeholder={"0"}
        />
        <InputItem
          label={t("Notice")}
          type={"text"}
          value={noticeDataBalance}
          onChange={setNoticeDataBalance}
          placeholder={""}
        />
      </Popup>
      {/* popup change psassword*/}
      <Popup
        title={t("Change Password")}
        openPopup={openChangePassword}
        setOpenPopup={setOpenChangePassowrd}
        onSubmit={handleChangePassword}
      >
        <InputItem
          label={t("password")}
          type={"password"}
          value={password}
          onChange={setPassowrd}
          placeholder={""}
        />
        <InputItem
          label={t("confirm password")}
          type={"password"}
          value={confirmPassword}
          onChange={setConfirmPassowrd}
          placeholder={""}
        />
      </Popup>
      {/* popup Joint compensation */}
      <Popup
        title={t("Joint compensation")}
        openPopup={openJointCompensation}
        setOpenPopup={setOpenJointCompensation}
        onSubmit={handleJointCompensation}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <InputItem
            label={t("Username")}
            type={"text"}
            classes={"disabled"}
            value={"demo1"}
          />
          <InputItem
            label={t("Owner")}
            type={"text"}
            classes={"disabled"}
            value={"Manager_2"}
          />
          <InputItem
            label={t("Service")}
            type={"text"}
            classes={"disabled"}
            value={"slow"}
          />
          <InputItem
            label={t("Subscription expiration")}
            type={"text"}
            classes={"disabled"}
            value={"2021-10-08 13:06:00"}
          />
          <SelectItem
            label={t("Type of compensation")}
            value={typeCompensation}
            onChange={setTypeCompensation}
            options={[
              { name: "days", value: "days" },
              { name: "traffic", value: "traffic" },
              { name: "time", value: "uptime" },
            ]}
          />
        </div>
      </Popup>
      {/* popup Deposit */}
      <Popup
        title={t("Deposit")}
        openPopup={openDeposit}
        setOpenPopup={setOpenDeposit}
        onSubmit={handleDeposite}
      >
        <InputItem
          label={t("Username")}
          type={"text"}
          classes={"disabled"}
          value={"demo1"}
        />
        <InputItem
          label={t("Amount")}
          type={"number"}
          value={amountDeposit}
          onChange={setAmountDeposot}
          placeholder={""}
        />
        <InputItem
          label={t("Notice")}
          type={"text"}
          value={noticeDeposite}
          onChange={setNoticeDeposite}
          placeholder={""}
        />
      </Popup>
      {/* popup Discount amount */}
      <Popup
        title={t("Discount amount")}
        openPopup={openDiscountAmount}
        setOpenPopup={setOpenDiscountAmount}
        onSubmit={handleDicountAmount}
      >
        <InputItem
          label={t("Username")}
          type={"text"}
          classes={"disabled"}
          value={"demo1"}
        />
        <InputItem
          label={t("Amount")}
          type={"number"}
          value={amountDiscount}
          onChange={setAmountDiscount}
          placeholder={""}
        />
        <InputItem
          label={t("Notice")}
          type={"text"}
          value={noticeDiscount}
          onChange={setNoticeDiscount}
          placeholder={""}
        />
      </Popup>
      {/* popup Pay off debts*/}
      <Popup
        title={t("Pay off debts")}
        openPopup={openPayOffDebts}
        setOpenPopup={setOpenPayOffDebts}
        onSubmit={handlePayOffDebts}
      >
        <InputItem
          label={t("Username")}
          type={"text"}
          classes={"disabled"}
          value={"demo1"}
        />
        <InputItem
          label={"Amount"}
          type={"number"}
          value={amountPayDebts}
          onChange={setAmountPayDebts}
          placeholder={""}
        />
        <InputItem
          label={t("Notice")}
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
