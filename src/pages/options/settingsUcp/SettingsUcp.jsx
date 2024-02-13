import React from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import InputFile from "../../../components/popup/inputFile/InputFile";
import { t } from "i18next";

const SettingsUcp = () => {
  return (
    <div className="m-[10px]">
      <SectionForm title={t("User Portal Settings")}>
        <SwitchSectionForm label={t("Enable User Portal")} />
        <SwitchSectionForm label={t("Self Registration")} />
        <SelectSectionForm
          label={t("Self Registered Users Default Profile")}
          options={[
            { name: "slow", value: "" },
            { name: "plus", value: "" },
            { name: "standard", value: "" },
          ]}
        />
        <SelectSectionForm
          label={t("Self Registered Users Default Parent")}
          options={[
            { name: "admin", value: "" },
            { name: "manager_1", value: "" },
            { name: "manager_2", value: "" },
            { name: "manager_3", value: "" },
          ]}
        />
        <SwitchSectionForm label={t("Permit Password Recovery")} />
        <SwitchSectionForm
          label={t("Reject Auto-Activate Cards If User Is Active")}
        />
        <SwitchSectionForm
          label={t(
            "In Auto Login mode, ask for password when modifying user data"
          )}
        />
        <InputFile label={t("Background Image")} />
      </SectionForm>
    </div>
  );
};

export default SettingsUcp;
