import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../popup/Popup";
import InputItem from "../popup/inputItem/InputItem";

const MainDetails = () => {
  // opens and setOpnes popups
  const [openChangeName, setOpenChangeName] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [openDiscountAmount, setOpenDiscountAmount] = useState(false);

  // inputs data of popups
  const [newName, setNewName] = useState("");
  const [amountDeposit, setAmountDeposot] = useState("");
  const [noticeDeposite, setNoticeDeposite] = useState("");
  const [amountDiscount, setAmountDiscount] = useState("");

  const handleChangeName = (e) => {
    e.preventDefault();
    console.log({ newName });
  };

  const handleDeposite = () => {
    e.preventDefault();
    console.log({ noticeDeposite, amountDeposit });
  };

  const handleDicountAmount = () => {
    e.preventDefault();
    console.log({ amountAmount });
  };

  return (
    <Fragment>
      <div className="main_details">
        <div className="box_main_details">
          <div className="image">
            <img src="./images/profile-img.jpeg" alt="" loading="lazy" />
          </div>
          <h5 className="name">Rick James</h5>
          <span className="position">Lead Designer / Developer</span>
        </div>
        <div className="box_details">
          <div className="head">
            <h4>Continue</h4>
          </div>
          <div className="item">
            <i className="fa-solid fa-phone"></i>
            <span>0100569856</span>
          </div>
          <div className="item">
            <i className="fa-solid fa-location-dot"></i>
            <span>936 Kiehn Route, West Ned</span>
          </div>
          <div className="item">
            <i className="fa-regular fa-envelope"></i>
            <span>example@example.com</span>
          </div>
        </div>
        <div className="box_btns_utils">
          <div className="box">
            <Link to={"/subscribers/activate/:id"} className="item">
              <i className="fa-regular fa-pen-to-square"></i>
              <span>Activate</span>
            </Link>
            <Link to={""} href="userInvoiceForm.html" className="item">
              <i className="fa-solid fa-file-import"></i>
              <span>Issuing an invoice</span>
            </Link>
            <Link
              to={"/subscribers/change-package/:id"}
              href="change-package-subscriber.html"
              className="item"
            >
              <i className="fa-solid fa-play"></i>
              <span>Change the package</span>
            </Link>

            <div className="item btn_reset_traffic">
              <i className="fa-solid fa-star-of-life"></i>
              <span> Reset Traffic </span>
            </div>
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
              <span>Drag</span>
            </div>
            <div
              className="item btn_open_model"
              onClick={() => setOpenChangeName(true)}
            >
              <i className="fa-solid fa-pen-fancy"></i>
              <span>Name changed</span>
            </div>
            <div className="item btn_disconnect">
              <i className="fa-solid fa-link-slash"></i>
              <span>Disconnect</span>
            </div>
            <div className="item btn_remove_user">
              <i className="fa-solid fa-trash"></i>
              <span> Delete</span>
            </div>
          </div>
        </div>
        <div className="card_map">
          <div className="map">
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
              title="London Eye, London, United Kingdom"
              aria-label="London Eye, London, United Kingdom"
            ></iframe>
          </div>
          <form action="">
            <div className="line">
              <div className="input_item">
                <label htmlFor="">LAT</label>
                <input type="text" />
              </div>
              <div className="input_item">
                <label htmlFor="">LNG</label>
                <input type="text" />
              </div>
            </div>
            <button className="btn_submit">OK</button>
          </form>
        </div>
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
      </Popup>
    </Fragment>
  );
};

export default MainDetails;
