import React, { useState } from "react";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";

const AddEditConsumptionNotices = () => {
  const [notificationForm, setNotificationForm] = useState({
    profile: "",
    counterCheck: "",
    usageThreshold: "",
    notifyViaSMS: "",
    notifyViaTelegram: "",
    notifyViaEmail: "",
    notifyViaWebhook: "",
  });

  const handleChangeNotificationForm = (e) => {
    setNotificationForm((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={t("Usage Notification Form")}>
        <SelectSectionForm
          label={t("Profile")}
          value={notificationForm.profile}
          onChange={handleChangeNotificationForm}
          id="profile"
          options={[
            { name: "default-2Mbit-1Month", value: "" },
            { name: "plus", value: "" },
            { name: "slow", value: "" },
            { name: "standard", value: "" },
          ]}
        />
        <SelectSectionForm
          label={t("Counter to Check")}
          value={notificationForm.counterCheck}
          onChange={handleChangeNotificationForm}
          id="counterCheck"
          options={[
            { name: "Total Traffic Limit", value: "" },
            { name: "Daily Traffic Limit", value: "" },
          ]}
        />
        <InputSectionForm
          label={t("Usage Threshold (%)")}
          type={"number"}
          value={notificationForm.usageThreshold}
          onChange={handleChangeNotificationForm}
          id="usageThreshold"
        />
        <SwitchSectionForm
          label={t("Notify via SMS")}
          value={notificationForm.notifyViaSMS}
          onChange={handleChangeNotificationForm}
          id="notifyViaSMS"
        />
        <SwitchSectionForm
          label={t("Notify via Telegram")}
          value={notificationForm.notifyViaTelegram}
          onChange={handleChangeNotificationForm}
          id="notifyViaTelegram"
        />
        <SwitchSectionForm
          label={t("Notify via Email")}
          value={notificationForm.notifyViaEmail}
          onChange={handleChangeNotificationForm}
          id="notifyViaEmail"
        />
        <SwitchSectionForm
          label={t("Notify via Webhook")}
          value={notificationForm.notifyViaWebhook}
          onChange={handleChangeNotificationForm}
          id="notifyViaWebhook"
        />
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">{t("OK")}</button>
        <button className="btn_close">{t("Cancel")}</button>
      </div>
    </div>
  );
};

export default AddEditConsumptionNotices;
