import React, { useEffect, useState } from "react";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SectionForm from "../../../components/sectionform/SectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputFile from "../../../components/popup/inputFile/InputFile";
import { t } from "i18next";
import { useNavigate, useParams } from "react-router-dom";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";

const AddEditManager = ({ typePage }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [parents, setParents] = useState([]);
  const [securityGroups, setSecurityGroups] = useState([]);
  const [nas, setNas] = useState([]);
  const [groups, setGroups] = useState([]);
  const [sites, setSites] = useState([]);
  const navigate = useNavigate();

  const [generalinformation, setGeneralinformation] = useState({
    username: "",
    password: "",
    confirm_password: "",
    parent_id: "",
    package: "",
    acl_group_id: "",
    enabled: false,
  });

  const [personalformation, setPersonalformation] = useState({
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    notes: "",
  });

  const [specialDetails, setSpecialDetails] = useState({
    subscriber_prefix: "",
    subscriber_suffix: "",
    max_users: "",
    group_id: "",
    site_id: "",
    debt_limit: "",
    discount_rate: "",
    mikrotik_addresslist: "",
    allowed_ppp_services: "",
    allowed_nases: "",
    requires_2fa: "",
    ignore_captcha: false,
    notRequireCptcha: false,
    admin_notes: "",
    force_change_password: false,
  });

  const [determinants, setDeterminants] = useState({
    limit_delete: "",
    limit_delete_count: false,
    limit_rename: "",
    limit_rename_count: false,
    limit_profile_change: "",
    limit_profile_change_count: false,
    limit_mac_change: "",
    limit_mac_change_count: false,
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

  const handleChangeDeterminants = (e) => {
    setDeterminants((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const getManager = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get(`api/manager/overview/${id}`);
      setGeneralinformation((prev) => {
        return {
          ...prev,
          username: data.data && data.data?.username,
          password: data.data && data.data?.password,
          confirm_password: data.data && data.data?.confirm_password,
          parent_id: data.data && data.data?.parent_id,
          package: data.data && data.data?.package,
          acl_group_id: data.data && data.data?.acl_group_id,
          enabled: data.data && data.data?.enabled == 1 ? true : false,
        };
      });
      setPersonalformation((prev) => {
        return {
          ...prev,
          firstname: data.data && data.data?.firstname,
          lastname: data.data && data.data?.lastname,
          company: data.data && data.data?.company,
          email: data.data && data.data?.email,
          phone: data.data && data.data?.phone,
          city: data.data && data.data?.city,
          address: data.data && data.data?.address,
          notes: data.data && data.data?.notes,
        };
      });
      setSpecialDetails((prev) => {
        return {
          ...prev,
          subscriber_prefix: data.data && data.data?.subscriber_prefix,
          subscriber_suffix: data.data && data.data?.subscriber_suffix,
          max_users: data.data && data.data?.max_users,
          group_id: data.data && data.data?.group_id,
          site_id: data.data && data.data?.site_id,
          debt_limit: data.data && data.data?.debt_limit,
          discount_rate: data.data && data.data?.discount_rate,
          mikrotik_addresslist: data.data && data.data?.mikrotik_addresslist,
          allowed_ppp_services: data.data && data.data?.allowed_ppp_services,
          allowed_nases: data.data && data.data?.allowed_nases,
          requires_2fa: data.data && data.data?.requires_2fa,
          ignore_captcha:
            data.data && data.data?.ignore_captcha == 1 ? true : false,
          notRequireCptcha:
            data.data && data.data?.notRequireCptcha == 1 ? true : false,
          admin_notes: data.data && data.data?.admin_notes,
          force_change_password:
            data.data && data.data?.force_change_password == 1 ? true : false,
        };
      });
      setDeterminants((prev) => {
        return {
          ...prev,
          limit_delete: data.data && data.data?.limit_delete,
          limit_delete_count:
            data.data && data.data?.limit_delete_count == 1 ? true : false,
          limit_rename: data.data && data.data?.limit_rename,
          limit_rename_count:
            data.data && data.data?.limit_rename_count == 1 ? true : false,
          limit_profile_change: data.data && data.data?.limit_profile_change,
          limit_profile_change_count:
            data.data && data.data?.limit_profile_change_count == 1
              ? true
              : false,
          limit_mac_change: data.data && data.data?.limit_mac_change,
          limit_mac_change_count:
            data.data && data.data?.limit_mac_change_count == 1 ? true : false,
        };
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    id && getManager();
    (async () => {
      try {
        const { data } = await apiAxios.get("api/index/manager");
        setParents(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await apiAxios.get("api/index/acl");
        setSecurityGroups(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await apiAxios.get("api/nas");
        setNas(data.data);
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
    const generalinformationTransform = {
      ...generalinformation,
      enabled: generalinformation.enabled ? 1 : 0,
    };
    const specialDetailsTransform = {
      ...specialDetails,
      ignore_captcha: specialDetails.ignore_captcha ? 1 : 0,
      notRequireCptcha: specialDetails.notRequireCptcha ? 1 : 0,
      force_change_password: specialDetails.force_change_password ? 1 : 0,
    };
    const determinantsTransform = {
      ...determinants,
      limit_delete_count: determinants.limit_delete_count ? 1 : 0,
      limit_rename_count: determinants.limit_rename_count ? 1 : 0,
      limit_profile_change_count: determinants.limit_profile_change_count
        ? 1
        : 0,
      limit_mac_change_count: determinants.limit_mac_change_count ? 1 : 0,
    };
    try {
      if (typePage == "addPage") {
        await apiAxios.post("api/manager", {
          payload: encryptedData({
            ...generalinformationTransform,
            ...personalformation,
            ...specialDetailsTransform,
            ...determinantsTransform,
          }),
        });
      } else if (typePage == "editPage") {
        await apiAxios.put(`api/user/${id}`, {
          payload: encryptedData({
            ...generalinformationTransform,
            ...personalformation,
            ...specialDetailsTransform,
            ...determinantsTransform,
          }),
        });
      }
      toast.success("Successful add");
      navigate("/managers");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
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
            value={generalinformation.confirm_password}
            onChange={handleChangeGeneralUnformation}
            id="confirm_password"
          />
          <SelectSectionForm
            label={t("user_form_label_parent")}
            type={"text"}
            value={generalinformation.parent_id}
            onChange={handleChangeGeneralUnformation}
            id="parent_id"
            options={
              parents &&
              parents.map((item) => {
                return { name: item.username, value: item.id };
              })
            }
          />
          <SelectSectionForm
            label={t("manager_form_security_group")}
            value={generalinformation.acl_group_id}
            onChange={handleChangeGeneralUnformation}
            id="acl_group_id"
            options={
              securityGroups &&
              securityGroups.map((item) => {
                return { name: item.name, value: item.id };
              })
            }
          />
          <SwitchSectionForm
            label={t("global_enabled")}
            value={generalinformation.enabled}
            onChange={handleChangeGeneralUnformation}
            id="enabled"
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
            label={t("user_form_label_company")}
            type={"text"}
            value={personalformation.company}
            onChange={handleChangePersonalformation}
            id="company"
          />
          <InputSectionForm
            label={t("user_form_label_email")}
            type={"text"}
            value={personalformation.email}
            onChange={handleChangePersonalformation}
            id="email"
          />
          <InputSectionForm
            label={t("user_form_label_phone")}
            type={"text"}
            value={personalformation.phone}
            onChange={handleChangePersonalformation}
            id="phone"
          />
          <InputSectionForm
            label={t("managers_table_city")}
            type={"text"}
            value={personalformation.city}
            onChange={handleChangePersonalformation}
            id="city"
          />
          <InputSectionForm
            label={t("users_table_address")}
            type={"text"}
            value={personalformation.address}
            onChange={handleChangePersonalformation}
            id="address"
          />

          <InputSectionForm
            label={t("users_table_notes")}
            type={t("text")}
            value={personalformation.notice}
            onChange={handleChangePersonalformation}
            id="notice"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("manager_form_label3")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("manager_form_prefix")}
            type={"text"}
            value={specialDetails.subscriber_prefix}
            onChange={handleChangeSpecialDetails}
            id="subscriber_prefix"
          />
          <InputSectionForm
            label={t("manager_form_suffix")}
            type={"text"}
            value={specialDetails.subscriber_suffix}
            onChange={handleChangeSpecialDetails}
            id="subscriber_suffix"
          />
          <InputSectionForm
            label={t("manager_form_max_users")}
            type={"text"}
            value={specialDetails.max_users}
            onChange={handleChangeSpecialDetails}
            id="max_users"
          />
          <SelectSectionForm
            label={t("global_group")}
            value={specialDetails.group_id}
            onChange={handleChangeSpecialDetails}
            id="group_id"
            options={
              groups &&
              groups.map((item) => {
                return { name: item.name, value: item.id };
              })
            }
          />
          <SelectSectionForm
            label={t("manager_form_site")}
            value={specialDetails.site_id}
            onChange={handleChangeSpecialDetails}
            id="site_id"
            options={
              sites &&
              sites.map((item) => {
                return { name: item.name, value: item.id };
              })
            }
          />
          <InputSectionForm
            label={t("manager_form_deb_limit")}
            type={"text"}
            value={specialDetails.debt_limit}
            onChange={handleChangeSpecialDetails}
            id="debt_limit"
          />
          <InputSectionForm
            label={t("manager_form_discount_rate")}
            type={"text"}
            value={specialDetails.discount_rate}
            onChange={handleChangeSpecialDetails}
            id="discount_rate"
          />
          <InputSectionForm
            label={t("Address List")}
            type={"text"}
            value={specialDetails.mikrotik_addresslist}
            onChange={handleChangeSpecialDetails}
            id="mikrotik_addresslist"
          />
          <InputFile
            label={t("manager_form_label_allowed_ppp_services")}
            value={specialDetails.allowed_ppp_services}
            onChange={handleChangeSpecialDetails}
            id="allowed_ppp_services"
          />
          <SelectSectionForm
            label={"Allowed NAS(s)"}
            value={specialDetails.allowed_nases}
            onChange={handleChangeSpecialDetails}
            id="allowed_nases"
            options={
              nas &&
              nas.map((item) => {
                return { name: item.name, value: item.id };
              })
            }
          />
          <SwitchSectionForm
            label={t("manager_form_requires_2fa")}
            value={specialDetails.requires_2fa}
            onChange={handleChangeSpecialDetails}
            id="requires_2fa"
          />
          <SwitchSectionForm
            label={t("manager_form_ignore_captcha")}
            value={specialDetails.ignore_captcha}
            onChange={handleChangeSpecialDetails}
            id="ignore_captcha"
          />
          <InputSectionForm
            label={t("manager_form_admin_notes")}
            type={"text"}
            value={specialDetails.admin_notes}
            onChange={handleChangeSpecialDetails}
            id="admin_notes"
          />
          <SwitchSectionForm
            label={t("manager_form_force_change_password")}
            value={specialDetails.force_change_password}
            onChange={handleChangeSpecialDetails}
            id="force_change_password"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("manager_form_label4")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SwitchSectionForm
            label={t("manager_form_limit_delete")}
            value={determinants.limit_delete}
            onChange={handleChangeDeterminants}
            id="limit_delete"
          />
          <InputSectionForm
            label={t("manager_form_limit_delete_count")}
            type={"text"}
            value={determinants.limit_delete_count}
            onChange={handleChangeDeterminants}
            id="limit_delete_count"
          />
          <SwitchSectionForm
            label={t("manager_form_limit_rename")}
            value={determinants.limit_rename}
            onChange={handleChangeDeterminants}
            id="limit_rename"
          />
          <InputSectionForm
            label={t("manager_form_limit_rename_count")}
            type={"text"}
            value={determinants.limit_rename_count}
            onChange={handleChangeDeterminants}
            id="limit_rename_count"
          />
          <SwitchSectionForm
            label={t("manager_form_limit_profile_change")}
            value={determinants.limit_profile_change}
            onChange={handleChangeDeterminants}
            id="limit_profile_change"
          />
          <InputSectionForm
            label={t("manager_form_limit_profile_change_count")}
            type={"text"}
            value={determinants.limit_profile_change_count}
            onChange={handleChangeDeterminants}
            id="limit_profile_change_count"
          />
          <SwitchSectionForm
            label={t("manager_form_limit_mac_change")}
            value={determinants.limit_mac_change}
            onChange={handleChangeDeterminants}
            id="limit_mac_change"
          />
          <InputSectionForm
            label={t("manager_form_limit_mac_change_count")}
            type={"text"}
            value={determinants.limit_mac_change_count}
            onChange={handleChangeDeterminants}
            id="limit_mac_change_count"
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

export default AddEditManager;
