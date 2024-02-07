import React from "react";
import NavProfile from "../../../components/navProfile/NavProfile";
import { Outlet } from "react-router-dom";
import { t } from "i18next";

const ReportUsers = () => {
  const itemsNev = [
    {
      title: t("According to managers"),
      icon: <i className="fa-regular fa-user"></i>,
      path: "accordingManagers",
    },
    {
      title: t("According to the service"),
      icon: <i className="fa-solid fa-bell-concierge"></i>,
      path: "accordingService",
    },
    {
      title: t("By registration date"),
      icon: <i className="fa-solid fa-sliders"></i>,
      path: "registrationDate",
    },
  ];

  return (
    <div className="content_page">
      <NavProfile itemsNev={itemsNev} />
      <Outlet />
    </div>
  );
};

export default ReportUsers;
