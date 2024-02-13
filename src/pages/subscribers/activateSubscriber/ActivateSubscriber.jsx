import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import { t } from "i18next";
import { toast } from "react-toastify";
import apiAxios from "../../../utils/apiAxios";
import CryptoJS from "crypto-js";
import { secretPass } from "../../../utils/data";
import { useNavigate, useParams } from "react-router-dom";

const ActivateSubscriber = () => {
  const { id } = useParams();
  const [activiationData, setActivationDate] = useState({});
  const [activateSubscriber, setActivateSubscriber] = useState({
    user_price: "",
    comments: "",
    activation_units: "",
    method: "",
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

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiAxios.get(`api/user/activationData/${id}`);
        setActivationDate(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleForm = async () => {
    setLoading(true);
    let encrypted;
    if (activateSubscriber) {
      const dataToEncrypt = JSON.stringify({
        method: "credit",
        pin: "",
        user_id: "1",
        money_collected: 1,
        comments: null,
        user_price: 20,
        issue_invoice: true,
        transaction_id: "afd69923-c472-9055-af10-674586243416",
        activation_units: 1,
      });
      encrypted = CryptoJS.AES.encrypt(dataToEncrypt, secretPass).toString();

      try {
        const { data } = await apiAxios.post("api/user", {
          payload: encrypted,
        });
        toast.success("Successful add");
        navigate("/subscribers");
      } catch (error) {
        console.log(error);
        toast.error(error.reponse.data.message);
      }
      setLoading(false);
    }
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
                <span>
                  {activiationData.username && activiationData.username}
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>الباقة</h4>
                <span>
                  {activiationData.profile_name && activiationData.profile_name}
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>تأريخ الانتهاء</h4>
                <span>
                  {activiationData.user_expiration &&
                    activiationData.user_expiration}
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>رصيد المشترك</h4>
                <span>
                  {activiationData.user_balance && activiationData.user_balance}
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>الضريبة</h4>
                <span>{activiationData.vat && activiationData.vat}</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>مده الاشتراك</h4>
                <span>
                  {activiationData.profile_duration &&
                    activiationData.profile_duration}
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>المبلغ المطلوب</h4>
                <span>
                  {activiationData.required_amount &&
                    activiationData.required_amount}
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>سعر الوحدة</h4>
                <span>
                  {activiationData.unit_price && activiationData.unit_price}
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>الرصيد المتوفر</h4>
                <span>
                  {activiationData.manager_balance &&
                    activiationData.manager_balance}
                </span>
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
