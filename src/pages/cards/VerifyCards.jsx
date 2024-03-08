import React, { useState } from "react";
import "./verifyCards.scss";
import InputSectionForm from "../../components/sectionform/InputSectionForm";
import SectionForm from "../../components/sectionform/SectionForm";
import apiAxios from "../../utils/apiAxios";
import { encryptedData } from "../../utils/utilsFunctions";
import { toast } from "react-toastify";

const VerifyCards = () => {
  const [searchResult, setSearchResult] = useState({});
  const [type, setType] = useState("serial");
  const [search, setSearch] = useState("");
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
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleSearch = async () => {
    try {
      const { data } = await apiAxios.post("api/cards/search", {
        payload: encryptedData({ type, keyword: search }),
      });
      setSearchResult(data.data);
      toast.info(data.message);
    } catch (error) {
      toast.warning(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="content_page">
      <div className="form_verfiy">
        <form action="">
          <div className="input_item">
            <select
              name=""
              id=""
              alue={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="serial">serial number</option>
              <option value="pin">PIN</option>
              <option value="username">UserName</option>
            </select>
          </div>
          <div className="input_search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </form>
      </div>
      <SectionForm title={"Card Verification"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"PIN"}
            type={"text"}
            classes={"disabled"}
            value={cardVerification.pin}
          />
          <InputSectionForm
            label={"Username"}
            type={"text"}
            value={cardVerification.username}
            onChange={handleChangeCardVerification}
            id="username"
            classes={"disabled"}
          />
          <InputSectionForm
            label={"Profile"}
            type={"text"}
            value={cardVerification.profile}
            onChange={handleChangeCardVerification}
            id="profile"
            classes={"disabled"}
          />
          <InputSectionForm
            label={"Serial Number"}
            type={"text"}
            value={cardVerification.serialNumber}
            onChange={handleChangeCardVerification}
            id="serialNumber"
            classes={"disabled"}
          />

          <InputSectionForm
            label={"Value"}
            type={"text"}
            value={cardVerification.value}
            onChange={handleChangeCardVerification}
            id="value"
            classes={"disabled"}
          />
          <InputSectionForm
            label={"Owner"}
            type={"text"}
            value={cardVerification.owner}
            onChange={handleChangeCardVerification}
            id="owner"
            classes={"disabled"}
          />
          <InputSectionForm
            label={"Type"}
            type={"text"}
            value={cardVerification.type}
            onChange={handleChangeCardVerification}
            id="type"
            classes={"disabled"}
          />
          <InputSectionForm
            label={"Series"}
            type={"text"}
            value={cardVerification.series}
            onChange={handleChangeCardVerification}
            id="series"
            classes={"disabled"}
          />
          <InputSectionForm
            label={"Expiration"}
            type={"text"}
            value={cardVerification.expiration}
            onChange={handleChangeCardVerification}
            id="expiration"
            classes={"disabled"}
          />
          <InputSectionForm
            label={"Status"}
            type={"text"}
            value={cardVerification.status}
            onChange={handleChangeCardVerification}
            id="status"
            classes={"disabled"}
          />
          <InputSectionForm
            label={"Used At"}
            type={"text"}
            value={cardVerification.usedAt}
            onChange={handleChangeCardVerification}
            id="usedAt"
            classes={"disabled"}
          />
          <InputSectionForm
            label={"Used By"}
            type={"text"}
            value={cardVerification.usedBy}
            onChange={handleChangeCardVerification}
            id="usedBy"
            classes={"disabled"}
          />
        </div>
      </SectionForm>
    </div>
  );
};

export default VerifyCards;
