import React from "react";
import ChartLine from "../../../components/charts/ChartLine";

const RegistrationDate = () => {
  return (
    <div className="date_registration_section">
      <div className="head_section">
        <form action="" className="select_manager">
          <div className="input">
            <select name="" id="">
              <option value="">2023</option>
              <option value="">2022</option>
              <option value="">2021</option>
              <option value="">2020</option>
              <option value="">2019</option>
              <option value="">2018</option>
              <option value="">2017</option>
            </select>
          </div>
        </form>
        <div className="btn_actions">
          <button className="btn_action">
            <i className="fa-solid fa-download"></i>
            <span>تحميل</span>
          </button>
          <button className="btn_action">
            <i className="fa-solid fa-rotate"></i>
            <span>تحديث</span>
          </button>
        </div>
      </div>

      <div className="content">
        <div className="container_chart h-[250px] md:h-[400px]">
          <ChartLine />
        </div>
      </div>
    </div>
  );
};

export default RegistrationDate;
