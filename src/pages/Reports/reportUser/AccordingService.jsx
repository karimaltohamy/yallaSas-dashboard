import React, { useEffect, useState } from "react";
import "./sectiosServicesAndRegistration.scss";
import ChartPie from "../../../components/charts/ChartPie";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData, getRandomColor } from "../../../utils/utilsFunctions";
import { t } from "i18next";
import Loader from "../../../components/loader/Loader";

const AccordingService = () => {
  const [perProfile, setPerProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [managers, setManagers] = useState([]);
  const [managerId, setManagerId] = useState(null);

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

  const data = {
    labels: perProfile && perProfile.map((item) => item.profile_name),
    datasets: [
      {
        label: "Users",
        data: perProfile && perProfile.map((item) => item.c),
        backgroundColor:
          perProfile && perProfile.map((item) => getRandomColor()),
        borderColor: perProfile && perProfile.map((item) => getRandomColor()),
        borderWidth: 1,
      },
    ],
  };

  const getPerProfile = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/usersReport/perProfile", {
        payload: encryptedData({ manager_id: managerId }),
      });
      setPerProfile(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getManagers();
  }, []);

  useEffect(() => {
    getPerProfile();
  }, [managerId]);

  return (
    <div className="according_service">
      <div className="head_section">
        <form action="" className="select_manager">
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
        <div className="mx-auto mt-5 flex items-center justify-center">
          <div className="container_chart h-[250px] md:h-[400px] w-[250px] md:w-[400px]">
            <ChartPie data={data} />
          </div>
        </div>
        <div className="according_service_infomation">
          <div className="according_service_table">
            <table>
              <thead>
                <tr>
                  <th>{t("global_profile")}</th>
                  <th>{t("global_total")}</th>
                  <th>{t("users_status_active")}</th>
                  <th>{t("users_status_expired")}</th>
                </tr>
              </thead>
              <tbody>
                {perProfile &&
                  perProfile.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{item.profile_name}</td>
                        <td>{item.c}</td>
                        <td>{item.active}</td>
                        <td>{item.expired}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default AccordingService;
