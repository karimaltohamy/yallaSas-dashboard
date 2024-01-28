import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";

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
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="m-[10px]">
      <SectionForm title={"Advanced Settings"}>
        <SelectSectionForm
          label={"User Idle Timeout"}
          value={settings.userIdleTimeout}
          onChange={handleChangeSettings}
          id="userIdleTimeout"
          options={[{ name: "2 Minutes", value: "" }]}
        />
        <SelectSectionForm
          label={"Mikrotik interim update"}
          value={settings.mikrotikInterimUpdate}
          onChange={handleChangeSettings}
          id="mikrotikInterimUpdate"
          options={[{ name: "2 Minutes", value: "" }]}
        />
        <SelectSectionForm
          label={"Remote Control Method"}
          value={settings.remoteControlMethod}
          onChange={handleChangeSettings}
          id="remoteControlMethod"
          options={[
            { name: "PPTP VPN", value: "" },
            { name: "SSH Tunnel", value: "" },
          ]}
        />
        <SwitchSectionForm
          label={"Lock Prepaid Cards To Owner"}
          value={settings.lockPrepaidCardsOwner}
          onChange={handleChangeSettings}
          id="lockPrepaidCardsOwner"
        />
        <SwitchSectionForm
          label={"Disconnect On Activation"}
          value={settings.disconnectActivation}
          onChange={handleChangeSettings}
          id="disconnectActivation"
        />
        <SwitchSectionForm
          label={"Disconnect On Update"}
          value={settings.disconnectUpdate}
          onChange={handleChangeSettings}
          id="disconnectUpdate"
        />
        <SwitchSectionForm
          label={"Lock user MAC on login"}
          value={settings.lockUserMACLogin}
          onChange={handleChangeSettings}
          id="lockUserMACLogin"
        />
        <SwitchSectionForm
          label={"Reset User Traffic On Profile Change"}
          value={settings.resetUserTrafficProfileChange}
          onChange={handleChangeSettings}
          id="lockUserMACLogin"
        />
        <SelectSectionForm
          label={"Radius Username Case Sensitivity"}
          value={settings.radiusUsernameCaseSensitivity}
          onChange={handleChangeSettings}
          id="radiusUsernameCaseSensitivity"
          options={[
            { name: "Case Sensitive", value: "" },
            { name: "Case Insensitive", value: "" },
          ]}
        />
        <SwitchSectionForm
          label={"Accept Invalid Users"}
          value={settings.acceptInvalidUsers}
          onChange={handleChangeSettings}
          id="acceptInvalidUsers"
        />
        <InputSectionForm
          label={"Limit User Activation via Reward Points/Month (times)"}
          type={"number"}
          value={settings.limitUserActivationViaReward}
          onChange={handleChangeSettings}
          id="limitUserActivationViaReward"
        />
        <SwitchSectionForm
          label={"Add Random Delay to User Authentication"}
          value={settings.addRandomDelayUserAuthentication}
          onChange={handleChangeSettings}
          id="addRandomDelayUserAuthentication"
        />
        <SelectSectionForm
          label={"Manager Session Time"}
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
          label={"Route Guard"}
          value={settings.routeGuard}
          onChange={handleChangeSettings}
          id="routeGuard"
        />
        <SwitchSectionForm
          label={"Webhook Notifications"}
          value={settings.webhookNotifications}
          onChange={handleChangeSettings}
          id="webhookNotifications"
        />
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">OK</button>
        <button className="btn_close">Cancel</button>
      </div>
    </div>
  );
};

export default SettingsAdvanced;
