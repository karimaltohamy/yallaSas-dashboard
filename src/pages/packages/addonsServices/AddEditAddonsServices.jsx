import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";

const AddEditAddonsServices = ({ typePage }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [addonForm, setAddonForm] = useState({
    name: "",
    expiration_amount: "1",
    expiration_unit: 1,
    set_address_list: false,
    address_list: null,
    set_pool_name: false,
    pool_name: "testpool",
    call_url: false,
    url: null,
    pricing_type: 1,
    price: "",
    description: "",
  });

  const handleChangeAddonForm = (e) => {
    setAddonForm((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleForm = async () => {
    setLoading(true);
    const addonFormFormTransform = {
      ...addonForm,
      set_address_list: addonForm.set_address_list ? 1 : 0,
      set_pool_name: addonForm.set_pool_name ? 1 : 0,
      call_url: addonForm.call_url ? 1 : 0,
    };
    try {
      if (typePage == "addPage") {
        await apiAxios.post("api/Addon", {
          payload: encryptedData(addonFormFormTransform),
        });
      } else if (typePage == "editPage") {
        await apiAxios.put(`api/Addon/${id}`, {
          payload: encryptedData(addonFormFormTransform),
        });
      }
      toast.success("Successful add");
      navigate(-1);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content_page">
      <SectionForm title={t("Addon Form")}>
        <InputSectionForm
          label={t("Name")}
          type={"text"}
          value={addonForm.name}
          onChange={handleChangeAddonForm}
          id="name"
          required={true}
        />
        <SelectSectionForm
          label={t("Expiration")}
          value={addonForm.expiration_unit}
          onChange={handleChangeAddonForm}
          id="expiration_unit"
          options={[
            { name: "day(s)", value: "0" },
            { name: "month(s)", value: "1" },
            { name: "hour(s)", value: "2" },
          ]}
          valueInput={addonForm.expiration_amount}
          onChangeInput={handleChangeAddonForm}
          idInput={"expiration_amount"}
          input={true}
          type={"number"}
          required={true}
        />
        <SwitchSectionForm
          label={t("Set Mikrotik Address List")}
          value={addonForm.set_address_list}
          onChange={handleChangeAddonForm}
          id="set_address_list"
        />
        {addonForm.set_address_list && (
          <InputSectionForm
            label={t("Address List Name")}
            type={"text"}
            value={addonForm.address_list}
            onChange={handleChangeAddonForm}
            id="address_list"
          />
        )}
        <SwitchSectionForm
          label={t("Set Pool Name")}
          value={addonForm.set_pool_name}
          onChange={handleChangeAddonForm}
          id="set_pool_name"
        />
        {addonForm.set_pool_name && (
          <InputSectionForm
            label={t("Pool Name")}
            type={"text"}
            value={addonForm.pool_name}
            onChange={handleChangeAddonForm}
            id="pool_name"
          />
        )}
        <SwitchSectionForm
          label={t("Call Url On Connect")}
          value={addonForm.call_url}
          onChange={handleChangeAddonForm}
          id="call_url"
        />
        {addonForm.call_url && (
          <InputSectionForm
            label={t("Pool Name")}
            type={"text"}
            value={addonForm.url}
            onChange={handleChangeAddonForm}
            id="url"
          />
        )}
        <SelectSectionForm
          label={t("Pricing Mode")}
          value={addonForm.pricing_type}
          onChange={handleChangeAddonForm}
          id="pricing_type"
          options={[
            { name: "Percentage of User's Profile Price", value: 0 },
            { name: "Fixed Price", value: 1 },
          ]}
          required={true}
        />
        <InputSectionForm
          label={t("Price")}
          type={"text"}
          value={addonForm.price}
          onChange={handleChangeAddonForm}
          id="price"
          required={true}
        />
        <InputSectionForm
          label={t("Description")}
          type={"text"}
          value={addonForm.description}
          onChange={handleChangeAddonForm}
          id="description"
          required={true}
        />
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add" onClick={handleForm}>
          {t("global_button_submit")}
        </button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default AddEditAddonsServices;
