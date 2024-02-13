import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import "./addEditSubscriber.scss";
import { t } from "i18next";
import { toast } from "react-toastify";
import apiAxios from "../../../utils/apiAxios";
import CryptoJS from "crypto-js";
import { secretPass } from "../../../utils/data";
import { useNavigate } from "react-router-dom";

const AddEditSubscriber = ({ typePage }) => {
  const [loading, setLoading] = useState(false);
  const [managers, setManagers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [sites, setSites] = useState([]);
  const [servicesProfile, setServicesProfile] = useState([]);
  const navigate = useNavigate();
  const [generalinformation, setGeneralinformation] = useState({
    username: "",
    enabled: 1,
    password: "",
    confconfirm_passwordirmPassword: "",
    parent_id: "",
    profile_id: "",
    group_id: "",
    site_id: "",
    effective: "",
    portal_password: "",
    use_separate_portal_password: "",
    mac_auth: "",
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
    auto_renew: "",
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
    restricted: 0,
  });

  const handleChangeGeneralUnformation = (e) => {
    setGeneralinformation((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };
  const handleChangePersonalformation = (e) => {
    setPersonalformation((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };
  const handleChangeSpecialDetails = (e) => {
    setSpecialDetails((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  useEffect(() => {
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
      const dataToEncrypt = JSON.stringify({
        ...generalinformation,
        ...personalformation,
        ...specialDetails,
      });
      encrypted = CryptoJS.AES.encrypt(dataToEncrypt, secretPass).toString();
    }

    try {
      const { data } = await apiAxios.post("api/user", {
        payload: encrypted,
      });
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
      <SectionForm title={t("General information")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("Username")}
            type={"text"}
            value={generalinformation.username}
            onChange={handleChangeGeneralUnformation}
            id="username"
          />
          <InputSectionForm
            label={t("Password")}
            type={"password"}
            value={generalinformation.password}
            onChange={handleChangeGeneralUnformation}
            id="password"
          />
          <InputSectionForm
            label={t("Confirm password")}
            type={"password"}
            value={generalinformation.confirmPassword}
            onChange={handleChangeGeneralUnformation}
            id="confirmPassword"
          />
          <SelectSectionForm
            label={t("Follow me")}
            type={"text"}
            value={generalinformation.parent_id}
            onChange={handleChangeGeneralUnformation}
            id="parent_id"
            options={managers.map((item) => {
              return { name: item.username, value: item.id };
            })}
          />
          <SelectSectionForm
            label={t("The Package")}
            value={generalinformation.profile_id}
            onChange={handleChangeGeneralUnformation}
            id="profile_id"
            options={servicesProfile.map((item) => {
              return { name: item.name, value: item.id };
            })}
          />
          <SelectSectionForm
            label={t("Group")}
            value={generalinformation.group_id}
            onChange={handleChangeGeneralUnformation}
            id="group_id"
            options={groups.map((item) => {
              return { name: item.name, value: item.id };
            })}
          />
          <SelectSectionForm
            label={t("The Site")}
            value={generalinformation.site_id}
            onChange={handleChangeGeneralUnformation}
            id="site_id"
            options={sites.map((item) => {
              return { name: item.name, value: item.id };
            })}
          />
          <SwitchSectionForm
            label={t("Effective")}
            value={generalinformation.effective}
            onChange={handleChangeGeneralUnformation}
            id="effective"
          />
          <InputSectionForm
            label={t("Password for subscriber page")}
            type={"text"}
            value={generalinformation.portal_password}
            onChange={handleChangeGeneralUnformation}
            id="portal_password"
          />
          <SwitchSectionForm
            label={t("MAC Lock")}
            value={generalinformation.mac_auth}
            onChange={handleChangeGeneralUnformation}
            id="mac_auth"
          />
          <SwitchSectionForm
            label={t("Use a different password for the subscriber page")}
            value={generalinformation.use_separate_portal_password}
            onChange={handleChangeGeneralUnformation}
            id="use_separate_portal_password"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Personal information")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("First name")}
            type={"text"}
            value={personalformation.firstname}
            onChange={handleChangePersonalformation}
            id="firstname"
          />
          <InputSectionForm
            label={t("Last name")}
            type={"text"}
            value={personalformation.lastname}
            onChange={handleChangePersonalformation}
            id="lastname"
          />
          <InputSectionForm
            label={t("Company")}
            type={"text"}
            value={personalformation.company}
            onChange={handleChangePersonalformation}
            id="company"
          />
          <InputSectionForm
            label={t("Email")}
            type={"text"}
            value={personalformation.email}
            onChange={handleChangePersonalformation}
            id="email"
          />
          <InputSectionForm
            label={t("Phone")}
            type={"text"}
            value={personalformation.phone}
            onChange={handleChangePersonalformation}
            id="phone"
          />
          <InputSectionForm
            label={t("City")}
            type={"text"}
            value={personalformation.city}
            onChange={handleChangePersonalformation}
            id="city"
          />
          <InputSectionForm
            label={t("Address")}
            type={"text"}
            value={personalformation.address}
            onChange={handleChangePersonalformation}
            id="address"
          />
          <InputSectionForm
            label={t("Apartment number")}
            type={"text"}
            value={personalformation.apartment}
            onChange={handleChangePersonalformation}
            id="apartment"
          />
          <InputSectionForm
            label={t("The street")}
            type={"text"}
            value={personalformation.street}
            onChange={handleChangePersonalformation}
            id="street"
          />
          <InputSectionForm
            label={t("Contract number")}
            type={"text"}
            value={personalformation.contract_id}
            onChange={handleChangePersonalformation}
            id="contract_id"
          />
          <InputSectionForm
            label={t("Id number")}
            type={"text"}
            value={personalformation.national_id}
            onChange={handleChangePersonalformation}
            id="national_id"
          />
          <InputSectionForm
            label={t("Notice")}
            type={"text"}
            value={personalformation.notes}
            onChange={handleChangePersonalformation}
            id="notes"
          />
          <SwitchSectionForm
            label={t("Automatic renewal")}
            value={personalformation.auto_renew}
            onChange={handleChangeGeneralUnformation}
            id="auto_renew"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Special details")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("End")}
            type={"date"}
            value={specialDetails.expiration}
            onChange={handleChangeSpecialDetails}
            id="expiration"
          />
          <InputSectionForm
            label={t("Entry times")}
            type={"text"}
            value={specialDetails.simultaneous_sessions}
            onChange={handleChangeSpecialDetails}
            id="simultaneous_sessions"
          />
          <InputSectionForm
            label={t("Static iP address")}
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
            label={t("Subscriber type")}
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
            label={t("Automatic renewal")}
            value={specialDetails.restricted}
            onChange={handleChangeGeneralUnformation}
            id="restricted"
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add" onClick={handleForm}>
          {t("OK")}
        </button>
        <button className="btn_close">{t("Cancel")}</button>
      </div>
    </div>
  );
};

export default AddEditSubscriber;
