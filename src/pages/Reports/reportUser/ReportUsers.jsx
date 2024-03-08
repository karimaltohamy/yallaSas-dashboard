import React from "react";
import NavProfile from "../../../components/navProfile/NavProfile";
import { Outlet } from "react-router-dom";
import { t } from "i18next";

const ReportUsers = () => {
  const itemsNev = [
    {
      title: t("report_users_per_manager_title"),
      icon: <i className="fa-regular fa-user"></i>,
      path: "accordingManagers",
    },
    {
      title: t("report_users_per_profile_title"),
      icon: <i className="fa-solid fa-bell-concierge"></i>,
      path: "accordingService",
    },
    {
      title: t("report_users_registrations_title"),
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
