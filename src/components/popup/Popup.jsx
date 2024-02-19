import React, { Fragment } from "react";
import "./popup.scss";
import { t } from "i18next";

const Popup = ({ title, children, setOpenPopup, openPopup, onSubmit }) => {
  return (
    <Fragment>
      <div className={`overflow ${openPopup ? "active" : ""}`}></div>
      <div className={`model_poup ${openPopup ? "active" : ""}`}>
        <div className="content">
          <div className="head">
            <h5 className="title_model">{title}</h5>
            <div className="close_model" onClick={() => setOpenPopup(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <form action="" onSubmit={onSubmit}>
            {children}
            <button className="btn_submit">{t("global_button_submit")}</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Popup;
