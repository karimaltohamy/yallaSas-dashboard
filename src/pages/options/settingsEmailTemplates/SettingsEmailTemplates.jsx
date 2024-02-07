import React, { useRef } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import InputEditor from "../../../components/inputEditor/InputEditor";
import { t } from "i18next";

const SettingsEmailTemplates = () => {
  const editorRef = useRef(null);

  return (
    <div className="settings_email_templates m-[10px]">
      <div class="dashboard_manager_content">
        <div class="selected_dashboard">
          <form action="">
            <select name="" id="select-dashboard">
              <option value="">select template</option>
              <option value="">add</option>
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

        <MainSection
          title={t("Template Editor")}
          icon={<i className="fa-regular fa-eye"></i>}
        >
          <div className="form_tamplate">
            <div className="input_item">
              <input type="text" placeholder={t("Email subject")} />
            </div>
            <div className="input_item">
              <InputEditor editorRef={editorRef} />
            </div>
          </div>
        </MainSection>
      </div>
    </div>
  );
};

export default SettingsEmailTemplates;
