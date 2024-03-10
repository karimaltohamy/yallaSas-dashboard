import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputItem from "../../../components/popup/inputItem/InputItem";
import { t } from "i18next";
import Loader from "../../../components/loader/Loader";
import apiAxios from "../../../utils/apiAxios";
import { toast } from "react-toastify";
import { encryptedData } from "../../../utils/utilsFunctions";

const SettingsSms = () => {
  const [loading, setLoading] = useState(false);
  const [generalSettings, setGeneralSettings] = useState({
    sms_api_url: "",
    sms_enabled: false,
    sms_message_activation: "",
    sms_message_expiration: "",
    sms_method: 0,
    sms_post_params: "",
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

  const getSmsSettings = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/settings/sms_");
      setGeneralSettings((prev) => {
        return {
          ...prev,
          sms_api_url: data && data.sms_api_url,
          sms_enabled: data && data.sms_enabled,
          sms_message_activation: data && data.sms_message_activation,
          sms_message_expiration: data && data.sms_message_expiration,
          sms_method: data && data.sms_method,
          sms_post_params: data && data.sms_post_params,
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
          sms_api_url: generalSettings.sms_api_url,
          sms_enabled: generalSettings.sms_enabled,
          sms_message_activation: generalSettings.sms_message_activation,
          sms_message_expiration: generalSettings.sms_message_expiration,
          sms_method: generalSettings.sms_method,
          sms_post_params: generalSettings.sms_post_params,
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
    getSmsSettings();
  }, []);

  return (
    <div className="m-[10px]">
      <SectionForm title={t("SMS Configuration")}>
        <SwitchSectionForm
          label={t("Enable SMS Service")}
          value={generalSettings.sms_enabled}
          onChange={handleChangeSettings}
          id={"sms_enabled"}
        />
        <InputItem
          label={t("SMS API Url")}
          value={generalSettings.sms_api_url}
          onChange={handleChangeSettings}
          id={"sms_api_url"}
        />
        <InputItem
          label={t("API Method")}
          value={generalSettings.sms_method}
          onChange={handleChangeSettings}
          id={"sms_method"}
        />
        <InputItem
          label={t("Activation SMS")}
          value={generalSettings.sms_message_activation}
          onChange={handleChangeSettings}
          id={"sms_message_activation"}
        />
        <InputItem
          label={t("SMS to be sent before expiration")}
          value={generalSettings.sms_message_expiration}
          onChange={handleChangeSettings}
          id={"sms_message_expiration"}
        />
        <InputItem
          label={t("SMS to be sent after expiration")}
          value={generalSettings.sms_post_params}
          onChange={handleChangeSettings}
          id={"sms_post_params"}
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

export default SettingsSms;
