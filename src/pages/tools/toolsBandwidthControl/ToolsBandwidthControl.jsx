import React from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./toolsBandwidthControl.scss";
import { t } from "i18next";

const ToolsBandwidthControl = () => {
  return (
    <div className="m-[10px]">
      <MainSection
        title={t("Bandwidth Controller")}
        icon={<i className="fa-solid fa-gears"></i>}
      >
        <div className="tools_bandwidth_control_content">
          <div className="btns_controls">
            <button className="btn_control save">{"Save"}</button>
            <button className="btn_control reset">{"Reset"}</button>
            <button className="btn_control reload">
              <i className="fa-solid fa-rotate"></i>
            </button>
          </div>

          <div className="main_range">
            <div className="text">
              <h5>{"All Profiles"}</h5>
            </div>

            <div className="range">
              <input type="range" min="0" max="100" value="0" id="range" />
              <div className="value_main value">0</div>
            </div>

            <div className="info"></div>
          </div>
          <div className="main_range">
            <div className="text">
              <h5>default-2Mbit-1Month</h5>
            </div>

            <div className="range">
              <input type="range" min="0" max="100" value="0" id="range1" />
              <div className="value_main value1">0</div>
            </div>

            <div className="info">
              <h5>1.92 Mb/s / 1.92 Mb/s</h5>
            </div>
          </div>
          <div className="main_range">
            <div className="text">
              <h5>Slow</h5>
            </div>

            <div className="range">
              <input type="range" min="0" max="100" value="0" id="range2" />
              <div className="value_main value2">0</div>
            </div>

            <div className="info">
              <h5>1.92 Mb/s / 1.92 Mb/s</h5>
            </div>
          </div>
          <div className="main_range">
            <div className="text">
              <h5>Standard</h5>
            </div>

            <div className="range">
              <input type="range" min="0" max="100" value="0" id="range3" />
              <div className="value_main value3">0</div>
            </div>

            <div className="info">
              <h5>1.92 Mb/s / 1.92 Mb/s</h5>
            </div>
          </div>
          <div className="main_range">
            <div className="text">
              <h5>Plus</h5>
            </div>

            <div className="range">
              <input type="range" min="0" max="100" value="0" id="range4" />
              <div className="value_main value4">0</div>
            </div>

            <div className="info">
              <h5>1.92 Mb/s / 1.92 Mb/s</h5>
            </div>
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default ToolsBandwidthControl;
