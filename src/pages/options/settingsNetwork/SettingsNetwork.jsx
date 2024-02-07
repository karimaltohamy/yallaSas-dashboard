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
        icon={<i class="fa-solid fa-asterisk"></i>}
      >
        <div class="settings_network_content">
          <div class="global_settings">
            <h4 class="title">{t("Global Settings")}</h4>
            <form action="" class="global_form">
              <InputItem label={t("Hostname")} />
              <InputItem label={t("Default Gateway")} />
              <InputItem label={t("DNS(s)")} />
            </form>
          </div>
          <div class="network_interfaces">
            <h4 class="title">{t("Network Interfaces")}</h4>

            <button class="btn_add_col">
              <i class="fa-solid fa-plus"></i>
              <span>{t("Add Adress")}</span>
            </button>

            <div class="network_table">
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
                      <div class="btns">
                        <button>
                          <i class="fa-solid fa-check"></i>
                        </button>
                        <button>
                          <i class="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>eth0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>
                      <div class="btns">
                        <button>
                          <i class="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="static_interfaces">
            <h4 class="title">{t("Static Routes")}</h4>

            <button class="btn_add_col">
              <i class="fa-solid fa-plus"></i>
              <span>{t("Add Route")}</span>
            </button>

            <div class="network_table">
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
                      <div class="btns">
                        <button>
                          <i class="fa-solid fa-check"></i>
                        </button>
                        <button>
                          <i class="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>
                      <div class="btns">
                        <button>
                          <i class="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <button class="btn_saveChanges">
            <i class="fa-regular fa-floppy-disk"></i>
            {t("Save")}
          </button>
        </div>
      </MainSection>
    </div>
  );
};

export default SettingsNetwork;
