import React from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import FileInput from "../../../components/sectionform/FileInput";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import { t } from "i18next";

const SettingsSites = () => {
  return (
    <div className="sites_section">
      <div className="sites_content mb-3">
        <div className="selected_dashboard">
          <form action="">
            <select name="" id="select-dashboard">
              <option value="">_default</option>
            </select>
          </form>
          <div className="utils_form">
            <button className="btn_utils btn_add">
              <i className="fa-solid fa-plus"></i>
            </button>
            <button className="btn_utils btn_save">
              <i className="fa-solid fa-floppy-disk"></i>
            </button>
            <button className="btn_utils btn_remove">
              <i className="fa-solid fa-trash"></i>
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
        <button className="btn_reset_background">
          {t("Reset Background Image")}
        </button>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">{t("global_button_submit")}</button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
    </div>
  );
};

export default SettingsSites;
