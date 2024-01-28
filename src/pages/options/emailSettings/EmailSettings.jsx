import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";

const EmailSettings = () => {
  const [settings, setSettings] = useState({
    emailService: "",
    smtperverAddress: "",
    smtpPort: "",
    serverRequiresAuthentication: "",
    senderEmail: "",
  });

  const handleChangeSettings = (e) => {
    setSettings((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="m-[10px]">
      <SectionForm title={"Email Service"}>
        <SwitchSectionForm
          label={"Email Service"}
          value={settings.emailService}
          onChange={handleChangeSettings}
          id="emailService"
        />
        <InputSectionForm
          label={"SMTP Server Address"}
          type={"text"}
          value={settings.smtperverAddress}
          onChange={handleChangeSettings}
          id="smtperverAddress"
        />
        <InputSectionForm
          label={"SMTP Port"}
          type={"text"}
          value={settings.smtpPort}
          onChange={handleChangeSettings}
          id="smtpPort"
        />
        <SwitchSectionForm
          label={"Server Requires Authentication"}
          value={settings.serverRequiresAuthentication}
          onChange={handleChangeSettings}
          id="serverRequiresAuthentication"
        />
        <InputSectionForm
          label={"Sender Email"}
          type={"text"}
          value={settings.senderEmail}
          onChange={handleChangeSettings}
          id="senderEmail"
        />
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">OK</button>
        <button className="btn_close">Cancel</button>
      </div>
    </div>
  );
};

export default EmailSettings;
