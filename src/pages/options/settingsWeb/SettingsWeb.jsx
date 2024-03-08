import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";
import Loader from "../../../components/loader/Loader";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";

const SettingsWeb = () => {
  const [loading, setLoading] = useState(false);
  const [generalSettings, setGeneralSettings] = useState({
    portal_admin_https: false,
    portal_admin_alias: "",
    portal_admin_virtual_host: "",
    portal_user_alias: "",
    portal_admin_captcha: false,
    portal_user_captcha: false,
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

  const handleGetSettings = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/settings/portal_");
      setGeneralSettings((prev) => {
        return {
          ...prev,
          portal_admin_https: data.portal_admin_https == 1 ? true : false,
          portal_admin_alias: data.portal_admin_alias,
          portal_admin_virtual_host: data.portal_admin_virtual_host,
          portal_user_alias: data.portal_user_alias,
          portal_admin_captcha: data.portal_admin_captcha == 1 ? true : false,
          portal_user_captcha: data.portal_user_captcha == 1 ? true : false,
        };
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleForm = async () => {
    setLoading(true);
    try {
      await apiAxios.post("api/settings/portal", {
        payload: encryptedData({
          portal_admin_https: generalSettings.portal_admin_https ? 1 : 0,
          portal_admin_alias: generalSettings.portal_admin_alias,
          portal_admin_virtual_host: generalSettings.portal_admin_virtual_host,
          portal_user_alias: generalSettings.portal_user_alias,
          portal_admin_captcha: generalSettings.portal_admin_captcha ? 1 : 0,
          portal_user_captcha: generalSettings.portal_user_captcha ? 1 : 0,
        }),
      });
      toast.success("successfull Save");
      handleGetSettings();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetSettings();
  }, []);

  return (
    <div className="m-[10px]">
      <SectionForm title={t("Web Portal SettingsUser Portal Settings")}>
        <SwitchSectionForm
          label={t("Force HTTPS")}
          value={generalSettings.portal_admin_https}
          onChange={handleChangeSettings}
          id={"portal_admin_https"}
        />
        <InputSectionForm
          label={t("Admin Portal Url")}
          value={generalSettings.portal_admin_alias}
          onChange={handleChangeSettings}
          id={"portal_admin_alias"}
        />
        <InputSectionForm
          label={t("Admin Portal VirtualHost")}
          value={generalSettings.portal_admin_virtual_host}
          onChange={handleChangeSettings}
          id={"portal_admin_virtual_host"}
        />
        <InputSectionForm
          label={t("User Portal Url")}
          value={generalSettings.portal_user_alias}
          onChange={handleChangeSettings}
          id={"portal_user_alias"}
        />
        <SwitchSectionForm
          label={t("Enable Login Captcha (Admin Portal)")}
          value={generalSettings.portal_admin_captcha}
          onChange={handleChangeSettings}
          id={"portal_admin_captcha"}
        />
        <SwitchSectionForm
          label={t("Enable Login Captcha (User Portal)")}
          value={generalSettings.portal_user_captcha}
          onChange={handleChangeSettings}
          id={"portal_user_captcha"}
        />
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add" onClick={handleForm}>
          {t("global_button_submit")}
        </button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default SettingsWeb;
