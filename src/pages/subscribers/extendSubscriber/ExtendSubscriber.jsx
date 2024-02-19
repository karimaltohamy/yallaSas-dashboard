import React, { useEffect, useState } from "react";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SectionForm from "../../../components/sectionform/SectionForm";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { encryptedData, generateUUID } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";

const ExtendSubscriber = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [subscriber, setSubscriber] = useState({});
  const [extendSubscriber, setExtendSubscriber] = useState({
    profile_id: "",
    method: "",
  });
  const navigate = useNavigate();

  const handleExtendSubscriber = (e) => {
    setExtendSubscriber((prev) => {
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
        const { data } = await apiAxios.get(`api/user/extensionData/${id}`);
        setSubscriber(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSubmit = async () => {
    if (extendSubscriber.profile_id && extendSubscriber.method) {
      setLoading(true);
      try {
        await apiAxios.post("api/user/changeProfile", {
          payload: encryptedData({
            user_id: id,
            profile_id: extendSubscriber.profile_id,
            method: extendSubscriber.method,
            transaction_id: generateUUID(),
          }),
        });
        toast.success("Successful Extend User");
        navigate("/subscribers");
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error(error.reponse.data.error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="content_page">
      <SectionForm title={t("users_action_extend")}>
        <div className="boxs_information mb-5">
          <div className="boxs">
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>{t("global_username")}</h4>
                <span>{subscriber.username && subscriber.username}</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>{t("global_profile")}</h4>
                <span>
                  {subscriber.profile_name && subscriber.profile_name}
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>{t("user_overview_remaining_traffic")}</h4>
                <span>
                  {subscriber.remaining_rxtx && subscriber.remaining_rxtx}
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>{t("user_overview_remaining_download")}</h4>
                <span>
                  {subscriber.remaining_rx && subscriber.remaining_rx}
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>{t("user_overview_remaining_upload")}</h4>
                <span>
                  {subscriber.remaining_tx && subscriber.remaining_tx}
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>{t("user_overview_remaining_uptime")}</h4>
                <span>
                  {subscriber.remaining_uptime && subscriber.remaining_uptime}{" "}
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>{t("global_available_balance")}</h4>
                <span>{subscriber.balance && subscriber.balance}</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4> {t("user_activate_user_balance")}</h4>
                <span>
                  {subscriber.user_balance && subscriber.user_balance}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border-t border-gray-300 pt-4">
          <SelectSectionForm
            label={t("user_extension_method")}
            value={extendSubscriber.method}
            onChange={handleExtendSubscriber}
            id="method"
            options={[
              { name: "Manager balance", value: "credit" },
              { name: "User balance", value: "user_balance" },
              { name: "Reward Points", value: "reward_points" },
            ]}
          />
          <SelectSectionForm
            label={t("user_extend_form_select_extension")}
            value={extendSubscriber.profile_id}
            onChange={handleExtendSubscriber}
            options={[
              { name: "سلفني نت", value: "41" },
              { name: "تشغيل مؤقت", value: "54" },
            ]}
            id="profile_id"
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add" onClick={handleSubmit}>
          {t("global_button_submit")}
        </button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default ExtendSubscriber;
