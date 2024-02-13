import React from "react";
import NavProfile from "../../components/navProfile/NavProfile";
import "./aboutCompany.scss";
import { Outlet } from "react-router-dom";
import { t } from "i18next";

const AboutCompany = () => {
  const itemsNev = [
    {
      title: t("About the company"),
      icon: <i className="fa-solid fa-info"></i>,
      path: "about",
    },
    {
      title: t("Hardware"),
      icon: <i className="fa-solid fa-server"></i>,
      path: "hardware",
    },
  ];

  return (
    <div className="content_about_company">
      <NavProfile itemsNev={itemsNev} />
      <Outlet />
    </div>
  );
};

export default AboutCompany;
