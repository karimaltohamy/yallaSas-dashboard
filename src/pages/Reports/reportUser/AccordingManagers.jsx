import React from "react";
import "./accordingManagers.scss";
import ChartPie from "../../../components/charts/ChartPie";

const AccordingManagers = () => {
  return (
    <div class="according_managers_section section_profile active">
      <div class="btn_actions">
        <button class="btn_action">
          <i class="fa-solid fa-download"></i>
          <span>Download</span>
        </button>
        <button class="btn_action">
          <i class="fa-solid fa-rotate"></i>
          <span>Update</span>
        </button>
      </div>

      <div class="line grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto">
          <div class="container_chart h-[250px] md:h-[400px]">
            <ChartPie />
          </div>
        </div>
        <div>
          <div class="list_group">
            <div class="item_group">
              <h5>Total</h5>
              <span>4</span>
            </div>
            <div class="item_group">
              <h5>Effective</h5>
              <span>0</span>
            </div>
            <div class="item_group">
              <h5>Expired</h5>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordingManagers;
