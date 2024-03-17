import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Popup from "../popup/Popup";
import InputItem from "../popup/inputItem/InputItem";
import { t } from "i18next";
import { encryptedData, generateUUID } from "../../utils/utilsFunctions";
import apiAxios from "../../utils/apiAxios";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";
import avatar from "../../images/avatar2.png";
import Swal from "sweetalert2";

const MainDetails = ({ subsciberData, getSubscriber }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  // opens and setOpnes popups
  const [openChangeName, setOpenChangeName] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [openDiscountAmount, setOpenDiscountAmount] = useState(false);

  // inputs data of popups
  const [newName, setNewName] = useState("");
  const [amountDeposit, setAmountDeposot] = useState("");
  const [noticeDeposite, setNoticeDeposite] = useState("");
  const [amountDiscount, setAmountDiscount] = useState("");

  const showAlertDisconnect = () => {
    Swal.fire({
      title: "Disconnect User",
      text: "Disconnect Selected User(s) ?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await apiAxios.get(
            `api/user/disconnect/userid/${id}`
          );
          toast.success(data.status == 200 && data.message);
        } catch (error) {
          console.log(error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  const showAlertResetTraffic = () => {
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure that you want to perform this action?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await apiAxios.post(`api/user/resetDailyTraffic`, {
            payload: encryptedData({ user_id: id }),
          });
          toast.success(data.status == 200 && data.message);
          getSubscriber();
        } catch (error) {
          console.log(error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  const handleChangeName = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post(`api/user/rename/${id}`, {
        payload: encryptedData({ new_username: newName }),
      });
      toast.success("Successful operation");
      setOpenChangeName(false);
      setNewName("");
      setLoading(false);
      getSubscriber();
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
      setLoading(false);
    }
  };

  const handleDeposite = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (amountDeposit) {
      try {
        await apiAxios.post("api/user/deposit", {
          payload: encryptedData({
            user_id: id,
            username: subsciberData.username,
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
    }
  };

  const handleDicountAmount = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (amountDiscount) {
      try {
        await apiAxios.post("api/user/withdraw", {
          payload: encryptedData({
            user_id: id,
            username: subsciberData.username,
            amount: amountDiscount,
            transaction_id: generateUUID(),
          }),
        });
        toast.success("Successful operation");
        setLoading(false);
        setOpenDiscountAmount(false);
        setAmountDiscount("");
        getSubscriber();
      } catch (error) {
        toast.error(error.response.data.error);
        console.log(error);
        setLoading(false);
      }
    }
  };

  const handleDeleteSubsciber = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.delete(`api/user/${id}`);
      toast.success("Successful operation");
      setLoading(false);
      getSubscriber();
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="main_details">
        <div className="box_main_details">
          <div className="image">
            <img src={avatar} alt="" loading="lazy" />
          </div>
          <h5 className="name">
            {subsciberData.firstname && subsciberData.firstname}
          </h5>
        </div>
        <div className="box_details">
          <div className="item">
            <i className="fa-solid fa-phone"></i>
            <span>{subsciberData.phone && subsciberData.phone}</span>
          </div>
          <div className="item">
            <i className="fa-solid fa-location-dot"></i>
            <span>{subsciberData.address && subsciberData.address}</span>
          </div>
          <div className="item">
            <i className="fa-regular fa-envelope"></i>
            <span>{subsciberData.email && subsciberData.email}</span>
          </div>
        </div>
        <div className="box_btns_utils">
          <div className="box">
            <Link to={`/subscribers/activate/${id}`} className="item">
              <i className="fa-regular fa-pen-to-square"></i>
              <span>{t("users_action_activate")}</span>
            </Link>
            <Link to={""} href="userInvoiceForm.html" className="item">
              <i className="fa-solid fa-file-import"></i>
              <span>{t("menu_billing_user_invoice_issue")}</span>
            </Link>
            <Link
              to={`/subscribers/change-package/${id}`}
              href="change-package-subscriber.html"
              className="item"
            >
              <i className="fa-solid fa-play"></i>
              <span>{t("users_action_change_profile")}</span>
            </Link>

            <div
              className="item btn_reset_traffic"
              onClick={showAlertResetTraffic}
            >
              <i className="fa-solid fa-star-of-life"></i>
              <span> {t("Reset Traffic")} </span>
            </div>
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
              onClick={() => setOpenChangeName(true)}
            >
              <i className="fa-solid fa-pen-fancy"></i>
              <span>{t("Name changed")}</span>
            </div>
            <div className="item btn_disconnect" onClick={showAlertDisconnect}>
              <i className="fa-solid fa-link-slash"></i>
              <span>{t("users_action_disconnect")}</span>
            </div>
            <div
              className="item btn_remove_user"
              onClick={handleDeleteSubsciber}
            >
              <i className="fa-solid fa-trash"></i>
              <span> {t("global_actions_delete")}</span>
            </div>
          </div>
        </div>
      </div>

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
          value={subsciberData ? subsciberData.username : ""}
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
          value={subsciberData ? subsciberData.username : null}
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
          value={subsciberData ? subsciberData.username : null}
        />
        <InputItem
          label={t("user_depodrawal_form_amount")}
          type={"number"}
          value={amountDiscount}
          onChange={setAmountDiscount}
          placeholder={""}
        />
      </Popup>
      {loading && <Loader />}
    </Fragment>
  );
};

export default MainDetails;
