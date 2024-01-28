import React, { useState } from "react";
import SectionForm from "../../components/sectionform/SectionForm";
import InputSectionForm from "../../components/sectionform/InputSectionForm";

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
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={"IP Pool Form"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"Pool Name"}
            type={"text"}
            value={ipPool.poolName}
            onChange={handleChangeIpPool}
            id="poolName"
          />
          <InputSectionForm
            label={"Lease Time (hours)"}
            type={"text"}
            value={ipPool.leaseTime}
            onChange={handleChangeIpPool}
            id="leaseTime"
          />
          <InputSectionForm
            label={"Start IP"}
            type={"text"}
            value={ipPool.startIp}
            onChange={handleChangeIpPool}
            id="startIp"
          />
          <InputSectionForm
            label={"End IP"}
            type={"text"}
            value={ipPool.endIp}
            onChange={handleChangeIpPool}
            id="endIp"
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

export default AddIpPools;
