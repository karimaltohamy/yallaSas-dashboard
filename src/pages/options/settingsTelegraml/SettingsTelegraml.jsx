import React from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import { t } from "i18next";

const SettingsTelegraml = () => {
  return (
    <div className="m-[10px]">
      <SectionForm title={t("Telegram Settings")}>
        <SwitchSectionForm label={t("Enable Telegram Bot")} />
        <InputSectionForm label={t("Bot Token")} />
        <InputSectionForm label={t("SAS4 public domain/IP")} />
        <InputSectionForm label={t("Bot Welcome Message")} />
        <SwitchSectionForm label={t("Send Message On Activation")} />
        <InputSectionForm label={t("Activation Message")} />
        <SelectSectionForm
          label={t("Send Expiration Warning")}
          options={[
            { name: "never", value: "" },
            { name: "before 2 day", value: "" },
            { name: "before 3 day", value: "" },
          ]}
        />
        <InputSectionForm label={t("Expiration Message")} />
      </SectionForm>
    </div>
  );
};

export default SettingsTelegraml;
