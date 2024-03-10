import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";

const SettingsSastrack = () => {
  const [loading, setLoading] = useState(false);
  const [generalSettings, setGeneralSettings] = useState({
    sastrack_enabled: 0,
    sastrack_address: null,
    sastrack_secret: null,
  });

  const handleChangeSettings = (e) => {
    setGeneralSettings((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const getSasTrackSettings = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/settings/sastrack_");
      setGeneralSettings((prev) => {
        return {
          ...prev,
          sastrack_enabled: data && data.sastrack_enabled,
          sastrack_address: data && data.sastrack_address,
          sastrack_secret: data && data.sastrack_secret,
        };
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = async () => {
    setLoading(true);
    try {
      await apiAxios.post("api/settings", {
        payload: encryptedData({
          sastrack_enabled: generalSettings.sastrack_enabled,
          sastrack_address: generalSettings.sastrack_address,
          sastrack_secret: generalSettings.sastrack_secret,
        }),
      });
      toast.success("Successfull Save Settings");
      getSmsSettings();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSasTrackSettings();
  }, []);

  return (
    <div className="m-[10px]">
      <SectionForm title={t("SASTrack Settings")}>
        <SwitchSectionForm
          label={t("Enable SASTrack")}
          value={generalSettings.sastrack_enabled}
          onChange={handleChangeSettings}
          id={"sastrack_enabled"}
        />
        <InputSectionForm
          label={t("SASTrack IP Address")}
          value={generalSettings.sastrack_address}
          onChange={handleChangeSettings}
          id={"sastrack_address"}
        />
        <InputSectionForm
          label={t("SASTrack Shared Secret")}
          value={generalSettings.sastrack_secret}
          onChange={handleChangeSettings}
          id={"sastrack_secret"}
        />
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add" onClick={handleSaveSettings}>
          {t("global_button_submit")}
        </button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default SettingsSastrack;
