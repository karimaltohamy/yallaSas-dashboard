import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import { t } from "i18next";

const ActivateSubscriber = () => {
  const [activateSubscriber, setActivateSubscriber] = useState({
    pricePerSubscriber: "",
    notice: "",
    NumberActivationTimes: "",
    ActivationMethod: "",
    paid: "",
  });

  const handleActivateSubscriber = (e) => {
    setActivateSubscriber((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={"Activate Subscriber"}>
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
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>رصيد المشترك</h4>
                <span>$ 25.00</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>الضريبة</h4>
                <span>$ 0.00</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>المبلغ المطلوب</h4>
                <span>$ 20.00 </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>الضريبة</h4>
                <span>$ 0.00</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>سعر الوحدة</h4>
                <span>$ 0.00</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>الرصيد المتوفر</h4>
                <span>$ -2,011,721.00 </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border-t border-gray-300 pt-4">
          <InputSectionForm
            label={t("Price per subscriber")}
            type={"text"}
            value={activateSubscriber.pricePerSubscriber}
            onChange={handleActivateSubscriber}
            id="pricePerSubscriber"
          />
          <InputSectionForm
            label={t("Notice")}
            type={"text"}
            value={activateSubscriber.notice}
            onChange={handleActivateSubscriber}
            id="notice"
          />
          <InputSectionForm
            label={"Number activation times"}
            type={"text"}
            value={activateSubscriber.NumberActivationTimes}
            onChange={handleActivateSubscriber}
            id="NumberActivationTimes"
          />
          <SelectSectionForm
            label={t("Activation method")}
            type={"text"}
            value={activateSubscriber.ActivationMethod}
            onChange={handleActivateSubscriber}
            id="ActivationMethod"
            options={[
              { name: "Manager balance", value: "" },
              { name: "the card", value: "" },
              { name: "Shared balance", value: "" },
              { name: "Encouraging points", value: "" },
            ]}
          />
          <SwitchSectionForm
            label={t("Paid")}
            value={activateSubscriber.paid}
            onChange={handleActivateSubscriber}
            id="paid"
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

export default ActivateSubscriber;
