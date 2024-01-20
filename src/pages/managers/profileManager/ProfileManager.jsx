import React from "react";
import NavProfile from "../../../components/navProfile/NavProfile";
import { Outlet } from "react-router-dom";

const ProfileManager = () => {
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
      title: "Invoices",
      icon: <i className="fa-solid fa-ticket"></i>,
      path: "invoices",
    },
    {
      title: "Receipt",
      icon: <i className="fa-solid fa-receipt"></i>,
      path: "receipt",
    },
    {
      title: "Register the accounts",
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
