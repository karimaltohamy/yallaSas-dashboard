import React, { useEffect, useState } from "react";
import "./licenseSettings.scss";
import MainSection from "../../../components/mainSection/MainSection";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import Loader from "../../../components/loader/Loader";

const LicenseSettings = () => {
  const [license, setLicense] = useState({});
  const [loading, setLoading] = useState(false);

  const getLicense = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get("api/license");
      setLicense(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLicense();
  }, []);

  return (
    <div className="m-[10px]">
      <MainSection
        title={t("License Settings")}
        icon={<i className="fa-solid fa-asterisk"></i>}
      >
        <div className="settings_license_content">
          <div className="btns_actions">
            <button className="btn_action reload" onClick={getLicense}>
              <i className="fa-solid fa-rotate"></i>
              <span> {t("Reload License")}</span>
            </button>
          </div>
          <div className="boxs_details">
            <div className="item">
              <div className="icon bg-[#ECF2FF]">
                <i class="fa-regular fa-id-badge text-[#6562fd]"></i>
              </div>
              <div>
                <h6>{t("License ID")}</h6>
                <span>{license.id && license.id} </span>
              </div>
            </div>
            <div className="item">
              <div className="icon bg-[#E8F7FF]">
                <i class="fa-solid fa-microchip text-[#49bffe]"></i>
              </div>
              <div>
                <h6>{t("Hardware ID")}</h6>
                <span>{license.hwid && license.hwid} </span>
              </div>
            </div>
            <div className="item">
              <div className="icon bg-[#FEF5E5]">
                <i class="fa-solid fa-signal text-[#fcbb4b]"></i>
              </div>
              <div>
                <h6>{t("Status")}</h6>
                <span className="status">
                  {license.st == "1" ? "Active" : "Not Active"}{" "}
                </span>
              </div>
            </div>
            <div className="item">
              <div className="icon bg-[#FDEDE8]">
                <i class="fa-solid fa-lungs text-[#f9754c]"></i>
              </div>
              <div>
                <h6>{t("Expiration")}</h6>
                <span className="status">{license.exp && license.exp} </span>
              </div>
            </div>
            <div className="item">
              <div className="icon bg-[#E6FFFA]">
                <i class="fa-solid fa-mug-hot text-[#49feda]"></i>
              </div>
              <div>
                <h6>{t("Client ID")}</h6>
                <span className="status">{license.pid && license.pid} </span>
              </div>
            </div>
            <div className="item">
              <div className="icon bg-[#ECF2FF]">
                <i class="fa-solid fa-users text-[#6562fd]"></i>
              </div>
              <div>
                <h6>{t("Max Users")}</h6>
                <span className="status">{license.mu && license.mu} </span>
              </div>
            </div>
            <div className="item">
              <div className="icon bg-[#E8F7FF]">
                <i class="fa-solid fa-sitemap text-[#49bffe]"></i>
              </div>
              <div>
                <h6>{t("Max Sites")}</h6>
                <span className="status">{license.ms && license.ms} </span>
              </div>
            </div>
          </div>
        </div>
      </MainSection>
      {loading && <Loader />}
    </div>
  );
};

export default LicenseSettings;
