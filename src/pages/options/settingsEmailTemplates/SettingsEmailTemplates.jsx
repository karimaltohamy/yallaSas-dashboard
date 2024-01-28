import React from "react";

const SettingsEmailTemplates = () => {
  return (
    <div className="m-[10px]">
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

        <div class="dashboard_designer template_designer active">
          <div class="head">
            <i class="fa-regular fa-eye"></i>
            <h5> Template Editor</h5>
          </div>

          <form action="" class="form_tamplate">
            <div class="input_item">
              <input type="text" placeholder="email subject" />
            </div>
            <div class="input_item"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsEmailTemplates;
