import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";

const AddEditAddonsServices = () => {
  const [addonForm, setAddonForm] = useState({
    name: "",
    expirationNumber: "",
    expirationType: "",
    pricingMode: "",
    price: "",
    description: "",
    mikrotikAddressList: "",
    poolName: "",
    callUrlConnect: "",
  });

  const handleChangeAddonForm = (e) => {
    setAddonForm((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={"Addon Form"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"Name"}
            type={"text"}
            value={addonForm.name}
            onChange={handleChangeAddonForm}
            id="name"
          />
          <SelectSectionForm
            label={"Expiration"}
            value={addonForm.expirationType}
            onChange={handleChangeAddonForm}
            id="expirationType"
            options={[
              { name: "day(s)", value: "" },
              { name: "month(s)", value: "" },
              { name: "hour(s)", value: "" },
            ]}
            valueInput={addonForm.expirationNumber}
            onChangeInput={handleChangeAddonForm}
            idInput={"expirationNumber"}
            input={true}
            type={"number"}
          />
          <SelectSectionForm
            label={"Pricing Mode"}
            value={addonForm.pricingMode}
            onChange={handleChangeAddonForm}
            id="pricingMode"
            options={[
              { name: "Percentage of User's Profile Price", value: "" },
              { name: "Fixed Price", value: "" },
            ]}
          />
          <InputSectionForm
            label={"Price"}
            type={"text"}
            value={addonForm.price}
            onChange={handleChangeAddonForm}
            id="price"
          />
          <InputSectionForm
            label={"Description"}
            type={"text"}
            value={addonForm.description}
            onChange={handleChangeAddonForm}
            id="description"
          />
          <SwitchSectionForm
            label={"Set Mikrotik Address List"}
            value={addonForm.mikrotikAddressList}
            onChange={handleChangeAddonForm}
            id="mikrotikAddressList"
          />
          <SwitchSectionForm
            label={"Set Pool Name"}
            value={addonForm.poolName}
            onChange={handleChangeAddonForm}
            id="poolName"
          />
          <SwitchSectionForm
            label={"Call Url On Connect"}
            value={addonForm.callUrlConnect}
            onChange={handleChangeAddonForm}
            id="callUrlConnect"
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

export default AddEditAddonsServices;
