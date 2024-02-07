import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import { t } from "i18next";

const ChangePackageSubscriber = () => {
  const [changePackage, setChangePackage] = useState({
    newPackage: "",
    changeDate: "",
  });

  const handleChangePackage = (e) => {
    setChangePackage((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={t("Extend Subscriber")}>
        <div className="boxs_information mb-5">
          <div className="boxs">
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>اسم الدخول</h4>
                <span>demo1</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>الباقة</h4>
                <span>slow</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>تأريخ الانتهاء</h4>
                <span>2024-10-08 13:06:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border-t border-gray-300 pt-4">
          <SelectSectionForm
            label={t("New package")}
            value={changePackage.newPackage}
            onChange={handleChangePackage}
            id="newPackage"
            options={[
              { name: "default-2Mbit-1Month", value: "default-2Mbit-1Month" },
              { name: "plus", value: "plus" },
              { name: "Standard", value: "Standard" },
            ]}
          />
          <SelectSectionForm
            label={t("Change date")}
            value={changePackage.changeDate}
            onChange={handleChangePackage}
            id="changeDate"
            options={[{ name: "Immediately", value: "immediately" }]}
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">{"OK"}</button>
        <button className="btn_close">{"Cancel"}</button>
      </div>
    </div>
  );
};

export default ChangePackageSubscriber;
