import React, { Fragment, useEffect, useState } from "react";
import "./sidebar.scss";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import apiAxios from "../../utils/apiAxios";

const Sidebar = () => {
  const [openLinksList, setOpenLinksList] = useState(null);
  const { t } = useTranslation();
  const [menu, setMenu] = useState([]);

  const toggleList = (index) => {
    if (openLinksList === index) {
      setOpenLinksList(null);
    } else {
      setOpenLinksList(index);
    }
  };

  const sidebarLinks = [
    {
      title: t("Home"),
      path: "/home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zm12 1.5c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zm-10.5 7.5c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
          ></path>
        </svg>
      ),
    },
    {
      title: t("Subscribers"),
      icon: <i className="fa-regular fa-file"></i>,
      linksList: [
        {
          titleLink: t("Subscribers list"),
          pathLink: "/subscribers",
        },
        {
          titleLink: t("Online"),
          pathLink: "/subscribers-online",
        },
        {
          titleLink: t("Compensations"),
          pathLink: "/compensations-subscibers",
        },
        {
          titleLink: t("Support Tickets"),
          pathLink: "/subscriber-tickets",
        },
      ],
    },
    {
      title: t("Malfunctions"),
      icon: <i className="fa-solid fa-gear"></i>,
      linksList: [
        {
          titleLink: t("Team Leader"),
          pathLink: "/team-leader",
        },
        {
          titleLink: t("Tickets wait team"),
          pathLink: "tickets-wait-team",
        },
        {
          titleLink: t("Damage Wait"),
          pathLink: "/damage-wait",
        },
        {
          titleLink: t("Review Damage"),
          pathLink: "/review-damage",
        },
        {
          titleLink: t("Solved Tickets"),
          pathLink: "/solved-tickets",
        },
        {
          titleLink: t("Tickets Quality"),
          pathLink: "/tickets-quality",
        },
        {
          titleLink: t("Customer Installations"),
          pathLink: "/install-customer",
        },
      ],
    },
    {
      title: t("Offer of Pieces"),
      path: "/offer-pieces",
      icon: <i className="fa-solid fa-puzzle-piece"></i>,
    },
    {
      title: t("Managers"),
      path: "/managers",
      icon: <i className="fa-solid fa-people-roof"></i>,
    },
    {
      title: t("Groups"),
      path: "/groups",
      icon: <i className="fa-solid fa-user-group"></i>,
    },
    {
      title: "NAS",
      path: "/NAS",
      icon: <i className="fa-solid fa-user-group"></i>,
    },
    {
      title: t("Packages"),
      icon: <i className="fa-solid fa-cubes"></i>,
      linksList: [
        {
          titleLink: t("Package List"),
          pathLink: "/packages",
        },
        {
          titleLink: t("Pricing table"),
          pathLink: "pricing-table",
        },
        {
          titleLink: t("Consumption notices"),
          pathLink: "/consumption-notices",
        },
        {
          titleLink: t("Additional services"),
          pathLink: "/additional-services",
        },
      ],
    },
    {
      title: t("Cards"),
      path: "/Cards",
      icon: <i className="fa-regular fa-credit-card"></i>,
    },
    {
      title: t("Accounts"),
      icon: <i className="fa-solid fa-file-invoice-dollar"></i>,
      linksList: [
        {
          titleLink: t("Subscriber invoices"),
          pathLink: "/subscriber-invoices",
        },
        {
          titleLink: t("Issuing the invoice"),
          pathLink: "issuing-invoice",
        },
      ],
    },
    {
      title: t("Reports"),
      icon: <i className="fa-regular fa-clipboard"></i>,
      linksList: [
        {
          titleLink: t("Activations"),
          pathLink: "/report-activations",
        },
        {
          titleLink: t("Activation statistics"),
          pathLink: "/activation-stats",
        },
        {
          titleLink: t("Cards used"),
          pathLink: "/reportcards-usage",
        },
        {
          titleLink: t("Card transfers"),
          pathLink: "/report-cards-transfer",
        },
        {
          titleLink: t("Debt bills"),
          pathLink: "/report-debts-journal",
        },
        {
          titleLink: t("Data Export"),
          pathLink: "/report-data-export-jobs",
        },
        {
          titleLink: t("Managers' invoices"),
          pathLink: "/report-invoice-managers",
        },
        {
          titleLink: t("Financial record"),
          pathLink: "/report-journal-managers",
        },
        {
          titleLink: t("Money transfer"),
          pathLink: "/report-money-transfer",
        },
        {
          titleLink: t("Presence rate"),
          pathLink: "/report-online",
        },
        {
          titleLink: t("Profits"),
          pathLink: "/report-profits",
        },
        {
          titleLink: t("Gateway Transactions"),
          pathLink: "/payment-gateway-transaction",
        },
        {
          titleLink: t("Managers' receipts"),
          pathLink: "/report-receipts-managers",
        },
        {
          titleLink: t("Sessions"),
          pathLink: "/report-sessions",
        },
        {
          titleLink: t("Suspicious cases"),
          pathLink: "/report-suspicious",
        },
        {
          titleLink: t("Data consumption"),
          pathLink: "/report-traffic",
        },
        {
          titleLink: t("Customers"),
          pathLink: "/report-users/accordingManagers",
        },
      ],
    },
    {
      title: "Log",
      icon: <i className="fa-solid fa-clock-rotate-left"></i>,
      linksList: [
        {
          titleLink: "RADIUS Log",
          pathLink: "/log-radius",
        },
        {
          titleLink: t("System log"),
          pathLink: "system-log",
        },
        {
          titleLink: t("Login attempts"),
          pathLink: "login-attempts",
        },
      ],
    },
    {
      title: t("Tools"),
      icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
      linksList: [
        {
          titleLink: t("Dashboard Manager "),
          pathLink: "/tools-dashboard-manager",
        },
        {
          titleLink: t("Widget Factory "),
          pathLink: "/widget-factory",
        },
        {
          titleLink: t("System Services"),
          pathLink: "/system-services",
        },
        {
          titleLink: t("System Update"),
          pathLink: "/system-update",
        },
        {
          titleLink: t("System Maintenance"),
          pathLink: "/system-maintenance",
        },
        {
          titleLink: t("Announcements"),
          pathLink: "/tools-announcements",
        },
        {
          titleLink: t("Import Data"),
          pathLink: "/tools-import",
        },
        {
          titleLink: t("Speed ​​control"),
          pathLink: "/tools-bandwidth-control",
        },
        {
          titleLink: t("Backup"),
          pathLink: "/backup-index",
        },
        {
          titleLink: t("Bulk Changes"),
          pathLink: "/bulk-changes",
        },
      ],
    },
    {
      title: t("IP Pools"),
      path: "/ip-pools",
      icon: <i className="fa-solid fa-server"></i>,
    },
    {
      title: t("Options"),
      icon: <i className="fa-solid fa-gear"></i>,
      linksList: [
        {
          titleLink: t("Advanced"),
          pathLink: "/settings-advanced",
        },
        {
          titleLink: t("Backup"),
          pathLink: "/add-settings-backup",
        },
        {
          titleLink: t("Email"),
          pathLink: "/settings-email",
        },
        {
          titleLink: t("Email Templates"),
          pathLink: "/settings-email-templates",
        },
        {
          titleLink: t("Free Zone"),
          pathLink: "/settings-freezone",
        },
        {
          titleLink: t("Fields"),
          pathLink: "/settings-forms",
        },
        {
          titleLink: t("General options"),
          pathLink: "/settings-general",
        },

        {
          titleLink: t("License"),
          pathLink: "/settings-license",
        },
        {
          titleLink: t("Network"),
          pathLink: "/settings-network",
        },

        {
          titleLink: t("Notfication"),
          pathLink: "/settings-notifications",
        },
        {
          titleLink: t("Permissions"),
          pathLink: "/settings-acl",
        },

        {
          titleLink: t("Payment Gateway"),
          pathLink: "/settings-paymentgateways",
        },
        {
          titleLink: t("Invoice"),
          pathLink: "/settings-billing",
        },
        {
          titleLink: t("Sites"),
          pathLink: "/settings-sites",
        },
        {
          titleLink: t("Sms"),
          pathLink: "/settings-sms",
        },
        {
          titleLink: t("SASTrack"),
          pathLink: "/settings-sastrack",
        },
        {
          titleLink: t("Telegram"),
          pathLink: "/settings-telegraml",
        },
        {
          titleLink: t("Subscribers panel"),
          pathLink: "/settings-ucp",
        },
        {
          titleLink: t("Web"),
          pathLink: "/settings-web",
        },
      ],
    },
    {
      title: t("About the company"),
      path: "/about-company/about",
      icon: <i className="fa-solid fa-info"></i>,
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiAxios.get("api/resources/menu");
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Fragment>
      <div className="overflow_sidebar"></div>
      <div className="sidebar">
        <div className="header_sidebar text-center">
          <img src={logo} alt="logo" loading="lazy" className="mx-auto" />
        </div>
        <div className="links">
          {sidebarLinks &&
            sidebarLinks.map((item, index) => {
              if (!item.linksList) {
                return (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "link_item active" : "link_item"
                    }
                    key={index}
                  >
                    <div className="text">
                      <div className="icon">{item.icon}</div>
                      <span>{item.title}</span>
                    </div>
                  </NavLink>
                );
              } else {
                return (
                  <div className="mini_list" key={index}>
                    <div
                      className={`link_item ${
                        openLinksList === index ? "active" : ""
                      }`}
                      onClick={() => toggleList(index)}
                      key={index}
                    >
                      <div className="text">
                        <div className="icon">{item.icon}</div>
                        <span>{item.title}</span>
                      </div>
                      <i className="fa-solid fa-angle-right arrow"></i>
                    </div>
                    <ul
                      className={`list list1 ${
                        openLinksList === index ? "open" : ""
                      }`}
                    >
                      {item.linksList &&
                        item.linksList.map((link, i) => {
                          return (
                            <li key={i}>
                              <i className="fa-solid fa-minus"></i>
                              <NavLink
                                to={link.pathLink}
                                key={i}
                                className={({ isActive }) =>
                                  isActive ? "active" : ""
                                }
                              >
                                {link.titleLink}
                              </NavLink>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
