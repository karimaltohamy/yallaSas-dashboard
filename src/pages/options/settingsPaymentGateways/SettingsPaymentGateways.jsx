import React, { useEffect, useState } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./settingsPaymentGateways.scss";
import SettingsContent from "./SettingsContent";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";

const SettingsPaymentGateways = () => {
  const [selectSection, setSelectSection] = useState("bKash");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gatewayId, setGatewayId] = useState(null);
  const [managers, setManagers] = useState(null);
  const [bkashSettings, setBkashSettings] = useState({
    enabled: false,
    enabled_ucp: false,
    msisdn: "",
    client_id: "",
    password: "",
  });
  const [flutterWaveSettings, setFlutterWaveSettings] = useState({
    enabled: false,
    public_key: "",
    secret_key: "",
    encryption_key: "",
    currency: "",
  });
  const [fosterPaymentsSettings, setFosterPaymentsSettings] = useState({
    enabled: false,
    enabled_ucp: false,
    mode: "test",
    access_code: "",
    secret_key: "",
    merchant_shop_id: "",
    webhook_url: "",
  });
  const [kushokSettings, setKushokSettings] = useState({
    enabled: false,
    enabled_acp: false,
    enabled_ucp: false,
    mode: null,
    username: "xxx",
    secret: "xxx",
    account_manager: 1,
    use_webhook: false,
    webhook_url: null,
  });
  const [paypalSettings, setPaypalSettings] = useState({
    enabled: true,
    mode: "live",
    client_id: "",
    secret: "",
  });
  const [switchSettings, setSwitchSettings] = useState({
    enabled: false,
    enabled_acp: false,
    enabled_ucp: false,
    account_manager: 1,
    mode: "test",
    merchant_id: "",
    api_secret: "",
    use_webhook: false,
    webhook_url: "",
    webhook_secret: "",
  });
  const [tasdidSettings, setTasdidSettings] = useState({
    enabled: false,
    enabled_acp: false,
    account_manager: 1,
    mode: "live",
    username: "",
    password: "",
    service_id: "",
    client_id: "",
    webhook_secret: "",
    usd_exchange_rate: "",
  });
  const [vousherSettings, setVousherSettings] = useState({
    enabled: false,
    enabled_acp: false,
  });
  const [zainCashSettings, setZainCashSettings] = useState({
    enabled: false,
    enabled_acp: false,
    enabled_ucp: false,
    account_manager: 1,
    use_webhook: false,
    mode: "live",
    msisdn: "",
    secret: "",
    merchant_id: "",
    usd_exchange_rate: "",
    webhook_url: "",
  });

  const handleChangeSettings = (e, setSettings) => {
    setSettings((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const getList = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get("api/paymentgateways/list");
      setList(data.data);
      setGatewayId(data.data[0].id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getManagers = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/manager", {
        payload: encryptedData({
          page: 1,
          count: 10,
          sortBy: "username",
          direction: "asc",
          search: "",
          columns: [
            "username",
            "firstname",
            "lastname",
            "balance",
            "loan_balance",
            "name",
            "username",
            "users_count",
          ],
        }),
      });
      setManagers(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleGetDetails = async (id) => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await apiAxios.get(`api/paymentgateway/${gatewayId}`);
      let settings = JSON.parse(data.settings);
      data?.name == "bKash" &&
        setBkashSettings((prev) => {
          return {
            ...prev,
            ...settings,
          };
        });
      data?.name == "Flutterwave" &&
        setFlutterWaveSettings((prev) => {
          return {
            ...prev,
            ...settings,
          };
        });
      data?.name == "Foster Payments" &&
        setFosterPaymentsSettings((prev) => {
          return {
            ...prev,
            ...settings,
          };
        });
      data?.name == "Kushok" &&
        setKushokSettings((prev) => {
          return {
            ...prev,
            ...settings,
          };
        });
      data?.name == "PayPal" &&
        setPaypalSettings((prev) => {
          return {
            ...prev,
            ...settings,
          };
        });
      data?.name == "Tasdid" &&
        setTasdidSettings((prev) => {
          return {
            ...prev,
            ...settings,
          };
        });
      data?.name == "Voucher" &&
        setVousherSettings((prev) => {
          return {
            ...prev,
            ...settings,
          };
        });
      data?.name == "ZainCash" &&
        setVousherSettings((prev) => {
          return {
            ...prev,
            ...settings,
          };
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post(`api/paymentgateway/${gatewayId}`, {
        payload: encryptedData(data),
      });
      toast.success("Successfull Save");
      getList();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
    getManagers();
  }, []);

  useEffect(() => {
    handleGetDetails();
  }, [gatewayId]);

  return (
    <div className="settings_paymentgatemay_section">
      <div className="row line">
        <div className="col-12 col-md-4">
          <div className="boxs">
            {list &&
              list.map((item, i) => {
                return (
                  <div
                    className={`box ${
                      selectSection == item.name ? "active" : ""
                    }`}
                    onClick={() => {
                      setGatewayId(item.id);
                      setSelectSection(item.name);
                    }}
                  >
                    <div className="head">
                      <h6 className="type_payment">{item.name}</h6>
                      <span className="country">{item.country}</span>
                    </div>
                    <div
                      className={`status ${item.enabled == 1 ? "enabled" : ""}`}
                    >
                      {item.enabled == 1 ? "enabled" : "disabled"}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-12 col-md-8">
          <MainSection
            title={"Payment Gateways Settings"}
            icon={<i className="fa-solid fa-credit-card"></i>}
          >
            {selectSection == "bKash" && (
              <SettingsContent
                title={"bKash"}
                handlSubmit={(e) =>
                  handleSubmit(e, {
                    enabled: bkashSettings.enabled ? 1 : 0,
                    enabled_ucp: bkashSettings.enabled_ucp ? 1 : 0,
                    msisdn: bkashSettings.msisdn,
                    client_id: bkashSettings.client_id,
                    password: bkashSettings.password,
                  })
                }
              >
                <SwitchSectionForm
                  label={"Enabled"}
                  value={bkashSettings.enabled}
                  onChange={(e) => handleChangeSettings(e, setBkashSettings)}
                  id={"enabled"}
                />
                <SwitchSectionForm
                  label={"Enable User Deposits & Activations"}
                  value={bkashSettings.enabled_ucp}
                  onChange={(e) => handleChangeSettings(e, setBkashSettings)}
                  id={"enabled_ucp"}
                />
                <InputSectionForm
                  label={"Wallet Phone Number"}
                  value={bkashSettings.msisdn}
                  onChange={(e) => handleChangeSettings(e, setBkashSettings)}
                  id={"msisdn"}
                />
                <InputSectionForm
                  label={"Client ID"}
                  value={bkashSettings.client_id}
                  onChange={(e) => handleChangeSettings(e, setBkashSettings)}
                  id={"client_id"}
                />
                <InputSectionForm
                  label={"bKash Password"}
                  value={bkashSettings.password}
                  onChange={(e) => handleChangeSettings(e, setBkashSettings)}
                  id={"password"}
                />
              </SettingsContent>
            )}
            {selectSection == "Flutterwave" && (
              <SettingsContent
                title={"Flutterwave"}
                handlSubmit={(e) =>
                  handleSubmit(e, {
                    enabled: flutterWaveSettings.enabled ? 1 : 0,
                    public_key: flutterWaveSettings.public_key,
                    secret_key: flutterWaveSettings.secret_key,
                    encryption_key: flutterWaveSettings.encryption_key,
                    currency: flutterWaveSettings.currency,
                  })
                }
              >
                <SwitchSectionForm
                  label={"Enabled"}
                  value={flutterWaveSettings.enabled}
                  onChange={(e) =>
                    handleChangeSettings(e, setFlutterWaveSettings)
                  }
                  id={"enabled"}
                />
                <InputSectionForm
                  label={"Public Key"}
                  value={flutterWaveSettings.public_key}
                  onChange={(e) =>
                    handleChangeSettings(e, setFlutterWaveSettings)
                  }
                  id={"public_key"}
                />
                <InputSectionForm
                  label={"Secret Key"}
                  value={flutterWaveSettings.secret_key}
                  onChange={(e) =>
                    handleChangeSettings(e, setFlutterWaveSettings)
                  }
                  id={"secret_key"}
                />
                <InputSectionForm
                  label={"Encryption Key"}
                  value={flutterWaveSettings.encryption_key}
                  onChange={(e) =>
                    handleChangeSettings(e, setFlutterWaveSettings)
                  }
                  id={"encryption_key"}
                />
                <SelectSectionForm
                  label={"Currency"}
                  value={flutterWaveSettings.currency}
                  onChange={(e) =>
                    handleChangeSettings(e, setFlutterWaveSettings)
                  }
                  id={"currency"}
                  options={[
                    { name: "Nigerian naira", value: "NGN" },
                    { name: "Ugandan shilling", value: "UGX" },
                    { name: "Rwandan franc", value: "RWF" },
                    { name: "Ghanaian cedi", value: "GHS" },
                  ]}
                />
              </SettingsContent>
            )}
            {selectSection == "Foster Payments" && (
              <SettingsContent
                title={"FosterPayments"}
                handlSubmit={(e) =>
                  handleSubmit(e, {
                    enabled: fosterPaymentsSettings.enabled ? 1 : 0,
                    enabled_ucp: fosterPaymentsSettings.enabled_ucp ? 1 : 0,
                    mode: fosterPaymentsSettings.mode,
                    access_code: fosterPaymentsSettings.access_code,
                    secret_key: fosterPaymentsSettings.secret_key,
                    merchant_shop_id: fosterPaymentsSettings.merchant_shop_id,
                    webhook_url: fosterPaymentsSettings.webhook_url,
                  })
                }
              >
                <SwitchSectionForm
                  label={"Enabled"}
                  value={fosterPaymentsSettings.enabled}
                  onChange={(e) =>
                    handleChangeSettings(e, setFosterPaymentsSettings)
                  }
                  id={"enabled"}
                />
                <SwitchSectionForm
                  label={"Enable User Deposits & Activations"}
                  value={fosterPaymentsSettings.enabled_ucp}
                  onChange={(e) =>
                    handleChangeSettings(e, setFosterPaymentsSettings)
                  }
                  id={"enabled_ucp"}
                />
                <SelectSectionForm
                  label={"Gateway Mode"}
                  value={fosterPaymentsSettings.mode}
                  onChange={(e) =>
                    handleChangeSettings(e, setFosterPaymentsSettings)
                  }
                  id={"mode"}
                  options={[
                    { name: "test", value: "test" },
                    { name: "live", value: "live" },
                  ]}
                />
                <InputSectionForm
                  label={"Access Code"}
                  value={fosterPaymentsSettings.access_code}
                  onChange={(e) =>
                    handleChangeSettings(e, setFosterPaymentsSettings)
                  }
                  id={"access_code"}
                />
                <InputSectionForm
                  label={"Secret Key"}
                  value={fosterPaymentsSettings.secret_key}
                  onChange={(e) =>
                    handleChangeSettings(e, setFosterPaymentsSettings)
                  }
                  id={"secret_key"}
                />
                <InputSectionForm
                  label={"Merchant Shop ID"}
                  value={fosterPaymentsSettings.merchant_shop_id}
                  onChange={(e) =>
                    handleChangeSettings(e, setFosterPaymentsSettings)
                  }
                  id={"merchant_shop_id"}
                />
                <InputSectionForm
                  label={"IPN URL (Web Hook)"}
                  value={fosterPaymentsSettings.webhook_url}
                  onChange={(e) =>
                    handleChangeSettings(e, setFosterPaymentsSettings)
                  }
                  id={"webhook_url"}
                />
              </SettingsContent>
            )}
            {selectSection == "Kushok" && (
              <SettingsContent
                title={"Kushok"}
                handlSubmit={(e) =>
                  handleSubmit(e, {
                    enabled: kushokSettings.enabled ? 1 : 0,
                    enabled_acp: kushokSettings.enabled_acp ? 1 : 0,
                    enabled_ucp: kushokSettings.enabled_ucp ? 1 : 0,
                    mode: kushokSettings.mode,
                    username: kushokSettings.username,
                    secret: kushokSettings.secret,
                    account_manager: kushokSettings.account_manager,
                    use_webhook: kushokSettings.use_webhook ? 1 : 0,
                    webhook_url: kushokSettings.webhook_url,
                  })
                }
              >
                <SwitchSectionForm
                  label={"Enabled"}
                  value={kushokSettings.enabled}
                  onChange={(e) => handleChangeSettings(e, setKushokSettings)}
                  id={"enabled"}
                />
                <SwitchSectionForm
                  label={"Enable Manager Deposit"}
                  value={kushokSettings.enabled_acp}
                  onChange={(e) => handleChangeSettings(e, setKushokSettings)}
                  id={"enabled_acp"}
                />
                <SwitchSectionForm
                  label={"Enable User Deposits & Activations"}
                  value={kushokSettings.enabled_ucp}
                  onChange={(e) => handleChangeSettings(e, setKushokSettings)}
                  id={"enabled_ucp"}
                />
                <SelectSectionForm
                  label={"Mode"}
                  value={kushokSettings.mode}
                  onChange={(e) => handleChangeSettings(e, setKushokSettings)}
                  id={"mode"}
                  options={[
                    { name: "test", value: "test" },
                    { name: "live", value: "live" },
                  ]}
                />
                <InputSectionForm
                  label={"Merchant ID"}
                  value={kushokSettings.username}
                  onChange={(e) => handleChangeSettings(e, setKushokSettings)}
                  id={"username"}
                />
                <InputSectionForm
                  label={"Secret"}
                  value={kushokSettings.secret}
                  onChange={(e) => handleChangeSettings(e, setKushokSettings)}
                  id={"secret"}
                />
                <InputSectionForm
                  label={"Account Manager"}
                  value={kushokSettings.account_manager}
                  onChange={(e) => handleChangeSettings(e, setKushokSettings)}
                  id={"account_manager"}
                />
                <SwitchSectionForm
                  label={"Use Integration URL (requires public IP)"}
                  value={kushokSettings.use_webhook}
                  onChange={(e) => handleChangeSettings(e, setKushokSettings)}
                  id={"use_webhook"}
                />
                <InputSectionForm
                  label={"Webhook Url"}
                  value={kushokSettings.webhook_url}
                  onChange={(e) => handleChangeSettings(e, setKushokSettings)}
                  id={"webhook_url"}
                />
              </SettingsContent>
            )}
            {selectSection == "PayPal" && (
              <SettingsContent
                title={"PayPal"}
                handlSubmit={(e) =>
                  handleSubmit(e, {
                    enabled: paypalSettings.enabled ? 1 : 0,
                    mode: paypalSettings.mode,
                    client_id: paypalSettings.client_id,
                    secret: paypalSettings.secret,
                  })
                }
              >
                <SwitchSectionForm
                  label={"Enabled"}
                  value={paypalSettings.enabled}
                  onChange={(e) => handleChangeSettings(e, setPaypalSettings)}
                  id={"enabled"}
                />
                <SelectSectionForm
                  label={"Mode"}
                  value={paypalSettings.enabled}
                  onChange={(e) => handleChangeSettings(e, setPaypalSettings)}
                  id={"enabled"}
                  options={[
                    { name: "test", value: "test" },
                    { name: "live", value: "live" },
                  ]}
                />
                <InputSectionForm
                  label={"Client ID"}
                  value={paypalSettings.client_id}
                  onChange={(e) => handleChangeSettings(e, setPaypalSettings)}
                  id={"client_id"}
                />
                <InputSectionForm
                  label={"Secret"}
                  value={paypalSettings.secret}
                  onChange={(e) => handleChangeSettings(e, setPaypalSettings)}
                  id={"secret"}
                />
              </SettingsContent>
            )}
            {selectSection == "Switch" && (
              <SettingsContent
                title={"Switch"}
                handlSubmit={(e) =>
                  handleSubmit(e, {
                    enabled: switchSettings.enabled,
                    enabled_acp: switchSettings.enabled_acp,
                    enabled_ucp: switchSettings.enabled_ucp,
                    account_manager: switchSettings.account_manager,
                    mode: switchSettings.mode,
                    merchant_id: switchSettings.merchant_id,
                    api_secret: switchSettings.api_secret,
                    use_webhook: switchSettings.use_webhook,
                    webhook_url: switchSettings.webhook_url,
                    webhook_secret: switchSettings.webhook_secret,
                  })
                }
              >
                <SwitchSectionForm
                  label={"Enabled"}
                  value={switchSettings.enabled}
                  onChange={(e) => handleChangeSettings(e, setSwitchSettings)}
                  id={"enabled"}
                />
                <SwitchSectionForm
                  label={"Enable Managers Deposits"}
                  value={switchSettings.enabled_acp}
                  onChange={(e) => handleChangeSettings(e, setSwitchSettings)}
                  id={"enabled_acp"}
                />
                <SwitchSectionForm
                  label={"Enable User Deposits & Activations"}
                  value={switchSettings.enabled_ucp}
                  onChange={(e) => handleChangeSettings(e, setSwitchSettings)}
                  id={"enabled_ucp"}
                />
                <SelectSectionForm
                  label={"Account Manager"}
                  value={switchSettings.account_manager}
                  onChange={(e) => handleChangeSettings(e, setSwitchSettings)}
                  id={"account_manager"}
                  options={
                    managers &&
                    managers.map((item) => ({
                      name: item.username,
                      value: item.id,
                    }))
                  }
                />
                <SelectSectionForm
                  label={"Mode"}
                  value={switchSettings.mode}
                  onChange={(e) => handleChangeSettings(e, setSwitchSettings)}
                  id={"mode"}
                  options={[
                    { name: "test", value: "test" },
                    { name: "live", value: "live" },
                  ]}
                />
                <InputSectionForm
                  label={"Merchant ID"}
                  value={switchSettings.merchant_id}
                  onChange={(e) => handleChangeSettings(e, setSwitchSettings)}
                  id={"merchant_id"}
                />
                <InputSectionForm
                  label={"API Secret"}
                  value={switchSettings.api_secret}
                  onChange={(e) => handleChangeSettings(e, setSwitchSettings)}
                  id={"api_secret"}
                />
                <SwitchSectionForm
                  label={"Use Webhook (requires public IP & HTTPS certificate)"}
                  value={switchSettings.use_webhook}
                  onChange={(e) => handleChangeSettings(e, setSwitchSettings)}
                  id={"use_webhook"}
                />
                <InputSectionForm
                  label={"Webhook URL"}
                  value={switchSettings.webhook_url}
                  onChange={(e) => handleChangeSettings(e, setSwitchSettings)}
                  id={"webhook_url"}
                />
                <InputSectionForm
                  label={"Webhook Secret"}
                  value={switchSettings.webhook_secret}
                  onChange={(e) => handleChangeSettings(e, setSwitchSettings)}
                  id={"webhook_secret"}
                />
              </SettingsContent>
            )}
            {selectSection == "Tasdid" && (
              <SettingsContent
                title={"Tasdid"}
                handlSubmit={(e) =>
                  handleSubmit(e, {
                    enabled: tasdidSettings.enabled,
                    enabled_acp: tasdidSettings.enabled_acp,
                    account_manager: tasdidSettings.account_manager,
                    mode: tasdidSettings.mode,
                    username: tasdidSettings.username,
                    password: tasdidSettings.password,
                    service_id: tasdidSettings.service_id,
                    client_id: tasdidSettings.client_id,
                    webhook_secret: tasdidSettings.webhook_secret,
                    usd_exchange_rate: tasdidSettings.usd_exchange_rate,
                  })
                }
              >
                <SwitchSectionForm
                  label={"Enabled"}
                  value={tasdidSettings.enabled}
                  onChange={(e) => handleChangeSettings(e, setTasdidSettings)}
                  id={"enabled"}
                />
                <SwitchSectionForm
                  label={"Enable Managers Deposits"}
                  value={tasdidSettings.enabled_acp}
                  onChange={(e) => handleChangeSettings(e, setTasdidSettings)}
                  id={"enabled_acp"}
                />
                <SelectSectionForm
                  label={"Account Manager"}
                  value={tasdidSettings.account_manager}
                  onChange={(e) => handleChangeSettings(e, setTasdidSettings)}
                  id={"account_manager"}
                  options={
                    managers &&
                    managers.map((item) => ({
                      name: item.username,
                      value: item.id,
                    }))
                  }
                />
                <SelectSectionForm
                  label={"Gateway Mode"}
                  value={tasdidSettings.mode}
                  onChange={(e) => handleChangeSettings(e, setTasdidSettings)}
                  id={"mode"}
                  options={[
                    { name: "test", value: "test" },
                    { name: "live", value: "live" },
                  ]}
                />
                <InputSectionForm
                  label={"Username"}
                  value={tasdidSettings.username}
                  onChange={(e) => handleChangeSettings(e, setTasdidSettings)}
                  id={"username"}
                />
                <InputSectionForm
                  label={"Password"}
                  value={tasdidSettings.password}
                  onChange={(e) => handleChangeSettings(e, setTasdidSettings)}
                  id={"password"}
                />
                <SwitchSectionForm
                  label={"Service Id"}
                  value={tasdidSettings.service_id}
                  onChange={(e) => handleChangeSettings(e, setTasdidSettings)}
                  id={"service_id"}
                />
                <InputSectionForm
                  label={"Client Id"}
                  value={tasdidSettings.client_id}
                  onChange={(e) => handleChangeSettings(e, setTasdidSettings)}
                  id={"client_id"}
                />
                <InputSectionForm
                  label={"Webhook Secret"}
                  value={tasdidSettings.webhook_secret}
                  onChange={(e) => handleChangeSettings(e, setTasdidSettings)}
                  id={"webhook_secret"}
                />
                <InputSectionForm
                  label={"USD Exchange Rate"}
                  value={tasdidSettings.usd_exchange_rate}
                  onChange={(e) => handleChangeSettings(e, setTasdidSettings)}
                  id={"usd_exchange_rate"}
                />
              </SettingsContent>
            )}
            {selectSection == "Voucher" && (
              <SettingsContent
                title={"Voucher"}
                handlSubmit={(e) =>
                  handleSubmit(e, {
                    enabled: vousherSettings.enabled,
                    enabled_acp: vousherSettings.enabled_acp,
                  })
                }
              >
                <SwitchSectionForm
                  label={"Enabled"}
                  value={vousherSettings.enabled}
                  onChange={(e) => handleChangeSettings(e, setVousherSettings)}
                  id={"enabled"}
                />
                <SwitchSectionForm
                  label={"Enable ACP"}
                  value={vousherSettings.enabled_acp}
                  onChange={(e) => handleChangeSettings(e, setTasdidSettings)}
                  id={"enabled_acp"}
                />
              </SettingsContent>
            )}
            {selectSection == "ZainCash" && (
              <SettingsContent
                title={"ZainCash"}
                handlSubmit={(e) =>
                  handleSubmit(e, {
                    enabled: zainCashSettings.enabled,
                    enabled_acp: zainCashSettings.enabled_acp,
                    enabled_ucp: zainCashSettings.enabled_ucp,
                    account_manager: zainCashSettings.account_manager,
                    use_webhook: zainCashSettings.use_webhook,
                    mode: zainCashSettings.mode,
                    msisdn: zainCashSettings.msisdn,
                    secret: zainCashSettings.secret,
                    merchant_id: zainCashSettings.merchant_id,
                    usd_exchange_rate: zainCashSettings.usd_exchange_rate,
                    webhook_url: zainCashSettings.webhook_url,
                  })
                }
              >
                <SwitchSectionForm
                  label={"Enabled"}
                  value={zainCashSettings.enabled}
                  onChange={(e) => handleChangeSettings(e, setZainCashSettings)}
                  id={"enabled"}
                />
                <SwitchSectionForm
                  label={"Enable Managers Deposits"}
                  value={zainCashSettings.enabled_acp}
                  onChange={(e) => handleChangeSettings(e, setZainCashSettings)}
                  id={"enabled_acp"}
                />
                <SwitchSectionForm
                  label={"Enable User Deposits & Activations"}
                  value={zainCashSettings.enabled_ucp}
                  onChange={(e) => handleChangeSettings(e, setZainCashSettings)}
                  id={"enabled_ucp"}
                />
                <SelectSectionForm
                  label={"Account Manager"}
                  value={zainCashSettings.account_manager}
                  onChange={(e) => handleChangeSettings(e, setZainCashSettings)}
                  id={"account_manager"}
                  options={
                    managers &&
                    managers.map((item) => ({
                      name: item.username,
                      value: item.id,
                    }))
                  }
                />
                <SwitchSectionForm
                  label={"Use Integration URL (requires public IP)"}
                  value={zainCashSettings.use_webhook}
                  onChange={(e) => handleChangeSettings(e, setZainCashSettings)}
                  id={"use_webhook"}
                />
                <SelectSectionForm
                  label={"Gateway Mode"}
                  value={zainCashSettings.mode}
                  onChange={(e) => handleChangeSettings(e, setZainCashSettings)}
                  id={"mode"}
                  options={[
                    { name: "test", value: "test" },
                    { name: "live", value: "live" },
                  ]}
                />
                <InputSectionForm
                  label={"Wallet Phone Number"}
                  value={zainCashSettings.msisdn}
                  onChange={(e) => handleChangeSettings(e, setZainCashSettings)}
                  id={"msisdn"}
                />
                <InputSectionForm
                  label={"Secret"}
                  value={zainCashSettings.secret}
                  onChange={(e) => handleChangeSettings(e, setZainCashSettings)}
                  id={"secret"}
                />
                <SwitchSectionForm
                  label={"Merchant ID"}
                  value={zainCashSettings.merchant_id}
                  onChange={(e) => handleChangeSettings(e, setZainCashSettings)}
                  id={"merchant_id"}
                />
                <InputSectionForm
                  label={"USD Exchange Rate"}
                  value={zainCashSettings.usd_exchange_rate}
                  onChange={(e) => handleChangeSettings(e, setZainCashSettings)}
                  id={"usd_exchange_rate"}
                />
                <InputSectionForm
                  label={"Integration URL (Web Hook)"}
                  value={zainCashSettings.webhook_url}
                  onChange={(e) => handleChangeSettings(e, setZainCashSettings)}
                  id={"webhook_url"}
                />
              </SettingsContent>
            )}
          </MainSection>
          {loading && <Loader />}
        </div>
      </div>
    </div>
  );
};

export default SettingsPaymentGateways;
