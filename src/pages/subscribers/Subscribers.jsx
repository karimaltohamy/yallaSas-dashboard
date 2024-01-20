import React, { useState } from "react";
import HeadTable from "../../components/headTable/HeadTable";
import MainTable from "../../components/mainTable/MainTable";
import { mockDataSubscribes } from "../../utils/mockData";
import { columnsSubscibers } from "../../utils/columnsTables";
import Popup from "../../components/popup/Popup";
import InputItem from "../../components/popup/inputItem/InputItem";
import SelectItem from "../../components/popup/selectItem/SelectItem";
import { Link } from "react-router-dom";

const Subscribers = () => {
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
      color: "rgb(235, 219, 1)",
      name: "Effective",
    },
    {
      color: "#257e67",
      name: "Expired",
    },
    {
      color: "rgb(1, 235, 20)",
      name: "Consumer",
    },
    {
      color: "#bb3436",
      name: "Disabled",
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

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="subscribers"
          statusFilter={statusFilter}
          title="List of subscribers"
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <Link to={"/subscribers/add/1"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>Add</span>
            </Link>
            <Link to={"/subscribers/1"} className="item">
              <i className="fa-regular fa-pen-to-square"></i>
              <span>Edit</span>
            </Link>
            <div
              className="item btn_open_model"
              onClick={() => setOpenChangeName(true)}
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span>Name changed</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => setOpenDataBalance(true)}
            >
              <i className="fa-solid fa-person-chalkboard"></i>
              <span>Add data balance</span>
            </div>
            <Link to={"/subscribers/activate/1"} className="item">
              <i className="fa-solid fa-play"></i>
              <span>Activate</span>
            </Link>
            <Link to={"/subscribers/extend/1"} className="item">
              <i className="fa-solid fa-star-of-life"></i>
              <span>extension</span>
            </Link>
            <div
              className="item btn_open_model"
              onClick={() => setOpenChangePassowrd(true)}
            >
              <i className="fa-solid fa-key"></i>
              <span>Change password</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => setOpenJointCompensation(true)}
            >
              <i className="fa-light fa-puzzle-piece"></i>
              <span> compensation</span>
            </div>
            <Link to={"/subscribers/addon/1"} className="item">
              <i className="fa-solid fa-star-of-life"></i>
              <span>Purchase additional service</span>
            </Link>
            <Link to={"/subscribers/change-package/:id"} className="item">
              <i className="fa-light fa-puzzle-piece"></i>
              <span>Change the package</span>
            </Link>
            <div
              className="item btn_open_model"
              onClick={() => setOpenDeposit(true)}
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>Deposit</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => setOpenDiscountAmount(true)}
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>Discount amount</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => setOpenPayOffDebts(true)}
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>Pay off debts</span>
            </div>
            <div className="item">
              <i className="fa-regular fa-handshake"></i>
              <span> End subscription</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>Delete</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={mockDataSubscribes} columns={columnsSubscibers} />
      </div>
      {/* popup change name*/}
      <Popup
        title={"Change Name"}
        openPopup={openChangeName}
        setOpenPopup={setOpenChangeName}
        onSubmit={handleChangeName}
      >
        <InputItem
          label={"Current name"}
          type={"text"}
          value={"demo1"}
          classes={"disabled"}
        />
        <InputItem
          label={"New name"}
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
          label={"Current name"}
          type={"text"}
          value={"demo1"}
          classes={"disabled"}
        />
        <SelectItem
          label={"Data type"}
          value={dataTypeBalance}
          onChange={setDataTypeBalance}
          options={[
            { name: "Download + Upload", value: "rxtx_mbytes" },
            { name: "Download", value: "rx_mbytes" },
            { name: "Download", value: "tx_mbytes" },
          ]}
        />
        <InputItem
          label={"Quantity (MB)"}
          type={"number"}
          value={quantityMb}
          onChange={setQuantityMb}
          placeholder={"0"}
        />
        <InputItem
          label={"Notice"}
          type={"text"}
          value={noticeDataBalance}
          onChange={setNoticeDataBalance}
          placeholder={""}
        />
      </Popup>
      {/* popup change psassword*/}
      <Popup
        title={"Change Password"}
        openPopup={openChangePassword}
        setOpenPopup={setOpenChangePassowrd}
        onSubmit={handleChangePassword}
      >
        <InputItem
          label={"password"}
          type={"password"}
          value={password}
          onChange={setPassowrd}
          placeholder={""}
        />
        <InputItem
          label={"confirm password"}
          type={"password"}
          value={confirmPassword}
          onChange={setConfirmPassowrd}
          placeholder={""}
        />
      </Popup>
      {/* popup Joint compensation */}
      <Popup
        title={"Joint compensation"}
        openPopup={openJointCompensation}
        setOpenPopup={setOpenJointCompensation}
        onSubmit={handleJointCompensation}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <InputItem
            label={"Usernma"}
            type={"text"}
            classes={"disabled"}
            value={"demo1"}
          />
          <InputItem
            label={"Owner"}
            type={"text"}
            classes={"disabled"}
            value={"Manager_2"}
          />
          <InputItem
            label={"Service"}
            type={"text"}
            classes={"disabled"}
            value={"slow"}
          />
          <InputItem
            label={"Subscription expiration"}
            type={"text"}
            classes={"disabled"}
            value={"2021-10-08 13:06:00"}
          />
          <SelectItem
            label={"Type of compensation"}
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
          label={"Amount"}
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
    </div>
  );
};

export default Subscribers;
