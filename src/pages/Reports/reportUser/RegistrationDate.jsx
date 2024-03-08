import React, { useEffect, useState } from "react";
import ChartLine from "../../../components/charts/ChartLine";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";
import "./sectiosServicesAndRegistration.scss";
import { t } from "i18next";

const RegistrationDate = () => {
  const [registration, setRegistration] = useState([]);
  const [loading, setLoading] = useState(false);
  const date = new Date();
  const [years, setYears] = useState([]);
  const [year, setYear] = useState(date.getFullYear());

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: true,
      },
      title: {
        display: false,
        text: "Registration per Month",
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
        label: "New Users",
        data:
          registration.length > 0
            ? registration?.map((ele, i) => ele.total)
            : [],
        borderColor: "#ABF76A",
        backgroundColor: "#ABF76A",
      },
    ],
  };

  const getRegistration = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/usersReport/registration", {
        payload: encryptedData({ month: 2, year }),
      });
      setRegistration(data.data);
    } catch (error) {
      console.log(error);
    } finally {
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
  }, []);

  useEffect(() => {
    getRegistration();
  }, [year]);

  return (
    <div className="date_registration_section">
      <div className="head_section">
        <form action="" className="select_manager">
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
        </form>
        <div className="btn_actions">
          <button className="btn_action">
            <i className="fa-solid fa-download"></i>
            <span>{t("global_reload")}</span>
          </button>
          <button className="btn_action">
            <i className="fa-solid fa-rotate"></i>
            <span>{t("global_download")}</span>
          </button>
        </div>
      </div>

      <div className="content">
        <div className="container_chart h-[250px] md:h-[400px]">
          <ChartLine options={options} data={data} labels={labels} />
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default RegistrationDate;
