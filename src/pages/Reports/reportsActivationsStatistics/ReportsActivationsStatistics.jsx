import React, { useEffect, useState } from "react";
import "./reportsActivationsStatistics.scss";
import ChartLine from "../../../components/charts/ChartLine";
import { t } from "i18next";
import { encryptedData } from "../../../utils/utilsFunctions";
import apiAxios from "../../../utils/apiAxios";
import Loader from "../../../components/loader/Loader";

const ReportsActivationsStatistics = () => {
  const date = new Date();
  const [activationsStatisticsData, setActivationsStatisticsData] = useState(
    []
  );
  const [years, setYears] = useState([]);
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [days, setDays] = useState([]);
  const [typeStatistics, setTypeStatistics] = useState("monthly");
  const [subManagers, setSubMangers] = useState("true");
  const [activationMethod, setActivationMethod] = useState("credit");
  const [loading, setLoading] = useState(false);

  const getActivationsStatisticsData = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/report/activations", {
        payload: encryptedData({
          type: typeStatistics,
          month: month + 1,
          year,
          manager_id: 2,
          sub_managers: subManagers,
          activation_method: activationMethod,
        }),
      });
      setActivationsStatisticsData(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: true,
      },
      title: {
        display: false,
        text: "Activations Report",
      },
    },
    scales: {
      x: {
        offset: true, // Add space data to the left
      },
    },
  };

  const labels =
    typeStatistics == "monthly"
      ? ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
      : [
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
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
        ];

  const data = {
    labels,
    datasets: [
      {
        label: "default-2Mbit-1Month",
        data: labels.map(
          (_, i) =>
            activationsStatisticsData?.total_real &&
            activationsStatisticsData?.total_real[i]
        ),
        borderColor: "#f7994c",
        backgroundColor: "#f7994c",
      },
      {
        label: "Plus",
        data: labels.map(
          (_, i) =>
            activationsStatisticsData?.total &&
            activationsStatisticsData?.total[i]
        ),
        borderColor: "#90ED7D",
        backgroundColor: "#90ED7D",
      },
      {
        label: "Slow",
        data: labels.map(
          (_, i) =>
            activationsStatisticsData?.tx && activationsStatisticsData?.tx[i]
        ),
        borderColor: "#434348",
        backgroundColor: "#434348",
      },
      {
        label: "Standard",
        data: labels.map(
          (_, i) =>
            activationsStatisticsData?.rx && activationsStatisticsData?.rx[i]
        ),
        borderColor: "#7CB5EC",
        backgroundColor: "#7CB5EC",
      },
      {
        label: "Total",
        data: labels.map(
          (_, i) =>
            activationsStatisticsData?.rx && activationsStatisticsData?.rx[i]
        ),
        borderColor: "#7CB5EC",
        backgroundColor: "#7CB5EC",
      },
    ],
  };

  function getDaysInMonth(passMonth, passYear) {
    const date = new Date();
    const year = passYear || date.getFullYear();
    const monthF = passMonth || month;
    let daysArray = [];

    const lastDay = new Date(year, monthF, 0).getDate();

    for (let i = 1; i <= lastDay; i++) {
      daysArray.push(i);
    }

    const optionsDays = daysArray.map((day) => {
      return { value: day, label: `${year}-${monthF}-${day}` };
    });

    setDays(optionsDays);
  }

  useEffect(() => {
    // this for loop for set years in select options
    const yearArray = [];
    for (let i = date.getFullYear(); i >= 2018; i--) {
      yearArray.push(i);
    }
    setYears(yearArray);
    // generate dates of month
    getDaysInMonth(date.getMonth());
  }, []);

  useEffect(() => {
    // get consumption data
    getActivationsStatisticsData();
  }, [year, month, typeStatistics, subManagers, activationMethod]);

  return (
    <div className="activation_states_section">
      <div className="form_states">
        <div className="btns_filter">
          <button
            className={`btn_daily ${typeStatistics == "daily" && "active"}`}
            onClick={() => setTypeStatistics("daily")}
          >
            {t("Daily")}
          </button>
          <button
            className={`btn_daily ${typeStatistics == "monthly" && "active"}`}
            onClick={() => setTypeStatistics("monthly")}
          >
            {t("Monthly")}
          </button>
        </div>
        <form action="">
          {typeStatistics == "daily" && (
            <div className="input">
              <select
                name=""
                id=""
                className="select_month"
                onChange={(e) => {
                  setMonth(month);
                  getDaysInMonth(e.target.value, year);
                }}
              >
                <option value="1">1{t("January")}</option>
                <option value="2">2{t("February")}</option>
                <option value="3">3{t("March")}</option>
                <option value="4">4{t("April")}</option>
                <option value="5">5{t("May")}</option>
                <option value="6">6{t("June")}</option>
                <option value="7">7{t("July")}</option>
                <option value="8">8{t("August")}</option>
                <option value="9">9{t("September")}</option>
                <option value="10">10{t("October")}</option>
                <option value="11">11{t("November")}</option>
                <option value="12">12{t("December")}</option>
              </select>
            </div>
          )}
          <div className="input">
            <select
              onChange={(e) => {
                setYear(e.target.value);
                getDaysInMonth(null, e.target.value);
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
          <div className="input">
            <select name="" id="">
              <option value="">All managers</option>
              <option value="">admin</option>
              <option value="">manager_1</option>
              <option value="">manager_2</option>
              <option value="">manager_3</option>
            </select>
          </div>
          <div className="input">
            <select
              name=""
              id=""
              onChange={(e) => setSubMangers(e.target.value)}
            >
              <option value="true">Count sub-managers</option>
              <option value="false">Dont't count sub-managers</option>
            </select>
          </div>
          <div className="input">
            <select
              name=""
              id=""
              onChange={(e) => setActivationMethod(e.target.value)}
            >
              <option value="any">any</option>
              <option value="credit">Manager's balance</option>
              <option value="user_credit">User balance</option>
              <option value="reward_points">Reward Points</option>
              <option value="voucher">Prepaid Card</option>
            </select>
          </div>
        </form>
      </div>

      <div className="container_chart chart_activation bg-white h-[250px] md:h-[500px]">
        <ChartLine labels={labels} data={data} options={options} />
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default ReportsActivationsStatistics;
