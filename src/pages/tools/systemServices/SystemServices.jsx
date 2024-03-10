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
      setTunnelStatus(data.data);
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
                    <div className="info">
                      <span>
                        HTTP:
                        <a
                          target="_blank"
                          href="http://tunnel2.snono.systems:14173"
                        >
                          http://tunnel2.snono.systems:14173
                        </a>
                      </span>
                      <span>
                        HTTPS:
                        <a
                          target="_blank"
                          href="https://tunnel2.snono.systems:24173"
                        >
                          https://tunnel2.snono.systems:24173
                        </a>
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="status run">RUNNING</span>
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
                  <span className="status stop">STOP</span>
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
                  <span className="status stop">STOP</span>
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
                  <span className="status stop">STOP</span>
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
                  <span className="status stop">STOP</span>
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
                  <span className="status stop">STOP</span>
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
                  <span className="status stop">STOP</span>
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
                  <span className="status online">ONLINE</span>
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
        </div>
      </MainSection>
      {loading && <Loader />}
    </div>
  );
};

export default SystemServices;
