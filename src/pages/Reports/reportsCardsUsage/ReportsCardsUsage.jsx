import React from "react";
import "./reportsCardUsage.scss";
import ChartLine from "../../../components/charts/ChartLine";

const ReportsCardsUsage = () => {
  return (
    <div className="report_cards_usage_section">
      <div className="form_report_cards">
        <form action="">
          <div className="input">
            <select name="" id="">
              <option value="">لوحه المشتركين</option>
              <option value="">admin</option>
              <option value="">manager_1</option>
              <option value="">manager_2</option>
              <option value="">manager_3</option>
            </select>
          </div>
          <div className="input">
            <input type="date" />
          </div>
          <div className="input">
            <input type="date" />
          </div>
          <button className="reload">
            <i className="fa-solid fa-rotate"></i>
          </button>
        </form>
      </div>
      <div className="content_report_cards">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white w-full h-[280px] md:h-[400px]">
            <ChartLine />
          </div>
          <div className="">
            <div className="details">
              <div className="detail">
                <h4>Cards Used</h4>
                <span>0</span>
              </div>
              <div className="detail">
                <h4>Total Value</h4>
                <span>$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsCardsUsage;
