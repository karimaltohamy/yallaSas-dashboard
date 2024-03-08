import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";

const EmailSettings = () => {
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState({
    email_server_enabled: false,
    email_server_address: "",
    email_server_port: "",
    email_server_requires_auth: false,
    email_username: "",
    email_password: "",
    email_security: 0,
    email_sender: "",
  });

  const handleChangeSettings = (e) => {
    setSettings((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const getSettings = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get("api/settings/email_");
      setSettings((prev) => {
        return {
          ...prev,
          email_server_enabled:
            data.data && data.data?.email_server_enabled == 1 ? true : false,
          email_server_address: data.data && data.data?.email_server_address,
          email_server_port: data.data && data.data?.email_server_port,
          email_server_requires_auth:
            data.data && data.data?.email_server_requires_auth == 1
              ? true
              : false,
          email_username: data.data && data.data?.email_username,
          email_password: data.data && data.data?.email_password,
          email_security: data.data && data.data?.email_security,
          email_sender: data.data && data.data?.email_sender,
        };
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleForm = async () => {
    setLoading(true);
    try {
      await apiAxios.post("api/settings", {
        payload: encryptedData({
          email_server_enabled: settings.email_server_enabled ? 1 : 0,
          email_server_address: settings.email_server_address,
          email_server_port: settings.email_server_port,
          email_server_requires_auth: settings.email_server_requires_auth
            ? 1
            : 0,
          email_username: settings.email_username,
          email_password: settings.email_password,
          email_security: settings.email_security,
          email_sender: settings.email_sender,
        }),
      });
      toast.success("Successfull Operation");
      getSettings();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <div className="m-[10px]">
      <SectionForm title={"Email Service"}>
        <SwitchSectionForm
          label={"Email Service"}
          value={settings.email_server_enabled}
          onChange={handleChangeSettings}
          id="email_server_enabled"
        />
        <InputSectionForm
          label={"SMTP Server Address"}
          type={"text"}
          value={settings.email_server_address}
          onChange={handleChangeSettings}
          id="email_server_address"
        />
        <InputSectionForm
          label={"SMTP Port"}
          type={"text"}
          value={settings.email_server_port}
          onChange={handleChangeSettings}
          id="email_server_port"
        />
        <SwitchSectionForm
          label={"Server Requires Authentication"}
          value={settings.email_server_requires_auth}
          onChange={handleChangeSettings}
          id="email_server_requires_auth"
        />
        {settings.email_server_requires_auth && (
          <InputSectionForm
            label={"Username"}
            type={"text"}
            value={settings.email_username}
            onChange={handleChangeSettings}
            id="email_username"
          />
        )}
        {settings.email_server_requires_auth && (
          <InputSectionForm
            label={"Password"}
            type={"text"}
            value={settings.email_password}
            onChange={handleChangeSettings}
            id="email_password"
          />
        )}
        {settings.email_server_requires_auth && (
          <SelectSectionForm
            label={t("Security")}
            value={settings.email_security}
            onChange={handleChangeSettings}
            id="email_security"
            options={[
              { name: "None", value: "0" },
              { name: "TLS", value: "1" },
              { name: "SSL", value: "2" },
            ]}
          />
        )}
        <InputSectionForm
          label={"Sender Email"}
          type={"text"}
          placeholder={"no-reply@ispname.com"}
          value={settings.senderEmail}
          onChange={handleChangeSettings}
          id="senderEmail"
        />
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

export default EmailSettings;
