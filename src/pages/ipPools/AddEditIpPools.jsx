import React, { useEffect, useState } from "react";
import SectionForm from "../../components/sectionform/SectionForm";
import InputSectionForm from "../../components/sectionform/InputSectionForm";
import { t } from "i18next";
import { useNavigate, useParams } from "react-router-dom";
import apiAxios from "../../utils/apiAxios";
import { encryptedData } from "../../utils/utilsFunctions";
import { toast } from "react-toastify";

const AddEditIpPools = ({ typePage }) => {
  const { id } = useParams();
  const [loading, setLaoding] = useState(false);
  const [ipPool, setIpPool] = useState({
    name: "",
    lease_time: "",
    start_ip: "",
    end_ip: "",
  });
  const navigate = useNavigate();

  const handleChangeIpPool = (e) => {
    setIpPool((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const getIpPool = async () => {
    try {
      const { data } = await apiAxios.get(`api/ippool/${id}`);
      setIpPool((prev) => {
        return {
          ...prev,
          name: data.data && data.data.name,
          lease_time: data.data && data.data.lease_time,
          start_ip: data.data && data.data.start_ip,
          end_ip: data.data && data.data.end_ip,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    setLaoding(true);
    let data;
    try {
      if (typePage == "addPage") {
        data = await apiAxios.post("api/ippool", {
          payload: encryptedData(ipPool),
        });
      } else {
        data = await apiAxios.put(`api/ippool/${id}`, {
          payload: encryptedData(ipPool),
        });
      }
      toast.success("Successful operation");
      toast.success(data.data.message && data.data.message[0]);
      navigate(-1);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    } finally {
      setLaoding(false);
    }
  };

  useEffect(() => {
    id && getIpPool();
  }, []);

  return (
    <div className="content_page">
      <SectionForm title={t("IP Pool Form")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("ippool_form_name")}
            type={"text"}
            value={ipPool.name}
            onChange={handleChangeIpPool}
            id="name"
          />
          <InputSectionForm
            label={t("ippool_form_lease_time")}
            type={"text"}
            value={ipPool.lease_time}
            onChange={handleChangeIpPool}
            id="lease_time"
          />
          <InputSectionForm
            label={t("ippool_form_start_ip")}
            type={"text"}
            value={ipPool.start_ip}
            onChange={handleChangeIpPool}
            placeholder={"0.0.0.0"}
            id="start_ip"
          />
          <InputSectionForm
            label={t("ippool_form_end_ip")}
            type={"text"}
            value={ipPool.end_ip}
            onChange={handleChangeIpPool}
            placeholder={"0.0.0.0"}
            id="end_ip"
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add" onClick={handleSubmit}>
          {t("global_button_submit")}
        </button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
    </div>
  );
};

export default AddEditIpPools;
