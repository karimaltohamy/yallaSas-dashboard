import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import FileInput from "../../../components/sectionform/FileInput";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";

const SettingsGeneral = () => {
  const [generalSettings, setGeneralSettings] = useState({
    defaultLogo: "",
    showSiteLogo: "",
    baseCurrency: "",
    country: "",
    defaultLanguage: "",
    timezone: "",
    footerText: "",
    mainMenuLogo: "",
    blockManagerLogin: "",
    siteStatus: "",
    enforceManagerPasswordStrength: "",
  });

  const handleChangeSettings = (e) => {
    setSettings((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked
          ? e.target.checked
          : e.target.files
          ? e.target.files
          : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={"General Settings"}>
        <div className="grid grid-cols-1 gap-3">
          <FileInput
            label={"Default Logo"}
            value={generalSettings.defaultLogo}
            onChange={handleChangeSettings}
            id={"defaultLogo"}
          />
          <SwitchSectionForm
            label={"Show Site Logo"}
            value={generalSettings.showSiteLogo}
            onChange={handleChangeSettings}
            id="showSiteLogo"
          />
          <SelectSectionForm
            label={"Base Currency"}
            value={generalSettings.baseCurrency}
            onChange={handleChangeSettings}
            id="baseCurrency"
            options={[
              { name: "US Dollar", value: "US Dollar" },
              { name: "Canadian Dollar", value: "" },
              { name: "Euro", value: "" },
              { name: "United Arab Emirates Dirham", value: "" },
            ]}
          />
          <SelectSectionForm
            label={"Country"}
            value={generalSettings.country}
            onChange={handleChangeSettings}
            id="country"
            options={[
              { name: "Global", value: "US Dollar" },
              { name: "Egypt", value: "" },
            ]}
          />
          <SelectSectionForm
            label={"Default Language"}
            value={generalSettings.defaultLanguage}
            onChange={handleChangeSettings}
            id="defaultLanguage"
            options={[
              { name: "Arabic", value: "" },
              { name: "English", value: "" },
            ]}
          />
          <SelectSectionForm
            label={"Timezone"}
            value={generalSettings.timezone}
            onChange={handleChangeSettings}
            id="timezone"
            options={[
              { name: "Europe/Vilnius", value: "" },
              { name: "Africa/Khartoum", value: "" },
            ]}
          />
          <FileInput
            label={"Main Menu Logo (Unlimited License Only)"}
            value={generalSettings.mainMenuLogo}
            onChange={handleChangeSettings}
            id={"mainMenuLogo"}
          />
          <SelectSectionForm
            label={"Block manager login for 1 minute after login fails"}
            value={generalSettings.blockManagerLogin}
            onChange={handleChangeSettings}
            id={"blockManagerLogin"}
            options={[
              { name: "Never", value: "" },
              { name: "3 tries", value: "" },
              { name: "4 tries", value: "" },
              { name: "5 tries", value: "" },
            ]}
          />
          <SelectSectionForm
            label={"Site Status"}
            value={generalSettings.siteStatus}
            onChange={handleChangeSettings}
            id={"siteStatus"}
            options={[
              { name: "Never", value: "" },
              { name: "3 tries", value: "" },
              { name: "4 tries", value: "" },
              { name: "5 tries", value: "" },
            ]}
          />
          <SelectSectionForm
            label={"Enforce Manager Password Strength"}
            value={generalSettings.enforceManagerPasswordStrength}
            onChange={handleChangeSettings}
            id={"enforceManagerPasswordStrength"}
            options={[
              { name: "weak", value: "" },
              { name: "Medium", value: "" },
              { name: "Strong", value: "" },
              { name: "Very Strong", value: "" },
            ]}
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

export default SettingsGeneral;
