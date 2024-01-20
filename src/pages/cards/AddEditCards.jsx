import React, { useState } from "react";
import SectionForm from "../../components/sectionform/SectionForm";
import SelectSectionForm from "../../components/sectionform/SelectSectionForm";
import InputSectionForm from "../../components/sectionform/InputSectionForm";
import SwitchSectionForm from "../../components/sectionform/switchSectionForm";

const AddEditCards = () => {
  const [cardsGenerator, setCardsGenerator] = useState({
    type: "",
    quantity: "",
    value: "",
    expiration: "",
    prefix: "",
    pinSize: "",
    autoActivate: "",
    owner: "",
  });

  const handleChangeCardsGenerator = (e) => {
    setCardsGenerator((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={"Cards Generator"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SelectSectionForm
            label={"Type"}
            value={cardsGenerator.type}
            onChange={handleChangeCardsGenerator}
            id="type"
            options={[
              { name: "Refill Card", value: "" },
              { name: "Prepaid User", value: "" },
            ]}
          />
          <InputSectionForm
            label={"Quantity"}
            type={"text"}
            value={cardsGenerator.quantity}
            onChange={handleChangeCardsGenerator}
            id="quantity"
          />
          <InputSectionForm
            label={"Value"}
            type={"text"}
            value={cardsGenerator.value}
            onChange={handleChangeCardsGenerator}
            id="value"
          />
          <InputSectionForm
            label={"Expiration"}
            type={"text"}
            value={cardsGenerator.expiration}
            onChange={handleChangeCardsGenerator}
            id="expiration"
          />
          <InputSectionForm
            label={"Prefix"}
            type={"text"}
            value={cardsGenerator.prefix}
            onChange={handleChangeCardsGenerator}
            id="prefix"
          />
          <InputSectionForm
            label={"Pin Size"}
            type={"text"}
            value={cardsGenerator.pinSize}
            onChange={handleChangeCardsGenerator}
            id="pinSize"
          />
          <SwitchSectionForm
            label={"Auto Activate"}
            value={cardsGenerator.autoActivate}
            onChange={handleChangeCardsGenerator}
            id="autoActivate"
          />
          <SelectSectionForm
            label={"Owner"}
            value={cardsGenerator.owner}
            onChange={handleChangeCardsGenerator}
            id="owner"
            options={[
              { name: "admin", value: "" },
              { name: "manager_1", value: "" },
              { name: "manager_2", value: "" },
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

export default AddEditCards;
