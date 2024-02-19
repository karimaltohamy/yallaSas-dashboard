import React, { useState } from "react";
import SectionForm from "../../components/sectionform/SectionForm";
import InputSectionForm from "../../components/sectionform/InputSectionForm";
import { t } from "i18next";

const AddIpPools = () => {
  const [ipPool, setIpPool] = useState({
    poolName: "",
    leaseTime: "",
    startIp: "",
    endIp: "",
  });

  const handleChangeIpPool = (e) => {
    setIpPool((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={t("IP Pool Form")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("Pool Name")}
            type={"text"}
            value={ipPool.poolName}
            onChange={handleChangeIpPool}
            id="poolName"
          />
          <InputSectionForm
            label={t("Lease Time (hours)")}
            type={"text"}
            value={ipPool.leaseTime}
            onChange={handleChangeIpPool}
            id="leaseTime"
          />
          <InputSectionForm
            label={t("Start IP")}
            type={"text"}
            value={ipPool.startIp}
            onChange={handleChangeIpPool}
            id="startIp"
          />
          <InputSectionForm
            label={t("End IP")}
            type={"text"}
            value={ipPool.endIp}
            onChange={handleChangeIpPool}
            id="endIp"
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">{t("global_button_submit")}</button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
    </div>
  );
};

export default AddIpPools;
