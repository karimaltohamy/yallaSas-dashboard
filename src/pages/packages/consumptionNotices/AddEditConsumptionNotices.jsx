import React, { useEffect, useState } from "react";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";
import { encryptedData } from "../../../utils/utilsFunctions";
import { useNavigate, useParams } from "react-router-dom";
import apiAxios from "../../../utils/apiAxios";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";

const AddEditConsumptionNotices = ({ typePage }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [notificationForm, setNotificationForm] = useState({
    profile_id: "1",
    check_counter: null,
    threshold: "0",
    sms_enabled: false,
    sms_message: null,
    telegram_enabled: false,
    telegram_message: null,
    email_enabled: false,
    email_template_id: null,
    webhook_enabled: false,
    webhook_url: null,
  });

  const handleChangeNotificationForm = (e) => {
    setNotificationForm((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const getNotification = async () => {
    try {
      const { data } = await apiAxios.get(`api/ProfileNotification/${id}`);
      setNotificationForm((prev) => {
        return {
          ...prev,
          profile_id: data.data && data.data?.profile_id,
          check_counter: data.data && data.data?.check_counter,
          threshold: data.data && data.data?.threshold,
          sms_enabled: data.data && data.data?.sms_enabled ? true : false,
          sms_message: data.data && data.data?.sms_message,
          telegram_enabled:
            data.data && data.data?.telegram_enabled ? true : false,
          telegram_message: data.data && data.data?.telegram_message,
          email_enabled: data.data && data.data?.email_enabled ? true : false,
          email_template_id: data.data && data.data?.email_template_id,
          webhook_enabled:
            data.data && data.data?.webhook_enabled ? true : false,
          webhook_url: data.data && data.data?.webhook_url,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleForm = async () => {
    setLoading(true);
    const notificationFormTransform = {
      ...notificationForm,
      profile_id: Number(notificationForm.profile_id),
      sms_enabled: notificationForm.sms_enabled ? 1 : 0,
      telegram_enabled: notificationForm.telegram_enabled ? 1 : 0,
      email_enabled: notificationForm.email_enabled ? 1 : 0,
      webhook_enabled: notificationForm.webhook_enabled ? 1 : 0,
    };
    try {
      if (typePage == "addPage") {
        await apiAxios.post("api/ProfileNotification", {
          payload: encryptedData(notificationFormTransform),
        });
      } else if (typePage == "editPage") {
        await apiAxios.put(`api/ProfileNotification/${id}`, {
          payload: encryptedData(notificationFormTransform),
        });
      }
      toast.success("Successful add");
      navigate(-1);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    id && getNotification();
  }, []);

  return (
    <div className="content_page">
      <SectionForm title={t("Usage Notification Form")}>
        <SelectSectionForm
          label={t("global_profile")}
          value={notificationForm.profile_id}
          onChange={handleChangeNotificationForm}
          id="profile_id"
          options={[
            { name: "default-2Mbit-1Month", value: 1 },
            { name: "plus", value: 4 },
            { name: "slow", value: 2 },
            { name: "standard", value: 3 },
          ]}
        />
        <SelectSectionForm
          label={t("Counter to Check")}
          value={notificationForm.check_counter}
          onChange={handleChangeNotificationForm}
          id="check_counter"
          options={[
            { name: "Total Traffic Limit", value: "total_traffic" },
            { name: "Daily Traffic Limit", value: "daily_traffic" },
          ]}
        />
        <InputSectionForm
          label={t("Usage Threshold (%)")}
          type={"text"}
          value={notificationForm.threshold}
          onChange={handleChangeNotificationForm}
          id="threshold"
        />
        <SwitchSectionForm
          label={t("Notify via SMS")}
          value={notificationForm.sms_enabled}
          onChange={handleChangeNotificationForm}
          id="sms_enabled"
        />
        {notificationForm.sms_enabled && (
          <InputSectionForm
            label={t("SMS Message")}
            type={"text"}
            value={notificationForm.sms_message}
            onChange={handleChangeNotificationForm}
            id="sms_message"
          />
        )}
        <SwitchSectionForm
          label={t("Notify via Telegram")}
          value={notificationForm.telegram_enabled}
          onChange={handleChangeNotificationForm}
          id="telegram_enabled"
        />
        {notificationForm.telegram_enabled && (
          <InputSectionForm
            label={t("Telegram Message")}
            type={"text"}
            value={notificationForm.telegram_message}
            onChange={handleChangeNotificationForm}
            id="telegram_message"
          />
        )}
        <SwitchSectionForm
          label={t("Notify via Email")}
          value={notificationForm.email_enabled}
          onChange={handleChangeNotificationForm}
          id="email_enabled"
        />
        {notificationForm.email_enabled && (
          <SelectSectionForm
            label={t("Email Template")}
            value={notificationForm.email_template_id}
            onChange={handleChangeNotificationForm}
            id="email_template_id"
            options={[{ name: "ddd", value: "2" }]}
          />
        )}
        <SwitchSectionForm
          label={t("Notify via Webhook")}
          value={notificationForm.webhook_enabled}
          onChange={handleChangeNotificationForm}
          id="webhook_enabled"
        />
        {notificationForm.webhook_enabled && (
          <InputSectionForm
            label={t("Webhook Url (GET)")}
            type={"text"}
            value={notificationForm.webhook_url}
            onChange={handleChangeNotificationForm}
            id="webhook_url"
          />
        )}
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

export default AddEditConsumptionNotices;
