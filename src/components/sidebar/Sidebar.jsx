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
      title: t("menu_dashboard"),
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
      title: t("menu_users"),
      icon: <i className="fa-regular fa-file"></i>,
      linksList: [
        {
          titleLink: t("menu_users_list"),
          pathLink: "/subscribers",
        },
        {
          titleLink: t("menu_users_online"),
          pathLink: "/subscribers-online",
        },
        {
          titleLink: t("menu_users_compensation"),
          pathLink: "/compensations-subscibers",
        },
        {
          titleLink: t("menu_users_tickets"),
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
      title: t("menu_managers"),
      path: "/managers",
      icon: <i className="fa-solid fa-people-roof"></i>,
    },
    {
      title: t("menu_groups"),
      path: "/groups",
      icon: <i className="fa-solid fa-user-group"></i>,
    },
    {
      title: t("menu_nas"),
      path: "/NAS",
      icon: <i className="fa-solid fa-user-group"></i>,
    },
    {
      title: t("menu_profiles"),
      icon: <i className="fa-solid fa-cubes"></i>,
      linksList: [
        {
          titleLink: t("menu_profiles_list"),
          pathLink: "/packages",
        },
        {
          titleLink: t("menu_profiles_pricing"),
          pathLink: "pricing-table",
        },
        {
          titleLink: t("menu_profiles_usage_notifications"),
          pathLink: "/consumption-notices",
        },
        {
          titleLink: t("menu_profiles_addons"),
          pathLink: "/additional-services",
        },
      ],
    },
    {
      title: t("menu_cards"),
      path: "/Cards",
      icon: <i className="fa-regular fa-credit-card"></i>,
    },
    {
      title: t("menu_billing"),
      icon: <i className="fa-solid fa-file-invoice-dollar"></i>,
      linksList: [
        {
          titleLink: t("menu_billing_user_invoices"),
          pathLink: "/subscriber-invoices",
        },
        {
          titleLink: t("menu_billing_user_invoice_issue"),
          pathLink: "issuing-invoice",
        },
      ],
    },
    {
      title: t("menu_reports"),
      icon: <i className="fa-regular fa-clipboard"></i>,
      linksList: [
        {
          titleLink: t("menu_reports_activations"),
          pathLink: "/report-activations",
        },
        {
          titleLink: t("menu_reports_activations_stats"),
          pathLink: "/activation-stats",
        },
        {
          titleLink: t("menu_reports_cards_usage"),
          pathLink: "/reportcards-usage",
        },
        {
          titleLink: t("menu_reports_cards_transfers"),
          pathLink: "/report-cards-transfer",
        },
        {
          titleLink: t("menu_reports_debts"),
          pathLink: "/report-debts-journal",
        },
        {
          titleLink: t("menu_reports_export"),
          pathLink: "/report-data-export-jobs",
        },
        {
          titleLink: t("menu_reports_managers_invoices"),
          pathLink: "/report-invoice-managers",
        },
        {
          titleLink: t("menu_reports_managers_journal"),
          pathLink: "/report-journal-managers",
        },
        {
          titleLink: t("menu_reports_money_transfer"),
          pathLink: "/report-money-transfer",
        },
        {
          titleLink: t("menu_reports_online"),
          pathLink: "/report-online",
        },
        {
          titleLink: t("menu_reports_profits"),
          pathLink: "/report-profits",
        },
        {
          titleLink: t("menu_reports_payment_gateway_transactions"),
          pathLink: "/payment-gateway-transaction",
        },
        {
          titleLink: t("menu_reports_managers_receipts"),
          pathLink: "/report-receipts-managers",
        },
        {
          titleLink: t("menu_reports_sessions"),
          pathLink: "/report-sessions",
        },
        {
          titleLink: t("menu_reports_suspicious"),
          pathLink: "/report-suspicious",
        },
        {
          titleLink: t("menu_reports_traffic"),
          pathLink: "/report-traffic",
        },
        {
          titleLink: t("menu_report_users"),
          pathLink: "/report-users/accordingManagers",
        },
      ],
    },
    {
      title: t("menu_log"),
      icon: <i className="fa-solid fa-clock-rotate-left"></i>,
      linksList: [
        {
          titleLink: t("menu_log_radius"),
          pathLink: "/log-radius",
        },
        {
          titleLink: t("menu_reports_syslog"),
          pathLink: "system-log",
        },
        {
          titleLink: t("menu_reports_user_auth_logs"),
          pathLink: "login-attempts",
        },
      ],
    },
    {
      title: t("menu_reports_user_auth_log"),
      icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
      linksList: [
        {
          titleLink: t("menu_tools_dashboard_manager"),
          pathLink: "/tools-dashboard-manager",
        },
        {
          titleLink: t("menu_tools_widget_factory"),
          pathLink: "/widget-factory",
        },
        {
          titleLink: t("menu_tools_system_services"),
          pathLink: "/system-services",
        },
        {
          titleLink: t("menu_tools_system_update"),
          pathLink: "/system-update",
        },
        {
          titleLink: t("menu_tools_maintenance"),
          pathLink: "/system-maintenance",
        },
        {
          titleLink: t("menu_tools_announcements"),
          pathLink: "/tools-announcements",
        },
        {
          titleLink: t("menu_tools_import"),
          pathLink: "/tools-import",
        },
        {
          titleLink: t("menu_bandwidth_controller"),
          pathLink: "/tools-bandwidth-control",
        },
        {
          titleLink: t("menu_settings_backup"),
          pathLink: "/backup-index",
        },
        {
          titleLink: t("menu_tools_bulk_changes"),
          pathLink: "/bulk-changes",
        },
      ],
    },
    {
      title: t("menu_ip_pools"),
      path: "/ip-pools",
      icon: <i className="fa-solid fa-server"></i>,
    },
    {
      title: t("menu_settings"),
      icon: <i className="fa-solid fa-gear"></i>,
      linksList: [
        {
          titleLink: t("menu_settings_advanced"),
          pathLink: "/settings-advanced",
        },
        {
          titleLink: t("menu_settings_backup"),
          pathLink: "/add-settings-backup",
        },
        {
          titleLink: t("menu_settings_email"),
          pathLink: "/settings-email",
        },
        {
          titleLink: t("menu_settings_email_template"),
          pathLink: "/settings-email-templates",
        },
        {
          titleLink: t("menu_settings_freezone"),
          pathLink: "/settings-freezone",
        },
        {
          titleLink: t("menu_settings_forms"),
          pathLink: "/settings-forms",
        },
        {
          titleLink: t("menu_settings_general"),
          pathLink: "/settings-general",
        },

        {
          titleLink: t("menu_settings_license"),
          pathLink: "/settings-license",
        },
        {
          titleLink: t("menu_settings_network"),
          pathLink: "/settings-network",
        },

        {
          titleLink: t("menu_settings_notifications"),
          pathLink: "/settings-notifications",
        },
        {
          titleLink: t("menu_settings_acl"),
          pathLink: "/settings-acl",
        },

        {
          titleLink: t("menu_settings_payment_gateways"),
          pathLink: "/settings-paymentgateways",
        },
        {
          titleLink: t("menu_settings_billing"),
          pathLink: "/settings-billing",
        },
        {
          titleLink: t("menu_settings_sites"),
          pathLink: "/settings-sites",
        },
        {
          titleLink: t("menu_settings_sms"),
          pathLink: "/settings-sms",
        },
        {
          titleLink: t("menu_settings_sastrack"),
          pathLink: "/settings-sastrack",
        },
        {
          titleLink: t("menu_settings_telegram"),
          pathLink: "/settings-telegraml",
        },
        {
          titleLink: t("menu_settings_ucp"),
          pathLink: "/settings-ucp",
        },
        {
          titleLink: t("menu_settings_portal"),
          pathLink: "/settings-web",
        },
      ],
    },
    {
      title: t("menu_about"),
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
