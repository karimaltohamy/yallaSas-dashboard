import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import { t } from "i18next";
import { toast } from "react-toastify";
import apiAxios from "../../../utils/apiAxios";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import { encryptedData, generateUUID } from "../../../utils/utilsFunctions";

const ActivateSubscriber = () => {
  const { id } = useParams();
  const [activiationData, setActivationDate] = useState({});
  const [activateSubscriber, setActivateSubscriber] = useState({
    user_price: "",
    comments: "",
    activation_units: 1,
    method: "",
    money_collected: false,
    pin: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleActivateSubscriber = (e) => {
    setActivateSubscriber((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
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
    (async () => {
      try {
        const { data } = await apiAxios.get(
          `api/allowedExtensions/${activiationData.profile_id}`
        );
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleForm = async () => {
    setLoading(true);
    if (activateSubscriber.method) {
      try {
        const { data } = await apiAxios.post("api/user/activate", {
          payload: encryptedData({
            method: activateSubscriber.method,
            pin: activateSubscriber.pin,
            user_id: id,
            money_collected: activateSubscriber.money_collected ? 1 : 0,
            comments: activateSubscriber.comments,
            user_price: activiationData.user_price
              ? activiationData.user_price
              : activateSubscriber.user_price,
            issue_invoice: 0,
            transaction_id: generateUUID(),
            activation_units: activateSubscriber.activation_units,
          }),
        });
        toast.success("Successful add");
        navigate("/subscribers");
      } catch (error) {
        console.log(error);
        toast.error(error.reponse.data.error);
      }
    }
    setLoading(false);
  };

  return (
    <div className="content_page">
      <SectionForm title={t("user_activate_form_title")}>
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
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>VAT</h4>
                <span>{activiationData.vat && activiationData.vat}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border-t border-gray-300 pt-4">
          <InputSectionForm
            label={t("user_activate_end_user_price")}
            type={"text"}
            value={
              activiationData.user_price
                ? activiationData.user_price
                : activateSubscriber.user_price
            }
            onChange={handleActivateSubscriber}
            id="user_price"
          />
          <InputSectionForm
            label={t("global_comment")}
            type={"text"}
            value={activateSubscriber.comments}
            onChange={handleActivateSubscriber}
            id="comments"
          />

          <SelectSectionForm
            label={t("user_activate_method")}
            type={"text"}
            value={activateSubscriber.method}
            onChange={handleActivateSubscriber}
            id="method"
            options={[
              { name: "Manager balance", value: "credit" },
              { name: "Prepaid card", value: "card" },
              { name: "User balance", value: "user_balance" },
              { name: "Reward Points", value: "reward_points" },
            ]}
          />
          {activateSubscriber.method == "card" && (
            <InputSectionForm
              label={t("user_activate_card_number")}
              type={"number"}
              value={activateSubscriber.pin}
              onChange={handleActivateSubscriber}
              id="pin"
            />
          )}
          {activateSubscriber.method == "credit" && (
            <InputSectionForm
              label={t("user_activate_units")}
              type={"number"}
              value={activateSubscriber.activation_units}
              onChange={handleActivateSubscriber}
              id="activation_units"
            />
          )}
          <SwitchSectionForm
            label={t("user_activate_money_collected")}
            value={activateSubscriber.money_collected}
            onChange={handleActivateSubscriber}
            id="money_collected"
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add" onClick={handleForm}>
          {t("global_button_submit")}
        </button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default ActivateSubscriber;
