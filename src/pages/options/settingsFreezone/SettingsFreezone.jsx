import React, { useEffect, useState } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./settingsFreezone.scss";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import Loader from "../../../components/loader/Loader";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";

const SettingsFreezone = () => {
  const [enableFreezoneTraffic, setEnableFreezoneTraffic] = useState(false);
  const [name, setName] = useState("");
  const [network, setNetwork] = useState("");
  const [netmask, setNetmask] = useState("");
  const [ratio, setRatio] = useState(0);
  const [loading, setLoading] = useState(0);

  const changeEnableFreezone = async (e) => {
    setEnableFreezoneTraffic(e.target.checked);
    setLoading(true);
    try {
      await apiAxios.post("api/settings", {
        payload: encryptedData({ freezone_enabled: e.target.checked ? 1 : 0 }),
      });
      toast.success("Successfull Enable");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const getFreezone = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/freezone");
      setName(data[0].name);
      setNetwork(data[0].network);
      setNetmask(data[0].netmask);
      setRatio(data[0].ratio);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getEnableFreezone = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/settings/freezone_");
      setEnableFreezoneTraffic(data.freezone_enabled == 1 ? true : false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveFreezone = async () => {
    setLoading(true);
    try {
      await apiAxios.post("api/freezone", {
        payload: encryptedData({
          name,
          network,
          netmask,
          ratio,
          enabled: enableFreezoneTraffic ? 1 : 0,
        }),
      });
      toast.success("Successfull Enable");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFreezone();
    getEnableFreezone();
  }, []);

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
                    <input
                      type="text"
                      placeholder="Zone Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="a.b.c.d"
                      value={network}
                      onChange={(e) => setNetwork(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="255.255.255.0"
                      value={netmask}
                      onChange={(e) => setNetmask(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="range"
                      className="range"
                      id="range_freezone"
                      min="0"
                      max="100"
                      value={ratio}
                      onChange={(e) => setRatio(e.target.value)}
                    />
                    <div className="value text-center">%{ratio}</div>
                  </td>
                  <td>
                    <button onClick={handleSaveFreezone}>
                      <i className="fa-solid fa-floppy-disk save"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </MainSection>
      {loading && <Loader />}
    </div>
  );
};

export default SettingsFreezone;
