import React from "react";
import "./licenseSettings.scss";
import MainSection from "../../../components/mainSection/MainSection";
import { t } from "i18next";

const LicenseSettings = () => {
  return (
    <div className="m-[10px]">
      <MainSection
        title={t("License Settings")}
        icon={<i class="fa-solid fa-asterisk"></i>}
      >
        <div class="settings_license_content">
          <div class="boxs_details">
            <div class="item">
              <h6>{t("License ID")}</h6>
              <span>4173 </span>
            </div>
            <div class="item">
              <h6>{t("Hardware ID")}</h6>
              <span>46662-N9N9N-9NT99-8NB48 </span>
            </div>
            <div class="item">
              <h6>{t("Status")}</h6>
              <span class="status">Active </span>
            </div>
            <div class="item">
              <h6>{t("Expiration")}</h6>
              <span class="status">2025-06-20 12:00:00 </span>
            </div>
            <div class="item">
              <h6>{t("Client ID")}</h6>
              <span class="status">N/A </span>
            </div>
            <div class="item">
              <h6>{t("Max Users")}</h6>
              <span class="status">100 </span>
            </div>
            <div class="item">
              <h6>{t("Max Sites")}</h6>
              <span class="status">1 </span>
            </div>
          </div>

          <div class="btns_actions">
            <button class="btn_action reload">
              <i class="fa-solid fa-rotate"></i>
              <span> {t("Reload License")}</span>
            </button>
            <button class="btn_action">
              <i class="fa-solid fa-arrow-up-wide-short"></i>
              <span> {t("Upgrade")}</span>
            </button>
            <button class="btn_action">
              <i class="fa-solid fa-arrow-up-wide-short"></i>
              <span> {t("Renew")}</span>
            </button>
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default LicenseSettings;
