import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";
import { toast } from "react-toastify";

const SettingsBilling = () => {
  const [loading, setLoading] = useState(false);
  const [generalSettings, setGeneralSettings] = useState({
    billing_auto_generate_invoices: false,
    billing_invoice_generate_period: "1",
    billing_grace_period: "10",
    billing_disable_users_overdue: false,
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

  const getBillingSettings = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/settings/billing_");
      setGeneralSettings((prev) => {
        return {
          ...prev,
          billing_auto_generate_invoices:
            data && data.billing_auto_generate_invoices == 1 ? true : false,
          billing_invoice_generate_period:
            data && data.billing_invoice_generate_period,
          billing_grace_period: data && data.billing_grace_period,
          billing_disable_users_overdue:
            data && data.billing_disable_users_overdue == 1 ? true : false,
        };
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = async () => {
    setLoading(true);
    try {
      await apiAxios.post("api/settings/billing", {
        payload: encryptedData({
          billing_auto_generate_invoices:
            generalSettings.billing_auto_generate_invoices ? 1 : 0,
          billing_invoice_generate_period:
            generalSettings.billing_invoice_generate_period,
          billing_grace_period: generalSettings.billing_grace_period,
          billing_disable_users_overdue:
            generalSettings.billing_disable_users_overdue ? 1 : 0,
        }),
      });
      toast.success("Successfull Save Settings");
      getBillingSettings();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBillingSettings();
  }, []);

  return (
    <div className="m-[10px]">
      <SectionForm title={t("Postpaid & Billing Settings")}>
        <SwitchSectionForm
          label={t("Auto Generate Invoices")}
          value={generalSettings.billing_auto_generate_invoices}
          onChange={handleChangeSettings}
          id={"billing_auto_generate_invoices"}
        />
        <InputSectionForm
          label={t("Generate Invoices (x) Days Prior To Expiration")}
          value={generalSettings.billing_invoice_generate_period}
          onChange={handleChangeSettings}
          id={"billing_invoice_generate_period"}
        />
        <InputSectionForm
          label={t("Grace Period (Days)")}
          value={generalSettings.billing_grace_period}
          onChange={handleChangeSettings}
          id={"billing_grace_period"}
        />
        <SwitchSectionForm
          label={t("Disable Users With Overdue Invoices")}
          value={generalSettings.billing_disable_users_overdue}
          onChange={handleChangeSettings}
          id={"billing_disable_users_overdue"}
        />
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add" onClick={handleSaveSettings}>
          {t("global_button_submit")}
        </button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default SettingsBilling;
