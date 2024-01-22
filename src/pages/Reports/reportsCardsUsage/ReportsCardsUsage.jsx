import React from "react";
import "./reportsCardUsage.scss";
import ChartLine from "../../../components/charts/ChartLine";

const ReportsCardsUsage = () => {
  return (
    <div class="report_cards_usage_section">
      <div class="form_report_cards">
        <form action="">
          <div class="input">
            <select name="" id="">
              <option value="">لوحه المشتركين</option>
              <option value="">admin</option>
              <option value="">manager_1</option>
              <option value="">manager_2</option>
              <option value="">manager_3</option>
            </select>
          </div>
          <div class="input">
            <input type="date" />
          </div>
          <div class="input">
            <input type="date" />
          </div>
          <button class="reload">
            <i class="fa-solid fa-rotate"></i>
          </button>
        </form>
      </div>
      <div class="content_report_cards">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="bg-white w-full h-[280px] md:h-[400px]">
            <ChartLine />
          </div>
          <div class="">
            <div class="details">
              <div class="detail">
                <h4>Cards Used</h4>
                <span>0</span>
              </div>
              <div class="detail">
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
