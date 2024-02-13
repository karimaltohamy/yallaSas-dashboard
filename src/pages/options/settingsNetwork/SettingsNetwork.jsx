import React from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./settingsNetwork.scss";
import InputItem from "../../../components/popup/inputItem/InputItem";
import { t } from "i18next";

const SettingsNetwork = () => {
  return (
    <div className="m-[10px]">
      <MainSection
        title={t("Network Settings")}
        icon={<i className="fa-solid fa-asterisk"></i>}
      >
        <div className="settings_network_content">
          <div className="global_settings">
            <h4 className="title">{t("Global Settings")}</h4>
            <form action="" className="global_form">
              <InputItem label={t("Hostname")} />
              <InputItem label={t("Default Gateway")} />
              <InputItem label={t("DNS(s)")} />
            </form>
          </div>
          <div className="network_interfaces">
            <h4 className="title">{t("Network Interfaces")}</h4>

            <button className="btn_add_col">
              <i className="fa-solid fa-plus"></i>
              <span>{t("Add Adress")}</span>
            </button>

            <div className="network_table">
              <table>
                <thead>
                  <tr>
                    <th>{t("Interface")}</th>
                    <th>{t("IP")}</th>
                    <th>{t("Netmask")}</th>
                    <th>{t("Action")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select name="" id="">
                        <option value="">Select Interface</option>
                        <option value="">eth0</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" placeholder="x.x.x" />
                    </td>
                    <td>
                      <input type="text" placeholder="x.x.x" />
                    </td>
                    <td>
                      <div className="btns">
                        <button>
                          <i className="fa-solid fa-check"></i>
                        </button>
                        <button>
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>eth0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>
                      <div className="btns">
                        <button>
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="static_interfaces">
            <h4 className="title">{t("Static Routes")}</h4>

            <button className="btn_add_col">
              <i className="fa-solid fa-plus"></i>
              <span>{t("Add Route")}</span>
            </button>

            <div className="network_table">
              <table>
                <thead>
                  <tr>
                    <th>{t("Destination")}</th>
                    <th>{t("Netmask")}</th>
                    <th>{t("Gateway")}</th>
                    <th>{t("Action")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" placeholder="x.x.x" />
                    </td>
                    <td>
                      <input type="text" placeholder="x.x.x" />
                    </td>
                    <td>
                      <input type="text" placeholder="x.x.x" />
                    </td>
                    <td>
                      <div className="btns">
                        <button>
                          <i className="fa-solid fa-check"></i>
                        </button>
                        <button>
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>
                      <div className="btns">
                        <button>
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <button className="btn_saveChanges">
            <i className="fa-regular fa-floppy-disk"></i>
            {t("Save")}
          </button>
        </div>
      </MainSection>
    </div>
  );
};

export default SettingsNetwork;
