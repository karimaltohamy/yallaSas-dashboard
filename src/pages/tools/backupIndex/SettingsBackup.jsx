import React, { useState } from "react";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";

const SettingsBackup = () => {
  const [settings, setSettings] = useState({
    backupSettings: "",
    diskPartition: "",
    dailyBackups: "",
    dailyBackupTime: "",
    includeSessionRecords: "",
    uploadToGoogleDrive: "",
    autoDeleteOldBackups: "",
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
    <div className="content_page">
      <SectionForm title={"Backup Settings"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SelectSectionForm
            label={"Backup Disk"}
            value={settings.backupSettings}
            onChange={handleChangeSettings}
            id="backupSettings"
            options={[{ name: "day(s)", value: "" }]}
          />
          <SelectSectionForm
            label={"Auto Delete Old Backups"}
            value={settings.autoDeleteOldBackups}
            onChange={handleChangeSettings}
            id="autoDeleteOldBackups"
            options={[{ name: "day(s)", value: "" }]}
          />
          <SelectSectionForm
            label={"Disk Partition"}
            value={settings.diskPartition}
            onChange={handleChangeSettings}
            id="diskPartition"
            options={[{ name: "day(s)", value: "" }]}
          />
          <InputSectionForm
            label={"Daily Backup Time"}
            type={"time"}
            value={settings.dailyBackupTime}
            onChange={handleChangeSettings}
            id="dailyBackupTime"
          />
          <SwitchSectionForm
            label={"Include Session Records"}
            value={settings.includeSessionRecords}
            onChange={handleChangeSettings}
            id="includeSessionRecords"
          />
          <SwitchSectionForm
            label={"Upload To Google Drive"}
            value={settings.uploadToGoogleDrive}
            onChange={handleChangeSettings}
            id="uploadToGoogleDrive"
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">OK</button>
        <button className="btn_close">Cancel</button>
      </div>
    </div>
  );
};

export default SettingsBackup;
