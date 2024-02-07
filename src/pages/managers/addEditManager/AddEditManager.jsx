import React, { useState } from "react";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SectionForm from "../../../components/sectionform/SectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import InputFile from "../../../components/popup/inputFile/InputFile";
import { t } from "i18next";

const AddEditManager = () => {
  const [generalinformation, setGeneralinformation] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    followMe: "",
    package: "",
    group: "",
    site: "",
    effective: "",
  });

  const [personalformation, setPersonalformation] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    notice: "",
  });

  const [specialDetails, setSpecialDetails] = useState({
    selectDeletion: "",
    subscribersSuffix: "",
    maximumSubscribers: "",
    group: "",
    site: "",
    maximumDebtLimit: "",
    discountPercentage: "",
    addressList: "",
    towers: "",
    allowedNAS: "",
    requiresTwoFactorLogin: "",
    requiresTwoFactorLoginSwitch: "",
    notRequireCptcha: "",
    forceChangePassword: "",
  });

  const [determinants, setDeterminants] = useState({
    selectDeletion: "",
    deletionTimesMonth: "",
    selectChangName: "",
    nameChangeTimesMonth: "",
    profileChangeTimes: "",
    timesChangeProfileMonth: "",
    determineTimesChangeMac: "",
    macChangeTimesMonth: "",
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

  const handleChangeDeterminants = (e) => {
    setDeterminants((prev) => {
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
            label={t("Group")}
            value={generalinformation.group}
            onChange={handleChangeGeneralUnformation}
            id="group"
            options={[
              { name: "adminostrator", value: "Adminostrator" },
              { name: "normalReseller", value: "Normal Reseller" },
              { name: "Super Resller", value: "Super Resller" },
            ]}
          />
          <SwitchSectionForm
            label={t("Effective")}
            value={generalinformation.effective}
            onChange={handleChangeGeneralUnformation}
            id="effective"
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
            label={t("Notice")}
            type={t("text")}
            value={personalformation.notice}
            onChange={handleChangePersonalformation}
            id="notice"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Special details")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("select deletion")}
            type={"date"}
            value={specialDetails.selectDeletion}
            onChange={handleChangeSpecialDetails}
            id="selectDeletion"
          />
          <InputSectionForm
            label={t("Subscribers Suffix")}
            type={"text"}
            value={specialDetails.subscribersSuffix}
            onChange={handleChangeSpecialDetails}
            id="subscribersSuffix"
          />
          <InputSectionForm
            label={t("Maximum subscribers")}
            type={"text"}
            value={specialDetails.maximumSubscribers}
            onChange={handleChangeSpecialDetails}
            id="maximumSubscribers"
          />
          <InputSectionForm
            label={t("Group")}
            type={"text"}
            value={specialDetails.group}
            onChange={handleChangeSpecialDetails}
            id="group"
          />
          <SelectSectionForm
            label={t("Site")}
            type={"text"}
            value={specialDetails.site}
            onChange={handleChangeSpecialDetails}
            id="site"
            options={[{ name: "any", value: "" }]}
          />
          <InputSectionForm
            label={t("maximumDebtLimit")}
            type={"text"}
            value={specialDetails.maximumDebtLimit}
            onChange={handleChangeSpecialDetails}
            id="maximumDebtLimit"
          />
          <InputSectionForm
            label={t("Address List")}
            type={"text"}
            value={specialDetails.addressList}
            onChange={handleChangeSpecialDetails}
            id="addressList"
          />
          <InputFile
            label={t("Towers from which entry is permitted")}
            value={specialDetails.towers}
            onChange={handleChangeSpecialDetails}
            id="towers"
          />
          <SelectSectionForm
            label={"Allowed NAS(s)"}
            value={specialDetails.allowedNAS}
            onChange={handleChangeSpecialDetails}
            id="allowedNAS"
            options={[{ name: "any", value: "" }]}
          />
          <InputSectionForm
            label={t("Requires two-factor authentication to login")}
            type={"text"}
            value={specialDetails.requiresTwoFactorLogin}
            onChange={handleChangeSpecialDetails}
            id="requiresTwoFactorLogin"
          />
          <SwitchSectionForm
            label={t("Requires Two Factor Login Switch")}
            value={specialDetails.requiresTwoFactorLoginSwitch}
            onChange={handleChangeSpecialDetails}
            id="requiresTwoFactorLoginSwitch"
          />
          <SwitchSectionForm
            label={t("Not Require Cptcha")}
            value={specialDetails.notRequireCptcha}
            onChange={handleChangeSpecialDetails}
            id="notRequireCptcha"
          />
          <SwitchSectionForm
            label={t("Not Require Cptcha")}
            value={specialDetails.forceChangePassword}
            onChange={handleChangeSpecialDetails}
            id="forceChangePassword"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Determinants")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SwitchSectionForm
            label={t("Select Deletion")}
            value={determinants.selectDeletion}
            onChange={handleChangeDeterminants}
            id="selectDeletion"
          />
          <InputSectionForm
            label={t("Deletion times per month")}
            type={"text"}
            value={specialDetails.deletionTimesMonth}
            onChange={handleChangeDeterminants}
            id="deletionTimesMonth"
          />
          <SwitchSectionForm
            label={t("Determine the frequency of changing the name")}
            value={determinants.selectChangName}
            onChange={handleChangeDeterminants}
            id="selectChangName"
          />
          <InputSectionForm
            label={t("Name change times per month")}
            type={"text"}
            value={specialDetails.nameChangeTimesMonth}
            onChange={handleChangeDeterminants}
            id="nameChangeTimesMonth"
          />
          <SwitchSectionForm
            label={t("Profile change times")}
            value={determinants.profileChangeTimes}
            onChange={handleChangeDeterminants}
            id="profileChangeTimes"
          />
          <InputSectionForm
            label={t("Times to change the profile per month")}
            type={"text"}
            value={specialDetails.timesChangeProfileMonth}
            onChange={handleChangeDeterminants}
            id="timesChangeProfileMonth"
          />
          <SwitchSectionForm
            label={t("Determine the times to change the Mac")}
            value={determinants.determineTimesChangeMac}
            onChange={handleChangeDeterminants}
            id="determineTimesChangeMac"
          />
          <InputSectionForm
            label={t("Mac change times per month")}
            type={"text"}
            value={specialDetails.macChangeTimesMonth}
            onChange={handleChangeDeterminants}
            id="macChangeTimesMonth"
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

export default AddEditManager;
