import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import { t } from "i18next";
import { useNavigate, useParams } from "react-router-dom";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";
import { toast } from "react-toastify";

const AddEditNas = ({ typePage }) => {
  const { id } = useParams();
  const [Nas, setNas] = useState({});
  const [loading, setLaoding] = useState(false);
  const navigate = useNavigate();

  const [generalinformation, setGeneralinformation] = useState({
    shortname: "",
    enabled: false,
    nasname: "",
    secret: "",
    type: "",
    site_id: "",
    version: "",
    coa_port: "",
    http_port: "",
    ip_accounting_enabled: false,
    monitor: false,
    pool_name: "",
    description: "",
    snmp_community: "",
  });

  const [mikrotikCredentials, setMikrotikCredentials] = useState({
    ssh_username: "",
    ssh_password: "",
    ssh_port: "",
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

  const getNas = async () => {
    try {
      const { data } = await apiAxios(`api/nas/${id}`);
      setGeneralinformation((prev) => {
        return {
          ...prev,
          shortname: data.data && data.data.shortname,
          enabled: data.data && data.data.enabled ? 1 : 0,
          nasname: data.data && data.data.nasname,
          secret: data.data && data.data.secret,
          type: data.data && data.data.type,
          site_id: data.data && data.data.site_id,
          version: data.data && data.data.version,
          coa_port: data.data && data.data.coa_port,
          http_port: data.data && data.data.http_port,
          ip_accounting_enabled:
            data.data && data.data.ip_accounting_enabled ? 1 : 0,
          monitor: data.data && data.data.monitor ? 1 : 0,
          pool_name: data.data && data.data.pool_name,
          description: data.data && data.data.description,
          snmp_community: data.data && data.data.snmp_community,
        };
      });
      setMikrotikCredentials((prev) => {
        return {
          ...prev,
          ssh_username: data.data && data.data.ssh_username,
          ssh_password: data.data && data.data.ssh_password,
          ssh_port: data.data && data.data.ssh_port,
        };
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleForm = async () => {
    setLaoding(true);
    const generalinformationTransfor = {
      ...generalinformation,
      enabled: generalinformation.enabled ? 1 : 0,
      ip_accounting_enabled: generalinformation.ip_accounting_enabled ? 1 : 0,
      monitor: generalinformation.monitor ? 1 : 0,
    };
    try {
      if (typePage == "addPage") {
        await apiAxios.post("api/nas", {
          payload: encryptedData({
            ...generalinformationTransfor,
            ...mikrotikCredentials,
          }),
        });
      } else if (typePage == "editPage") {
        await apiAxios.put(`api/nas/${id}`, {
          payload: encryptedData({
            ...generalinformationTransfor,
            ...mikrotikCredentials,
          }),
        });
      }
      toast.success("Successful add");
      navigate(-1);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLaoding(false);
    }
  };

  useEffect(() => {
    id && getNas();
  }, []);

  return (
    <div className="content_page">
      <SectionForm title={t("user_form_label_basic_information")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("global_name")}
            type={"text"}
            value={generalinformation.shortname}
            onChange={handleChangeGeneralInformation}
            id="shortname"
          />
          <SwitchSectionForm
            label={t("global_enabled")}
            value={generalinformation.enabled}
            onChange={handleChangeGeneralInformation}
            id="enabled"
          />
          <InputSectionForm
            label={t("nas_form_ip_address")}
            type={"text"}
            value={generalinformation.nasname}
            onChange={handleChangeGeneralInformation}
            placeholder={"0.0.0.0"}
            id="nasname"
          />
          <InputSectionForm
            label={t("nas_form_secret")}
            type={"text"}
            value={generalinformation.secret}
            onChange={handleChangeGeneralInformation}
            id="secret"
          />
          <SelectSectionForm
            label={t("global_type")}
            value={generalinformation.type}
            onChange={handleChangeGeneralInformation}
            id="type"
            options={[
              { name: "Generic", value: "0" },
              { name: "Mikrotik", value: "1" },
              { name: "Cisco", value: "2" },
              { name: "UBNT Access Point", value: "3" },
            ]}
          />
          <SelectSectionForm
            label={t("nas_form_version")}
            value={generalinformation.version}
            onChange={handleChangeGeneralInformation}
            id="version"
            options={[
              { name: "Generic", value: "generic" },
              { name: "Mikrotik 6.36 or higher", value: "mikrtik_6.36" },
              { name: "Mikrotik 6.35 or lower", value: "mikrtik_6.35" },
              { name: "Cisco ASR 9xxx", value: "cisco_asr_9xxx" },
            ]}
          />
          <SelectSectionForm
            label={t("menu_settings_sites")}
            value={generalinformation.site_id}
            onChange={handleChangeGeneralInformation}
            id="site_id"
            options={[
              { name: "any", value: "0" },
              { name: "_default", value: "1" },
            ]}
          />
          <InputSectionForm
            label={t("nas_form_coa_port")}
            type={"number"}
            value={generalinformation.coa_port}
            onChange={handleChangeGeneralInformation}
            id="coa_port"
          />
          <SwitchSectionForm
            label={t("nas_form_ip_accounting")}
            value={generalinformation.ip_accounting_enabled}
            onChange={handleChangeGeneralInformation}
            id="ip_accounting_enabled"
          />
          <InputSectionForm
            label={t("nas_form_http_port")}
            type={"number"}
            value={generalinformation.http_port}
            onChange={handleChangeGeneralInformation}
            id="http_port"
          />
          <SwitchSectionForm
            label={t("nas_form_monitor")}
            value={generalinformation.monitor}
            onChange={handleChangeGeneralInformation}
            id="monitor"
          />
          <InputSectionForm
            label={t("Pool Name (optional)")}
            type={"text"}
            value={generalinformation.pool_name}
            onChange={handleChangeGeneralInformation}
            id="pool_name"
          />
          <InputSectionForm
            label={t("global_description")}
            type={"text"}
            value={generalinformation.description}
            onChange={handleChangeGeneralInformation}
            id="description"
          />
          <InputSectionForm
            label={t("nas_form_snmp_community")}
            type={"text"}
            value={generalinformation.snmp_community}
            onChange={handleChangeGeneralInformation}
            id="snmp_community"
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
            value={mikrotikCredentials.ssh_username}
            onChange={handleChangeMikrotikCredentials}
            id="ssh_username"
          />
          <InputSectionForm
            label={t("SSH Password")}
            type={"password"}
            value={mikrotikCredentials.ssh_password}
            onChange={handleChangeMikrotikCredentials}
            id="ssh_password"
          />
          <InputSectionForm
            label={t("SSH Port")}
            type={"text"}
            value={mikrotikCredentials.ssh_port}
            onChange={handleChangeMikrotikCredentials}
            id="ssh_port"
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

export default AddEditNas;
