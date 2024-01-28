import React from "react";
import ChartLine from "../../../components/charts/ChartLine";

const ReportOnline = () => {
  return (
    <div className="activation_states_section">
      <div className="form_states">
        <form action="">
          <div className="input">
            <select name="" id="" className="select_month">
              <option value="">Hourly</option>
              <option value="">Daily</option>
              <option value="">Monthly</option>
            </select>
          </div>
          <div className="input">
            <input type="date" />
          </div>
        </form>
      </div>

      <div className="bg-white h-[300px] md:h-[500px] mt-3 md:mt-6">
        <ChartLine title={"Online Users Report"} />
      </div>
    </div>
  );
};

export default ReportOnline;
