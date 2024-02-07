import React from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";

const SettingsSastrack = () => {
  return (
    <div className="m-[10px]">
      <SectionForm title={t("SASTrack Settings")}>
        <SwitchSectionForm label={t("Enable SASTrack")} />
        <InputSectionForm label={t("SASTrack IP Address")} />
        <InputSectionForm label={t("SASTrack Shared Secret")} />
      </SectionForm>
    </div>
  );
};

export default SettingsSastrack;
