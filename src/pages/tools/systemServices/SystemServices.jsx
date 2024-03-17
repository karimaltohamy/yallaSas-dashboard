import React, { useEffect, useState } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./systemServices.scss";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import Loader from "../../../components/loader/Loader";

const SystemServices = () => {
  const [systemServices, setSystemServices] = useState([]);
  const [tunnelStatus, setTunnelStatus] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSystemServices = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get("api/systemService/status");
      setSystemServices(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getTunnelStatus = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get("api/tunnel/status");
      setTunnelStatus(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSystemServices();
    getTunnelStatus();
  }, []);

  return (
    <div className="m-[10px]">
      <MainSection
        title={t("System Services")}
        icon={<i className="fa-solid fa-puzzle-piece"></i>}
      >
        <div className="system_services_table">
          {systemServices && (
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">
                        {t("Remote Access Tunnel")}
                      </h6>
                      <div className="desc_name">
                        {t(
                          "Allows remote access to the server from outside when server is behind firewall"
                        )}
                      </div>
                    </div>
                  </td>
                  <td>
                    {tunnelStatus?.tunnel == 1 ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">{t("FreeRadius")}</h6>
                      <div className="desc_name">{t("RADIUS server")}</div>
                    </div>
                  </td>
                  <td>
                    {systemServices.freeradius ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">{t("SAS Poller")}</h6>
                      <div className="desc_name">
                        {t("cleans idle user sessions")}
                      </div>
                    </div>
                  </td>
                  <td>
                    {systemServices.sas_poller ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">{t("System Manager")}</h6>
                      <div className="desc_name">
                        {t("manages system components")}
                      </div>
                    </div>
                  </td>
                  <td>
                    {systemServices.sas_systemmanager ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">{t("Traffic Monitor")}</h6>
                      <div className="desc_name">
                        {t("monitors users traffic")}
                      </div>
                    </div>
                  </td>
                  <td>
                    {systemServices.sas_trafficaccounting ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">{t("Policy Manager")}</h6>
                      <div className="desc_name">
                        {t(
                          "changes users speed/state based on consumed traffic and/or time of the day"
                        )}
                      </div>
                    </div>
                  </td>
                  <td>
                    {systemServices.sas_policymanager ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">{t("Cards Generator")}</h6>
                      <div className="desc_name">
                        {t("generates all kinds of cards")}
                      </div>
                    </div>
                  </td>
                  <td>
                    {systemServices.sas_cardsgenerator ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">{t("Update Manager")}</h6>
                      <div className="desc_name">
                        {t("checks for new updates and install them")}
                      </div>
                    </div>
                  </td>
                  <td>
                    {systemServices.sas_updatemanager ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">{t("Mail Poller")}</h6>
                      <div className="desc_name">
                        {t("processes mail queue")}
                      </div>
                    </div>
                  </td>
                  <td>
                    {systemServices.sas_mailpoller ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">{t("Crontab Service")}</h6>
                      <div className="desc_name">{t("jobs scheduler")}</div>
                    </div>
                  </td>
                  <td>
                    {systemServices.sas_crontab ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">
                        {t("Users Disconnect Daemon")}
                      </h6>
                      <div className="desc_name">
                        {t("disconnects users when requested to do so")}
                      </div>
                    </div>
                  </td>
                  <td>
                    {systemServices.sas_dispoller ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">{t("SMS Service")}</h6>
                      <div className="desc_name">
                        {t("sends SMS notifications")}
                      </div>
                    </div>
                  </td>
                  <td>
                    {systemServices.sas_sms ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">
                        {t("Radius Log Monitor")}
                      </h6>
                      <div className="desc_name">
                        {t("RADIUS log streamer")}
                      </div>
                    </div>
                  </td>
                  <td>
                    {systemServices.sas_radiuslog ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="details">
                      <h6 className="service_name">{t("User Live Traffic")}</h6>
                      <div className="desc_name">
                        {t("SNMP monitor for user traffic (Mikrotik)")}
                      </div>
                    </div>
                  </td>
                  <td>
                    {systemServices.sas_userlivetraffic ? (
                      <span className="status run">RUNNING</span>
                    ) : (
                      <span className="status stop">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <div className="btns">
                      <button className="btn_play">
                        <i className="fa-solid fa-play"></i>
                        <span>START</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-rotate"></i>
                        <span> RESTART</span>
                      </button>
                      <button className="btn_play">
                        <i className="fa-solid fa-stop"></i>
                        <span>STOP</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </MainSection>
      {loading && <Loader />}
    </div>
  );
};

export default SystemServices;
