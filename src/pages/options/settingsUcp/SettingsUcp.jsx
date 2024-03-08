import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import InputFile from "../../../components/popup/inputFile/InputFile";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";

const SettingsUcp = () => {
  const [loading, setLoading] = useState(false);
  const [packages, setPackages] = useState([]);
  const [managers, setManagers] = useState([]);
  const [generalSettings, setGeneralSettings] = useState({
    ucp_enabled: false,
    ucp_self_registration: false,
    ucp_self_registration_profile: 0,
    ucp_self_registration_parent: 0,
    ucp_password_recovery: false,
    ucp_reject_auto_activate_on_active: false,
    ucp_ignore_state_on_auto_activate: false,
    ucp_requires_password_auto_login: false,
    ucp_logo: null,
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

  const getPackages = async () => {
    try {
      const { data } = await apiAxios.get("api/list/profile/0");
      setPackages(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getManagers = async () => {
    try {
      const { data } = await apiAxios.get("api/index/manager");
      setManagers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetSettings = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/settings/ucp_");
      setGeneralSettings((prev) => {
        return {
          ...prev,
          ucp_enabled: data.ucp_enabled == 1 ? true : false,
          ucp_self_registration: data.ucp_self_registration == 1 ? true : false,
          ucp_self_registration_profile: data.ucp_self_registration_profile,
          ucp_self_registration_parent: data.ucp_self_registration_parent,
          ucp_password_recovery: data.ucp_password_recovery == 1 ? true : false,
          ucp_reject_auto_activate_on_active:
            data.ucp_reject_auto_activate_on_active == 1 ? true : false,
          ucp_ignore_state_on_auto_activate:
            data.ucp_ignore_state_on_auto_activate == 1 ? true : false,
          ucp_requires_password_auto_login:
            data.ucp_requires_password_auto_login == 1 ? true : false,
          ucp_logo: data.ucp_logo,
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
      await apiAxios.post("api/settings/ucp", {
        payload: encryptedData({
          ucp_enabled: generalSettings.ucp_enabled ? 1 : 0,
          ucp_self_registration: generalSettings.ucp_self_registration ? 1 : 0,
          ucp_self_registration_profile:
            generalSettings.ucp_self_registration_profile,
          ucp_self_registration_parent:
            generalSettings.ucp_self_registration_parent,
          ucp_password_recovery: generalSettings.ucp_password_recovery ? 1 : 0,
          ucp_reject_auto_activate_on_active:
            generalSettings.ucp_reject_auto_activate_on_active ? 1 : 0,
          ucp_ignore_state_on_auto_activate:
            generalSettings.ucp_ignore_state_on_auto_activate ? 1 : 0,
          ucp_requires_password_auto_login:
            generalSettings.ucp_requires_password_auto_login ? 1 : 0,
          ucp_logo: generalSettings.ucp_logo,
        }),
      });
      toast.success("successfull Save");
      handleGetSettings();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPackages();
    getManagers();
    handleGetSettings();
  }, []);

  return (
    <div className="m-[10px]">
      <SectionForm title={t("User Portal Settings")}>
        <SwitchSectionForm
          label={t("Enable User Portal")}
          value={generalSettings.ucp_enabled}
          onChange={handleChangeSettings}
          id={"ucp_enabled"}
        />
        <SwitchSectionForm
          label={t("Self Registration")}
          value={generalSettings.ucp_self_registration}
          onChange={handleChangeSettings}
          id={"ucp_self_registration"}
        />
        {generalSettings.ucp_self_registration && (
          <SelectSectionForm
            label={t("Self Registered Users Default Profile")}
            value={generalSettings.ucp_self_registration_profile}
            onChange={handleChangeSettings}
            id={"ucp_self_registration_profile"}
            options={
              packages &&
              packages.map((item) => ({ name: item.name, value: item.id }))
            }
          />
        )}
        <SelectSectionForm
          label={t("Self Registered Users Default Parent")}
          value={generalSettings.ucp_self_registration_parent}
          onChange={handleChangeSettings}
          id={"ucp_self_registration_parent"}
          options={
            managers &&
            managers.map((item) => ({ name: item.username, value: item.id }))
          }
        />
        <SwitchSectionForm
          label={t("Permit Password Recovery")}
          value={generalSettings.ucp_password_recovery}
          onChange={handleChangeSettings}
          id={"ucp_password_recovery"}
        />
        <SwitchSectionForm
          label={t("Reject Auto-Activate Cards If User Is Active")}
          value={generalSettings.ucp_reject_auto_activate_on_active}
          onChange={handleChangeSettings}
          id={"ucp_reject_auto_activate_on_active"}
        />
        <SwitchSectionForm
          label={t(
            "Allow auto-activate cards to force-change profile of active users"
          )}
          value={generalSettings.ucp_ignore_state_on_auto_activate}
          onChange={handleChangeSettings}
          id={"ucp_ignore_state_on_auto_activate"}
        />
        <SwitchSectionForm
          label={t(
            "In Auto Login mode, ask for password when modifying user data"
          )}
          value={generalSettings.ucp_requires_password_auto_login}
          onChange={handleChangeSettings}
          id={"ucp_requires_password_auto_login"}
        />
        <InputFile label={t("Background Image")} />
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

export default SettingsUcp;
