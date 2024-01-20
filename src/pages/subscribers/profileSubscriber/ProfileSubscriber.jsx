import React from "react";
import { Outlet } from "react-router-dom";
import NavProfile from "../../../components/navProfile/NavProfile";

const ProfileSubscriber = () => {
  const itemsNev = [
    {
      title: "General",
      icon: <i className="fa-regular fa-user"></i>,
      path: "general",
    },
    {
      title: "Edit",
      icon: <i className="fa-regular fa-pen-to-square"></i>,
      path: "edit",
    },
    {
      title: "Consumption",
      icon: <i className="fa-solid fa-sliders"></i>,
      path: "consumption",
    },
    {
      title: "Sessions",
      icon: <i className="fa-solid fa-inbox"></i>,
      path: "sessions",
    },
    {
      title: "Invoices",
      icon: <i className="fa-solid fa-ticket"></i>,
      path: "invoices",
    },
    {
      title: "Payments",
      icon: <i className="fa-solid fa-money-bill"></i>,
      path: "payments",
    },
    {
      title: "Record",
      icon: <i className="fa-regular fa-folder"></i>,
      path: "record",
    },
    {
      title: "Documents",
      icon: <i className="fa-regular fa-folder-open"></i>,
      path: "documents",
    },
    {
      title: "RADIUS",
      icon: <i className="fa-solid fa-hashtag"></i>,
      path: "radius",
    },
    {
      title: "Financial record",
      icon: <i className="fa-regular fa-address-book"></i>,
      path: "financial-record",
    },
    {
      title: "Free Zone",
      icon: <i className="fa-solid fa-globe"></i>,
      path: "free-zone",
    },
    {
      title: "quotas",
      icon: <i className="fa-solid fa-person-chalkboard"></i>,
      path: "quotas",
    },
  ];
  return (
    <div className="content_page">
      <NavProfile itemsNev={itemsNev} />
      <Outlet />
    </div>
  );
};

export default ProfileSubscriber;
