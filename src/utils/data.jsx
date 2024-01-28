export const sidebarLinks = [
  {
    title: "Home",
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
    title: "Subscribers",
    icon: <i className="fa-regular fa-file"></i>,
    linksList: [
      {
        titleLink: "Subscribers list",
        pathLink: "/subscribers",
      },
      {
        titleLink: "Online",
        pathLink: "subscribers-online",
      },
      {
        titleLink: "Compensations",
        pathLink: "/compensations-subscibers",
      },
      {
        titleLink: "Support Tickets",
        pathLink: "/subscriber-tickets",
      },
    ],
  },
  {
    title: "Malfunctions",
    icon: <i className="fa-solid fa-gear"></i>,
    linksList: [
      {
        titleLink: "Team Leader",
        pathLink: "/team-leader",
      },
      {
        titleLink: "Tickets wait team",
        pathLink: "tickets-wait-team",
      },
      {
        titleLink: "Damage Wait",
        pathLink: "/damage-wait",
      },
      {
        titleLink: "Review Damage",
        pathLink: "/review-damage",
      },
      {
        titleLink: "Solved Tickets",
        pathLink: "/solved-tickets",
      },
      {
        titleLink: "Tickets Quality",
        pathLink: "/tickets-quality",
      },
      {
        titleLink: "Customer Installations",
        pathLink: "/install-customer",
      },
    ],
  },
  {
    title: "Offer of Pieces",
    path: "/offer-pieces",
    icon: <i className="fa-solid fa-puzzle-piece"></i>,
  },
  {
    title: "Managers",
    path: "/managers",
    icon: <i className="fa-solid fa-people-roof"></i>,
  },
  {
    title: "Groups",
    path: "/groups",
    icon: <i className="fa-solid fa-user-group"></i>,
  },
  {
    title: "NAS",
    path: "/NAS",
    icon: <i className="fa-solid fa-user-group"></i>,
  },
  {
    title: "Packages",
    icon: <i className="fa-solid fa-cubes"></i>,
    linksList: [
      {
        titleLink: "Package List",
        pathLink: "/packages",
      },
      {
        titleLink: "Pricing table",
        pathLink: "pricing-table",
      },
      {
        titleLink: "Consumption notices",
        pathLink: "/consumption-notices",
      },
      {
        titleLink: "Additional services",
        pathLink: "/additional-services",
      },
    ],
  },
  {
    title: "Cards",
    path: "/Cards",
    icon: <i className="fa-regular fa-credit-card"></i>,
  },
  {
    title: "Accounts",
    icon: <i className="fa-solid fa-file-invoice-dollar"></i>,
    linksList: [
      {
        titleLink: "Subscriber invoices",
        pathLink: "/subscriber-invoices",
      },
      {
        titleLink: "Issuing the invoice",
        pathLink: "issuing-invoice",
      },
    ],
  },
  {
    title: "Reports",
    icon: <i className="fa-regular fa-clipboard"></i>,
    linksList: [
      {
        titleLink: "Activations",
        pathLink: "/report-activations",
      },
      {
        titleLink: "Activation statistics",
        pathLink: "/activation-stats",
      },
      {
        titleLink: "Cards used",
        pathLink: "/reportcards-usage",
      },
      {
        titleLink: "Card transfers",
        pathLink: "/report-cards-transfer",
      },
      {
        titleLink: "Debt bills",
        pathLink: "/report-debts-journal",
      },
      {
        titleLink: "Data Export",
        pathLink: "/report-data-export-jobs",
      },
      {
        titleLink: "Managers' invoices",
        pathLink: "/report-invoice-managers",
      },
      {
        titleLink: "Financial record",
        pathLink: "/report-journal-managers",
      },
      {
        titleLink: "Money transfer",
        pathLink: "/report-money-transfer",
      },
      {
        titleLink: "Presence rate",
        pathLink: "/report-online",
      },
      {
        titleLink: "Profits",
        pathLink: "/report-profits",
      },
      {
        titleLink: "Gateway Transactions",
        pathLink: "/payment-gateway-transaction",
      },
      {
        titleLink: "Managers' receipts",
        pathLink: "/report-receipts-managers",
      },
      {
        titleLink: "Sessions",
        pathLink: "/report-sessions",
      },
      {
        titleLink: "Suspicious cases",
        pathLink: "/report-suspicious",
      },
      {
        titleLink: "Data consumption",
        pathLink: "/report-traffic",
      },
      {
        titleLink: "Customers",
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
        titleLink: "System log",
        pathLink: "system-log",
      },
      {
        titleLink: "Login attempts",
        pathLink: "login-attempts",
      },
    ],
  },
  {
    title: "Tools",
    icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
    linksList: [
      {
        titleLink: "Dashboard Manager ",
        pathLink: "/tools-dashboard-manager",
      },
      {
        titleLink: "Widget Factory ",
        pathLink: "/widget-factory",
      },
      {
        titleLink: "System Services",
        pathLink: "/system-services",
      },
      {
        titleLink: "System Update",
        pathLink: "/system-update",
      },
      {
        titleLink: "System Maintenance",
        pathLink: "/system-maintenance",
      },
      {
        titleLink: "Announcements",
        pathLink: "/tools-announcements",
      },
      {
        titleLink: "Import Data",
        pathLink: "/tools-import",
      },
      {
        titleLink: "Speed ​​control",
        pathLink: "/tools-bandwidth-control",
      },
      {
        titleLink: "Backup",
        pathLink: "/backup-index",
      },
      {
        titleLink: "Bulk Changes",
        pathLink: "/bulk-changes",
      },
    ],
  },
  {
    title: "IP Pools",
    path: "/ip-pools",
    icon: <i className="fa-solid fa-server"></i>,
  },
  {
    title: "Options",
    icon: <i className="fa-solid fa-gear"></i>,
    linksList: [
      {
        titleLink: "Advanced",
        pathLink: "/settings-advanced",
      },
      {
        titleLink: "Backup",
        pathLink: "/add-settings-backup",
      },
      {
        titleLink: "Email",
        pathLink: "/settings-email",
      },
      {
        titleLink: "Email Templates",
        pathLink: "/settings-email-templates",
      },
      {
        titleLink: "Free Zone",
        pathLink: "/settings-freezone",
      },
      {
        titleLink: "Fields",
        pathLink: "/settings-forms",
      },
      {
        titleLink: "General options",
        pathLink: "/settings-general",
      },

      {
        titleLink: "License",
        pathLink: "/settings-license",
      },
      {
        titleLink: "Network",
        pathLink: "/settings-network",
      },

      {
        titleLink: "Notfication",
        pathLink: "/settings-notifications",
      },
      {
        titleLink: "Permissions",
        pathLink: "/settings-acl",
      },

      {
        titleLink: "Payment Gateway",
        pathLink: "/settings-paymentgateways",
      },
      {
        titleLink: "Invoice",
        pathLink: "/settings-billing",
      },
      {
        titleLink: "Sites",
        pathLink: "/settings-sites",
      },
      {
        titleLink: "Sms",
        pathLink: "/settings-sms",
      },
      {
        titleLink: "SASTrack",
        pathLink: "/settings-sastrack",
      },
      {
        titleLink: "Telegram",
        pathLink: "/settings-telegraml",
      },
      {
        titleLink: "Subscribers panel",
        pathLink: "/settings-ucp",
      },
      {
        titleLink: "Web",
        pathLink: "/settings-web",
      },
    ],
  },
  {
    title: "About the company",
    path: "/about-company",
    icon: <i className="fa-solid fa-info"></i>,
  },
];
