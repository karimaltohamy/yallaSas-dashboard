import React from "react";
import { Outlet } from "react-router-dom";
import NavProfile from "../../../components/navProfile/NavProfile";
import { t } from "i18next";

const ProfileSubscriber = () => {
  const itemsNev = [
    {
      title: t("General"),
      icon: <i className="fa-regular fa-user"></i>,
      path: "general",
    },
    {
      title: t("Edit"),
      icon: <i className="fa-regular fa-pen-to-square"></i>,
      path: "edit",
    },
    {
      title: t("Consumption"),
      icon: <i className="fa-solid fa-sliders"></i>,
      path: "consumption",
    },
    {
      title: t("Sessions"),
      icon: <i className="fa-solid fa-inbox"></i>,
      path: "sessions",
    },
    {
      title: t("Invoices"),
      icon: <i className="fa-solid fa-ticket"></i>,
      path: "invoices",
    },
    {
      title: t("Payments"),
      icon: <i className="fa-solid fa-money-bill"></i>,
      path: "payments",
    },
    {
      title: t("Record"),
      icon: <i className="fa-regular fa-folder"></i>,
      path: "record",
    },
    {
      title: t("Documents"),
      icon: <i className="fa-regular fa-folder-open"></i>,
      path: "documents",
    },
    {
      title: t("RADIUS"),
      icon: <i className="fa-solid fa-hashtag"></i>,
      path: "radius",
    },
    {
      title: t("Financial record"),
      icon: <i className="fa-regular fa-address-book"></i>,
      path: "financial-record",
    },
    {
      title: t("Free Zone"),
      icon: <i className="fa-solid fa-globe"></i>,
      path: "free-zone",
    },
    {
      title: t("quotas"),
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
