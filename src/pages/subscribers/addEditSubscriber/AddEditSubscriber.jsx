import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import "./addEditSubscriber.scss";
import { t } from "i18next";
import { toast } from "react-toastify";
import apiAxios from "../../../utils/apiAxios";
import CryptoJS from "crypto-js";
import { secretPass } from "../../../utils/data";
import { useNavigate, useParams } from "react-router-dom";

const AddEditSubscriber = ({ typePage }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [subscriber, setSubscriber] = useState(null);
  const [managers, setManagers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [sites, setSites] = useState([]);
  const [servicesProfile, setServicesProfile] = useState([]);
  const navigate = useNavigate();

  const [generalinformation, setGeneralinformation] = useState({
    username: "",
    enabled: false,
    password: "",
    confirmPassword: "",
    parent_id: "",
    profile_id: "",
    group_id: "",
    site_id: "",
    effective: "",
    portal_password: "",
    use_separate_portal_password: false,
    mac_auth: false,
  });
  const [personalformation, setPersonalformation] = useState({
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    apartment: "",
    street: "",
    contract_id: "",
    national_id: "",
    notes: "",
    auto_renew: false,
  });
  const [specialDetails, setSpecialDetails] = useState({
    expiration: "",
    simultaneous_sessions: "",
    static_ip: "",
    mikrotik_winbox_group: "",
    mikrotik_framed_route: "",
    mikrotik_addresslist: "",
    mikrotik_ipv6_prefix: "",
    user_type: "",
    restricted: false,
  });

  const handleChangeGeneralUnformation = (e) => {
    setGeneralinformation((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };
  const handleChangePersonalformation = (e) => {
    setPersonalformation((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };
  const handleChangeSpecialDetails = (e) => {
    setSpecialDetails((prev) => {
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
        const { data } = await apiAxios.get(`api/user/${id}`);
        setSubscriber(data.data);
        setGeneralinformation((prevState) => ({
          ...prevState,
          username: data.data && data.data.username,
          enabled: data.data && data.data.enabled == 1 ? true : false,
          password: data.data && data.data.password,
          confirmPassword: data.data && data.data.confirmPassword,
          parent_id: data.data && data.data.parent_id,
          profile_id: data.data && data.data.profile_id,
          group_id: data.data && data.data.group_id,
          site_id: data.data && data.data?.site_id,
          effective: data.data && data.data?.effective == 1 ? true : false,
          portal_password: data.data && data.data?.portal_password,
          use_separate_portal_password:
            data.data && data.data?.use_separate_portal_password == 1
              ? true
              : false,
          mac_auth: data.data && data.data?.mac_auth == 1 ? true : false,
        }));
        setPersonalformation((prevState) => ({
          ...prevState,
          firstname: data.data && data.data?.firstname,
          lastname: data.data && data.data?.lastname,
          company: data.data && data.data?.company,
          email: data.data && data.data?.email,
          phone: data.data && data.data?.phone,
          city: data.data && data.data?.city,
          address: data.data && data.data?.address,
          apartment: data.data && data.data?.apartment,
          street: data.data && data.data?.street,
          contract_id: data.data && data.data?.contract_id,
          national_id: data.data && data.data?.national_id,
          notes: data.data && data.data?.notes,
          auto_renew: data.data && data.data?.auto_renew == 1 ? true : false,
        }));
        setSpecialDetails((prevState) => ({
          ...prevState,
          expiration: data.data && data.data?.expiration,
          simultaneous_sessions: data.data && data.data?.simultaneous_sessions,
          static_ip: data.data && data.data?.static_ip,
          mikrotik_winbox_group: data.data && data.data?.mikrotik_winbox_group,
          mikrotik_framed_route: data.data && data.data?.mikrotik_framed_route,
          mikrotik_addresslist: data.data && data.data?.mikrotik_addresslist,
          mikrotik_ipv6_prefix: data.data && data.data?.mikrotik_ipv6_prefix,
          user_type: data.data && data.data?.user_type,
          restricted: data.data && data.data?.restricted == 1 ? true : false,
        }));
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await apiAxios.get("api/index/manager");
        setManagers(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await apiAxios.get("api/list/profile/5");
        setServicesProfile(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await apiAxios.get("api/group");
        setGroups(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await apiAxios.get("api/site");
        setSites(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleForm = async () => {
    setLoading(true);
    let encrypted;
    if (generalinformation && personalformation && specialDetails) {
      const transformedGeneralInformation = {
        ...generalinformation,
        enabled: generalinformation.effective ? 1 : 0,
        use_separate_portal_password:
          generalinformation.use_separate_portal_password ? 1 : 0,
        mac_auth: generalinformation.mac_auth ? 1 : 0,
      };

      const transformedPersonalformation = {
        ...personalformation,
        auto_renew: personalformation.auto_renew ? 1 : 0,
      };

      const transformedSpecialDetails = {
        ...specialDetails,
        restricted: specialDetails.restricted ? 1 : 0,
      };
      const dataToEncrypt = JSON.stringify({
        ...transformedGeneralInformation,
        ...transformedPersonalformation,
        ...transformedSpecialDetails,
      });
      encrypted = CryptoJS.AES.encrypt(dataToEncrypt, secretPass).toString();
    }

    try {
      if (typePage == "addPage") {
        await apiAxios.post("api/user", {
          payload: encrypted,
        });
      } else if (typePage == "editPage") {
        await apiAxios.put(`api/user/${id}`, {
          payload: encrypted,
        });
      }

      toast.success("Successful add");
      navigate("/subscribers");
    } catch (error) {
      console.log(error);
      toast.error(error.reponse.data.message);
    }
    setLoading(false);
  };

  return (
    <div className="content_page">
      <SectionForm title={t("user_form_label_basic_information")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("user_form_label_username")}
            type={"text"}
            value={generalinformation.username}
            onChange={handleChangeGeneralUnformation}
            id="username"
          />
          <InputSectionForm
            label={t("user_form_label_password")}
            type={"password"}
            value={generalinformation.password}
            onChange={handleChangeGeneralUnformation}
            id="password"
          />
          <InputSectionForm
            label={t("user_form_label_password_confirm")}
            type={"password"}
            value={generalinformation.confirmPassword}
            onChange={handleChangeGeneralUnformation}
            id="confirmPassword"
          />
          <SelectSectionForm
            label={t("user_form_label_parent")}
            type={"text"}
            value={generalinformation.parent_id}
            onChange={handleChangeGeneralUnformation}
            id="parent_id"
            options={managers.map((item) => {
              return { name: item.username, value: item.id };
            })}
          />
          <SelectSectionForm
            label={t("user_form_label_profile")}
            value={generalinformation.profile_id}
            onChange={handleChangeGeneralUnformation}
            id="profile_id"
            options={servicesProfile.map((item) => {
              return { name: item.name, value: item.id };
            })}
          />
          <SelectSectionForm
            label={t("user_form_label_group")}
            value={generalinformation.group_id}
            onChange={handleChangeGeneralUnformation}
            id="group_id"
            options={groups.map((item) => {
              return { name: item.name, value: item.id };
            })}
          />
          <SelectSectionForm
            label={t("user_form_label_site")}
            value={generalinformation.site_id}
            onChange={handleChangeGeneralUnformation}
            id="site_id"
            options={sites.map((item) => {
              return { name: item.name, value: item.id };
            })}
          />
          <SwitchSectionForm
            label={t("user_form_label_enabled")}
            value={generalinformation.enabled}
            onChange={handleChangeGeneralUnformation}
            id="enabled"
          />
          <InputSectionForm
            label={t("user_form_portal_password")}
            type={"text"}
            value={generalinformation.portal_password}
            onChange={handleChangeGeneralUnformation}
            id="portal_password"
          />
          <SwitchSectionForm
            label={t("user_form_label_mac_lock")}
            value={generalinformation.mac_auth}
            onChange={handleChangeGeneralUnformation}
            id="mac_auth"
          />
          <SwitchSectionForm
            label={t("user_form_use_separate_user_portal")}
            value={generalinformation.use_separate_portal_password}
            onChange={handleChangeGeneralUnformation}
            id="use_separate_portal_password"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("user_form_label_personnel_information")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("global_firstname")}
            type={"text"}
            value={personalformation.firstname}
            onChange={handleChangePersonalformation}
            id="firstname"
          />
          <InputSectionForm
            label={t("global_lastname")}
            type={"text"}
            value={personalformation.lastname}
            onChange={handleChangePersonalformation}
            id="lastname"
          />
          <InputSectionForm
            label={t("label_about")}
            type={"text"}
            value={personalformation.company}
            onChange={handleChangePersonalformation}
            id="company"
          />
          <InputSectionForm
            label={t("menu_settings_email")}
            type={"text"}
            value={personalformation.email}
            onChange={handleChangePersonalformation}
            id="email"
          />
          <InputSectionForm
            label={t("global_phone")}
            type={"text"}
            value={personalformation.phone}
            onChange={handleChangePersonalformation}
            id="phone"
          />
          <InputSectionForm
            label={t("user_form_label_city")}
            type={"text"}
            value={personalformation.city}
            onChange={handleChangePersonalformation}
            id="city"
          />
          <InputSectionForm
            label={t("user_form_label_address")}
            type={"text"}
            value={personalformation.address}
            onChange={handleChangePersonalformation}
            id="address"
          />
          <InputSectionForm
            label={t("user_form_label_apartment")}
            type={"text"}
            value={personalformation.apartment}
            onChange={handleChangePersonalformation}
            id="apartment"
          />
          <InputSectionForm
            label={t("user_form_label_street")}
            type={"text"}
            value={personalformation.street}
            onChange={handleChangePersonalformation}
            id="street"
          />
          <InputSectionForm
            label={t("user_form_label_contract")}
            type={"text"}
            value={personalformation.contract_id}
            onChange={handleChangePersonalformation}
            id="contract_id"
          />
          <InputSectionForm
            label={t("user_form_label_national_id")}
            type={"text"}
            value={personalformation.national_id}
            onChange={handleChangePersonalformation}
            id="national_id"
          />
          <InputSectionForm
            label={t("user_form_label_notes")}
            type={"text"}
            value={personalformation.notes}
            onChange={handleChangePersonalformation}
            id="notes"
          />
          <SwitchSectionForm
            label={t("user_form_label_auto_renew")}
            value={personalformation.auto_renew}
            onChange={handleChangePersonalformation}
            id="auto_renew"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("user_form_label_advanced")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("users_table_expiration")}
            type={"text"}
            value={specialDetails.expiration}
            onChange={handleChangeSpecialDetails}
            id="expiration"
          />
          <InputSectionForm
            label={t("users_table_simultaneous_sessions")}
            type={"text"}
            value={specialDetails.simultaneous_sessions}
            onChange={handleChangeSpecialDetails}
            id="simultaneous_sessions"
          />
          <InputSectionForm
            label={t("users_table_static_ip")}
            type={"text"}
            value={specialDetails.static_ip}
            onChange={handleChangeSpecialDetails}
            id="static_ip"
          />
          <InputSectionForm
            label={t("Mikrotik Winbox Group")}
            type={"text"}
            value={specialDetails.mikrotik_winbox_group}
            onChange={handleChangeSpecialDetails}
            id="mikrotik_winbox_group"
          />
          <InputSectionForm
            label={t("Mikrotik Framed Route")}
            type={"text"}
            value={specialDetails.mikrotik_framed_route}
            onChange={handleChangeSpecialDetails}
            id="mikrotik_framed_route"
          />
          <InputSectionForm
            label={t("Mikrotik Address List")}
            type={"text"}
            value={specialDetails.mikrotik_addresslist}
            onChange={handleChangeSpecialDetails}
            id="mikrotik_addresslist"
          />
          <InputSectionForm
            label={t("IPv6 Prefix")}
            type={"text"}
            value={specialDetails.mikrotik_ipv6_prefix}
            onChange={handleChangeSpecialDetails}
            id="mikrotik_ipv6_prefix"
          />
          <SelectSectionForm
            label={t("user_form_label_user_type")}
            type={"text"}
            value={specialDetails.user_type}
            onChange={handleChangeSpecialDetails}
            id="user_type"
            options={[
              { name: "Regular User", value: "Regular User" },
              { name: "Wireless Access Point", value: "Wireless Access Point" },
            ]}
          />
          <SwitchSectionForm
            label={t("user_form_label_restricted")}
            value={specialDetails.restricted}
            onChange={handleChangeSpecialDetails}
            id="restricted"
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add" onClick={handleForm}>
          {t("global_button_dismiss")}
        </button>
        <button className="btn_close">{t("global_button_submit")}</button>
      </div>
    </div>
  );
};

export default AddEditSubscriber;
