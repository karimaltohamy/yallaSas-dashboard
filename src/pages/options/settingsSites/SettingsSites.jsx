import React from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import FileInput from "../../../components/sectionform/FileInput";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import { t } from "i18next";

const SettingsSites = () => {
  return (
    <div class="sites_section">
      <div class="sites_content mb-3">
        <div class="selected_dashboard">
          <form action="">
            <select name="" id="select-dashboard">
              <option value="">_default</option>
            </select>
          </form>
          <div class="utils_form">
            <button class="btn_utils btn_add">
              <i class="fa-solid fa-plus"></i>
            </button>
            <button class="btn_utils btn_save">
              <i class="fa-solid fa-floppy-disk"></i>
            </button>
            <button class="btn_utils btn_remove">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>

      <SectionForm title={t("Site Settings")}>
        <InputSectionForm label={t("Site Name")} />
        <InputSectionForm label={t("Site Domain (FQDN)")} />
        <InputSectionForm label={t("Site Title")} />
        <InputSectionForm label={t("Logo URL")} />
        <FileInput label={t("Background")} />
        <InputSectionForm label={t("Company Name")} />
        <InputSectionForm label={t("Company Email")} />
        <InputSectionForm label={t("Company Website")} />
        <InputSectionForm label={t("Company Phone")} />
        <InputSectionForm label={t("Company Address")} />
        <InputSectionForm label={t("Emails address")} />
        <InputSectionForm label={t("Support Email")} />
        <SwitchSectionForm label={t("Enabled")} />
        <FileInput label={t("Towers from which entry is permitted")} />
        <button class="btn_reset_background">
          {t("Reset Background Image")}
        </button>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">{t("OK")}</button>
        <button className="btn_close">{t("Cancel")}</button>
      </div>
    </div>
  );
};

export default SettingsSites;
