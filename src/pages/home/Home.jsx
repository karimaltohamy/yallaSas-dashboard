import React, { useEffect, useState } from "react";
import MainBox from "../../components/mainBox/MainBox";
import ChartLine from "../../components/charts/ChartLine";
import ProgressLine from "../../components/charts/ProgressLine";
import { useTranslation } from "react-i18next";
import apiAxios from "../../utils/apiAxios";
import CryptoJS from "crypto-js";
import { secretPass } from "../../utils/data";

const Home = () => {
  const { t } = useTranslation();
  const [subscribers, setSubscribers] = useState({});
  const [onlineReport, setOnlineRport] = useState({});
  const [finance, setFinance] = useState({});
  const [systemHealth, setSystemHealth] = useState({});
  const [cpuUsage, setCpuUsage] = useState("");
  const [diskUsage, setDiskUsage] = useState("");
  const [memoryUsage, setMemoryUsage] = useState("");
  const [typeOnlineReport, setTypeOnlineReport] = useState("monthly");

  const getSubscribers = async () => {
    try {
      const { data } = await apiAxios.get("api/advancedDashboard/subscribers");
      setSubscribers(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getOnlineReport = async () => {
    let encrypted;
    const dataToEncrypt = JSON.stringify("monthly");
    encrypted = CryptoJS.AES.encrypt(dataToEncrypt, secretPass).toString();
    try {
      const { data } = await apiAxios.post("api/onlineReport?type=hourly", {
        payload: encrypted,
      });
      setOnlineRport(data.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const getFinance = async () => {
    try {
      const { data } = await apiAxios.get("api/advancedDashboard/finance");
      setFinance(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSystemHealth = async () => {
    try {
      const { data } = await apiAxios.get("api/advancedDashboard/systemHealth");
      setSystemHealth(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCpuUsage = async () => {
    try {
      const { data } = await apiAxios.get("api/advancedDashboard/CpuUsage");
      setCpuUsage(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getDiskUsage = async () => {
    try {
      const { data } = await apiAxios.get("api/advancedDashboard/DiskUsage");
      setDiskUsage(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMemoryUsage = async () => {
    try {
      const { data } = await apiAxios.get("api/advancedDashboard/MemoryUsage");
      setMemoryUsage(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const executeRequestsAfterEvery10sec = async () => {
      await getSubscribers();
      await getOnlineReport();
      await getFinance();
      await getSystemHealth();
    };

    const executeRequestsAfterEvery5sec = async () => {
      await getCpuUsage();
      await getDiskUsage();
      await getMemoryUsage();
    };

    executeRequestsAfterEvery10sec();
    executeRequestsAfterEvery5sec();

    const intervalAfterEvery10sec = setInterval(
      executeRequestsAfterEvery10sec,
      10000
    );

    const intervalAfterEvery5sec = setInterval(
      executeRequestsAfterEvery5sec,
      5000
    );

    return () => {
      clearInterval(intervalAfterEvery10sec);
      clearInterval(intervalAfterEvery5sec);
    };
  }, []);

  return (
    <div className="home_section my-[12px] mx-[10px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] mb-[25px]">
        <MainBox title={t("Subscribers")}>
          <div className="items">
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-people-group"></i>
                </div>
                <h4>{t("Number of subscribers")}</h4>
              </div>
              <div className="num">{subscribers.total}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-regular fa-address-book"></i>
                </div>
                <h4>{t("Callers")}</h4>
              </div>
              <div className="num">{subscribers.online}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-people-line"></i>
                </div>
                <h4>{t("Almost finished")}</h4>
              </div>
              <div className="num">{subscribers.expired}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-people-roof"></i>
                </div>
                <h4>{t("Active subscribers")}</h4>
              </div>
              <div className="num">{subscribers.active}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-person-falling"></i>
                </div>
                <h4>{t("Expiring Today")}</h4>
              </div>
              <div className="num">{subscribers.expiring_today}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-users-slash"></i>
                </div>
                <h4>{t("About to finish")}</h4>
              </div>
              <div className="num">{subscribers.expiring_soon}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-person-military-pointing"></i>
                </div>
                <h4>{t("Managers")}</h4>
              </div>
              <div className="num">{subscribers.managers}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-signal"></i>
                </div>
                <h4>{t("Online FUP")}</h4>
              </div>
              <div className="num">{subscribers.fup}</div>
            </div>
          </div>
        </MainBox>
        <MainBox title={t("Online User")}>
          <div className="h-[380px]">
            <ChartLine />
          </div>
        </MainBox>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[25px]">
        <MainBox title={t("Financial accounts")}>
          <div className="items">
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-money-check-dollar"></i>
                </div>
                <h4>{t("Balance")}</h4>
              </div>
              <div className="num">{finance.balance}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-braille"></i>
                </div>
                <h4>{t("Reward Points")}</h4>
              </div>
              <div className="num">{finance.reward_points}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-fire"></i>
                </div>
                <h4>{t("Activities today")}</h4>
              </div>
              <div className="num">{finance.activations}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-cash-register"></i>
                </div>
                <h4>{t("For new registrations")}</h4>
              </div>
              <div className="num">{finance.registrations}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-wallet"></i>
                </div>
                <h4>{t("Outstanding Debts")}</h4>
              </div>
              <div className="num">{finance.outstanding_debts}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-receipt"></i>
                </div>
                <h4>{t("Outstanding Claims")}</h4>
              </div>
              <div className="num">{finance.outstanding_claims}</div>
            </div>
          </div>
        </MainBox>
        <MainBox title={t("System Status")}>
          <div className="items">
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-business-time"></i>
                </div>
                <h4>{t("System operating time")}</h4>
              </div>
              <div className="num">{systemHealth.uptime}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-regular fa-hard-drive"></i>
                </div>
                <h4>{t("Backup Storage")}</h4>
              </div>
              <div className="num">{systemHealth.backup}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-server"></i>
                </div>
                <h4>{t("Network Status")}</h4>
              </div>
              <div className="num">{systemHealth.network}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-database"></i>
                </div>
                <h4>{t("Database time")}</h4>
              </div>
              <div className="num">{systemHealth.db_time}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-chart-area"></i>
                </div>
                <h4>{t("Time Zone")}</h4>
              </div>
              <div className="num">{systemHealth.timezone}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-solid fa-chart-area"></i>
                </div>
                <h4>{t("System Version")}</h4>
              </div>
              <div className="num">{systemHealth.version}</div>
            </div>
            <div className="item">
              <div className="text">
                <div className="icon">
                  <i className="fa-regular fa-id-card"></i>
                </div>
                <h4>{t("System License")}</h4>
              </div>
              <div className="num">{systemHealth.license}</div>
            </div>
          </div>
        </MainBox>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        <MainBox title={t("Processor")}>
          <div className="mt-3 w-[200px] h-[200px] mx-auto relative">
            <ProgressLine percentage={cpuUsage} />
            <h3 className="font-semibold text-[23px] mt-2 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {cpuUsage}%
            </h3>
          </div>
        </MainBox>
        <MainBox title={t("Random Memory")}>
          <div className="mt-3 w-[200px] h-[200px] mx-auto relative">
            <ProgressLine percentage={memoryUsage} />
            <h3 className="font-semibold text-[23px] mt-2 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {memoryUsage}%
            </h3>
          </div>{" "}
        </MainBox>
        <MainBox title={t("Storage unit")}>
          <div className="mt-3 w-[200px] h-[200px] mx-auto relative">
            <ProgressLine percentage={diskUsage} />
            <h3 className="font-semibold text-[23px] mt-2 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {diskUsage}%
            </h3>
          </div>
        </MainBox>
      </div>
    </div>
  );
};

export default Home;
