import React from "react";
import NavProfile from "../../../components/navProfile/NavProfile";
import { Outlet } from "react-router-dom";

const ReportUsers = () => {
  const itemsNev = [
    {
      title: "According to managers",
      icon: <i className="fa-regular fa-user"></i>,
      path: "accordingManagers",
    },
    {
      title: "According to the service",
      icon: <i className="fa-solid fa-bell-concierge"></i>,
      path: "accordingService",
    },
    {
      title: "By registration date",
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
