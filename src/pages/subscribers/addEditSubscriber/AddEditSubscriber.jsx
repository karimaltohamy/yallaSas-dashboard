import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import "./addEditSubscriber.scss";
import { t } from "i18next";

const AddEditSubscriber = () => {
  const [generalinformation, setGeneralinformation] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    followMe: "",
    package: "",
    group: "",
    site: "",
    effective: "",
    passwordForSubscriberPage: "",
    differentPasswordForSubscriberPage: "",
    MACLock: "",
  });
  const [personalformation, setPersonalformation] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    apartmentNumber: "",
    street: "",
    contractNumber: "",
    idNumber: "",
    notice: "",
  });
  const [specialDetails, setSpecialDetails] = useState({
    end: "",
    entryTimes: "",
    staticIPAddress: "",
    mikrotikWinboxGroup: "",
    mikrotikFramedRoute: "",
    mikrotikAddressList: "",
    iPv6Prefix: "",
    subscriberType: "",
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
            value={generalinformation.followMe}
            onChange={handleChangeGeneralUnformation}
            id="followMe"
            options={[
              { name: "manager_1", value: "manager_1" },
              { name: "manager_2", value: "manager_2" },
              { name: "manager_3", value: "manager_3" },
            ]}
          />
          <SelectSectionForm
            label={t("The Package")}
            value={generalinformation.package}
            onChange={handleChangeGeneralUnformation}
            id="package"
            options={[
              { name: "slow", value: "slow" },
              { name: "plus", value: "plus" },
              { name: "standard", value: "standard" },
            ]}
          />
          <InputSectionForm
            label={t("Group")}
            type={"text"}
            value={generalinformation.group}
            onChange={handleChangeGeneralUnformation}
            id="group"
          />
          <SelectSectionForm
            label={t("The Site")}
            value={generalinformation.package}
            onChange={handleChangeGeneralUnformation}
            id="package"
            options={[
              { name: "slow", value: "slow" },
              { name: "plus", value: "plus" },
              { name: "standard", value: "standard" },
            ]}
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
            value={generalinformation.passwordForSubscriberPage}
            onChange={handleChangeGeneralUnformation}
            id="passwordForSubscriberPage"
          />
          <SwitchSectionForm
            label={t("MAC Lock")}
            value={generalinformation.MACLock}
            onChange={handleChangeGeneralUnformation}
            id="MACLock"
          />
          <SwitchSectionForm
            label={t("Use a different password for the subscriber page")}
            value={generalinformation.differentPasswordForSubscriberPage}
            onChange={handleChangeGeneralUnformation}
            id="differentPasswordForSubscriberPage"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Personal information")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("First name")}
            type={"text"}
            value={personalformation.firstName}
            onChange={handleChangePersonalformation}
            id="firstName"
          />
          <InputSectionForm
            label={t("Last name")}
            type={"text"}
            value={personalformation.lastName}
            onChange={handleChangePersonalformation}
            id="lastName"
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
            value={personalformation.apartmentNumber}
            onChange={handleChangePersonalformation}
            id="apartmentNumber"
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
            value={personalformation.contractNumber}
            onChange={handleChangePersonalformation}
            id="contractNumber"
          />
          <InputSectionForm
            label={t("Id number")}
            type={"text"}
            value={personalformation.idNumber}
            onChange={handleChangePersonalformation}
            id="idNumber"
          />
          <InputSectionForm
            label={t("Notice")}
            type={"text"}
            value={personalformation.notice}
            onChange={handleChangePersonalformation}
            id="notice"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Special details")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("End")}
            type={"date"}
            value={specialDetails.end}
            onChange={handleChangeSpecialDetails}
            id="end"
          />
          <InputSectionForm
            label={t("Entry times")}
            type={"text"}
            value={specialDetails.entryTimes}
            onChange={handleChangeSpecialDetails}
            id="entryTimes"
          />
          <InputSectionForm
            label={t("Static iP address")}
            type={"text"}
            value={specialDetails.staticIPAddress}
            onChange={handleChangeSpecialDetails}
            id="staticIPAddress"
          />
          <InputSectionForm
            label={t("Mikrotik Winbox Group")}
            type={"text"}
            value={specialDetails.mikrotikWinboxGroup}
            onChange={handleChangeSpecialDetails}
            id="mikrotikWinboxGroup"
          />
          <InputSectionForm
            label={t("Mikrotik Framed Route")}
            type={"text"}
            value={specialDetails.mikrotikFramedRoute}
            onChange={handleChangeSpecialDetails}
            id="mikrotikFramedRoute"
          />
          <InputSectionForm
            label={t("Mikrotik Address List")}
            type={"text"}
            value={specialDetails.mikrotikAddressList}
            onChange={handleChangeSpecialDetails}
            id="mikrotikAddressList"
          />
          <InputSectionForm
            label={t("IPv6 Prefix")}
            type={"text"}
            value={specialDetails.iPv6Prefix}
            onChange={handleChangeSpecialDetails}
            id="iPv6Prefix"
          />
          <SelectSectionForm
            label={t("Subscriber type")}
            type={"text"}
            value={specialDetails.subscriberType}
            onChange={handleChangeSpecialDetails}
            id="subscriberType"
            options={[
              { name: "Regular User", value: "" },
              { name: "Wireless Access Point", value: "" },
            ]}
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">{t("OK")}</button>
        <button className="btn_close">{t("Cancel")}</button>
      </div>
    </div>
  );
};

export default AddEditSubscriber;
