import React, { useState } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./settingsFreezone.scss";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";

const SettingsFreezone = () => {
  const [enableFreezoneTraffic, setEnableFreezoneTraffic] = useState("");

  const changeEnableFreezone = (e) => {
    console.log(e);
    setEnableFreezoneTraffic(e.target.checked);
  };

  return (
    <div className="settings_freezone_section">
      <MainSection
        title={"Free Zone Settings"}
        icon={<i class="fa-solid fa-asterisk"></i>}
      >
        <div class="settings_freezone_content">
          <div class="alert alert-info">
            <p>
              This feature allows you to exclude some IP ranges from traffic
              accounting, such as local google traffic or local IPTV service.
              Enabling it requires enabling Mikrotik IP Accounting service and
              making it reachable via HTTP.
            </p>
          </div>
          <form action="" class="enable_freezone">
            <SwitchSectionForm
              label={"Enable Freezone Traffic"}
              value={enableFreezoneTraffic}
              onChange={changeEnableFreezone}
              id="enableFreezoneTraffic"
            />
          </form>

          <div class="freezone_table">
            Name
            <table>
              <thead>
                <tr>
                  <th>IP</th>
                  <th>Netmask</th>
                  <th>Free Ratio(%)</th>
                  <th>Enabled</th>
                  <th>Action</th>
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
                      class="range"
                      id="range_freezone"
                      min="0"
                      max="100"
                    />
                    <div class="value text-center">%0</div>
                  </td>
                  <td>
                    <button>
                      <i class="fa-solid fa-floppy-disk save"></i>
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
