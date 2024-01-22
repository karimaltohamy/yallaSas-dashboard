import React from "react";
import ChartLine from "../../../components/charts/ChartLine";

const RegistrationDate = () => {
  return (
    <div class="date_registration_section">
      <div class="head_section">
        <form action="" class="select_manager">
          <div class="input">
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
        <div class="btn_actions">
          <button class="btn_action">
            <i class="fa-solid fa-download"></i>
            <span>تحميل</span>
          </button>
          <button class="btn_action">
            <i class="fa-solid fa-rotate"></i>
            <span>تحديث</span>
          </button>
        </div>
      </div>

      <div class="content">
        <div class="container_chart h-[250px] md:h-[400px]">
          <ChartLine />
        </div>
      </div>
    </div>
  );
};

export default RegistrationDate;
