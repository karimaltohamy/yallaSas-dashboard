import React, { useState } from "react";
import "./verifyCards.scss";
import InputSectionForm from "../../components/sectionform/InputSectionForm";
import SectionForm from "../../components/sectionform/SectionForm";

const VerifyCards = () => {
  const [cardVerification, setCardVerification] = useState({
    pin: "",
    username: "",
    profile: "",
    serialNumber: "",
    value: "",
    owner: "",
    type: "",
    series: "",
    expiration: "",
    status: "",
    usedAt: "",
    usedBy: "",
  });

  const handleChangeCardVerification = (e) => {
    setCardVerification((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <div className="form_verfiy">
        <form action="">
          <div className="input_item">
            <select name="" id="">
              <option value="">serial number</option>
              <option value="">PIN</option>
              <option value="">UserName</option>
            </select>
          </div>
          <div className="input_search">
            <input type="text" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>
      </div>
      <SectionForm title={"Card Verification"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"PIN"}
            type={"text"}
            value={cardVerification.pin}
            onChange={handleChangeCardVerification}
            id="pin"
          />
          <InputSectionForm
            label={"Username"}
            type={"text"}
            value={cardVerification.username}
            onChange={handleChangeCardVerification}
            id="username"
          />
          <InputSectionForm
            label={"Profile"}
            type={"text"}
            value={cardVerification.profile}
            onChange={handleChangeCardVerification}
            id="profile"
          />
          <InputSectionForm
            label={"Serial Number"}
            type={"text"}
            value={cardVerification.serialNumber}
            onChange={handleChangeCardVerification}
            id="serialNumber"
          />

          <InputSectionForm
            label={"Value"}
            type={"text"}
            value={cardVerification.value}
            onChange={handleChangeCardVerification}
            id="value"
          />
          <InputSectionForm
            label={"Owner"}
            type={"text"}
            value={cardVerification.owner}
            onChange={handleChangeCardVerification}
            id="owner"
          />
          <InputSectionForm
            label={"Type"}
            type={"text"}
            value={cardVerification.type}
            onChange={handleChangeCardVerification}
            id="type"
          />
          <InputSectionForm
            label={"Series"}
            type={"text"}
            value={cardVerification.series}
            onChange={handleChangeCardVerification}
            id="series"
          />
          <InputSectionForm
            label={"Expiration"}
            type={"text"}
            value={cardVerification.expiration}
            onChange={handleChangeCardVerification}
            id="expiration"
          />
          <InputSectionForm
            label={"Status"}
            type={"text"}
            value={cardVerification.status}
            onChange={handleChangeCardVerification}
            id="status"
          />
          <InputSectionForm
            label={"Used At"}
            type={"text"}
            value={cardVerification.usedAt}
            onChange={handleChangeCardVerification}
            id="usedAt"
          />
          <InputSectionForm
            label={"Used By"}
            type={"text"}
            value={cardVerification.usedBy}
            onChange={handleChangeCardVerification}
            id="usedBy"
          />
        </div>
      </SectionForm>
    </div>
  );
};

export default VerifyCards;
