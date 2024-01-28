import React from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./systemServices.scss";

const SystemServices = () => {
  return (
    <MainSection
      title={"System Services"}
      icon={<i className="fa-solid fa-puzzle-piece"></i>}
    >
      <div className="system_services_table">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="details">
                  <h6 className="service_name">Remote Access Tunnel</h6>
                  <div className="desc_name">
                    Allows remote access to the server from outside when server
                    is behind firewall
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
                  <h6 className="service_name">Remote Access Tunnel</h6>
                  <div className="desc_name">
                    Allows remote access to the server from outside when server
                    is behind firewall
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
                  <h6 className="service_name">FreeRadius</h6>
                  <div className="desc_name">RADIUS server</div>
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
                  <h6 className="service_name">SAS Poller</h6>
                  <div className="desc_name">cleans idle user sessions</div>
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
                  <h6 className="service_name">System Manager</h6>
                  <div className="desc_name">manages system components</div>
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
                  <h6 className="service_name">FreeRadius</h6>
                  <div className="desc_name">RADIUS server</div>
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
                  <h6 className="service_name">SAS Poller</h6>
                  <div className="desc_name">cleans idle user sessions</div>
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
                  <h6 className="service_name">System Manager</h6>
                  <div className="desc_name">manages system components</div>
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
  );
};

export default SystemServices;
