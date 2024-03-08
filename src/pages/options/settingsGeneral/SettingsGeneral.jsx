import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import FileInput from "../../../components/sectionform/FileInput";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import { t } from "i18next";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";

const SettingsGeneral = () => {
  const [loading, setLoading] = useState(false);
  const [timezones, setTimezones] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [countries, setCountries] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [generalSettings, setGeneralSettings] = useState({
    gnrl_logo: "",
    gnrl_logo_show: false,
    gnrl_currency: "EGP",
    gnrl_country: "EG",
    gnrl_language: "ar",
    gnrl_timezone: "Africa/Cairo",
    gnrl_footer_text: null,
    gnrl_menu_logo: null,
    gnrl_login_fails_limit: 3,
    gnrl_status: 1,
    gnrl_enforce_manager_password_strength: null,
  });

  const handleChangeSettings = (e) => {
    setGeneralSettings((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const getTimezones = async () => {
    try {
      const { data } = await apiAxios.get("api/resources/timezones");
      setTimezones(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrencies = async () => {
    try {
      const { data } = await apiAxios.get("api/resources/currencies");
      setCurrencies(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCountries = async () => {
    try {
      const { data } = await apiAxios.get("api/resources/countries");
      setCountries(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLanguages = async () => {
    try {
      const { data } = await apiAxios.get("api/resources/languages");
      setLanguages(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSettings = async () => {};

  const handleForm = async () => {
    setLoading(true);
    try {
      await apiAxios.post("api/settings", {
        payload: encryptedData({
          gnrl_logo: generalSettings.gnrl_logo,
          gnrl_logo_show: generalSettings.gnrl_logo_show ? 1 : 0,
          gnrl_currency: generalSettings.gnrl_currency,
          gnrl_country: generalSettings.gnrl_country,
          gnrl_language: generalSettings.gnrl_language,
          gnrl_timezone: generalSettings.gnrl_timezone,
          gnrl_footer_text: generalSettings.gnrl_footer_text,
          gnrl_menu_logo: generalSettings.gnrl_menu_logo,
          gnrl_login_fails_limit: generalSettings.gnrl_login_fails_limit,
          gnrl_status: generalSettings.gnrl_status,
          gnrl_enforce_manager_password_strength:
            generalSettings.gnrl_enforce_manager_password_strength,
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
    getTimezones();
    getCurrencies();
    getCountries();
    getLanguages();
  }, []);

  return (
    <div className="content_page">
      <SectionForm title={"General Settings"}>
        <div className="grid grid-cols-1 gap-3">
          <FileInput
            label={"Default Logo"}
            value={generalSettings.gnrl_logo}
            onChange={handleChangeSettings}
            id={"gnrl_logo"}
          />
          <SwitchSectionForm
            label={"Show Site Logo"}
            value={generalSettings.gnrl_logo_show}
            onChange={handleChangeSettings}
            id="gnrl_logo_show"
          />
          <SelectSectionForm
            label={"Base Currency"}
            value={generalSettings.gnrl_currency}
            onChange={handleChangeSettings}
            id="gnrl_currency"
            options={
              currencies &&
              currencies.map((item) => ({ name: item.name, value: item.code }))
            }
          />
          <SelectSectionForm
            label={"Country"}
            value={generalSettings.gnrl_country}
            onChange={handleChangeSettings}
            id="gnrl_country"
            options={
              countries &&
              countries.map((item) => ({ name: item.name, value: item.code }))
            }
          />
          <SelectSectionForm
            label={"Default Language"}
            value={generalSettings.gnrl_language}
            onChange={handleChangeSettings}
            id="gnrl_language"
            options={
              languages &&
              languages.map((item) => ({ name: item.name, value: item.id }))
            }
          />
          <SelectSectionForm
            label={"Timezone"}
            value={generalSettings.gnrl_timezone}
            onChange={handleChangeSettings}
            id="gnrl_timezone"
            options={
              timezones &&
              timezones.map((item) => ({ name: item.name, value: item.value }))
            }
          />
          <InputSectionForm
            label={"Footer Text"}
            value={generalSettings.gnrl_footer_text}
            onChange={handleChangeSettings}
            id="gnrl_footer_text"
          />
          <FileInput
            label={"Main Menu Logo (Unlimited License Only)"}
            value={generalSettings.gnrl_menu_logo}
            onChange={handleChangeSettings}
            id={"gnrl_menu_logo"}
          />
          <SelectSectionForm
            label={"Block manager login for 1 minute after login fails"}
            value={generalSettings.gnrl_login_fails_limit}
            onChange={handleChangeSettings}
            id={"gnrl_login_fails_limit"}
            options={[
              { name: "Never", value: "-1" },
              { name: "3 tries", value: "3" },
              { name: "4 tries", value: "4" },
              { name: "5 tries", value: "5" },
              { name: "6 tries", value: "6" },
            ]}
          />
          <SelectSectionForm
            label={"Site Status"}
            value={generalSettings.gnrl_status}
            onChange={handleChangeSettings}
            id={"gnrl_status"}
            options={[
              { name: "Online", value: "1" },
              { name: "Offline", value: "0" },
            ]}
          />
          <SelectSectionForm
            label={"Enforce Manager Password Strength"}
            value={generalSettings.gnrl_enforce_manager_password_strength}
            onChange={handleChangeSettings}
            id={"gnrl_enforce_manager_password_strength"}
            options={[
              { name: "weak", value: "0" },
              { name: "Medium", value: "1" },
              { name: "Strong", value: "2" },
              { name: "Very Strong", value: "3" },
            ]}
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

export default SettingsGeneral;
