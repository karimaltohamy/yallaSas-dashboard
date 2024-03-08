import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import { Link } from "react-router-dom";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";

const SettingsNotifications = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [generalSettings, setGeneralSettings] = useState({
    notifications_email_enabled: false,
    notifications_email_template_activation: -1,
    notifications_email_template_registration: -1,
    notifications_email_template_expiration: null,
    notifications_email_template_termination: -1,
    notifications_sms_activation: false,
    notifications_sms_expiration: false,
    notifications_sms_expiration_period: 0,
    notifications_email_expiration: false,
    notifications_email_expiration_period: null,
    notifications_manager_dashboard_enabled: false,
    notifications_manager_dashboard_type: null,
    notifications_manager_dashboard_text: null,
    notifications_acp_login_enabled: false,
    notifications_acp_login_page_message: null,
    notifications_show_welcome_screen: false,
    btn_group: null,
    notifications_fup_sms: false,
    notifications_fup_sms_text: "",
    notifications_fup_email: false,
    notifications_fup_email_template_id: null,
    notifications_fup_portal: false,
    notifications_fup_portal_text: null,
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

  const getTemplates = async () => {
    try {
      const { data } = await apiAxios.get("api/emailTemplate");
      setTemplates(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getNotificationsSettings = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/settings/notifications_");
      setGeneralSettings((prev) => {
        return {
          ...prev,
          notifications_email_enabled:
            data.notifications_email_enabled == 1 ? true : false,
          notifications_email_template_activation:
            data.notifications_email_template_activation,
          notifications_email_template_registration:
            data.notifications_email_template_registration,
          notifications_email_template_expiration:
            data.notifications_email_template_expiration,
          notifications_email_template_termination:
            data.notifications_email_template_termination,
          notifications_sms_activation:
            data.notifications_sms_activation == 1 ? true : false,
          notifications_sms_expiration:
            data.notifications_sms_expiration == 1 ? true : false,
          notifications_sms_expiration_period:
            data.notifications_sms_expiration_period,
          notifications_email_expiration:
            data.notifications_email_expiration == 1 ? true : false,
          notifications_email_expiration_period:
            data.notifications_email_expiration_period,
          notifications_manager_dashboard_enabled:
            data.notifications_manager_dashboard_enabled == 1 ? true : false,
          notifications_manager_dashboard_type:
            data.notifications_manager_dashboard_type,
          notifications_manager_dashboard_text:
            data.notifications_manager_dashboard_text,
          notifications_acp_login_enabled:
            data.notifications_acp_login_enabled == 1 ? true : false,
          notifications_acp_login_page_message:
            data.notifications_acp_login_page_message,
          notifications_show_welcome_screen:
            data.notifications_show_welcome_screen == 1 ? true : false,
          btn_group: data.btn_group,
          notifications_fup_sms: data.notifications_fup_sms == 1 ? true : false,
          notifications_fup_sms_text: data.notifications_fup_sms_text,
          notifications_fup_email:
            data.notifications_fup_email == 1 ? true : false,
          notifications_fup_email_template_id:
            generalSettings.notifications_fup_email_template_id,
          notifications_fup_portal:
            generalSettings.notifications_fup_portal == 1 ? true : false,
          notifications_fup_portal_text:
            generalSettings.notifications_fup_portal_text,
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
          notifications_email_enabled:
            generalSettings.notifications_email_enabled ? 1 : 0,
          notifications_email_template_activation:
            generalSettings.notifications_email_template_activation,
          notifications_email_template_registration:
            generalSettings.notifications_email_template_registration,
          notifications_email_template_expiration:
            generalSettings.notifications_email_template_expiration,
          notifications_email_template_termination:
            generalSettings.notifications_email_template_termination,
          notifications_sms_activation:
            generalSettings.notifications_sms_activation ? 1 : 0,
          notifications_sms_expiration:
            generalSettings.notifications_sms_expiration ? 1 : 0,
          notifications_sms_expiration_period:
            generalSettings.notifications_sms_expiration_period,
          notifications_email_expiration:
            generalSettings.notifications_email_expiration ? 1 : 0,
          notifications_email_expiration_period:
            generalSettings.notifications_email_expiration_period,
          notifications_manager_dashboard_enabled:
            generalSettings.notifications_manager_dashboard_enabled ? 1 : 0,
          notifications_manager_dashboard_type:
            generalSettings.notifications_manager_dashboard_type,
          notifications_manager_dashboard_text:
            generalSettings.notifications_manager_dashboard_text,
          notifications_acp_login_enabled:
            generalSettings.notifications_acp_login_enabled ? 1 : 0,
          notifications_acp_login_page_message:
            generalSettings.notifications_acp_login_page_message,
          notifications_show_welcome_screen:
            generalSettings.notifications_show_welcome_screen ? 1 : 0,
          btn_group: generalSettings.btn_group,
          notifications_fup_sms: generalSettings.notifications_fup_sms ? 1 : 0,
          notifications_fup_sms_text:
            generalSettings.notifications_fup_sms_text,
          notifications_fup_email: generalSettings.notifications_fup_email
            ? 1
            : 0,
          notifications_fup_email_template_id:
            generalSettings.notifications_fup_email_template_id,
          notifications_fup_portal: generalSettings.notifications_fup_portal
            ? 1
            : 0,
          notifications_fup_portal_text:
            generalSettings.notifications_fup_portal_text,
        }),
      });
      toast.success("Successfull Save Settings");
      getNotificationsSettings();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTemplates();
    getNotificationsSettings();
  }, []);

  return (
    <div className="content_page">
      <SectionForm title={t("Notification Settings")}>
        <h4 className="text-[20px] font-semibold mt-4 mb-3 pb-1 border-b border-gray-300">
          {t("User Notifications")}
        </h4>
        <div className="grid grid-cols-1 gap-2">
          <SwitchSectionForm
            label={t("Email Notifications")}
            value={generalSettings.notifications_email_enabled}
            onChange={handleChangeSettings}
            id={"notifications_email_enabled"}
          />
          {generalSettings.notifications_email_enabled && (
            <SelectSectionForm
              label={"User Activation Template"}
              value={generalSettings.notifications_email_template_activation}
              onChange={handleChangeSettings}
              id="notifications_email_template_activation"
              options={
                templates &&
                templates.map((item) => ({ name: item.name, value: item.id }))
              }
            />
          )}
          {generalSettings.notifications_email_enabled && (
            <SelectSectionForm
              label={"User Registration Template"}
              value={generalSettings.notifications_email_template_registration}
              onChange={handleChangeSettings}
              id="notifications_email_template_registration"
              options={
                templates &&
                templates.map((item) => ({ name: item.name, value: item.id }))
              }
            />
          )}
          {generalSettings.notifications_email_enabled && (
            <SelectSectionForm
              label={"User Expiration Warning Template"}
              value={generalSettings.notifications_email_template_expiration}
              onChange={handleChangeSettings}
              id="notifications_email_template_expiration"
              options={
                templates &&
                templates.map((item) => ({ name: item.name, value: item.id }))
              }
            />
          )}
          {generalSettings.notifications_email_enabled && (
            <SelectSectionForm
              label={"User Termination Template"}
              value={generalSettings.notifications_email_template_termination}
              onChange={handleChangeSettings}
              id="notifications_email_template_termination"
              options={
                templates &&
                templates.map((item) => ({ name: item.name, value: item.id }))
              }
            />
          )}

          <SwitchSectionForm
            label={t("Notify via SMS on activation")}
            value={generalSettings.notifications_sms_activation}
            onChange={handleChangeSettings}
            id={"notifications_sms_activation"}
          />
          <SwitchSectionForm
            label={t("Notify via SMS on expiration")}
            value={generalSettings.notifications_sms_expiration}
            onChange={handleChangeSettings}
            id={"notifications_sms_expiration"}
          />
          {generalSettings.notifications_sms_expiration && (
            <SelectSectionForm
              label={"Send SMS before expiration in"}
              value={generalSettings.notifications_sms_expiration_period}
              onChange={handleChangeSettings}
              id="notifications_sms_expiration_period"
              options={[
                { name: "1 day", value: "1" },
                { name: "2 day", value: "2" },
                { name: "3 day", value: "3" },
                { name: "4 day", value: "4" },
              ]}
            />
          )}
          <SwitchSectionForm
            label={t("Notify via Email on expiration")}
            value={generalSettings.notifications_email_expiration}
            onChange={handleChangeSettings}
            id={"notifications_email_expiration"}
          />
          {generalSettings.notifications_email_expiration && (
            <SelectSectionForm
              label={"Send email before expiration in"}
              value={generalSettings.notifications_email_expiration_period}
              onChange={handleChangeSettings}
              id="notifications_email_expiration_period"
              options={[
                { name: "1 day", value: "1" },
                { name: "2 day", value: "2" },
                { name: "3 day", value: "3" },
                { name: "4 day", value: "4" },
              ]}
            />
          )}
        </div>
        <h4 className="text-[20px] font-semibold mt-4 mb-3 pb-1 border-b border-gray-300">
          {t("Manager Notifications")}
        </h4>
        <div className="grid grid-cols-1 gap-2">
          <SwitchSectionForm
            label={t("Show dashboard notification")}
            value={generalSettings.notifications_manager_dashboard_enabled}
            onChange={handleChangeSettings}
            id={"notifications_manager_dashboard_enabled"}
          />
          {generalSettings.notifications_manager_dashboard_enabled && (
            <SelectSectionForm
              label={"Dashboard notification type"}
              value={generalSettings.notifications_manager_dashboard_type}
              onChange={handleChangeSettings}
              id="notifications_manager_dashboard_type"
              options={[
                { name: "Info Alert", value: "info" },
                { name: "Green Alert", value: "success" },
                { name: "Yellow Alert", value: "warning" },
                { name: "Red Alert", value: "danger" },
              ]}
            />
          )}
          {generalSettings.notifications_manager_dashboard_enabled && (
            <InputSectionForm
              label={"Dashboard notification Text"}
              value={generalSettings.notifications_manager_dashboard_text}
              onChange={handleChangeSettings}
              id="notifications_manager_dashboard_text"
            />
          )}
          <SwitchSectionForm
            label={t("Show Login Page Message")}
            value={generalSettings.notifications_acp_login_enabled}
            onChange={handleChangeSettings}
            id={"notifications_acp_login_enabled"}
          />
          <InputSectionForm
            label={t("Manager Login Page Message")}
            value={generalSettings.notifications_acp_login_page_message}
            onChange={handleChangeSettings}
            id={"notifications_acp_login_page_message"}
          />
          <SwitchSectionForm
            label={t("Show Welcome Screen On Login")}
            value={generalSettings.notifications_show_welcome_screen}
            onChange={handleChangeSettings}
            id={"notifications_show_welcome_screen"}
          />
          {generalSettings.notifications_show_welcome_screen && (
            <Link
              to={""}
              className="bg-black text-white px-3 py-1 rounded-md text-[15px] w-fit flex items-center gap-2"
            >
              <i class="fa-solid fa-spell-check"></i>
              Screen Editor
            </Link>
          )}
        </div>
        <h4 className="text-[20px] font-semibold mt-4 mb-3 pb-1 border-b border-gray-300">
          {t("User FUP Notification")}
        </h4>
        <div className="grid grid-cols-1 gap-2">
          <SwitchSectionForm
            label={t("Notify via SMS")}
            value={generalSettings.notifications_fup_sms}
            onChange={handleChangeSettings}
            id={"notifications_fup_sms"}
          />
          {generalSettings.notifications_fup_sms && (
            <InputSectionForm
              label={t("SMS Text")}
              value={generalSettings.notifications_fup_sms_text}
              onChange={handleChangeSettings}
              id={"notifications_fup_sms_text"}
            />
          )}
          <SwitchSectionForm
            label={t("Notify via Email")}
            value={generalSettings.notifications_fup_email}
            onChange={handleChangeSettings}
            id={"notifications_fup_email"}
          />
          {generalSettings.notifications_fup_email && (
            <SelectSectionForm
              label={t("Email Template")}
              value={generalSettings.notifications_fup_email_template_id}
              onChange={handleChangeSettings}
              id={"notifications_fup_email_template_id"}
              options={
                templates &&
                templates.map((item) => ({ name: item.name, value: item.id }))
              }
            />
          )}
          <SwitchSectionForm
            label={t("Show Notification on FUP")}
            value={generalSettings.notifications_fup_portal}
            onChange={handleChangeSettings}
            id={"notifications_fup_portal"}
          />
          {generalSettings.notifications_fup_portal && (
            <InputSectionForm
              label={t("SMS Text")}
              value={generalSettings.notifications_fup_portal_text}
              onChange={handleChangeSettings}
              id={"notifications_fup_portal_text"}
            />
          )}
        </div>
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

export default SettingsNotifications;
