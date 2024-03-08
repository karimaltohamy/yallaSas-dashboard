import React, { useEffect, useState } from "react";
import "./accordingManagers.scss";
import ChartPie from "../../../components/charts/ChartPie";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import Loader from "../../../components/loader/Loader";
import { getRandomColor } from "../../../utils/utilsFunctions";

const AccordingManagers = () => {
  const [perManager, setPerManager] = useState([]);
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(false);

  const data = {
    labels: perManager && perManager.map((item) => item.manager_name),
    datasets: [
      {
        label: "Users",
        data: perManager && perManager.map((item) => item.c),
        backgroundColor:
          perManager && perManager.map((item) => getRandomColor()),
        borderColor: perManager && perManager.map((item) => getRandomColor()),
        borderWidth: 1,
      },
    ],
  };

  const getPerManager = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get("api/usersReport/perManager");
      setPerManager(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getSummary = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get("api/usersReport/summary");
      setSummary(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPerManager();
    getSummary();
  }, []);

  return (
    <div className="according_managers_section section_profile active">
      <div className="btn_actions">
        <button className="btn_action">
          <i className="fa-solid fa-download"></i>
          <span>{t("Download")}</span>
        </button>
        <button className="btn_action">
          <i className="fa-solid fa-rotate"></i>
          <span>{t("Update")}</span>
        </button>
      </div>

      <div className="line grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto">
          <div className="container_chart h-[250px] md:h-[400px]">
            <ChartPie data={data} />
          </div>
        </div>
        <div>
          <div className="list_group">
            <div className="item_group">
              <h5>{t("global_total")}</h5>
              <span>{summary && summary.total}</span>
            </div>
            <div className="item_group">
              <h5>{t("users_status_active")}</h5>
              <span>{summary && summary.active}</span>
            </div>
            <div className="item_group">
              <h5>{t("Expired")}</h5>
              <span>{summary && summary.expired}</span>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default AccordingManagers;
