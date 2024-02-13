import React from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputItem from "../../../components/popup/inputItem/InputItem";
import { t } from "i18next";

const SettingsSms = () => {
  return (
    <div className="m-[10px]">
      <SectionForm title={t("SMS Configuration")}>
        <SwitchSectionForm label={t("Enable SMS Service")} />
        <InputItem label={t("SMS API Url")} />
        <InputItem label={t("API Method")} />
        <InputItem label={t("Activation SMS")} />
        <InputItem label={t("SMS to be sent before expiration")} />
        <InputItem label={t("SMS to be sent after expiration")} />
      </SectionForm>
    </div>
  );
};

export default SettingsSms;
