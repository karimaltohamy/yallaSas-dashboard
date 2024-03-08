import React, { useState } from "react";
import "./reportsCardUsage.scss";
import ChartLine from "../../../components/charts/ChartLine";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";

const ReportsCardsUsage = () => {
  const [cardsUsageData, setCardsUsageData] = useState([]);

  const getCardsUsageData = async () => {
    try {
      const { data } = await apiAxios.get();
    } catch (error) {
      console.log(error);
    }
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: true,
      },
      title: {
        display: false,
        text: "Cards Usage By Value",
      },
    },
    scales: {
      x: {
        offset: true, // Add space data to the left
      },
    },
  };

  const labels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  const data = {
    labels,
    datasets: [],
  };

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
          <div className="w-full h-[280px] md:h-[400px]">
            <ChartLine labels={labels} data={data} options={options} />
          </div>
          <div className="">
            <div className="details">
              <div className="detail">
                <h4>{t("Cards Used")}</h4>
                <span>0</span>
              </div>
              <div className="detail">
                <h4>{t("Total Value")}</h4>
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
