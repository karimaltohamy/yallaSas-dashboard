import React, { useEffect, useState } from "react";
import "./IssuingInvoiceForm.scss";
import { t } from "i18next";
import MainSection from "../../components/mainSection/MainSection";
import apiAxios from "../../utils/apiAxios";
import { encryptedData } from "../../utils/utilsFunctions";

const IssuingInvoiceForm = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    try {
      const { data } = await apiAxios.post("api/index/user", {
        payload: encryptedData({ search }),
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <MainSection
      title={"User Invoice Form"}
      icon={<i class="fa-solid fa-file-invoice-dollar"></i>}
    >
      <div className="issuing_invoice">
        <div className="search_client">
          <input
            type="text"
            placeholder="search client"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="result"></div>
        </div>
        <div className="issuing_invoice_content">
          <div className="items">
            <div className="item">
              <h4>Organization</h4>
              <span>Sender</span>
            </div>
            <div className="item">
              <h4></h4>
              <span>Administrator Snono</span>
            </div>
            <div className="item">
              <h4>Client</h4>
              <span>Recipient</span>
            </div>
            <div className="item">
              <h4></h4>
              <span>Miller Pascal.</span>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default IssuingInvoiceForm;
