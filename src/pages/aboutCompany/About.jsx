import { t } from "i18next";
import React from "react";

const About = () => {
  return (
    <div class="section_profile details">
      <div class="head">
        <div class="image">
          <img src="./images/logo.png" alt="" />
        </div>
      </div>

      <div class="line">
        <div class="text">
          <h5 class="title">{t("Your Company Name")}</h5>
          <div class="items">
            <a href="" class="item">
              <i class="fa fa-address-card"></i>
              <span>{t("Address goes here")}</span>
            </a>
            <a href="" class="item">
              <i class="fa fa-phone"></i>
              <span>xxx-xxx-xxx</span>
            </a>
            <a href="" class="item">
              <i class="fa fa-envelope"></i>
              <span>info@your-company.com</span>
            </a>
            <a href="" class="item">
              <i class="fa fa-globe"></i>
              <span> http://www.your-company-domain.com</span>
            </a>
          </div>
        </div>

        <div class="image">
          <img src="./images/about_netman.png" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default About;
