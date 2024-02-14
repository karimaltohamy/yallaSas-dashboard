import React, { useEffect, useState } from "react";
import ChartLine from "../../../components/charts/ChartLine";
import "./consumptionSubscriber.scss";
import { t } from "i18next";
import { useParams } from "react-router-dom";
import CryptoJS from "crypto-js";
import { secretPass } from "../../../utils/data";
import apiAxios from "../../../utils/apiAxios";
import Loader from "../../../components/loader/Loader";

const ConsumptionSubscriber = () => {
  const date = new Date();
  const { id } = useParams();
  const [consumptionData, setConsumptionData] = useState([]);
  const [years, setYears] = useState([]);
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [reportType, setReportType] = useState("daily");
  const [loading, setLoading] = useState([]);

  const getConsumptionData = async () => {
    const dataToEncrypt = JSON.stringify({
      report_type: reportType,
      month,
      year,
      user_id: id,
    });
    let encrypted = CryptoJS.AES.encrypt(dataToEncrypt, secretPass).toString();
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/user/traffic", {
        payload: encrypted,
      });
      console.log(data.data);
      setConsumptionData(data.data);
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
  }, []);

  useEffect(() => {
    // get consumption data
    getConsumptionData();
  }, [year, month, reportType]);

  return (
    <div className="consumption_information">
      <div className="consumption mt-6">
        <div className="filter_consumption">
          <div className="input_select">
            <select onChange={(e) => setYear(e.target.value)}>
              <option className="text-[13px]">{t("Annual consumption")}</option>
              {years &&
                years.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <div className="input_select">
            <select onChange={(e) => setMonth(e.target.value)}>
              <option className="text-[13px]">
                {t("Monthly consumption")}
              </option>
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
          <select onChange={(e) => setReportType(e.target.value)}>
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="h-[250px] md:h-[500px]">
          <ChartLine />
        </div>
      </div>

      <div className="consumption_table">
        <table>
          <thead>
            <tr>
              <th>{t("Day")}</th>
              <th>{t("Download")}</th>
              <th>{t("Upload")}</th>
              <th>{t("Total")}</th>
              <th>{t("Real Traffic")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default ConsumptionSubscriber;
