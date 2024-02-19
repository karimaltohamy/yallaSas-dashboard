import React, { useState } from "react";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";

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
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={t("Backup Settings")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SelectSectionForm
            label={t("Backup Disk")}
            value={settings.backupSettings}
            onChange={handleChangeSettings}
            id="backupSettings"
            options={[{ name: "day(s)", value: "" }]}
          />
          <SelectSectionForm
            label={t("Auto Delete Old Backups")}
            value={settings.autoDeleteOldBackups}
            onChange={handleChangeSettings}
            id="autoDeleteOldBackups"
            options={[{ name: "day(s)", value: "" }]}
          />
          <SelectSectionForm
            label={t("Disk Partition")}
            value={settings.diskPartition}
            onChange={handleChangeSettings}
            id="diskPartition"
            options={[{ name: "day(s)", value: "" }]}
          />
          <InputSectionForm
            label={t("Daily Backup Time")}
            type={"time"}
            value={settings.dailyBackupTime}
            onChange={handleChangeSettings}
            id="dailyBackupTime"
          />
          <SwitchSectionForm
            label={t("Include Session Records")}
            value={settings.includeSessionRecords}
            onChange={handleChangeSettings}
            id="includeSessionRecords"
          />
          <SwitchSectionForm
            label={t("Upload To Google Drive")}
            value={settings.uploadToGoogleDrive}
            onChange={handleChangeSettings}
            id="uploadToGoogleDrive"
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">{t("global_button_submit")}</button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
    </div>
  );
};

export default SettingsBackup;
