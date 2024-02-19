import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import { t } from "i18next";

const AddEditNas = () => {
  const [generalinformation, setGeneralinformation] = useState({
    name: "",
    effective: "",
    ipAddress: "",
    password: "",
    type: "",
    site: "",
    incomingPort: "",
    httpPort: "",
    ipAccounting: "",
    monitorPing: "",
    poolName: "",
    details: "",
    snmpCommunity: "",
  });

  const [mikrotikCredentials, setMikrotikCredentials] = useState({
    sshUsername: "",
    sshPassword: "",
    sshPort: "",
  });

  const handleChangeGeneralInformation = (e) => {
    setGeneralinformation((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeMikrotikCredentials = (e) => {
    setMikrotikCredentials((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={t("General information")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("Name")}
            type={"text"}
            value={generalinformation.name}
            onChange={handleChangeGeneralInformation}
            id="name"
          />
          <SwitchSectionForm
            label={t("Effective")}
            value={generalinformation.effective}
            onChange={handleChangeGeneralInformation}
            id="effective"
          />
          <InputSectionForm
            label={t("IP Address")}
            type={"text"}
            value={generalinformation.ipAddress}
            onChange={handleChangeGeneralInformation}
            id="ipAddress"
          />
          <InputSectionForm
            label={t("Password")}
            type={"text"}
            value={generalinformation.password}
            onChange={handleChangeGeneralInformation}
            id="password"
          />
          <SelectSectionForm
            label={t("Type")}
            value={generalinformation.type}
            onChange={handleChangeGeneralInformation}
            id="type"
            options={[
              { name: "Generic", value: "" },
              { name: "Mikrotik", value: "" },
              { name: "Cisco", value: "" },
              { name: "UBNT Access Point", value: "" },
            ]}
          />
          <SelectSectionForm
            label={t("Site")}
            value={generalinformation.site}
            onChange={handleChangeGeneralInformation}
            id="site"
            options={[{ name: "any", value: "" }]}
          />
          <InputSectionForm
            label={t("Incoming (COA) Port")}
            type={"text"}
            value={generalinformation.incomingPort}
            onChange={handleChangeGeneralInformation}
            id="incomingPort"
          />
          <InputSectionForm
            label={t("HTTP Port")}
            type={"text"}
            value={generalinformation.httpPort}
            onChange={handleChangeGeneralInformation}
            id="httpPort"
          />
          <SwitchSectionForm
            label={t("IP Accounting")}
            value={generalinformation.ipAccounting}
            onChange={handleChangeGeneralInformation}
            id="ipAccounting"
          />
          <SwitchSectionForm
            label={t("Monitor (ping)")}
            value={generalinformation.monitorPing}
            onChange={handleChangeGeneralInformation}
            id="monitorPing"
          />
          <InputSectionForm
            label={t("Pool Name (optional)")}
            type={"text"}
            value={generalinformation.poolName}
            onChange={handleChangeGeneralInformation}
            id="poolName"
          />
          <InputSectionForm
            label={t("Details")}
            type={"text"}
            value={generalinformation.details}
            onChange={handleChangeGeneralInformation}
            id="details"
          />
          <InputSectionForm
            label={t("SNMP Community")}
            type={"text"}
            value={generalinformation.snmpCommunity}
            onChange={handleChangeGeneralInformation}
            id="snmpCommunity"
          />
        </div>
      </SectionForm>
      <SectionForm
        title={t("Mikrotik credentials (required for pining users)")}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("SSH Username")}
            type={"text"}
            value={mikrotikCredentials.sshUsername}
            onChange={handleChangeMikrotikCredentials}
            id="sshUsername"
          />
          <InputSectionForm
            label={t("SSH Password")}
            type={"text"}
            value={mikrotikCredentials.sshPassword}
            onChange={handleChangeMikrotikCredentials}
            id="sshPassword"
          />
          <InputSectionForm
            label={t("SSH Port")}
            type={"text"}
            value={mikrotikCredentials.sshPort}
            onChange={handleChangeMikrotikCredentials}
            id="sshPort"
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">{t("global_button_submit")}</button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
    </div>
  );
};

export default AddEditNas;
