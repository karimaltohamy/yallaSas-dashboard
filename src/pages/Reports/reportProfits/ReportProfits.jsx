import React, { useEffect, useState } from "react";
import ChartLine from "../../../components/charts/ChartLine";
import Popup from "../../../components/popup/Popup";
import InputItem from "../../../components/popup/inputItem/InputItem";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";
import "./reportProfits.scss";

const ReportProfits = () => {
  const date = new Date();
  const [reportProfitsActivations, setReportProfitsActivations] = useState([]);
  const [reportProfitsCommissions, setReportProfitsCommissions] = useState([]);
  const [managers, setManagers] = useState([]);
  const [years, setYears] = useState([]);
  const [year, setYear] = useState(date.getFullYear());
  const [managerId, setManagerId] = useState(null);
  const [loading, setLoading] = useState(false);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: true,
      },
      title: {
        display: false,
        text: "Profits Chart",
      },
    },
    scales: {
      x: {
        offset: true,
      },
    },
  };

  const labels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Profits from Activations",
        data:
          reportProfitsActivations.length > 0
            ? reportProfitsActivations?.map((ele, i) => ele.total)
            : [],
        borderColor: "#ABF76A",
        backgroundColor: "#ABF76A",
      },
      {
        label: "Profits from Commissions",
        data:
          reportProfitsCommissions.length > 0
            ? reportProfitsCommissions?.map((ele, i) => ele.total)
            : [],
        borderColor: "#BAA0F7",
        backgroundColor: "#BAA0F7",
      },
    ],
  };

  const getManagers = async () => {
    try {
      const { data } = await apiAxios.post("api/index/manager", {
        payload: encryptedData({
          page: 1,
          count: 10,
          sortBy: "username",
          direction: "asc",
          search: "",
          columns: [
            "username",
            "firstname",
            "lastname",
            "balance",
            "loan_balance",
            "name",
            "username",
            "users_count",
          ],
        }),
      });
      setManagers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getReportProfitsData = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/report/profits", {
        payload: encryptedData({
          manager_id: managerId,
          year,
        }),
      });
      setReportProfitsActivations(data.data.activations);
      setReportProfitsCommissions(data.data.commissions);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // this for loop for set years in select options
    const yearArray = [];
    for (let i = date.getFullYear(); i >= 2018; i--) {
      yearArray.push(i);
    }
    setYears(yearArray);
    // get all managers
    getManagers();
  }, []);

  useEffect(() => {
    getReportProfitsData();
  }, [year, managerId]);

  const [openDownloadDetaildReport, setOpenDownloadDetaildReport] =
    useState(false);
  const [dateSelected, setDateSelected] = useState(false);

  const handleDownloadDetaildReport = (e) => {
    e.preventDefault();
  };

  return (
    <div className="report_profits_section m-3">
      <div className="form_states">
        <form>
          <div className="input">
            <select
              value={managerId}
              onChange={(e) => setManagerId(e.target.value)}
            >
              <option value="">All managers</option>
              {managers &&
                managers.map((item, i) => (
                  <option value={item.id} key={i}>
                    {item.username}
                  </option>
                ))}
            </select>
          </div>
          <div className="input">
            <select
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              {years &&
                years.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <button
            className="btn_detailed"
            onClick={() => setOpenDownloadDetaildReport(true)}
          >
            {t("Download Detailed Report")}
          </button>
        </form>
      </div>

      <div className="bg_section h-[300px] md:h-[500px] mt-3 md:mt-6">
        <ChartLine
          title={"Earnings report"}
          labels={labels}
          data={data}
          options={options}
        />
      </div>

      {loading && <Loader />}

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
        <p className="desc">
          {
            "This will generate a detailed profits report made by each manager and profile."
          }
        </p>
      </Popup>
    </div>
  );
};

export default ReportProfits;
