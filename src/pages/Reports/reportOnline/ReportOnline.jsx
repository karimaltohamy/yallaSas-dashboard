import React, { useEffect, useState } from "react";
import ChartLine from "../../../components/charts/ChartLine";
import "./reportOnline.scss";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";

const ReportOnline = () => {
  const date = new Date();
  const [typeHistory, setTypeHistory] = useState("hourly");
  const [ReportOnlineData, setReportOnlineData] = useState([]);
  const [years, setYears] = useState([]);
  const [year, setYear] = useState(date.getFullYear());
  const [day, setDay] = useState(date.getDay());
  const [month, setMonth] = useState(date.getMonth());
  const [dateHistory, setDateHistory] = useState("");
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
        text: "Online Users Report",
      },
    },
    scales: {
      x: {
        offset: true, // Add space data to the left
      },
    },
  };

  const labels =
    typeHistory == "monthly"
      ? ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
      : typeHistory == "daily"
      ? [
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
        ]
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
        ];

  const data = {
    labels,
    datasets: [
      {
        label: "Online Users",
        data: ReportOnlineData?.map((ele, i) => ele.n_online),
        borderColor: "#65A2F7",
        backgroundColor: "#65A2F7",
      },
      {
        label: "Active Users",
        data: ReportOnlineData?.map((ele, i) => ele.n_total),
        borderColor: "#D9D9D9",
        backgroundColor: "#D9D9D9",
      },
    ],
  };

  useEffect(() => {
    // this for loop for set years in select options
    const yearArray = [];
    for (let i = date.getFullYear(); i >= 2018; i--) {
      yearArray.push(i);
    }
    setYears(yearArray);
  }, []);

  const getReportOnlineData = async () => {
    const UpdateDate = new Date(dateHistory);
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/onlineReport", {
        payload: encryptedData({
          type: typeHistory,
          day: UpdateDate ? UpdateDate.getDay() : day,
          month: UpdateDate ? UpdateDate.getMonth() : month,
          year: UpdateDate ? UpdateDate.getFullYear() : year,
        }),
      });
      setReportOnlineData(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportOnlineData();
  }, [year, typeHistory, dateHistory]);

  return (
    <div className="report_online_section m-3">
      <div className="form_states">
        <form action="">
          <div className="input">
            <select
              className="select_month"
              value={typeHistory}
              onChange={(e) => setTypeHistory(e.target.value)}
            >
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="input">
            {typeHistory !== "monthly" ? (
              <input
                type="date"
                value={dateHistory}
                onChange={(e) => setDateHistory(e.target.value)}
              />
            ) : (
              <select
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
            )}
          </div>
        </form>
      </div>

      <div className="bg_section h-[300px] md:h-[500px] mt-3 md:mt-6">
        <ChartLine
          title={"Online Users Report"}
          labels={labels}
          options={options}
          data={data}
        />
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default ReportOnline;
