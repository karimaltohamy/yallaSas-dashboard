import React, { useState } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./settingsFreezone.scss";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import { t } from "i18next";

const SettingsFreezone = () => {
  const [enableFreezoneTraffic, setEnableFreezoneTraffic] = useState("");

  const changeEnableFreezone = (e) => {
    console.log(e);
    setEnableFreezoneTraffic(e.target.checked);
  };

  return (
    <div className="settings_freezone_section">
      <MainSection
        title={t("Free Zone Settings")}
        icon={<i className="fa-solid fa-asterisk"></i>}
      >
        <div className="settings_freezone_content">
          <div className="alert alert-info">
            <p>
              {t(
                "This feature allows you to exclude some IP ranges from traffic accounting, such as local google traffic or local IPTV service. Enabling it requires enabling Mikrotik IP Accounting service and making it reachable via HTTP."
              )}
            </p>
          </div>
          <form action="" className="enable_freezone">
            <SwitchSectionForm
              label={t("Enable Freezone Traffic")}
              value={enableFreezoneTraffic}
              onChange={changeEnableFreezone}
              id="enableFreezoneTraffic"
            />
          </form>

          <div className="freezone_table">
            {t("Name")}
            <table>
              <thead>
                <tr>
                  <th>{t("IP")}</th>
                  <th>{t("Netmask")}</th>
                  <th>{t("Free Ratio(%)")}</th>
                  <th>{t("Enabled")}</th>
                  <th>{t("Action")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="text" placeholder="Zone Name" />
                  </td>
                  <td>
                    <input type="text" placeholder="a.b.c.d" />
                  </td>
                  <td>
                    <input type="text" placeholder="255.255.255.0" />
                  </td>
                  <td>
                    <input
                      type="range"
                      className="range"
                      id="range_freezone"
                      min="0"
                      max="100"
                    />
                    <div className="value text-center">%0</div>
                  </td>
                  <td>
                    <button>
                      <i className="fa-solid fa-floppy-disk save"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default SettingsFreezone;
