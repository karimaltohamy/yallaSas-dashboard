import React from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";

const SettingsWeb = () => {
  return (
    <div className="m-[10px]">
      <SectionForm title={t("Web Portal SettingsUser Portal Settings")}>
        <SwitchSectionForm label={t("Force HTTPS")} />
        <InputSectionForm label={t("Self Registered Users Default Profile")} />
        <InputSectionForm label={t("Self Registered Users Default Parent")} />
        <InputSectionForm label={t("Self Registered Users Default Parent")} />
        <SwitchSectionForm label={t("Enable Login Captcha (Admin Portal)")} />
        <SwitchSectionForm label={t("Enable Login Captcha (User Portal)")} />
      </SectionForm>
    </div>
  );
};

export default SettingsWeb;
