import React, { useState } from "react";
import "./reportsActivationsStatistics.scss";
import ChartLine from "../../../components/charts/ChartLine";

const ReportsActivationsStatistics = () => {
  const [typeStatistics, setTypeStatistics] = useState("daily");

  return (
    <div className="activation_states_section">
      <div className="form_states">
        <div className="btns_filter">
          <button
            className={`btn_daily ${typeStatistics == "daily" && "active"}`}
            onClick={() => setTypeStatistics("daily")}
          >
            Daily
          </button>
          <button
            className={`btn_daily ${typeStatistics == "monthly" && "active"}`}
            onClick={() => setTypeStatistics("monthly")}
          >
            Monthly
          </button>
        </div>
        <form action="">
          {typeStatistics == "daily" && (
            <div className="input">
              <select name="" id="" className="select_month">
                <option value="">Jun</option>
                <option value="">Feb</option>
                <option value="">Mar</option>
                <option value="">Apr</option>
                <option value="">May</option>
                <option value="">Aug</option>
              </select>
            </div>
          )}
          <div className="input">
            <select name="" id="">
              <option value="">2023</option>
              <option value="">2022</option>
              <option value="">2021</option>
              <option value="">2020</option>
              <option value="">2019</option>
              <option value="">2018</option>
            </select>
          </div>
          <div className="input">
            <select name="" id="">
              <option value="">All managers</option>
              <option value="">admin</option>
              <option value="">manager_1</option>
              <option value="">manager_2</option>
              <option value="">manager_3</option>
            </select>
          </div>
          <div className="input">
            <select name="" id="">
              <option value="">Count sub-managers</option>
              <option value="">Dont't count sub-managers</option>
            </select>
          </div>
          <div className="input">
            <select name="" id="">
              <option value="">All</option>
              <option value="">Manager's balance</option>
              <option value="">Subscriber balance</option>
              <option value="">Encouraging points</option>
              <option value="">Card</option>
            </select>
          </div>
        </form>
      </div>

      <div className="container_chart chart_activation bg-white h-[250px] md:h-[500px]">
        <ChartLine />
      </div>
    </div>
  );
};

export default ReportsActivationsStatistics;
