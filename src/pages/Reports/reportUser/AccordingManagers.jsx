import React from "react";
import "./accordingManagers.scss";
import ChartPie from "../../../components/charts/ChartPie";

const AccordingManagers = () => {
  return (
    <div className="according_managers_section section_profile active">
      <div className="btn_actions">
        <button className="btn_action">
          <i className="fa-solid fa-download"></i>
          <span>Download</span>
        </button>
        <button className="btn_action">
          <i className="fa-solid fa-rotate"></i>
          <span>Update</span>
        </button>
      </div>

      <div className="line grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto">
          <div className="container_chart h-[250px] md:h-[400px]">
            <ChartPie />
          </div>
        </div>
        <div>
          <div className="list_group">
            <div className="item_group">
              <h5>Total</h5>
              <span>4</span>
            </div>
            <div className="item_group">
              <h5>Effective</h5>
              <span>0</span>
            </div>
            <div className="item_group">
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
