import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Popup from "../popup/Popup";
import InputItem from "../popup/inputItem/InputItem";
import { t } from "i18next";
import { encryptedData, generateUUID } from "../../utils/utilsFunctions";
import apiAxios from "../../utils/apiAxios";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";
import avatar from "../../images/avatar2.png";
import Swal from "sweetalert2";

const ManagerMainDetails = ({ manager }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // opens and setOpnes popups
  const [openChangeName, setOpenChangeName] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [openDiscountAmount, setOpenDiscountAmount] = useState(false);
  const [openPayDebt, setOpenPayDebt] = useState(false);

  // inputs data of popups
  const [newName, setNewName] = useState("");
  const [amountDeposit, setAmountDeposot] = useState("");
  const [noticeDeposite, setNoticeDeposite] = useState("");
  const [amountDiscount, setAmountDiscount] = useState("");
  const [noticeDiscount, setNoticeDiscount] = useState("");
  const [amountPayDebts, setAmountPayDebts] = useState("");
  const [noticePayDebts, setNoticePayDebts] = useState("");

  const handleChangeName = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.put(`api/manager/${manager.id}`, {
        payload: encryptedData({ username: newName }),
      });
      toast.success("Successful operation");
      setOpenChangeName(false);
      setNewName("");
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
      setLoading(false);
    }
  };

  const handleDeposite = async (e) => {
    e.preventDefault();
    try {
      await apiAxios.post("api/manager/deposit", {
        payload: encryptedData({
          manager_id: id,
          manager_username: manager.username,
          amount: amountDeposit,
          comment: noticeDeposite,
          transaction_id: generateUUID(),
          is_loan: false,
        }),
      });
      toast.success("Successful operation");
      setLoading(false);
      setOpenDeposit(false);
      setAmountDeposot("");
      setNoticeDeposite("");
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
      await apiAxios.post("api/manager/withdraw", {
        payload: encryptedData({
          manager_id: id,
          manager_username: manager.username,
          amount: amountDiscount,
          comment: noticeDiscount,
          transaction_id: generateUUID(),
          is_loan: false,
        }),
      });
      toast.success("Successful operation");
      setLoading(false);
      setOpenDiscountAmount(false);
      setAmountDiscount("");
      setNoticeDiscount("");
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
      setLoading(false);
    }
  };

  const handlePayOffDebts = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post("api/manager/payDebt", {
        payload: encryptedData({
          manager_id: id,
          manager_username: manager.username,
          amount: amountDiscount,
          comment: noticeDiscount,
          transaction_id: generateUUID(),
          is_loan: false,
        }),
      });
      toast.success("Successful operation");
      setLoading(false);
      setOpenPayDebt(false);
      setAmountPayDebts("");
      setNoticePayDebts("");
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
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
          await apiAxios.delete(`api/manager/${id}`);
          toast.success("Successful operation");
          setLoading(false);
          navigate(-1);
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  return (
    <Fragment>
      <div className="main_details">
        <div className="box_main_details">
          <div className="image">
            <img src={avatar} alt="" loading="lazy" />
          </div>
          <h5 className="name">{manager.firstname && manager.firstname}</h5>
        </div>
        <div className="box_details">
          <div className="item">
            <i className="fa-solid fa-phone"></i>
            <span>{manager.phone && manager.phone}</span>
          </div>
          <div className="item">
            <i className="fa-solid fa-location-dot"></i>
            <span>{manager.address && manager.address}</span>
          </div>
          <div className="item">
            <i className="fa-regular fa-envelope"></i>
            <span>{manager.email && manager.email}</span>
          </div>
        </div>
        <div className="box_btns_utils">
          <div className="box">
            <div
              className="item btn_open_model"
              onClick={() => setOpenDeposit(true)}
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>{t("global_actions_deposit")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => setOpenDiscountAmount(true)}
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>{t("global_actions_withdrawal")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => setOpenPayDebt(true)}
            >
              <i className="fa-solid fa-money-bill-transfer"></i>
              <span>{t("global_actions_pay_debt")}</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => setOpenChangeName(true)}
            >
              <i className="fa-solid fa-pen-fancy"></i>
              <span>{t("Name changed")}</span>
            </div>
            <div className="item btn_remove_user" onClick={handleDeleteManager}>
              <i className="fa-solid fa-trash"></i>
              <span> {t("global_actions_delete")}</span>
            </div>
          </div>
        </div>
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
          value={manager ? manager.username : ""}
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
          value={manager ? manager.username : null}
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
          value={manager ? manager.username : null}
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
        openPopup={openPayDebt}
        setOpenPopup={setOpenPayDebt}
        onSubmit={handlePayOffDebts}
      >
        <InputItem
          label={t("user_depodrawal_form_username")}
          type={"text"}
          classes={"disabled"}
          value={manager ? manager.username : null}
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

      {loading && <Loader />}
    </Fragment>
  );
};

export default ManagerMainDetails;
