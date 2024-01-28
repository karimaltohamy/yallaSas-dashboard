import React from "react";
import "./sectiosServicesAndRegistration.scss";
import ChartPie from "../../../components/charts/ChartPie";

const AccordingService = () => {
  return (
    <div className="according_service">
      <div className="head_section">
        <form action="" className="select_manager">
          <div className="input">
            <select name="" id="">
              <option value="">All Managers</option>
              <option value="">Admin</option>
              <option value="">Manager_1</option>
              <option value="">Manager_2</option>
              <option value="">Manager_3</option>
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
        <div className="mx-auto mt-5 flex items-center justify-center">
          <div className="container_chart h-[250px] md:h-[400px] w-[250px] md:w-[400px]">
            <ChartPie />
          </div>
        </div>
        <div className="according_service_infomation">
          <div className="according_service_table">
            <table>
              <thead>
                <tr>
                  <th>الخدمة</th>
                  <th>المجموع</th>
                  <th>فعال</th>
                  <th>منتهي الصلاحية</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>default-2Mbit-1Month</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>standard</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>slow</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordingService;
