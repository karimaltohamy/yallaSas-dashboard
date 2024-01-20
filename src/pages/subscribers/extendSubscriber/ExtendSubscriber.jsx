import React, { useState } from "react";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SectionForm from "../../../components/sectionform/SectionForm";

const ExtendSubscriber = () => {
  const [extendSubscriber, setExtendSubscriber] = useState({
    extensionUsing: "",
    extensionType: "",
  });

  const handleExtendSubscriber = (e) => {
    setExtendSubscriber((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };
  return (
    <div className="content_page">
      <SectionForm title={"Extend Subscriber"}>
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
          <SelectSectionForm
            label={"Extension using"}
            value={extendSubscriber.extensionUsing}
            onChange={handleExtendSubscriber}
            id="extensionUsing"
            options={[
              { name: "Manager balance", value: "" },
              { name: "the card", value: "" },
              { name: "Shared balance", value: "" },
              { name: "Encouraging points", value: "" },
            ]}
          />
          <SelectSectionForm
            label={"Extension using"}
            value={extendSubscriber.extensionType}
            onChange={handleExtendSubscriber}
            id="extensionType"
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

export default ExtendSubscriber;
