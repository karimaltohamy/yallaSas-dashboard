import React, { useState } from "react";
import ChartLine from "../../../components/charts/ChartLine";
import Popup from "../../../components/popup/Popup";
import InputItem from "../../../components/popup/inputItem/InputItem";

const ReportProfits = () => {
  const [openDownloadDetaildReport, setOpenDownloadDetaildReport] =
    useState(false);
  const [dateSelected, setDateSelected] = useState(false);

  const handleDownloadDetaildReport = (e) => {
    e.preventDefault();
  };

  return (
    <div class="activation_states_section">
      <div class="form_states">
        <div>
          <div class="input">
            <select name="" id="" class="select_month">
              <option value="">جميع المدراء</option>
              <option value="">admin</option>
              <option value="">manager_1</option>
              <option value="">manager_2</option>
              <option value="">manager_3</option>
              <option value="">manager_4</option>
            </select>
          </div>
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
          <button
            class="btn_detailed"
            onClick={() => setOpenDownloadDetaildReport(true)}
          >
            Download Detailed Report
          </button>
        </div>
      </div>

      <div class="bg-white h-[300px] md:h-[500px] mt-3 md:mt-6">
        <ChartLine title={"Earnings report"} />
      </div>

      {/* popup Deposit */}
      <Popup
        title={"Download Detailed Report"}
        openPopup={openDownloadDetaildReport}
        setOpenPopup={setOpenDownloadDetaildReport}
        onSubmit={handleDownloadDetaildReport}
      >
        <InputItem
          label={"Select Date (month/year)"}
          type={"date"}
          value={dateSelected}
          onChange={setDateSelected}
          placeholder={""}
        />
        <p class="desc">
          This will generate a detailed profits report made by each manager and
          profile.
        </p>
      </Popup>
    </div>
  );
};

export default ReportProfits;
