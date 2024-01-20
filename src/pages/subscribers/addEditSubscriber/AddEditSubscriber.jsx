import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import "./addEditSubscriber.scss";

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
      <SectionForm title={"General information"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"Username"}
            type={"text"}
            value={generalinformation.username}
            onChange={handleChangeGeneralUnformation}
            id="username"
          />
          <InputSectionForm
            label={"Password"}
            type={"password"}
            value={generalinformation.password}
            onChange={handleChangeGeneralUnformation}
            id="password"
          />
          <InputSectionForm
            label={"Confirm password"}
            type={"password"}
            value={generalinformation.confirmPassword}
            onChange={handleChangeGeneralUnformation}
            id="confirmPassword"
          />
          <SelectSectionForm
            label={"Follow me"}
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
            label={"The Package"}
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
            label={"Group"}
            type={"text"}
            value={generalinformation.group}
            onChange={handleChangeGeneralUnformation}
            id="group"
          />
          <SelectSectionForm
            label={"The Site"}
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
            label={"Effective"}
            value={generalinformation.effective}
            onChange={handleChangeGeneralUnformation}
            id="effective"
          />
          <InputSectionForm
            label={"Password for subscriber page"}
            type={"text"}
            value={generalinformation.passwordForSubscriberPage}
            onChange={handleChangeGeneralUnformation}
            id="passwordForSubscriberPage"
          />
          <SwitchSectionForm
            label={"MAC Lock"}
            value={generalinformation.MACLock}
            onChange={handleChangeGeneralUnformation}
            id="MACLock"
          />
          <SwitchSectionForm
            label={"Use a different password for the subscriber page"}
            value={generalinformation.differentPasswordForSubscriberPage}
            onChange={handleChangeGeneralUnformation}
            id="differentPasswordForSubscriberPage"
          />
        </div>
      </SectionForm>
      <SectionForm title={"Personal information"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"First name"}
            type={"text"}
            value={personalformation.firstName}
            onChange={handleChangePersonalformation}
            id="firstName"
          />
          <InputSectionForm
            label={"Last name"}
            type={"text"}
            value={personalformation.lastName}
            onChange={handleChangePersonalformation}
            id="lastName"
          />
          <InputSectionForm
            label={"Company"}
            type={"text"}
            value={personalformation.company}
            onChange={handleChangePersonalformation}
            id="company"
          />
          <InputSectionForm
            label={"Email"}
            type={"text"}
            value={personalformation.email}
            onChange={handleChangePersonalformation}
            id="email"
          />
          <InputSectionForm
            label={"Email"}
            type={"text"}
            value={personalformation.email}
            onChange={handleChangePersonalformation}
            id="email"
          />
          <InputSectionForm
            label={"Phone"}
            type={"text"}
            value={personalformation.phone}
            onChange={handleChangePersonalformation}
            id="phone"
          />
          <InputSectionForm
            label={"City"}
            type={"text"}
            value={personalformation.city}
            onChange={handleChangePersonalformation}
            id="city"
          />
          <InputSectionForm
            label={"Address"}
            type={"text"}
            value={personalformation.address}
            onChange={handleChangePersonalformation}
            id="address"
          />
          <InputSectionForm
            label={"Apartment number"}
            type={"text"}
            value={personalformation.apartmentNumber}
            onChange={handleChangePersonalformation}
            id="apartmentNumber"
          />
          <InputSectionForm
            label={"The street"}
            type={"text"}
            value={personalformation.street}
            onChange={handleChangePersonalformation}
            id="street"
          />
          <InputSectionForm
            label={"Contract number"}
            type={"text"}
            value={personalformation.contractNumber}
            onChange={handleChangePersonalformation}
            id="contractNumber"
          />
          <InputSectionForm
            label={"Id number"}
            type={"text"}
            value={personalformation.idNumber}
            onChange={handleChangePersonalformation}
            id="idNumber"
          />
          <InputSectionForm
            label={"Notice"}
            type={"text"}
            value={personalformation.notice}
            onChange={handleChangePersonalformation}
            id="notice"
          />
        </div>
      </SectionForm>
      <SectionForm title={"Special details"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"End"}
            type={"date"}
            value={specialDetails.end}
            onChange={handleChangeSpecialDetails}
            id="end"
          />
          <InputSectionForm
            label={"Entry times"}
            type={"text"}
            value={specialDetails.entryTimes}
            onChange={handleChangeSpecialDetails}
            id="entryTimes"
          />
          <InputSectionForm
            label={"Static iP address"}
            type={"text"}
            value={specialDetails.staticIPAddress}
            onChange={handleChangeSpecialDetails}
            id="staticIPAddress"
          />
          <InputSectionForm
            label={"Mikrotik Winbox Group"}
            type={"text"}
            value={specialDetails.mikrotikWinboxGroup}
            onChange={handleChangeSpecialDetails}
            id="mikrotikWinboxGroup"
          />
          <InputSectionForm
            label={"Mikrotik Framed Route"}
            type={"text"}
            value={specialDetails.mikrotikFramedRoute}
            onChange={handleChangeSpecialDetails}
            id="mikrotikFramedRoute"
          />
          <InputSectionForm
            label={"Mikrotik Address List"}
            type={"text"}
            value={specialDetails.mikrotikAddressList}
            onChange={handleChangeSpecialDetails}
            id="mikrotikAddressList"
          />
          <InputSectionForm
            label={"IPv6 Prefix"}
            type={"text"}
            value={specialDetails.iPv6Prefix}
            onChange={handleChangeSpecialDetails}
            id="iPv6Prefix"
          />
          <SelectSectionForm
            label={"Subscriber type"}
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
        <button className="btn_add">OK</button>
        <button className="btn_close">Cancel</button>
      </div>
    </div>
  );
};

export default AddEditSubscriber;
