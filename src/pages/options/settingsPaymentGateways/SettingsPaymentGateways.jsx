import React, { useState } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./settingsPaymentGateways.scss";
import SettingsContent from "./SettingsContent";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";

export const SettingsPaymentGateways = () => {
  const [selectSection, setSelectSection] = useState("bKash");

  return (
    <div className="settings_paymentgatemay_section">
      <div className="row line">
        <div className="col-12 col-md-4">
          <div className="boxs">
            <div
              className={`box ${selectSection == "bKash" ? "active" : ""}`}
              onClick={() => setSelectSection("bKash")}
            >
              <div className="head">
                <h6 className="type_payment">bKash</h6>
                <span className="country">Bangladesh</span>
              </div>
              <div className="status">disabled</div>
            </div>
            <div
              className={`box ${
                selectSection == "Flutterwave" ? "active" : ""
              }`}
              onClick={() => setSelectSection("Flutterwave")}
            >
              <div className="head">
                <h6 className="type_payment">Flutterwave</h6>
                <span className="country">Global</span>
              </div>
              <div className="status">disabled</div>
            </div>
            <div
              className={`box ${
                selectSection == "FosterPayments" ? "active" : ""
              }`}
              onClick={() => setSelectSection("FosterPayments")}
            >
              <div className="head">
                <h6 className="type_payment">Foster Payments</h6>
                <span className="country">Bangladesh</span>
              </div>
              <div className="status">disabled</div>
            </div>
            <div
              className={`box ${selectSection == "Kushok" ? "active" : ""}`}
              onClick={() => setSelectSection("Kushok")}
            >
              <div className="head">
                <h6 className="type_payment">Kushok</h6>
                <span className="country">Iraq </span>
              </div>
              <div className="status">disabled</div>
            </div>
            <div
              className={`box ${selectSection == "PayPal" ? "active" : ""}`}
              onClick={() => setSelectSection("PayPal")}
            >
              <div className="head">
                <h6 className="type_payment">PayPal</h6>
                <span className="country">Global</span>
              </div>
              <div className="status enabled">enabled</div>
            </div>
            <div
              className={`box ${selectSection == "Switch" ? "active" : ""}`}
              onClick={() => setSelectSection("Switch")}
            >
              <div className="head">
                <h6 className="type_payment">Switch</h6>
                <span className="country">Iraq</span>
              </div>
              <div className="status">disabled</div>
            </div>
            <div
              className={`box ${selectSection == "Tasdid" ? "active" : ""}`}
              onClick={() => setSelectSection("Tasdid")}
            >
              <div className="head">
                <h6 className="type_payment">Tasdid</h6>
                <span className="country">Iraq</span>
              </div>
              <div className="status">disabled</div>
            </div>
            <div
              className={`box ${selectSection == "Voucher" ? "active" : ""}`}
              onClick={() => setSelectSection("Voucher")}
            >
              <div className="head">
                <h6 className="type_payment">Voucher</h6>
                <span className="country">Global</span>
              </div>
              <div className="status">disabled</div>
            </div>
            <div
              className={`box ${selectSection == "ZainCash" ? "active" : ""}`}
              onClick={() => setSelectSection("ZainCash")}
            >
              <div className="head">
                <h6 className="type_payment">ZainCash</h6>
                <span className="country">Global</span>
              </div>
              <div className="status">disabled</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <MainSection
            title={"Payment Gateways Settings"}
            icon={<i className="fa-solid fa-credit-card"></i>}
          >
            {selectSection == "bKash" && (
              <SettingsContent title={"bKash"}>
                <SwitchSectionForm label={"Enabled"} />
                <SwitchSectionForm
                  label={"Enable User Deposits & Activations"}
                />
                <InputSectionForm label={"Wallet Phone Number"} />
                <InputSectionForm label={"Client ID"} />
                <InputSectionForm label={"bKash Password"} />
              </SettingsContent>
            )}
            {selectSection == "Flutterwave" && (
              <SettingsContent title={"Flutterwave"}>
                <SwitchSectionForm label={"Enabled"} />
                <InputSectionForm label={"Public Key"} />
                <InputSectionForm label={"Secret Key"} />
                <InputSectionForm label={"Encryption Key"} />
                <SelectSectionForm
                  label={"Currency"}
                  options={[
                    { name: "Nigerian naira", value: "" },
                    { name: "Ugandan shilling", value: "" },
                    { name: "Rwandan franc", value: "" },
                    { name: "Ghanaian cedi", value: "" },
                  ]}
                />
              </SettingsContent>
            )}
            {selectSection == "FosterPayments" && (
              <SettingsContent title={"FosterPayments"}>
                <SwitchSectionForm label={"Enabled"} />
                <SwitchSectionForm
                  label={"Enable User Deposits & Activations"}
                />
                <SelectSectionForm
                  label={"Gateway Mode"}
                  options={[
                    { name: "test", value: "" },
                    { name: "live", value: "" },
                  ]}
                />
                <InputSectionForm label={"Access Code"} />
                <InputSectionForm label={"Secret Key"} />
                <InputSectionForm label={"Merchant Shop ID"} />
                <InputSectionForm label={"IPN URL (Web Hook)"} />
              </SettingsContent>
            )}
            {selectSection == "Kushok" && (
              <SettingsContent title={"Kushok"}>
                <SwitchSectionForm label={"Enabled"} />
                <SwitchSectionForm label={"Enable Manager Deposit"} />
                <SwitchSectionForm
                  label={"Enable User Deposits & Activations"}
                />
                <SelectSectionForm
                  label={"Mode"}
                  options={[
                    { name: "test", value: "" },
                    { name: "live", value: "" },
                  ]}
                />
                <InputSectionForm label={"Merchant ID"} />
                <InputSectionForm label={"Secret"} />
                <InputSectionForm label={"Account Manager"} />
                <SwitchSectionForm
                  label={"Use Integration URL (requires public IP)"}
                />
                <InputSectionForm label={"Webhook Url"} />
              </SettingsContent>
            )}
            {selectSection == "PayPal" && (
              <SettingsContent title={"PayPal"}>
                <SwitchSectionForm label={"Enabled"} />
                <SelectSectionForm
                  label={"Mode"}
                  options={[
                    { name: "test", value: "" },
                    { name: "live", value: "" },
                  ]}
                />
                <InputSectionForm label={"Client ID"} />
                <InputSectionForm label={"Secret"} />
              </SettingsContent>
            )}
            {selectSection == "Switch" && (
              <SettingsContent title={"Switch"}>
                <SwitchSectionForm label={"Enabled"} />
                <SwitchSectionForm label={"Enable Managers Deposits"} />
                <SwitchSectionForm
                  label={"Enable User Deposits & Activations"}
                />
                <SelectSectionForm
                  label={"Account Manager"}
                  options={[
                    { name: "admin", value: "" },
                    { name: "manager_1", value: "" },
                    { name: "manager_2", value: "" },
                    { name: "manager_3", value: "" },
                  ]}
                />
                <SelectSectionForm
                  label={"Mode"}
                  options={[
                    { name: "test", value: "" },
                    { name: "live", value: "" },
                  ]}
                />
                <InputSectionForm label={"Merchant ID"} />
                <InputSectionForm label={"API Secret"} />
                <SwitchSectionForm
                  label={"Use Webhook (requires public IP & HTTPS certificate)"}
                />
                <InputSectionForm label={"Webhook URL"} />
                <InputSectionForm label={"Webhook Secret"} />
              </SettingsContent>
            )}
            {selectSection == "Tasdid" && (
              <SettingsContent title={"Tasdid"}>
                <SwitchSectionForm label={"Enabled"} />
                <SwitchSectionForm label={"Enable Managers Deposits"} />
                <SelectSectionForm
                  label={"Account Manager"}
                  options={[
                    { name: "admin", value: "" },
                    { name: "manager_1", value: "" },
                    { name: "manager_2", value: "" },
                    { name: "manager_3", value: "" },
                  ]}
                />
                <SelectSectionForm
                  label={"Gateway Mode"}
                  options={[
                    { name: "test", value: "" },
                    { name: "live", value: "" },
                  ]}
                />
                <InputSectionForm label={"Username"} />
                <InputSectionForm label={"Password"} />
                <SwitchSectionForm label={"Service Id"} />
                <InputSectionForm label={"Client Id"} />
                <InputSectionForm label={"Webhook Secret"} />
                <InputSectionForm label={"USD Exchange Rate"} />
              </SettingsContent>
            )}
            {selectSection == "Voucher" && (
              <SettingsContent title={"Voucher"}>
                <SwitchSectionForm label={"Enabled"} />
                <SwitchSectionForm label={"Enable ACP"} />
              </SettingsContent>
            )}
            {selectSection == "ZainCash" && (
              <SettingsContent title={"ZainCash"}>
                <SwitchSectionForm label={"Enabled"} />
                <SwitchSectionForm label={"Enable Managers Deposits"} />
                <SwitchSectionForm
                  label={"Enable User Deposits & Activations"}
                />
                <SelectSectionForm
                  label={"Account Manager"}
                  options={[
                    { name: "admin", value: "" },
                    { name: "admin", value: "" },
                    { name: "manager_1", value: "" },
                    { name: "manager_2", value: "" },
                    { name: "manager_3", value: "" },
                  ]}
                />
                <SwitchSectionForm
                  label={"Use Integration URL (requires public IP)"}
                />
                <SelectSectionForm
                  label={"Gateway Mode"}
                  options={[
                    { name: "test", value: "" },
                    { name: "live", value: "" },
                  ]}
                />
                <InputSectionForm label={"Wallet Phone Number"} />
                <InputSectionForm label={"Secret"} />
                <SwitchSectionForm label={"Merchant ID"} />
                <InputSectionForm label={"USD Exchange Rate"} />
                <InputSectionForm label={"Integration URL (Web Hook)"} />
              </SettingsContent>
            )}
          </MainSection>
        </div>
      </div>
    </div>
  );
};
