import React from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";

const SettingsBilling = () => {
  return (
    <div className="m-[10px]">
      <SectionForm title={t("Postpaid & Billing Settings")}>
        <SwitchSectionForm label={t("Auto Generate Invoices")} />
        <InputSectionForm
          label={t("Generate Invoices (x) Days Prior To Expiration")}
        />
        <InputSectionForm label={t("Grace Period (Days)")} />
        <SwitchSectionForm label={t("Disable Users With Overdue Invoices")} />
      </SectionForm>
    </div>
  );
};

export default SettingsBilling;
