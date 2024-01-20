import React from "react";
import "./pricingTableBox.scss";

const PricingTableBox = () => {
  return (
    <div className="pricing_table_box">
      <div className="pricing_table">
        <div className="head">
          <i className="fa-solid fa-star"></i>
          <span>Price List</span>
        </div>
        <div className="table">
          <table>
            <thead>
              <th>Profile</th>
              <th>Cost</th>
              <th>Price</th>
              <th>End User Price</th>
            </thead>
            <tbody>
              <tr>
                <td>slow</td>
                <td>20</td>
                <td>
                  <input type="number" value={"20"} />
                </td>
                <td>
                  <input type="number" value={"20"} />
                </td>
              </tr>
              <tr>
                <td>slow</td>
                <td>20</td>
                <td>
                  <input type="number" value={"20"} />
                </td>
                <td>
                  <input type="number" value={"20"} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="btns">
          <button className="btn_ok">OK</button>
          <button className="btn_close">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PricingTableBox;
