import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";
import { useNavigate, useParams } from "react-router-dom";

const AddEditGroup = ({ typePage }) => {
  const { id } = useParams();
  const [group, setGroup] = useState({});
  const [loading, setLaoding] = useState(false);
  const [generalinformation, setGeneralinformation] = useState({
    groupName: "",
    details: "",
  });
  const navigate = useNavigate();

  const handleChangeGeneralInformation = (e) => {
    setGeneralinformation((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const getGroup = async () => {
    try {
      const { data } = await apiAxios.get(`api/group/${id}`);
      setGroup(data.data);
      setGeneralinformation((prev) => {
        return {
          ...prev,
          groupName: data.data && data.data.name,
          details: data.data && data.data.description,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    setLaoding(true);
    try {
      if (typePage == "addPage") {
        await apiAxios.post("api/group", {
          payload: encryptedData({
            name: generalinformation.groupName,
            description: generalinformation.details,
          }),
        });
      } else {
        await apiAxios.put(`api/group/${id}`, {
          payload: encryptedData({
            name: generalinformation.groupName,
            description: generalinformation.details,
          }),
        });
      }
      toast.success("Successful operation");
      navigate(-1);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    } finally {
      setLaoding(false);
    }
  };

  useEffect(() => {
    getGroup();
  }, []);

  return (
    <div className="content_page">
      <SectionForm title={t("group_form_name")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("group_form_name")}
            type={"text"}
            value={generalinformation.groupName}
            onChange={handleChangeGeneralInformation}
            id="groupName"
          />
          <InputSectionForm
            label={t("global_description")}
            type={"text"}
            value={generalinformation.details}
            onChange={handleChangeGeneralInformation}
            id="details"
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add" onClick={handleSubmit}>
          {t("global_button_submit")}
        </button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default AddEditGroup;
