import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";

const SettingsTelegraml = () => {
  const [loading, setLoading] = useState(false);
  const [generalSettings, setGeneralSettings] = useState({
    telegram_enabled: false,
    telegram_bot_token: "",
    telegram_webhook_domain: "",
    telegram_welcome_message: null,
    telegram_on_activation: false,
    telegram_activation_message: null,
    telegram_expiration_message_days: -1,
    telegram_expiration_message: null,
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

  const getTelegramSettings = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/settings/telegram_");
      setGeneralSettings((prev) => {
        return {
          ...prev,
          telegram_enabled: data && data.telegram_enabled,
          telegram_bot_token: data && data.telegram_bot_token,
          telegram_webhook_domain: data && data.telegram_webhook_domain,
          telegram_welcome_message: data && data.telegram_welcome_message,
          telegram_on_activation: data && data.telegram_on_activation,
          telegram_activation_message: data && data.telegram_activation_message,
          telegram_expiration_message_days:
            data && data.telegram_expiration_message_days,
          telegram_expiration_message: data && data.telegram_expiration_message,
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
      await apiAxios.post("api/settings/telegram", {
        payload: encryptedData({
          telegram_enabled: generalSettings.telegram_enabled,
          telegram_bot_token: generalSettings.telegram_bot_token,
          telegram_webhook_domain: generalSettings.telegram_webhook_domain,
          telegram_welcome_message: generalSettings.telegram_welcome_message,
          telegram_on_activation: generalSettings.telegram_on_activation,
          telegram_activation_message:
            generalSettings.telegram_activation_message,
          telegram_expiration_message_days:
            generalSettings.telegram_expiration_message_days,
          telegram_expiration_message:
            generalSettings.telegram_expiration_message,
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
    getTelegramSettings();
  }, []);

  return (
    <div className="m-[10px]">
      <SectionForm title={t("Telegram Settings")}>
        <SwitchSectionForm
          label={t("Enable Telegram Bot")}
          value={generalSettings.telegram_enabled}
          onChange={handleChangeSettings}
          id={"telegram_enabled"}
        />
        <InputSectionForm
          label={t("Bot Token")}
          value={generalSettings.telegram_bot_token}
          onChange={handleChangeSettings}
          id={"telegram_bot_token"}
        />
        <InputSectionForm
          label={t("SAS4 public domain/IP")}
          value={generalSettings.telegram_webhook_domain}
          onChange={handleChangeSettings}
          id={"telegram_webhook_domain"}
          placeholder={"x.x.x.x"}
        />
        <InputSectionForm
          label={t("Bot Welcome Message")}
          value={generalSettings.telegram_welcome_message}
          onChange={handleChangeSettings}
          id={"telegram_welcome_message"}
        />
        <SwitchSectionForm
          label={t("Send Message On Activation")}
          value={generalSettings.telegram_on_activation}
          onChange={handleChangeSettings}
          id={"telegram_on_activation"}
        />
        <InputSectionForm
          label={t("Activation Message")}
          value={generalSettings.telegram_activation_message}
          onChange={handleChangeSettings}
          id={"telegram_activation_message"}
        />
        <SelectSectionForm
          label={t("Send Expiration Warning")}
          value={generalSettings.telegram_expiration_message_days}
          onChange={handleChangeSettings}
          id={"telegram_expiration_message_days"}
          options={[
            { name: "never", value: "-1" },
            { name: "before 1 day", value: "1" },
            { name: "before 2 day", value: "2" },
            { name: "before 3 day", value: "3" },
          ]}
        />
        <InputSectionForm
          label={t("Expiration Message")}
          value={generalSettings.telegram_enabled}
          onChange={handleChangeSettings}
          id={"telegram_expiration_message"}
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

export default SettingsTelegraml;
