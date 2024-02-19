import React from "react";
import { Outlet } from "react-router-dom";
import NavProfile from "../../../components/navProfile/NavProfile";
import { t } from "i18next";

const ProfileSubscriber = () => {
  const itemsNev = [
    {
      title: t("users_action_view"),
      icon: <i className="fa-regular fa-user"></i>,
      path: "general",
    },
    {
      title: t("users_tab_edit"),
      icon: <i className="fa-regular fa-pen-to-square"></i>,
      path: "edit",
    },
    {
      title: t("menu_reports_traffic"),
      icon: <i className="fa-solid fa-sliders"></i>,
      path: "consumption",
    },
    {
      title: t("menu_reports_sessions"),
      icon: <i className="fa-solid fa-inbox"></i>,
      path: "sessions",
    },
    {
      title: t("users_tab_invoices"),
      icon: <i className="fa-solid fa-ticket"></i>,
      path: "invoices",
    },
    {
      title: t("users_tab_payments"),
      icon: <i className="fa-solid fa-money-bill"></i>,
      path: "payments",
    },
    {
      title: t("users_tab_history"),
      icon: <i className="fa-regular fa-folder"></i>,
      path: "record",
    },
    {
      title: t("users_tab_documents"),
      icon: <i className="fa-regular fa-folder-open"></i>,
      path: "documents",
    },
    {
      title: t("users_tab_radius"),
      icon: <i className="fa-solid fa-hashtag"></i>,
      path: "radius",
    },
    {
      title: t("users_tab_journal"),
      icon: <i className="fa-regular fa-address-book"></i>,
      path: "financial-record",
    },
    {
      title: t("users_tab_freezone_traffic"),
      icon: <i className="fa-solid fa-globe"></i>,
      path: "free-zone",
    },
    {
      title: t("users_tab_quota"),
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
