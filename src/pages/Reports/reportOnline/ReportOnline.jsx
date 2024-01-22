import React from "react";
import ChartLine from "../../../components/charts/ChartLine";

const ReportOnline = () => {
  return (
    <div class="activation_states_section">
      <div class="form_states">
        <form action="">
          <div class="input">
            <select name="" id="" class="select_month">
              <option value="">Hourly</option>
              <option value="">Daily</option>
              <option value="">Monthly</option>
            </select>
          </div>
          <div class="input">
            <input type="date" />
          </div>
        </form>
      </div>

      <div class="bg-white h-[300px] md:h-[500px] mt-3 md:mt-6">
        <ChartLine title={"Online Users Report"} />
      </div>
    </div>
  );
};

export default ReportOnline;
