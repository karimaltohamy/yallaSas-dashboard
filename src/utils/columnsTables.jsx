import { t } from "i18next";
import i18n from "../i18n";
import { convertFromBytes } from "./utilsFunctions";
import { Link } from "react-router-dom";

export const columnsSubscibers = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "enabled",
    headerName: i18n.t("Condition"),
    renderCell: ({ row }) => {
      if (row.enabled == 0) {
        return (
          <span
            className="status"
            style={{ backgroundColor: "rgb(187, 52, 54)" }}
          ></span>
        );
      } else if (row.status.status) {
        return (
          <span
            className="status"
            style={{ backgroundColor: "rgb(159, 226, 43)" }}
          ></span>
        );
      } else if (row.status.expiration) {
        return (
          <span
            className="status"
            style={{ backgroundColor: "rgb(255, 148, 22)" }}
          ></span>
        );
      } else if (row.status.traffic || row.status.uptime) {
        return (
          <span
            className="status"
            style={{ backgroundColor: "rgb(227, 221, 78)" }}
          ></span>
        );
      } else {
        return (
          <span
            className="status"
            style={{ backgroundColor: "#14b1e5" }}
          ></span>
        );
      }
    },
    width: 70,
  },
  {
    field: "username",
    headerName: t("Login name"),
    width: 120,
    cellClassName: "name-column-cell",
    renderCell: (params) => {
      if (params.row["username"]) {
        return (
          <Link
            to={`/subscribers/${params.row.id}/general`}
            className="text_color"
          >
            {params.row["username"]}
          </Link>
        );
      }
    },
  },
  {
    field: "firstname",
    headerName: t("First Name"),
    type: "number",
    headerAlign: "left",
  },
  { field: "lastname", headerName: t("Last name"), flex: 1 },
  { field: "expiration", headerName: t("End date"), flex: 1, width: 220 },
  { field: "parent_username", headerName: t("Continue to"), flex: 1 },
  {
    field: "package",
    headerName: t("Package"),
    valueGetter: (params) => {
      if (params.row["profile_details"] && params.row["profile_details"].name) {
        return params.row["profile_details"].name;
      }
    },
  },
  { field: "loan_balance", headerName: t("Debts") },
  {
    field: "daily_traffic_details.traffic",
    headerName: t("Daily consumption"),
    valueGetter: (params) => {
      if (
        params.row["daily_traffic_details"] &&
        params.row["daily_traffic_details"].traffic
      ) {
        return convertFromBytes(params.row["daily_traffic_details"].traffic);
      }
    },
  },
  { field: "remaining_days", headerName: t("Remaining days") },
];

export const columnsOnlineSubscibers = [
  {
    field: "status",
    headerName: t("Status"),
    renderCell: ({ row }) => {
      if (row.status.status) {
        return (
          <span
            className="status"
            style={{ backgroundColor: "rgb(159, 226, 43)" }}
          ></span>
        );
      } else if (row.status.expiration) {
        return (
          <span
            className="status"
            style={{ backgroundColor: "rgb(255, 148, 22)" }}
          ></span>
        );
      } else if (row.status.traffic || row.status.uptime) {
        return (
          <span
            className="status"
            style={{ backgroundColor: "rgb(227, 221, 78)" }}
          ></span>
        );
      } else {
        return (
          <span
            className="status"
            style={{ backgroundColor: "#14b1e5" }}
          ></span>
        );
      }
    },
  },
  { field: "username", headerName: t("Login name") },
  {
    field: "acctoutputoctets",
    headerName: t("Donwload"),
    valueGetter: (params) => {
      if (params.row["acctoutputoctets"]) {
        return convertFromBytes(params.row["acctoutputoctets"]);
      }
    },
  },
  {
    field: "acctinputoctets",
    headerName: t("Lift"),
    valueGetter: (params) => {
      if (params.row["acctinputoctets"]) {
        return convertFromBytes(params.row["acctinputoctets"]);
      }
    },
  },
  { field: "parent_username", headerName: t("Continue to") },
  { field: "user_profile_name", headerName: t("Package") },
  { field: "framedipaddress", headerName: t("Ip") },
  { field: "callingstationid", headerName: t("Mac") },
  { field: "acctsessiontime", headerName: t("Call duration") },
  { field: "oui", headerName: t("Device") },
];

export const columnsSessions = [
  { field: "startTime", headerName: t("Start time") },
  { field: "endTime", headerName: t("End time") },
  { field: "download", headerName: t("Download") },
  { field: "lift", headerName: t("Lift") },
  { field: "mac", headerName: t("Mac") },
  { field: "connectionPoint", headerName: t("Connection point") },
  { field: "nas", headerName: t("Nas") },
  {
    field: "reasonTermination",
    headerName: t("Reason for termination"),
    width: 150,
  },
  { field: "remainingDays", headerName: t("Remaining days"), width: 150 },
];

export const columnsInvoices = [
  { field: "ivoiceNumber", headerName: t("Invoice number"), width: 150 },
  { field: "date", headerName: t("Date") },
  { field: "type", headerName: t("Type") },
  { field: "amount", headerName: t("Amount") },
  { field: "details", headerName: t("Details") },
  { field: "publishedBy", headerName: t("Published by") },
  {
    field: "paymentMethod",
    headerName: t("Payment method"),
    width: 150,
  },
  { field: "paid", headerName: t("paid"), width: 150 },
];
export const columnsPayments = [
  { field: "receiptDate", headerName: t("Receipt date"), width: 150 },
  { field: "date", headerName: t("Date") },
  { field: "type", headerName: t("Type") },
  { field: "amount", headerName: t("Amount") },
  { field: "details", headerName: t("Details") },
  { field: "publishedBy", headerName: t("Published by") },
];

export const columnsRecord = [
  { field: "date", headerName: t("Date") },
  { field: "process", headerName: t("Process") },
  { field: "details", headerName: t("Details") },
  { field: "workedBefore", headerName: t("Worked before"), width: 170 },
];

export const columnsDocuments = [
  { field: "documentName", headerName: t("Document Name"), width: 170 },
  { field: "size", headerName: t("Size") },
  { field: "date", headerName: t("Date") },
];

export const columnsFinamialRecord = [
  { field: "date", headerName: t("Date"), width: 170 },
  { field: "daet", headerName: t("Daet") },
  { field: "debit", headerName: t("Debit") },
  { field: "amount", headerName: t("Amount") },
  { field: "balance", headerName: t("Balance") },
  { field: "process", headerName: t("Process") },
  { field: "details", headerName: t("Details") },
];

export const columnsQuotas = [
  { field: "date", headerName: t("Date") },
  { field: "download", headerName: t("Download (MB)") },
  { field: "upload", headerName: t("Upload") },
  { field: "toltalTraffic", headerName: t("Total Traffic") },
  { field: "effectiveDate", headerName: t("Effective Date") },
  { field: "comment", headerName: t("Comment") },
];

export const columnsCompensations = [
  { field: "date", headerName: t("Date") },
  { field: "loginName", headerName: t("Login name") },
  { field: "day", headerName: t("Day") },
  { field: "data", headerName: t("Data") },
  { field: "time", headerName: t("Time") },
  { field: "manager", headerName: t("Manager") },
  { field: "approved", headerName: t("Approved") },
  { field: "approvedBy", headerName: t("Approved bt") },
];

export const columnsUserTickets = [
  { field: "date", headerName: t("Date"), width: 140 },
  { field: "subject", headerName: t("Subject"), width: 120 },
  { field: "firstName", headerName: t("First name") },
  { field: "data", headerName: t("Data") },
  { field: "secondName", headerName: t("Second name") },
  { field: "status", headerName: t("Status"), width: 140 },
];

export const columnsManagers = [
  {
    field: "loginName",
    headerName: t("Login name"),
    cellClassName: "name-column-cell",
  },
  {
    field: "firstName",
    headerName: t("First Name"),
    type: "number",
    headerAlign: "left",
  },
  { field: "lastName", headerName: t("Last name") },
  { field: "balance", headerName: t("Balance") },
  { field: "loans", headerName: t("Loans") },
  { field: "validity", headerName: t("Validity") },
  { field: "followMe", headerName: t("Follow me") },
  { field: "numberSubscribers", headerName: t("Number of subscribers") },
];

export const columnsInvoicesManagers = [
  {
    field: "invoiceNumber",
    headerName: t("Invoice number"),
    cellClassName: "name-column-cell",
  },
  {
    field: t("date"),
    headerName: "Date",
  },
  { field: "amount", headerName: t("Amount") },
  { field: "details", headerName: t("Details") },
  { field: "publishedBy", headerName: t("Published by") },
  { field: "paymentMethod", headerName: t("Payment Method") },
  { field: "paid", headerName: t("Paid") },
];

export const columnsReceiptManagers = [
  {
    field: "receiptDate",
    headerName: t("Receipt date"),
    cellClassName: "name-column-cell",
  },
  {
    field: "date",
    headerName: t("Date"),
  },
  {
    field: "type",
    headerName: t("Type"),
  },
  { field: "amount", headerName: t("Amount") },
  { field: "details", headerName: t("Details") },
  { field: "publishedBy", headerName: t("Published by") },
];

export const columnsRegisterAccountsManagers = [
  {
    field: "date",
    headerName: t("Date"),
  },
  {
    field: "credit",
    headerName: t("Credit"),
  },
  {
    field: "debit",
    headerName: t("debit"),
  },
  { field: "amount", headerName: t("Amount") },
  { field: "balance", headerName: t("Balance") },
  { field: "process", headerName: t("Process") },
  { field: "details", headerName: t("Details") },
];

export const columnsGroups = [
  {
    field: "name",
    headerName: t("Name"),
  },
  {
    field: "details",
    headerName: t("Details"),
  },
  {
    field: "subscribers",
    headerName: t("Subscribers"),
  },
  { field: "managers", headerName: t("Managers") },
];

export const columnsNas = [
  {
    field: "name",
    headerName: t("Name"),
  },
  {
    field: "ipAddress",
    headerName: t("Ip Address"),
  },
  {
    field: "type",
    headerName: t("Type"),
  },
  { field: "secret", headerName: t("Secret") },
  { field: "rtt", headerName: t("Rtt") },
  { field: "onlineUser", headerName: t("Online Users") },
  { field: "packetLoss", headerName: t("Packet Loss") },
];

export const columnsPackages = [
  {
    field: "name",
    headerName: t("Name"),
  },
  {
    field: "price",
    headerName: t("Price"),
  },
  {
    field: "poolName",
    headerName: t("Pool Name"),
  },
  { field: "loadingSpeed", headerName: t("Loading Speed") },
  { field: "paymentSpeed", headerName: t("Payment Speed") },
  { field: "type", headerName: t("Type") },
  { field: "subscriptionDuration", headerName: t("Subscription Duration") },
  { field: "subscribers", headerName: t("Subscribers") },
  { field: "onlineSubscribers", headerName: t("Online Subscribers") },
];

export const columnsConsumptionNotices = [
  {
    field: "threshold",
    headerName: t("Threshold"),
  },
  {
    field: "profile",
    headerName: t("Profile"),
  },
  {
    field: "counter",
    headerName: t("Counter"),
  },
  {
    field: "sms",
    headerName: t("SMS"),
  },
  {
    field: "telegram",
    headerName: t("Telegram"),
  },
  {
    field: "email",
    headerName: t("Email"),
  },
  {
    field: "webhook",
    headerName: t("Wehook"),
  },
];

export const columnsAddonsServices = [
  {
    field: "addonName",
    headerName: t("Addon Name"),
  },
  {
    field: "expiration",
    headerName: t("Expiration"),
  },
  {
    field: "setAddressList",
    headerName: t("Set Address List"),
    width: 130,
  },
  {
    field: "setPoolName",
    headerName: t("Set Pool Name"),
    width: 130,
  },
  {
    field: "callUrl",
    headerName: t("Call Url"),
  },
];

export const columnsCards = [
  {
    field: "series",
    headerName: t("Series"),
  },
  {
    field: "type",
    headerName: t("Type"),
  },
  {
    field: "value",
    headerName: t("Value"),
  },
  {
    field: "quantity",
    headerName: t("Quantity"),
    width: 130,
  },
  {
    field: "used",
    headerName: t("Used"),
  },
  {
    field: "owner",
    headerName: t("Owner"),
  },
  {
    field: "profile",
    headerName: t("Profile"),
  },
  {
    field: "expiration",
    headerName: t("Expiration"),
  },
];

export const columnsCardsJobs = [
  {
    field: "type",
    headerName: t("Type"),
  },
  {
    field: "owner",
    headerName: t("Owner"),
  },
  {
    field: "creator",
    headerName: t("Creator"),
  },
  {
    field: "dateAdded",
    headerName: t("Date Added"),
    width: 130,
  },
  {
    field: "quantity",
    headerName: t("Quantity"),
  },
  {
    field: "cardValue",
    headerName: t("Card Value"),
  },
  {
    field: "profile",
    headerName: t("Profile"),
  },
  {
    field: "series",
    headerName: t("Series"),
  },
  {
    field: "status",
    headerName: t("Status"),
  },
];

export const columnsSubscribersInvoices = [
  {
    field: "invoiceNo",
    headerName: t("Invoice No"),
  },
  {
    field: "dueDate",
    headerName: t("Due Date"),
  },
  {
    field: "username",
    headerName: t("Username"),
  },
  {
    field: "type",
    headerName: t("Type"),
  },
  {
    field: "amount",
    headerName: t("Amount"),
  },
  {
    field: "description",
    headerName: t("Description"),
    width: 280,
  },
  {
    field: "createdBy",
    headerName: t("Crated By"),
  },
  {
    field: "paymentMethod",
    headerName: t("Payment Method"),
  },
  {
    field: "paid",
    headerName: t("Paid"),
  },
];

export const columnsReportsActivations = [
  {
    field: "history",
    headerName: t("History"),
  },
  {
    field: "loginName",
    headerName: t("Login name"),
  },
  {
    field: "firstName",
    headerName: t("First name"),
  },
  {
    field: "secondName",
    headerName: t("Second name"),
  },
  {
    field: "manager",
    headerName: t("Manager"),
  },
  {
    field: "service",
    headerName: t("Service"),
    width: 80,
  },
  {
    field: "price",
    headerName: t("Price"),
  },
  {
    field: "previousEndDate",
    headerName: t("Previous end date"),
    width: 160,
  },
  {
    field: "laterExpiryDate",
    headerName: t("Later expiry date"),
    width: 160,
  },
  {
    field: "activationMethod",
    headerName: t("Activation method"),
  },
  {
    field: "numberActivations",
    headerName: t("Number of activations"),
  },
  {
    field: "status",
    headerName: t("Status"),
  },
];

export const columnsReportCardsTransfer = [
  {
    field: "date",
    headerName: t("Date"),
  },
  {
    field: "oldOwner",
    headerName: t("Old Owner"),
  },
  {
    field: "number",
    headerName: t("Number"),
  },
  {
    field: "unitValue",
    headerName: t("Unit Value"),
  },
  {
    field: "total",
    headerName: t("Total"),
  },
  {
    field: "type",
    headerName: t("Type"),
  },
  {
    field: "rangeStart",
    headerName: t("Range Start"),
  },
  {
    field: "rangeEnd",
    headerName: t("Range End"),
  },
  {
    field: "manager",
    headerName: t("Manager"),
  },
];

export const columnsReportDebtsJournal = [
  {
    field: "date",
    headerName: t("Date"),
  },
  {
    field: "debtor",
    headerName: t("Debtor"),
  },
  {
    field: "creditor",
    headerName: t("Creditor"),
  },
  {
    field: "amount",
    headerName: t("Amount"),
  },
  {
    field: "balance",
    headerName: t("Balance"),
  },
  {
    field: "notices",
    headerName: t("Notices"),
  },
];

export const columnsReportDaraExportJobs = [
  {
    field: "date",
    headerName: t("Date"),
  },
  {
    field: "filename",
    headerName: t("Filename"),
  },
  {
    field: "manager",
    headerName: t("Manager"),
  },
  {
    field: "module",
    headerName: t("Module"),
  },
  {
    field: "status",
    headerName: t("Status"),
  },
  {
    field: "completedAt",
    headerName: t("Completed At"),
  },
  {
    field: "size",
    headerName: t("Size"),
  },
];

export const columnsReportInvoiceManagers = [
  {
    field: "invoiceNumber",
    headerName: t("Invoice number"),
  },
  {
    field: "history",
    headerName: t("History"),
  },
  {
    field: "type",
    headerName: t("Type"),
  },
  {
    field: "manager",
    headerName: t("Manager"),
  },
  {
    field: "amount",
    headerName: t("Amount"),
  },
  {
    field: "details",
    headerName: t("Details"),
  },
  {
    field: "publishedBy",
    headerName: t("Published by"),
  },
  {
    field: "paymentMethod",
    headerName: t("Payment method"),
  },
  {
    field: "notes",
    headerName: t("Notes"),
  },
  {
    field: "paid",
    headerName: t("Paid"),
  },
];

export const columnsReportJournalManagers = [
  {
    field: "history",
    headerName: t("History"),
  },
  {
    field: "debit",
    headerName: t("Debit"),
  },
  {
    field: "credit",
    headerName: t("Credit"),
  },
  {
    field: "amount",
    headerName: t("Amount"),
  },
  {
    field: "balance",
    headerName: t("Balance"),
  },
  {
    field: "process",
    headerName: t("Process"),
  },
  {
    field: "details",
    headerName: t("Details"),
  },
  {
    field: "notes",
    headerName: t("Notes"),
  },
];

export const columnsReportMonetTransfer = [
  {
    field: "history",
    headerName: t("History"),
  },
  {
    field: "process",
    headerName: t("Process"),
  },
  {
    field: "credit",
    headerName: t("Credit"),
  },
  {
    field: "debit",
    headerName: t("Debit"),
  },
  {
    field: "amount",
    headerName: t("Amount"),
  },
  {
    field: "notes",
    headerName: t("Notes"),
  },
];

export const columnsPaymentGatewayTransactions = [
  {
    field: "date",
    headerName: t("Date"),
  },
  {
    field: "gateway",
    headerName: t("Gateway"),
  },
  {
    field: "manager",
    headerName: t("Manager"),
  },
  {
    field: "user",
    headerName: t("User"),
  },
  {
    field: "amount",
    headerName: t("Amount"),
  },
  {
    field: "currency",
    headerName: t("Currency"),
  },
  {
    field: "status",
    headerName: t("Status"),
  },
];

export const columnsReportReceiptManagers = [
  {
    field: "dateReceipt",
    headerName: t("Date of receipt"),
  },
  {
    field: "history",
    headerName: t("History"),
  },
  {
    field: "loginName",
    headerName: t("Login name"),
  },
  {
    field: "type",
    headerName: t("Type"),
  },
  {
    field: "amount",
    headerName: t("Amount"),
  },
  {
    field: "details",
    headerName: t("Details"),
  },
  {
    field: "publishedBy",
    headerName: t("Published by"),
  },
];

export const columnsReportSessions = [
  {
    field: "loginName",
    headerName: t("Login name"),
  },
  {
    field: "startTime",
    headerName: t("Start Time"),
  },
  {
    field: "endTime",
    headerName: t("End time"),
  },
  {
    field: "ip",
    headerName: t("IP"),
  },
  {
    field: "mac",
    headerName: t("Mac"),
  },
  {
    field: "lift",
    headerName: t("Lift"),
  },
  {
    field: "download",
    headerName: t("Download"),
  },
  {
    field: "contactPoint",
    headerName: t("Contact Point"),
  },
  {
    field: "reasonTermination",
    headerName: t("Reason for termination"),
    width: 170,
  },
];

export const columnsReportSuspicious = [
  {
    field: "username",
    headerName: t("Username"),
  },
  {
    field: "expiration",
    headerName: t("Expiration"),
  },
  {
    field: "name",
    headerName: t("Name"),
  },
  {
    field: "currentSessions",
    headerName: t("Current Sessions"),
  },
  {
    field: "flag",
    headerName: t("Flag"),
  },
];

export const columnsSysLog = [
  {
    field: "date",
    headerName: t("Date"),
  },
  {
    field: "event",
    headerName: t("Event"),
  },
  {
    field: "manager",
    headerName: t("Manager"),
  },
  {
    field: "details",
    headerName: t("Details"),
  },
  {
    field: "internetAddress",
    headerName: t("Internet Address"),
    width: 150,
  },
];

export const columnsLoginAttempts = [
  {
    field: "date",
    headerName: t("Date"),
  },
  {
    field: "loginName",
    headerName: t("Login name"),
  },
  {
    field: "serverReply",
    headerName: t("Server Reply"),
  },
  {
    field: "nas",
    headerName: t("NAS"),
  },
  {
    field: "mac",
    headerName: t("MAC"),
  },
];

export const columnsBackupIndex = [
  {
    field: "fileName",
    headerName: t("FileName"),
  },
  {
    field: "date",
    headerName: t("Date"),
  },
  {
    field: "size",
    headerName: t("Size"),
  },
  {
    field: "version",
    headerName: t("Version"),
  },
];

export const columnsIpPools = [
  {
    field: "poolName",
    headerName: t("Pool Name"),
  },
  {
    field: "fromIp",
    headerName: t("From IP"),
  },
  {
    field: "toIp",
    headerName: t("To IP"),
  },
  {
    field: "LeaseTime",
    headerName: t("Lease Time(hours)"),
    width: 140,
  },
];

export const columnsFormSettings = [
  {
    field: "key",
    headerName: t("Key"),
  },
  {
    field: "label",
    headerName: t("Label"),
  },
  {
    field: "type",
    headerName: t("Type"),
  },
  {
    field: "requird",
    headerName: t("Required"),
  },
];

export const columnsSettingsAcl = [
  {
    field: "group",
    headerName: t("Group"),
  },
  {
    field: "dashboard",
    headerName: t("Dashboard"),
  },
  {
    field: "permissions",
    headerName: t("Permissions"),
  },
];
