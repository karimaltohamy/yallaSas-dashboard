import React from "react";
import ChartLine from "../../components/charts/ChartLine";

const ReportTraffic = () => {
  return (
    <div className="activation_states_section">
      <div className="form_states">
        <div>
          <div className="input">
            <select name="" id="" className="select_month">
              <option value="">جميع المدراء</option>
              <option value="">admin</option>
              <option value="">manager_1</option>
              <option value="">manager_2</option>
              <option value="">manager_3</option>
              <option value="">manager_4</option>
            </select>
          </div>
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
          <button className="btn_detailed">Download Detailed Report</button>
        </div>
      </div>

      <div className="bg-white h-[300px] md:h-[500px] mt-3 md:mt-6 mb-3 md:mb-5">
        <ChartLine title={"Total Traffic Usage"} />
      </div>
      <div className="bg-white h-[300px] md:h-[500px] mt-3 md:mt-6 mb-3 md:mb-5">
        <ChartLine title={"Top Consumers"} />
      </div>
      <div className="bg-white h-[300px] md:h-[500px] mt-3 md:mt-6 mb-3 md:mb-5">
        <ChartLine title={"Top Downloaders"} />
      </div>
      <div className="bg-white h-[300px] md:h-[500px] mt-3 md:mt-6 mb-3 md:mb-5">
        <ChartLine title={"Top Uploaders"} />
      </div>
    </div>
  );
};

export default ReportTraffic;
