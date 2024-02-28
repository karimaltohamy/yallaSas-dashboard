import React, { useEffect, useState } from "react";
import ChartLine from "../../components/charts/ChartLine";
import { t } from "i18next";
import "./reportTraffic.scss";
import { convertFromBytes, encryptedData } from "../../utils/utilsFunctions";
import apiAxios from "../../utils/apiAxios";
import Loader from "../../components/loader/Loader";

const ReportTraffic = () => {
  const date = new Date();
  const [reportTrafficData, setReportTrafficData] = useState([]);
  const [reportTopConsumers, setReportTopConsumers] = useState([]);
  const [reportTopDownloaders, setReportTopDownloaders] = useState([]);
  const [reportTopUploaders, setReportTopUploaders] = useState([]);
  const [years, setYears] = useState([]);
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [loading, setLoading] = useState(false);

  // options and labels and data for traffic Data
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: true,
      },
      title: {
        display: false,
        text: "Total Traffic Usage",
      },
    },
    scales: {
      x: {
        offset: true,
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Data Usage",
        data: reportTrafficData?.map((ele, i) => ele.traffic),
        borderColor: "#65A2F7",
        backgroundColor: "#65A2F7",
      },
    ],
  };

  // options and labels and data for Top Consumers
  const optionsConsumers = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: true,
      },
      title: {
        display: false,
        text: "Top Consumers",
      },
    },
    scales: {
      x: {
        offset: true,
      },
    },
  };

  const dataConsumers = {
    labels,
    datasets: [
      {
        label: "Top Consumers",
        data: reportTopConsumers?.map((ele, i) => ele.traffic),
        borderColor: "#65A2F7",
        backgroundColor: "#65A2F7",
      },
    ],
  };

  // options and labels and data for Top Downloaders
  const optionsDownloaders = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: true,
      },
      title: {
        display: false,
        text: "Top Downloaders",
      },
    },
    scales: {
      x: {
        offset: true,
      },
    },
  };

  const dataDownloaders = {
    labels,
    datasets: [
      {
        label: "Top Downloaders",
        data: reportTopDownloaders?.map((ele, i) => ele.dl),
        borderColor: "#65A2F7",
        backgroundColor: "#65A2F7",
      },
    ],
  };

  // options and labels and data for Top Uploaders
  const optionsUploaders = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: true,
      },
      title: {
        display: false,
        text: "Top Uploaders",
      },
    },
    scales: {
      x: {
        offset: true,
      },
    },
  };

  const dataUploaders = {
    labels,
    datasets: [
      {
        label: "Top Uploaders",
        data: reportTopUploaders?.map((ele, i) => ele.ul),
        borderColor: "#65A2F7",
        backgroundColor: "#65A2F7",
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

  const getReportTrafficData = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/trafficReport/all", {
        payload: encryptedData({
          month,
          year,
        }),
      });
      setReportTrafficData(data.data.periodTraffic);
      setReportTopConsumers(data.data.topConsumers);
      setReportTopDownloaders(data.data.topDownloaders);
      setReportTopUploaders(data.data.topUploaders);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportTrafficData();
  }, [year, month]);

  return (
    <div className="report_traffic_section m-3">
      <div className="form_states">
        <form>
          <div className="input">
            <select
              name=""
              id=""
              className="select_month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
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
          <button className="btn_detailed">
            {t("Download Detailed Report")}
          </button>
        </form>
      </div>

      <div className="bg_section h-[300px] md:h-[500px] mt-3 md:mt-6 mb-3 md:mb-5">
        <ChartLine
          title={"Total Traffic Usage"}
          options={options}
          data={data}
          labels={labels}
        />
      </div>
      <div className="bg_section h-[300px] md:h-[500px] mt-3 md:mt-6 mb-3 md:mb-5">
        <ChartLine
          title={"Top Consumers"}
          labels={labels}
          data={dataConsumers}
          options={optionsConsumers}
        />
      </div>
      <div className="bg_section h-[300px] md:h-[500px] mt-3 md:mt-6 mb-3 md:mb-5">
        <ChartLine
          title={"Top Downloaders"}
          labels={labels}
          options={optionsDownloaders}
          data={dataDownloaders}
        />
      </div>
      <div className="bg_section h-[300px] md:h-[500px] mt-3 md:mt-6 mb-3 md:mb-5">
        <ChartLine
          title={"Top Uploaders"}
          labels={labels}
          options={optionsUploaders}
          data={dataUploaders}
        />
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default ReportTraffic;
