import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";

const AddEditGroup = () => {
  const [generalinformation, setGeneralinformation] = useState({
    groupName: "",
    details: "",
  });

  const handleChangeGeneralInformation = (e) => {
    setGeneralinformation((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={t("General information")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("Group name")}
            type={"text"}
            value={generalinformation.groupName}
            onChange={handleChangeGeneralInformation}
            id="groupName"
          />
          <InputSectionForm
            label={t("Details")}
            type={"text"}
            value={generalinformation.details}
            onChange={handleChangeGeneralInformation}
            id="details"
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">{t("global_button_submit")}</button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
    </div>
  );
};

export default AddEditGroup;
