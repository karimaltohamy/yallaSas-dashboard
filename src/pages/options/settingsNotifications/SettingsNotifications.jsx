import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";

const SettingsNotifications = () => {
  return (
    <div className="content_page">
      <SectionForm title={t("Notification Settings")}>
        <h4 className="text-[20px] font-semibold mt-4 mb-3 pb-1 border-b border-gray-300">
          {t("User Notifications")}
        </h4>
        <div className="grid grid-cols-1 gap-2">
          <SwitchSectionForm label={t("Email Notifications")} />
          <SwitchSectionForm label={t("Notify via SMS on activation")} />
          <SwitchSectionForm label={t("Notify via SMS on expiration")} />
          <SwitchSectionForm label={t("Notify via Email on expiration")} />
        </div>
        <h4 className="text-[20px] font-semibold mt-4 mb-3 pb-1 border-b border-gray-300">
          {t("Manager Notifications")}
        </h4>
        <div className="grid grid-cols-1 gap-2">
          <SwitchSectionForm label={t("Show dashboard notification")} />
          <SwitchSectionForm label={t("Show Login Page Message")} />
          <InputSectionForm label={t("Manager Login Page Message")} />
          <SwitchSectionForm label={t("Show Welcome Screen On Login")} />
        </div>
        <h4 className="text-[20px] font-semibold mt-4 mb-3 pb-1 border-b border-gray-300">
          {t("User FUP Notification")}
        </h4>
        <div className="grid grid-cols-1 gap-2">
          <SwitchSectionForm label={t("Notify via SMS")} />
          <SwitchSectionForm label={t("Notify via Email")} />
          <SwitchSectionForm label={t("Show Notification on FUP")} />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">{t("OK")}</button>
        <button className="btn_close">{t("Cancel")}</button>
      </div>
    </div>
  );
};

export default SettingsNotifications;
