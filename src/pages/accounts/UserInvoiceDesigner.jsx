import React from "react";
import "./userInvoicesDesigner.scss";

const UserInvoiceDesigner = () => {
  return (
    <div className="user_invoice_designer_section">
      <div className="row line">
        <div className="col-12 col-md-10">
          <div className="alert alert-info">
            <i className="fa fa-info-circle"></i>
            This is a Laravel Blade template. Mind the PHP ($) variables when
            editing.
          </div>
          <div id="editor-container" style={{ height: "600px" }}></div>
        </div>
        <div className="col-12 col-md-2">
          <form action="" className="form_invoice_designer">
            <div className="input_item">
              <label htmlFor="">PDF Paper Size</label>
              <select name="" id="">
                <option value="">A4</option>
                <option value="">A5</option>
                <option value="">80mx200m</option>
              </select>
            </div>
            <div className="input_item">
              <label htmlFor="">Page Orientation</label>
              <select name="" id="">
                <option value="">Portrait</option>
                <option value="">A5</option>
                <option value="">Landscape</option>
              </select>
            </div>
            <button className="btn_save">Save</button>
            <button className="btn_factory">Factory Default</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserInvoiceDesigner;
