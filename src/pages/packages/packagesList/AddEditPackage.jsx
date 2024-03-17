import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";
import Select from "react-select";

const AddEditPackage = ({ typePage }) => {
  const { id } = useParams();
  const [selectionIpPool, setSelecttionIpPool] = useState([]);
  const [selectionSite, setSelecttionSite] = useState([]);
  const [allProfiles, setAllProfiles] = useState([]);
  const [allManagers, setAllManagers] = useState([]);
  const [fupProfiles, setFupProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [generalinformation, setGeneralinformation] = useState({
    name: "",
    enabled: false,
    price: "",
    available_ucp: false,
    downrate: "",
    uprate: "",
    type: "",
    description: "",
    vat: "",
  });
  const [extension_allowed_profiles, setExtension_allowed_profiles] =
    useState("");
  const [serviceParameters, setServiceParameters] = useState({
    limit_expiration: false,
    expiration_amount: "",
    expiration_unit: "",
    limit_uptime: false,
    uptime_amount: "",
    uptime_unit: "",
    limit_download: false,
    download_amount: "",
    limit_upload: false,
    upload_amount: "",
    limit_traffic: false,
    traffic_amount: "",
  });
  const [dailySOADeterminants, setDailySOADeterminants] = useState({
    daily_download_limit: "",
    daily_upload_limit: "",
    daily_traffic_limit: "",
    daily_uptime_limit: "",
    daily_uptime_unit: "",
  });

  const [advancedFeatures, setAdvancedFeatures] = useState({
    ippool_mode: "0",
    pool: "",
    sas_ippool_id: "",
    burst_enabled: false,
    burst_limit_dl: "",
    burst_limit_ul: "",
    burst_threshold_dl: "",
    burst_threshold_ul: "",
    burst_time_dl: "",
    burst_time_ul: "",
    expired_next_profile_id: "",
    quota_next_profile_id: "",
    daily_next_profile_id: "",
    ignore_static_ip: false,
    site_id: "",
    private: "",
    allowed_managers: "",
    allow_submanagers: "",
    allowed_services: "",
    fixed_expiration_time: false,
    expiration_time: "",
    debitable: false,
    no_freezone: "",
    max_price: "",
    max_ucp_price: "",
    expiration_grace_period: "",
    hotspot_separate_session: false,
    ignore_pool_on_hotspot: false,
  });
  const [sas_ippool_id, setSas_ippool_id] = useState("");

  const [mikrotikSettings, setMikrotikSettings] = useState({
    mikrotik_addresslist: "",
    mikrotik_queue_priority: "",
  });

  const [ciscoOptions, setCiscoOptions] = useState({
    cisco_qos_policy_in: "",
    cisco_qos_policy_out: "",
  });

  const [activationOptions, setActivationOptions] = useState({
    monthly: false,
    carry_over: false,
    reset_daily_traffic: false,
    reset_expiration_on_activation: false,
    quota_addition_date: "",
    preserve_traffic_counters_expired: false,
    refundable: false,
  });

  const [encouragingPoints, setEncouragingPoints] = useState({
    reward_points_awarded: "",
    reward_points_allow_activation: false,
    reward_points_required: "",
  });

  const [initialValues, setInitialValues] = useState({
    initial_expiration_amount: "",
    initial_expiration_unit: "",
    initial_traffic_amount: "",
    initial_uptime_amount: "",
    initial_uptime_unit: "",
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

  const handleChangeServiceParameters = (e) => {
    setServiceParameters((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeAdvancedFeatures = (e) => {
    setAdvancedFeatures((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeDailySOADeterminants = (e) => {
    setDailySOADeterminants((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeMikrotikSettings = (e) => {
    setMikrotikSettings((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeCiscoOptions = (e) => {
    setCiscoOptions((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeActivationOptions = (e) => {
    setActivationOptions((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeEncouragingPoints = (e) => {
    setEncouragingPoints((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeInitialValues = (e) => {
    setInitialValues((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const getPackage = async () => {
    try {
      const { data } = await apiAxios.get(`api/profile/${id}`);

      setExtension_allowed_profiles(
        data.data && data.data?.extension_allowed_profiles
      );
      setGeneralinformation((prev) => {
        return {
          ...prev,
          name: data.data && data.data.name,
          enabled: data.data && data.data?.enabled == 1 ? true : false,
          price: data.data && data.data?.price,
          available_ucp:
            data.data && data.data?.available_ucp == 1 ? true : false,
          downrate: data.data && data.data?.downrate,
          uprate: data.data && data.data?.uprate,
          type: data.data && data.data?.type,
          description: data.data && data.data?.description,
          vat: data.data && data.data?.vat,
        };
      });
      setServiceParameters((prev) => {
        return {
          ...prev,
          limit_expiration:
            data.data && data.data.limit_expiration == 1 ? true : false,
          expiration_amount: data.data && data.data.expiration_amount,
          expiration_unit: data.data && data.data.expiration_unit,
          limit_uptime: data.data && data.data.limit_uptime == 1 ? true : false,
          uptime_amount: data.data && data.data.uptime_amount,
          uptime_unit: data.data && data.data.uptime_unit,
          limit_download:
            data.data && data.data.limit_download == 1 ? true : false,
          download_amount: data.data && data.data.download_amount,
          limit_upload: data.data && data.data.limit_upload == 1 ? true : false,
          upload_amount: data.data && data.data.upload_amount,
          limit_traffic:
            data.data && data.data.limit_traffic == 1 ? true : false,
          traffic_amount: data.data && data.data.traffic_amount,
        };
      });
      setDailySOADeterminants((prev) => {
        return {
          ...prev,
          daily_download_limit: data.data && data.data?.daily_download_limit,
          daily_upload_limit: data.data && data.data?.daily_upload_limit,
          daily_traffic_limit: data.data && data.data?.daily_traffic_limit,
          daily_uptime_limit: data.data && data.data?.daily_uptime_limit,
          daily_uptime_unit: data.data && data.data?.daily_uptime_unit,
        };
      });
      setAdvancedFeatures((prev) => {
        return {
          ...prev,
          ippool_mode: data.data && data.data?.ippool_mode,
          pool: data.data && data.data?.pool,

          burst_enabled:
            data.data && data.data?.burst_enabled == 1 ? true : false,
          burst_limit_dl: data.data && data.data?.burst_limit_dl,
          burst_limit_ul: data.data && data.data?.burst_limit_ul,
          burst_threshold_dl: data.data && data.data?.burst_threshold_dl,
          burst_threshold_ul: data.data && data.data?.burst_threshold_ul,
          burst_time_dl: data.data && data.data?.burst_time_dl,
          burst_time_ul: data.data && data.data?.burst_time_ul,
          expired_next_profile_id:
            data.data && data.data?.expired_next_profile_id,
          quota_next_profile_id: data.data && data.data?.quota_next_profile_id,
          daily_next_profile_id: data.data && data.data?.daily_next_profile_id,
          ignore_static_ip:
            data.data && data.data?.ignore_static_ip == 1 ? true : false,
          site_id: data.data && data.data?.site_id,
          private: data.data && data.data?.private,
          allowed_managers: data.data && data.data?.allowed_managers,
          allow_submanagers: data.data && data.data?.allow_submanagers,
          allowed_services: data.data && data.data?.allowed_services,
          fixed_expiration_time:
            data.data && data.data?.fixed_expiration_time == 1 ? true : false,
          debitable: data.data && data.data?.debitable == 1 ? true : false,
          no_freezone: data.data && data.data?.no_freezone,
          max_price: data.data && data.data?.max_price,
          max_ucp_price: data.data && data.data?.max_ucp_price,
          expiration_grace_period:
            data.data && data.data?.expiration_grace_period,
          hotspot_separate_session:
            data.data && data.data?.hotspot_separate_session == 1
              ? true
              : false,
          ignore_pool_on_hotspot:
            data.data && data.data?.ignore_pool_on_hotspot == 1 ? true : false,
        };
      });
      setSas_ippool_id(data.data && data.data?.sas_ippool_id);
      setMikrotikSettings((prev) => {
        return {
          ...prev,
          mikrotik_addresslist: data.data && data.data?.mikrotik_addresslist,
          mikrotik_queue_priority:
            data.data && data.data?.mikrotik_queue_priority,
        };
      });
      setCiscoOptions((prev) => {
        return {
          ...prev,
          cisco_qos_policy_in: data.data && data.data?.cisco_qos_policy_in,
          cisco_qos_policy_out: data.data && data.data?.cisco_qos_policy_out,
        };
      });
      setActivationOptions((prev) => {
        return {
          ...prev,
          monthly: data.data && data.data?.monthly == 1 ? true : false,
          carry_over: data.data && data.data?.carry_over == 1 ? true : false,
          reset_daily_traffic:
            data.data && data.data?.reset_daily_traffic == 1 ? true : false,
          reset_expiration_on_activation:
            data.data && data.data?.reset_expiration_on_activation == 1
              ? true
              : false,
          quota_addition_date: data.data && data.data?.quota_addition_date,
          preserve_traffic_counters_expired:
            data.data && data.data?.preserve_traffic_counters_expired == 1
              ? true
              : false,
          refundable: data.data && data.data?.refundable == 1 ? true : false,
        };
      });
      setEncouragingPoints((prev) => {
        return {
          ...prev,
          reward_points_awarded: data.data && data.data?.reward_points_awarded,
          reward_points_allow_activation:
            data.data && data.data?.reward_points_allow_activation == 1
              ? true
              : false,
          reward_points_required:
            data.data && data.data?.reward_points_required,
        };
      });
      setInitialValues((prev) => {
        return {
          ...prev,
          initial_expiration_amount:
            data.data && data.data?.initial_expiration_amount,
          initial_expiration_unit:
            data.data && data.data?.initial_expiration_unit,
          initial_traffic_amount:
            data.data && data.data?.initial_traffic_amount,
          initial_uptime_amount: data.data && data.data?.initial_uptime_amount,
          initial_uptime_unit: data.data && data.data?.initial_uptime_unit,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    id && getPackage();
    (async () => {
      try {
        const { data } = await apiAxios.get("api/index/ippool");
        setSelecttionIpPool(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await apiAxios.get("api/site");
        setSelecttionSite(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await apiAxios.get("api/list/profile/0");
        setAllProfiles(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await apiAxios.get("api/list/profile/2");
        setFupProfiles(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await apiAxios.get("api/index/manager");
        setAllManagers(data.data);
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
      available_ucp: generalinformation.available_ucp ? 1 : 0,
      extension_allowed_profiles: extension_allowed_profiles,
    };

    const serviceParametersTransform = {
      ...serviceParameters,
      limit_expiration: serviceParameters ? 1 : 0,
      limit_uptime: serviceParameters.limit_uptime ? 1 : 0,
      limit_download: serviceParameters.limit_download ? 1 : 0,
      limit_upload: serviceParameters.limit_upload ? 1 : 0,
      limit_traffic: serviceParameters.limit_upload ? 1 : 0,
    };
    const advancedFeaturesTransform = {
      ...advancedFeatures,
      burst_enabled: advancedFeatures.burst_enabled ? 1 : 0,
      ignore_static_ip: advancedFeatures.ignore_static_ip ? 1 : 0,
      fixed_expiration_time: advancedFeatures.fixed_expiration_time ? 1 : 0,
      debitable: advancedFeatures.debitable ? 1 : 0,
      hotspot_separate_session: advancedFeatures.hotspot_separate_session
        ? 1
        : 0,
      ignore_pool_on_hotspot: advancedFeatures.ignore_pool_on_hotspot ? 1 : 0,
      sas_ippool_id,
    };
    const activationOptionsTransform = {
      ...activationOptions,
      monthly: activationOptions.monthly ? 1 : 0,
      carry_over: activationOptions.carry_over ? 1 : 0,
      reset_daily_traffic: activationOptions.reset_daily_traffic ? 1 : 0,
      reset_expiration_on_activation:
        activationOptions.reset_expiration_on_activation ? 1 : 0,
      preserve_traffic_counters_expired:
        activationOptions.preserve_traffic_counters_expired ? 1 : 0,
      refundable: activationOptions.refundable ? 1 : 0,
    };
    const encouragingPointsTransform = {
      ...encouragingPoints,
      reward_points_allow_activation:
        encouragingPoints.reward_points_allow_activation ? 1 : 0,
    };
    try {
      if (typePage == "addPage") {
        await apiAxios.post("api/profile", {
          payload: encryptedData({
            ...generalinformationTransform,
            ...serviceParametersTransform,
            ...advancedFeaturesTransform,
            ...activationOptionsTransform,
            ...encouragingPointsTransform,
            ...mikrotikSettings,
            ...ciscoOptions,
            ...dailySOADeterminants,
            initialValues,
          }),
        });
      } else if (typePage == "editPage") {
        await apiAxios.put(`api/profile/${id}`, {
          payload: encryptedData({
            ...generalinformationTransform,
            ...serviceParametersTransform,
            ...advancedFeaturesTransform,
            ...activationOptionsTransform,
            ...encouragingPointsTransform,
            ...mikrotikSettings,
            ...ciscoOptions,
            ...dailySOADeterminants,
            initialValues,
          }),
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

  return (
    <div className="content_page">
      <SectionForm title={t("user_form_label_basic_information")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("profile_form_name")}
            type={"text"}
            value={generalinformation.name}
            onChange={handleChangeGeneralInformation}
            id="name"
            required={true}
          />
          <SwitchSectionForm
            label={t("global_enabled")}
            value={generalinformation.enabled}
            onChange={handleChangeGeneralInformation}
            id="enabled"
          />
          <InputSectionForm
            label={t("user_activate_price")}
            type={"text"}
            value={generalinformation.price}
            onChange={handleChangeGeneralInformation}
            id="price"
            required={true}
          />
          <SwitchSectionForm
            label={t("profile_form_available_ucp")}
            value={generalinformation.available_ucp}
            onChange={handleChangeGeneralInformation}
            id="available_ucp"
          />
          <InputSectionForm
            label={t("profile_form_downrate")}
            type={"text"}
            value={generalinformation.downrate}
            onChange={handleChangeGeneralInformation}
            id="downrate"
            required={true}
          />
          <InputSectionForm
            label={t("profile_form_uprate")}
            type={"text"}
            value={generalinformation.uprate}
            onChange={handleChangeGeneralInformation}
            id="uprate"
            required={true}
          />
          <SelectSectionForm
            label={t("profile_form_type")}
            value={generalinformation.type}
            onChange={handleChangeGeneralInformation}
            id="type"
            options={[
              { name: t("profile_form_type_prepaid"), value: "0" },
              { name: t("profile_form_type_postpaid"), value: "1" },
              { name: t("profile_form_type_fup"), value: "2" },
              { name: t("profile_form_type_extension"), value: "3" },
            ]}
            required={true}
          />
          {generalinformation.type == "3" && (
            <div className="input_item">
              <label htmlFor="">{t("profile_form_allowed_to_extend")}</label>
              <Select
                isMulti
                onChange={(newValue) =>
                  setExtension_allowed_profiles(
                    newValue.map((item) => item.value)
                  )
                }
                options={
                  allProfiles &&
                  allProfiles.map((item) => {
                    return { value: item.id, label: item.name };
                  })
                }
              />
            </div>
          )}
          <InputSectionForm
            label={t("profile_form_description")}
            type={"text"}
            value={generalinformation.description}
            onChange={handleChangeGeneralInformation}
            id="description"
          />
          <InputSectionForm
            label={t("profile_form_vat")}
            type={"text"}
            value={generalinformation.vat}
            onChange={handleChangeGeneralInformation}
            id="vat"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("profile_form_service_limits")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SwitchSectionForm
            label={t("profile_form_limit_expiration")}
            value={serviceParameters.limit_expiration}
            onChange={handleChangeServiceParameters}
            id="limit_expiration"
          />
          <SelectSectionForm
            label={t("profile_form_expiration_units")}
            value={serviceParameters.expiration_unit}
            onChange={handleChangeServiceParameters}
            id="expiration_unit"
            options={[
              { name: t("expiration_unit_month"), value: "0" },
              { name: t("expiration_unit_month"), value: "1" },
              { name: t("expiration_unit_hour"), value: "2" },
            ]}
            valueInput={serviceParameters.expiration_amount}
            onChangeInput={handleChangeServiceParameters}
            idInput={"expiration_amount"}
            input={true}
            type={"number"}
          />
          <SwitchSectionForm
            label={t("profile_form_limit_uptime")}
            value={serviceParameters.limit_uptime}
            onChange={handleChangeServiceParameters}
            id="limit_uptime"
          />
          <SelectSectionForm
            label={t("profile_form_uptime_units")}
            value={serviceParameters.uptime_unit}
            onChange={handleChangeServiceParameters}
            id="uptime_unit"
            options={[
              { name: t("global_minutes"), value: "0" },
              { name: t("expiration_unit_hour"), value: "1" },
            ]}
            valueInput={serviceParameters.uptime_amount}
            onChangeInput={handleChangeServiceParameters}
            idInput={"uptime_amount"}
            input={true}
            type={"number"}
          />
          <SwitchSectionForm
            label={t("profile_form_limit_download")}
            value={serviceParameters.limit_download}
            onChange={handleChangeServiceParameters}
            id="limit_download"
          />
          <InputSectionForm
            label={t("profile_form_download_limit")}
            type={"text"}
            value={serviceParameters.download_amount}
            onChange={handleChangeServiceParameters}
            id="download_amount"
          />
          <SwitchSectionForm
            label={t("profile_form_limit_upload")}
            value={serviceParameters.limit_upload}
            onChange={handleChangeServiceParameters}
            id="limit_upload"
          />
          <InputSectionForm
            label={t("profile_form_upload_limit")}
            type={"text"}
            value={serviceParameters.upload_amount}
            onChange={handleChangeServiceParameters}
            id="upload_amount"
          />
          <SwitchSectionForm
            label={t("profile_form_limit_total_traffic")}
            value={serviceParameters.limit_traffic}
            onChange={handleChangeServiceParameters}
            id="limit_traffic"
          />
          <InputSectionForm
            label={t("profile_form_total_traffic_limit")}
            type={"text"}
            value={serviceParameters.traffic_amount}
            onChange={handleChangeServiceParameters}
            id="traffic_amount"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("profile_form_daily_quota")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("profile_form_daily_download_limit")}
            type={"text"}
            value={dailySOADeterminants.daily_download_limit}
            onChange={handleChangeDailySOADeterminants}
            id="daily_download_limit"
          />
          <InputSectionForm
            label={t("profile_form_daily_upload_limit")}
            type={"text"}
            value={dailySOADeterminants.daily_upload_limit}
            onChange={handleChangeDailySOADeterminants}
            id="daily_upload_limit"
          />
          <InputSectionForm
            label={t("profile_form_daily_traffic_limit")}
            type={"text"}
            value={dailySOADeterminants.daily_traffic_limit}
            onChange={handleChangeDailySOADeterminants}
            id="daily_traffic_limit"
          />
          <SelectSectionForm
            label={t("profile_form_daily_uptime_limit")}
            value={dailySOADeterminants.daily_uptime_unit}
            onChange={handleChangeDailySOADeterminants}
            id="daily_uptime_unit"
            options={[
              { name: t("global_minutes"), value: "0" },
              { name: t("expiration_unit_hour"), value: "1" },
            ]}
            valueInput={dailySOADeterminants.daily_uptime_limit}
            onChangeInput={handleChangeDailySOADeterminants}
            idInput={t("daily_uptime_limit")}
            input={true}
            type={"number"}
          />
        </div>
      </SectionForm>
      <SectionForm title={t("profile_form_advanced_settings")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SelectSectionForm
            label={t("profile_form_pool_mode")}
            value={advancedFeatures.ippool_mode}
            onChange={handleChangeAdvancedFeatures}
            id="ippool_mode"
            options={[
              { name: t("profile_form_pool_nas"), value: "0" },
              { name: t("profile_form_pool_sas"), value: "1" },
            ]}
          />
          {advancedFeatures.ippool_mode == "0" && (
            <InputSectionForm
              label={t("profile_form_pool_name")}
              type={"text"}
              value={advancedFeatures.pool}
              onChange={handleChangeAdvancedFeatures}
              id="pool"
            />
          )}
          {advancedFeatures.ippool_mode == "1" && (
            <div className="input_item">
              <label htmlFor="">{t("SAS4 Pool Name")}</label>
              <Select
                isMulti
                onChange={(newValue) =>
                  setSas_ippool_id(newValue.map((item) => item.value))
                }
                options={
                  selectionIpPool &&
                  selectionIpPool.map((item) => {
                    return { value: item.id, label: item.name };
                  })
                }
              />
            </div>
          )}
          <SwitchSectionForm
            label={t("profile_form_enable_burst")}
            value={advancedFeatures.burst_enabled}
            onChange={handleChangeAdvancedFeatures}
            id="burst_enabled"
          />
          {advancedFeatures.burst_enabled && (
            <InputSectionForm
              label={t("Download Burst Limit")}
              type={"text"}
              value={advancedFeatures.burst_limit_dl}
              onChange={handleChangeAdvancedFeatures}
              id="burst_limit_dl"
              placeholder={"kbps"}
            />
          )}
          {advancedFeatures.burst_enabled && (
            <InputSectionForm
              label={t("Upload Burst Limit")}
              type={"text"}
              value={advancedFeatures.burst_limit_ul}
              onChange={handleChangeAdvancedFeatures}
              id="burst_limit_ul"
              placeholder={"kbps"}
            />
          )}
          {advancedFeatures.burst_enabled && (
            <InputSectionForm
              label={t("Download Burst Threshold")}
              type={"text"}
              value={advancedFeatures.burst_threshold_dl}
              onChange={handleChangeAdvancedFeatures}
              id="burst_threshold_dl"
              placeholder={"kbps"}
            />
          )}
          {advancedFeatures.burst_enabled && (
            <InputSectionForm
              label={t("Upload Burst Threshold")}
              type={"text"}
              value={advancedFeatures.burst_threshold_ul}
              onChange={handleChangeAdvancedFeatures}
              id="burst_threshold_ul"
              placeholder={"kbps"}
            />
          )}
          {advancedFeatures.burst_enabled && (
            <InputSectionForm
              label={t("Download Burst Time (sec)")}
              type={"text"}
              value={advancedFeatures.burst_time_dl}
              onChange={handleChangeAdvancedFeatures}
              id="burst_time_dl"
              placeholder={"seconds"}
            />
          )}
          {advancedFeatures.burst_enabled && (
            <InputSectionForm
              label={t("Upload Burst Time (sec)")}
              type={"text"}
              value={advancedFeatures.burst_time_ul}
              onChange={handleChangeAdvancedFeatures}
              id="burst_time_ul"
              placeholder={"seconds"}
            />
          )}
          <SelectSectionForm
            label={t("profile_form_expired_next_profile")}
            value={advancedFeatures.expired_next_profile_id}
            onChange={handleChangeAdvancedFeatures}
            id="expired_next_profile_id"
            options={fupProfiles.map((item) => ({
              name: item.name,
              value: item.id,
            }))}
          />
          <SelectSectionForm
            label={t("profile_form_quota_next_profile")}
            value={advancedFeatures.quota_next_profile_id}
            onChange={handleChangeAdvancedFeatures}
            id="quota_next_profile_id"
            options={fupProfiles.map((item) => ({
              name: item.name,
              value: item.id,
            }))}
          />
          <SelectSectionForm
            label={t("profile_form_daily_next_profile")}
            value={advancedFeatures.daily_next_profile_id}
            onChange={handleChangeAdvancedFeatures}
            id="daily_next_profile_id"
            options={fupProfiles.map((item) => ({
              name: item.name,
              value: item.id,
            }))}
          />
          <SwitchSectionForm
            label={t("profile_form_ignore_static_ip")}
            value={advancedFeatures.ignore_static_ip}
            onChange={handleChangeAdvancedFeatures}
            id="ignore_static_ip"
          />
          <SelectSectionForm
            label={t("profile_form_site")}
            value={advancedFeatures.site_id}
            onChange={handleChangeAdvancedFeatures}
            id="site_id"
            options={selectionSite.map((item) => ({
              name: item.name,
              value: item.id,
            }))}
          />

          <SelectSectionForm
            label={t("profile_form_privacy")}
            value={advancedFeatures.private}
            onChange={handleChangeAdvancedFeatures}
            id="private"
            options={[
              { name: "public", value: "0" },
              { name: "private", value: "1" },
            ]}
          />
          {advancedFeatures.private == "private" && (
            <SelectSectionForm
              label={t("profile_form_privacy_allowed_managers")}
              value={advancedFeatures.allowed_managers}
              onChange={handleChangeAdvancedFeatures}
              id="allowed_managers"
              options={allManagers.map((item) => ({
                name: item.name,
                value: item.id,
              }))}
            />
          )}
          {advancedFeatures.private == "private" && (
            <SwitchSectionForm
              label={t("profile_form_privacy_sub_managers")}
              value={advancedFeatures.allow_submanagers}
              onChange={handleChangeAdvancedFeatures}
              id="allow_submanagers"
            />
          )}
          <SelectSectionForm
            label={t("profile_form_allowed_services")}
            value={advancedFeatures.allowed_services}
            onChange={handleChangeAdvancedFeatures}
            id="allowed_services"
            options={[
              { name: "any", value: "0" },
              { name: "ppp", value: "1" },
              { name: "Hotspot", value: "2" },
            ]}
          />
          <SwitchSectionForm
            label={t("profile_form_fix_expiration_time")}
            value={advancedFeatures.fixed_expiration_time}
            onChange={handleChangeAdvancedFeatures}
            id="fixed_expiration_time"
          />
          {advancedFeatures.fixed_expiration_time && (
            <InputSectionForm
              label={t("profile_form_expiration_time")}
              type={"time"}
              value={advancedFeatures.expiration_time}
              onChange={handleChangeAdvancedFeatures}
              id="expiration_time"
            />
          )}
          <SwitchSectionForm
            label={t("profile_form_debitable_service")}
            value={advancedFeatures.debitable}
            onChange={handleChangeAdvancedFeatures}
            id="debitable"
          />
          <SelectSectionForm
            label={t("profile_form_freezone")}
            value={advancedFeatures.no_freezone}
            onChange={handleChangeAdvancedFeatures}
            id="no_freezone"
            options={[
              { name: t("profile_form_freezone_allowed"), value: "0" },
              { name: t("profile_form_no_freezone"), value: "1" },
            ]}
          />
          <InputSectionForm
            label={t("profile_form_max_price")}
            type={"text"}
            value={advancedFeatures.max_price}
            onChange={handleChangeAdvancedFeatures}
            id="max_price"
          />
          <InputSectionForm
            label={t("profile_form_max_ucp_price")}
            type={"text"}
            value={advancedFeatures.max_ucp_price}
            onChange={handleChangeAdvancedFeatures}
            id="max_ucp_price"
          />
          <InputSectionForm
            label={t("profile_form_grace_period")}
            type={"text"}
            value={advancedFeatures.expiration_grace_period}
            onChange={handleChangeAdvancedFeatures}
            id="expiration_grace_period"
          />
          <SwitchSectionForm
            label={t("profile_form_separate_hotspot_session")}
            value={advancedFeatures.hotspot_separate_session}
            onChange={handleChangeAdvancedFeatures}
            id="hotspot_separate_session"
          />
          <SwitchSectionForm
            label={t("profile_form_ignore_pool_on_hotspot")}
            value={advancedFeatures.ignore_pool_on_hotspot}
            onChange={handleChangeAdvancedFeatures}
            id="ignore_pool_on_hotspot"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Mikrotik Settings")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("Address List")}
            type={"text"}
            value={mikrotikSettings.mikrotik_addresslist}
            onChange={handleChangeMikrotikSettings}
            id="addressList"
          />
          <InputSectionForm
            label={t("Queue Priority")}
            type={"text"}
            value={mikrotikSettings.mikrotik_queue_priority}
            onChange={handleChangeMikrotikSettings}
            id="queuePriority"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Cisco Options")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("QOS-Policy-In")}
            type={"text"}
            value={ciscoOptions.cisco_qos_policy_in}
            onChange={handleChangeCiscoOptions}
            id="qosPolicyIn"
          />
          <InputSectionForm
            label={t("QOS-Policy-Out")}
            type={"text"}
            value={ciscoOptions.cisco_qos_policy_out}
            onChange={handleChangeCiscoOptions}
            id="qosPolicyOut"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("profile_form_billing_options")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SwitchSectionForm
            label={t("profile_form_monthly_account")}
            value={activationOptions.monthly}
            onChange={handleChangeActivationOptions}
            id="monthly"
          />
          {activationOptions.monthly && (
            <InputSectionForm
              label={t("profile_form_monthly_start_day")}
              type={"text"}
              value={activationOptions.monthly_start_day}
              onChange={handleChangeActivationOptions}
              id="monthly_start_day"
            />
          )}
          {activationOptions.monthly && (
            <SwitchSectionForm
              label={t("profile_form_monthly_charge_full")}
              value={activationOptions.monthly_charge_entire_month}
              onChange={handleChangeActivationOptions}
              id="monthly_charge_entire_month"
            />
          )}
          <SwitchSectionForm
            label={t("profile_form_carry_over")}
            value={activationOptions.carry_over}
            onChange={handleChangeActivationOptions}
            id="carry_over"
          />
          <SwitchSectionForm
            label={t("profile_form_reset_daily_traffic")}
            value={activationOptions.reset_daily_traffic}
            onChange={handleChangeActivationOptions}
            id="reset_daily_traffic"
          />
          <SwitchSectionForm
            label={t("profile_form_reset_expiration")}
            value={activationOptions.reset_expiration_on_activation}
            onChange={handleChangeActivationOptions}
            id="reset_expiration_on_activation"
          />
          <SelectSectionForm
            label={t("profile_form_quota_addition_date")}
            value={activationOptions.quota_addition_date}
            onChange={handleChangeActivationOptions}
            id="quota_addition_date"
            options={[
              { name: t("user_change_option_immediate"), value: "0" },
              { name: t("profile_form_quota_next"), value: "1" },
            ]}
          />
          <SwitchSectionForm
            label={t("profile_form_preserve_counters")}
            value={activationOptions.preserve_traffic_counters_expired}
            onChange={handleChangeActivationOptions}
            id="preserve_traffic_counters_expired"
          />
          <SwitchSectionForm
            label={t("profile_form_refundable")}
            value={activationOptions.refundable}
            onChange={handleChangeActivationOptions}
            id="refundable"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("managers_table_reward_points")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("profile_form_awarded_points")}
            type={"text"}
            value={encouragingPoints.reward_points_awarded}
            onChange={handleChangeEncouragingPoints}
            id="reward_points_awarded"
          />
          <SwitchSectionForm
            label={t("profile_form_allow_activation")}
            value={encouragingPoints.reward_points_allow_activation}
            onChange={handleChangeEncouragingPoints}
            id="reward_points_allow_activation"
          />
          {encouragingPoints.reward_points_allow_activation && (
            <InputSectionForm
              label={t("profile_form_required_points")}
              type={"text"}
              value={encouragingPoints.reward_points_required}
              onChange={handleChangeEncouragingPoints}
              id="reward_points_required"
            />
          )}
        </div>
      </SectionForm>
      <SectionForm title={t("profile_form_initial_values")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SelectSectionForm
            label={t("profile_form_initial_expiration")}
            value={initialValues.initial_expiration_unit}
            onChange={handleChangeInitialValues}
            id="initial_expiration_unit"
            options={[
              { name: t("expiration_unit_day"), value: "0" },
              { name: t("expiration_unit_month"), value: "1" },
              { name: t("expiration_unit_hour"), value: "2" },
            ]}
            valueInput={initialValues.initial_expiration_amount}
            onChangeInput={handleChangeInitialValues}
            idInput={"initial_expiration_amount"}
            input={true}
            type={"number"}
          />
          <InputSectionForm
            label={t("profile_form_initial_traffic")}
            type={"text"}
            value={initialValues.initial_traffic_amount}
            onChange={handleChangeInitialValues}
            id="initial_traffic_amount"
          />
          <SelectSectionForm
            label={t("profile_form_initial_uptime")}
            value={initialValues.initial_uptime_unit}
            onChange={handleChangeInitialValues}
            id="initial_uptime_unit"
            options={[
              { name: t("global_minutes"), value: "0" },
              { name: t("expiration_unit_hour"), value: "1" },
            ]}
            valueInput={initialValues.initial_uptime_amount}
            onChangeInput={handleChangeInitialValues}
            idInput={"initial_uptime_amount"}
            input={true}
            type={"number"}
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

export default AddEditPackage;
