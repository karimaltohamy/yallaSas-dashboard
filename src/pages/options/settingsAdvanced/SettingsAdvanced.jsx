import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";

const SettingsAdvanced = () => {
  const [settings, setSettings] = useState({
    userIdleTimeout: "",
    mikrotikInterimUpdate: "",
    remoteControlMethod: "",
    lockPrepaidCardsOwner: "",
    disconnectActivation: "",
    disconnectUpdate: "",
    lockUserMACLogin: "",
    resetUserTrafficProfileChange: "",
    radiusUsernameCaseSensitivity: "",
    acceptInvalidUsers: "",
    limitUserActivationViaReward: "",
    addRandomDelayUserAuthentication: "",
    managerSessionTime: "",
    routeGuard: "",
    webhookNotifications: "",
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

  return (
    <div className="m-[10px]">
      <SectionForm title={t("Advanced Settings")}>
        <SelectSectionForm
          label={"User Idle Timeout"}
          value={settings.userIdleTimeout}
          onChange={handleChangeSettings}
          id="userIdleTimeout"
          options={[{ name: "2 Minutes", value: "" }]}
        />
        <SelectSectionForm
          label={t("Mikrotik interim update")}
          value={settings.mikrotikInterimUpdate}
          onChange={handleChangeSettings}
          id="mikrotikInterimUpdate"
          options={[{ name: "2 Minutes", value: "" }]}
        />
        <SelectSectionForm
          label={t("Remote Control Method")}
          value={settings.remoteControlMethod}
          onChange={handleChangeSettings}
          id="remoteControlMethod"
          options={[
            { name: "PPTP VPN", value: "" },
            { name: "SSH Tunnel", value: "" },
          ]}
        />
        <SwitchSectionForm
          label={t("Lock Prepaid Cards To Owner")}
          value={settings.lockPrepaidCardsOwner}
          onChange={handleChangeSettings}
          id="lockPrepaidCardsOwner"
        />
        <SwitchSectionForm
          label={t("Disconnect On Activation")}
          value={settings.disconnectActivation}
          onChange={handleChangeSettings}
          id="disconnectActivation"
        />
        <SwitchSectionForm
          label={t("Disconnect On Update")}
          value={settings.disconnectUpdate}
          onChange={handleChangeSettings}
          id="disconnectUpdate"
        />
        <SwitchSectionForm
          label={t("Lock user MAC on login")}
          value={settings.lockUserMACLogin}
          onChange={handleChangeSettings}
          id="lockUserMACLogin"
        />
        <SwitchSectionForm
          label={t("Reset User Traffic On Profile Change")}
          value={settings.resetUserTrafficProfileChange}
          onChange={handleChangeSettings}
          id="lockUserMACLogin"
        />
        <SelectSectionForm
          label={t("Radius Username Case Sensitivity")}
          value={settings.radiusUsernameCaseSensitivity}
          onChange={handleChangeSettings}
          id="radiusUsernameCaseSensitivity"
          options={[
            { name: "Case Sensitive", value: "" },
            { name: "Case Insensitive", value: "" },
          ]}
        />
        <SwitchSectionForm
          label={t("Accept Invalid Users")}
          value={settings.acceptInvalidUsers}
          onChange={handleChangeSettings}
          id="acceptInvalidUsers"
        />
        <InputSectionForm
          label={t("Limit User Activation via Reward Points/Month (times)")}
          type={"number"}
          value={settings.limitUserActivationViaReward}
          onChange={handleChangeSettings}
          id="limitUserActivationViaReward"
        />
        <SwitchSectionForm
          label={t("Add Random Delay to User Authentication")}
          value={settings.addRandomDelayUserAuthentication}
          onChange={handleChangeSettings}
          id="addRandomDelayUserAuthentication"
        />
        <SelectSectionForm
          label={t("Manager Session Time")}
          value={settings.managerSessionTime}
          onChange={handleChangeSettings}
          id="managerSessionTime"
          options={[
            { name: "1 Hour", value: "" },
            { name: "2 Hour", value: "" },
            { name: "3 Hour", value: "" },
            { name: "4 Hour", value: "" },
          ]}
        />
        <SwitchSectionForm
          label={t("Route Guard")}
          value={settings.routeGuard}
          onChange={handleChangeSettings}
          id="routeGuard"
        />
        <SwitchSectionForm
          label={t("Webhook Notifications")}
          value={settings.webhookNotifications}
          onChange={handleChangeSettings}
          id="webhookNotifications"
        />
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">{t("global_button_submit")}</button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
    </div>
  );
};

export default SettingsAdvanced;
