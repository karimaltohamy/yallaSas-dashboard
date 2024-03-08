import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";

const SettingsAdvanced = () => {
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState({
    adv_idle_timeout: "",
    adv_interim_update: "",
    adv_tunnel_method: "",
    adv_lock_cards_owner: false,
    adv_disconnect_on_activate: false,
    adv_disconnect_on_update: false,
    adv_lock_mac_on_login: false,
    adv_reset_traffic_on_profile_change: false,
    adv_radius_case: "",
    adv_accept_invalid_users: false,
    adv_map_invalid_username: "",
    adv_limit_activation_reward_points: "",
    adv_random_auth_delay: false,
    adv_manager_jwt_ttl: "",
    adv_webhook_notifications: false,
    adv_webhook_notifications_url: "",
    adv_route_guard: false,
    adv_route_guard_url: "",
  });

  const handleChangeSettings = (e) => {
    setSettings((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const getSettings = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get("api/settings/adv_");
      setSettings((prev) => {
        return {
          ...prev,
          adv_idle_timeout: data.data && data.data?.adv_idle_timeout,
          adv_interim_update: data.data && data.data?.adv_interim_update,
          adv_tunnel_method: data.data && data.data?.adv_tunnel_method,
          adv_lock_cards_owner:
            data.data && data.data?.adv_lock_cards_owner == 1 ? true : false,
          adv_disconnect_on_activate:
            data.data && data.data?.adv_disconnect_on_activate == 1
              ? true
              : false,
          adv_disconnect_on_update:
            data.data && data.data?.adv_disconnect_on_update == 1
              ? true
              : false,
          adv_lock_mac_on_login:
            data.data && data.data?.adv_lock_mac_on_login == 1 ? true : false,
          adv_reset_traffic_on_profile_change:
            data.data && data.data?.adv_reset_traffic_on_profile_change == 1
              ? true
              : false,
          adv_radius_case: data.data && data.data?.adv_radius_case,
          adv_accept_invalid_users:
            data.data && data.data?.adv_accept_invalid_users == 1
              ? true
              : false,
          adv_map_invalid_username:
            data.data && data.data?.adv_map_invalid_username,
          adv_limit_activation_reward_points:
            data.data && data.data?.adv_limit_activation_reward_points,
          adv_random_auth_delay:
            data.data && data.data?.adv_random_auth_delay == 1 ? true : false,
          adv_manager_jwt_ttl: data.data && data.data?.adv_manager_jwt_ttl,
          adv_webhook_notifications:
            data.data && data.data?.adv_webhook_notifications == 1
              ? true
              : false,
          adv_webhook_notifications_url:
            data.data && data.data?.adv_webhook_notifications_url,
          adv_route_guard:
            data.data && data.data?.adv_route_guard == 1 ? true : false,
          adv_route_guard_url: data.data && data.data?.adv_route_guard_url,
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
      const { data } = await apiAxios.post("api/settings", {
        payload: encryptedData({
          adv_idle_timeout: settings.adv_idle_timeout,
          adv_interim_update: settings.adv_interim_update,
          adv_tunnel_method: settings.adv_tunnel_method,
          adv_lock_cards_owner: settings.adv_lock_cards_owner ? 1 : 0,
          adv_disconnect_on_activate: settings.adv_disconnect_on_activate
            ? 1
            : 0,
          adv_disconnect_on_update: settings.adv_disconnect_on_update ? 1 : 0,
          adv_lock_mac_on_login: settings.adv_lock_mac_on_login ? 1 : 0,
          adv_reset_traffic_on_profile_change:
            settings.adv_reset_traffic_on_profile_change ? 1 : 0,
          adv_radius_case: settings.adv_radius_case,
          adv_accept_invalid_users: settings.adv_accept_invalid_users ? 1 : 0,
          adv_map_invalid_username: settings.adv_map_invalid_username,
          adv_limit_activation_reward_points:
            settings.adv_limit_activation_reward_points,
          adv_random_auth_delay: settings.adv_random_auth_delay ? 1 : 0,
          adv_manager_jwt_ttl: settings.adv_manager_jwt_ttl,
          adv_webhook_notifications: settings.adv_webhook_notifications ? 1 : 0,
          adv_webhook_notifications_url: settings.adv_webhook_notifications_url,
          adv_route_guard: settings.adv_route_guard ? 1 : 0,
          adv_route_guard_url: settings.adv_route_guard_url,
        }),
      });
      toast.success("Successfull Operation");
      getSettings();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <div className="m-[10px]">
      <SectionForm title={t("Advanced Settings")}>
        <SelectSectionForm
          label={"User Idle Timeout"}
          value={settings.adv_idle_timeout}
          onChange={handleChangeSettings}
          id="adv_idle_timeout"
          options={[
            { name: "2 Minutes", value: "2" },
            { name: "4 Minutes", value: "4" },
            { name: "6 Minutes", value: "6" },
            { name: "8 Minutes", value: "8" },
            { name: "10 Minutes", value: "10" },
            { name: "20 Minutes", value: "20" },
            { name: "30 Minutes", value: "30" },
            { name: "60 Minutes", value: "60" },
            { name: "Igonre", value: "-1" },
          ]}
        />
        <SelectSectionForm
          label={t("Mikrotik interim update")}
          value={settings.adv_interim_update}
          onChange={handleChangeSettings}
          id="adv_interim_update"
          options={[
            { name: "Use Mikrotik Default", value: "0" },
            { name: "1 Minutes", value: "60" },
            { name: "2 Minutes", value: "120" },
            { name: "4 Minutes", value: "240" },
            { name: "6 Minutes", value: "360" },
            { name: "8 Minutes", value: "480" },
            { name: "10 Minutes", value: "600" },
            { name: "30 Minutes", value: "1800" },
            { name: "60 Minutes", value: "3600" },
          ]}
        />
        <SelectSectionForm
          label={t("Remote Control Method")}
          value={settings.adv_tunnel_method}
          onChange={handleChangeSettings}
          id="adv_tunnel_method"
          options={[
            { name: "PPTP VPN", value: "pptp" },
            { name: "SSH Tunnel", value: "ssh" },
          ]}
        />
        <SwitchSectionForm
          label={t("Lock Prepaid Cards To Owner")}
          value={settings.adv_lock_cards_owner}
          onChange={handleChangeSettings}
          id="adv_lock_cards_owner"
        />
        <SwitchSectionForm
          label={t("Disconnect On Activation")}
          value={settings.adv_disconnect_on_activate}
          onChange={handleChangeSettings}
          id="adv_disconnect_on_activate"
        />
        <SwitchSectionForm
          label={t("Disconnect On Update")}
          value={settings.adv_disconnect_on_update}
          onChange={handleChangeSettings}
          id="adv_disconnect_on_update"
        />
        <SwitchSectionForm
          label={t("Lock user MAC on login")}
          value={settings.adv_lock_mac_on_login}
          onChange={handleChangeSettings}
          id="adv_lock_mac_on_login"
        />
        <SwitchSectionForm
          label={t("Reset User Traffic On Profile Change")}
          value={settings.adv_reset_traffic_on_profile_change}
          onChange={handleChangeSettings}
          id="adv_reset_traffic_on_profile_change"
        />
        <SelectSectionForm
          label={t("Radius Username Case Sensitivity")}
          value={settings.adv_radius_case}
          onChange={handleChangeSettings}
          id="adv_radius_case"
          options={[
            { name: "Case Sensitive", value: "1" },
            { name: "Case Insensitive", value: "2" },
          ]}
        />
        <SwitchSectionForm
          label={t("Accept Invalid Users")}
          value={settings.adv_accept_invalid_users}
          onChange={handleChangeSettings}
          id="adv_accept_invalid_users"
        />
        {settings.adv_accept_invalid_users && (
          <InputSectionForm
            label={t("Invalid Account Username")}
            type={"text"}
            value={settings.adv_map_invalid_username}
            onChange={handleChangeSettings}
            id="adv_map_invalid_username"
          />
        )}
        <InputSectionForm
          label={t("Limit User Activation via Reward Points/Month (times)")}
          type={"number"}
          value={settings.adv_limit_activation_reward_points}
          onChange={handleChangeSettings}
          id="adv_limit_activation_reward_points"
        />
        <SwitchSectionForm
          label={t("Add Random Delay to User Authentication")}
          value={settings.adv_random_auth_delay}
          onChange={handleChangeSettings}
          id="adv_random_auth_delay"
        />
        <SelectSectionForm
          label={t("Manager Session Time")}
          value={settings.adv_manager_jwt_ttl}
          onChange={handleChangeSettings}
          id="adv_manager_jwt_ttl"
          options={[
            { name: "1 Hour", value: "1" },
            { name: "2 Hour", value: "2" },
            { name: "3 Hour", value: "3" },
            { name: "4 Hour", value: "4" },
            { name: "6 Hour", value: "5" },
            { name: "12 Hour", value: "6" },
            { name: "24 Hour", value: "7" },
            { name: "1 Week", value: "8" },
            { name: "Forever", value: "9" },
          ]}
        />
        <SwitchSectionForm
          label={t("Webhook Notifications")}
          value={settings.adv_webhook_notifications}
          onChange={handleChangeSettings}
          id="adv_webhook_notifications"
        />
        {settings.adv_webhook_notifications && (
          <InputSectionForm
            label={t("Webhook Notifications URL (POST)")}
            type={"text"}
            placeholder={"http://"}
            value={settings.adv_webhook_notifications_url}
            onChange={handleChangeSettings}
            id="adv_webhook_notifications_url"
          />
        )}
        <SwitchSectionForm
          label={t("RouteGuard")}
          value={settings.adv_route_guard}
          onChange={handleChangeSettings}
          id="adv_route_guard"
        />
        {settings.adv_webhook_notifications && (
          <InputSectionForm
            label={t("RouteGuard URL (POST)")}
            type={"text"}
            placeholder={"http://"}
            value={settings.adv_webhook_notifications_url}
            onChange={handleChangeSettings}
            id="adv_webhook_notifications_url"
          />
        )}
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

export default SettingsAdvanced;
