import { t } from "i18next";
import React from "react";

const About = () => {
  return (
    <div className="section_profile details">
      <div className="head">
        <div className="image">
          <img src="./images/logo.png" alt="" />
        </div>
      </div>

      <div className="line">
        <div className="text">
          <h5 className="title">{t("Your Company Name")}</h5>
          <div className="items">
            <a href="" className="item">
              <i className="fa fa-address-card"></i>
              <span>{t("Address goes here")}</span>
            </a>
            <a href="" className="item">
              <i className="fa fa-phone"></i>
              <span>xxx-xxx-xxx</span>
            </a>
            <a href="" className="item">
              <i className="fa fa-envelope"></i>
              <span>info@your-company.com</span>
            </a>
            <a href="" className="item">
              <i className="fa fa-globe"></i>
              <span> http://www.your-company-domain.com</span>
            </a>
          </div>
        </div>

        <div className="image">
          <img src="./images/about_netman.png" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default About;
