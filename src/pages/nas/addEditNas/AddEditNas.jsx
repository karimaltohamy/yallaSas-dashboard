import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";

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
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeMikrotikCredentials = (e) => {
    setMikrotikCredentials((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={"General information"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"Name"}
            type={"text"}
            value={generalinformation.name}
            onChange={handleChangeGeneralInformation}
            id="name"
          />
          <SwitchSectionForm
            label={"Effective"}
            value={generalinformation.effective}
            onChange={handleChangeGeneralInformation}
            id="effective"
          />
          <InputSectionForm
            label={"IP Address"}
            type={"text"}
            value={generalinformation.ipAddress}
            onChange={handleChangeGeneralInformation}
            id="ipAddress"
          />
          <InputSectionForm
            label={"Password"}
            type={"text"}
            value={generalinformation.password}
            onChange={handleChangeGeneralInformation}
            id="password"
          />
          <SelectSectionForm
            label={"Type"}
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
            label={"Site"}
            value={generalinformation.site}
            onChange={handleChangeGeneralInformation}
            id="site"
            options={[{ name: "any", value: "" }]}
          />
          <InputSectionForm
            label={"Incoming (COA) Port"}
            type={"text"}
            value={generalinformation.incomingPort}
            onChange={handleChangeGeneralInformation}
            id="incomingPort"
          />
          <InputSectionForm
            label={"HTTP Port"}
            type={"text"}
            value={generalinformation.httpPort}
            onChange={handleChangeGeneralInformation}
            id="httpPort"
          />
          <SwitchSectionForm
            label={"IP Accounting"}
            value={generalinformation.ipAccounting}
            onChange={handleChangeGeneralInformation}
            id="ipAccounting"
          />
          <SwitchSectionForm
            label={"Monitor (ping)"}
            value={generalinformation.monitorPing}
            onChange={handleChangeGeneralInformation}
            id="monitorPing"
          />
          <InputSectionForm
            label={"Pool Name (optional)"}
            type={"text"}
            value={generalinformation.poolName}
            onChange={handleChangeGeneralInformation}
            id="poolName"
          />
          <InputSectionForm
            label={"Details"}
            type={"text"}
            value={generalinformation.details}
            onChange={handleChangeGeneralInformation}
            id="details"
          />
          <InputSectionForm
            label={"SNMP Community"}
            type={"text"}
            value={generalinformation.snmpCommunity}
            onChange={handleChangeGeneralInformation}
            id="snmpCommunity"
          />
        </div>
      </SectionForm>
      <SectionForm title={"Mikrotik credentials (required for pining users)"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"SSH Username"}
            type={"text"}
            value={mikrotikCredentials.sshUsername}
            onChange={handleChangeMikrotikCredentials}
            id="sshUsername"
          />
          <InputSectionForm
            label={"SSH Password"}
            type={"text"}
            value={mikrotikCredentials.sshPassword}
            onChange={handleChangeMikrotikCredentials}
            id="sshPassword"
          />
          <InputSectionForm
            label={"SSH Port"}
            type={"text"}
            value={mikrotikCredentials.sshPort}
            onChange={handleChangeMikrotikCredentials}
            id="sshPort"
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

export default AddEditNas;
