import React from "react";
import NavProfile from "../../../components/navProfile/NavProfile";
import { Outlet } from "react-router-dom";
import { t } from "i18next";

const ProfileManager = () => {
  const itemsNev = [
    {
      title: t("managers_tab_overview"),
      icon: <i className="fa-regular fa-user"></i>,
      path: "general",
    },
    {
      title: t("managers_tab_edit"),
      icon: <i className="fa-regular fa-pen-to-square"></i>,
      path: "edit",
    },
    {
      title: t("managers_tab_invoices"),
      icon: <i className="fa-solid fa-ticket"></i>,
      path: "invoices",
    },
    {
      title: t("managers_tab_payments"),
      icon: <i className="fa-solid fa-receipt"></i>,
      path: "receipt",
    },
    {
      title: t("managers_tab_journal"),
      icon: <i className="fa-solid fa-file-invoice"></i>,
      path: "registerAccounts",
    },
  ];
  return (
    <div className="content_page">
      <NavProfile itemsNev={itemsNev} />
      <Outlet />
    </div>
  );
};

export default ProfileManager;
