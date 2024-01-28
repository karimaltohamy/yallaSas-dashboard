export const columnsSubscibers = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "condition",
    headerName: "Condition",
    renderCell: (paramas) => {
      return (
        <span
          className="status"
          style={{ backgroundColor: paramas.value }}
        ></span>
      );
    },
  },
  {
    field: "loginName",
    headerName: "Login name",
    flex: 1,
    cellClassName: "name-column-cell",
  },
  {
    field: "firstName",
    headerName: "First Name",
    type: "number",
    headerAlign: "left",
  },
  { field: "lastName", headerName: "Last name", flex: 1 },
  { field: "endDate", headerName: "End date", flex: 1, width: 220 },
  { field: "continueTo", headerName: "Continue to", flex: 1 },
  { field: "package", headerName: "Package" },
  { field: "loans", headerName: "Loans" },
  { field: "dailyConsumption", headerName: "Daily consumption" },
  { field: "remainingDays", headerName: "Remaining days" },
];

export const columnsSessions = [
  { field: "startTime", headerName: "Start time" },
  { field: "endTime", headerName: "End time" },
  { field: "download", headerName: "Download" },
  { field: "lift", headerName: "Lift" },
  { field: "mac", headerName: "Mac" },
  { field: "connectionPoint", headerName: "Connection point" },
  { field: "nas", headerName: "Nas" },
  {
    field: "reasonTermination",
    headerName: "Reason for termination",
    width: 150,
  },
  { field: "remainingDays", headerName: "Remaining days", width: 150 },
];

export const columnsInvoices = [
  { field: "ivoiceNumber", headerName: "Invoice number", width: 150 },
  { field: "date", headerName: "Date" },
  { field: "type", headerName: "Type" },
  { field: "amount", headerName: "Amount" },
  { field: "details", headerName: "Details" },
  { field: "publishedBy", headerName: "Published by" },
  {
    field: "paymentMethod",
    headerName: "Payment method",
    width: 150,
  },
  { field: "paid", headerName: "paid", width: 150 },
];
export const columnsPayments = [
  { field: "receiptDate", headerName: "Receipt date", width: 150 },
  { field: "date", headerName: "Date" },
  { field: "type", headerName: "Type" },
  { field: "amount", headerName: "Amount" },
  { field: "details", headerName: "Details" },
  { field: "publishedBy", headerName: "Published by" },
];

export const columnsRecord = [
  { field: "date", headerName: "Date" },
  { field: "process", headerName: "Process" },
  { field: "details", headerName: "Details" },
  { field: "workedBefore", headerName: "Worked before", width: 170 },
];

export const columnsDocuments = [
  { field: "documentName", headerName: "Document Name", width: 170 },
  { field: "size", headerName: "Size" },
  { field: "date", headerName: "Date" },
];

export const columnsFinamialRecord = [
  { field: "date", headerName: "Date", width: 170 },
  { field: "daet", headerName: "Daet" },
  { field: "debit", headerName: "Debit" },
  { field: "amount", headerName: "Amount" },
  { field: "balance", headerName: "Balance" },
  { field: "process", headerName: "Process" },
  { field: "details", headerName: "Details" },
];

export const columnsQuotas = [
  { field: "date", headerName: "Date" },
  { field: "download", headerName: "Download (MB)" },
  { field: "upload", headerName: "Upload" },
  { field: "toltalTraffic", headerName: "Total Traffic" },
  { field: "effectiveDate", headerName: "Effective Date" },
  { field: "comment", headerName: "Comment" },
];

export const columnsOnlineSubscibers = [
  { field: "status", headerName: "Status" },
  { field: "loginName", headerName: "Login name" },
  { field: "donwload", headerName: "Donwload" },
  { field: "lift", headerName: "Lift" },
  { field: "continueTo", headerName: "Continue to" },
  { field: "pacckage", headerName: "Package" },
  { field: "ip", headerName: "Ip" },
  { field: "mac", headerName: "Mac" },
  { field: "callDuration", headerName: "Call duration" },
  { field: "device", headerName: "Device" },
];

export const columnsCompensations = [
  { field: "date", headerName: "Date" },
  { field: "loginName", headerName: "Login name" },
  { field: "day", headerName: "Day" },
  { field: "data", headerName: "Data" },
  { field: "time", headerName: "Time" },
  { field: "manager", headerName: "Manager" },
  { field: "approved", headerName: "Approved" },
  { field: "approvedBy", headerName: "Approved bt" },
];

export const columnsUserTickets = [
  { field: "date", headerName: "Date", width: 140 },
  { field: "subject", headerName: "Subject", width: 120 },
  { field: "firstName", headerName: "First name" },
  { field: "data", headerName: "Data" },
  { field: "secondName", headerName: "Second name" },
  { field: "status", headerName: "Status", width: 140 },
];

export const columnsManagers = [
  {
    field: "loginName",
    headerName: "Login name",
    cellClassName: "name-column-cell",
  },
  {
    field: "firstName",
    headerName: "First Name",
    type: "number",
    headerAlign: "left",
  },
  { field: "lastName", headerName: "Last name" },
  { field: "balance", headerName: "Balance" },
  { field: "loans", headerName: "Loans" },
  { field: "validity", headerName: "Validity" },
  { field: "followMe", headerName: "Follow me" },
  { field: "numberSubscribers", headerName: "Number of subscribers" },
];

export const columnsInvoicesManagers = [
  {
    field: "invoiceNumber",
    headerName: "Invoice number",
    cellClassName: "name-column-cell",
  },
  {
    field: "date",
    headerName: "Date",
  },
  { field: "amount", headerName: "Amount" },
  { field: "details", headerName: "Details" },
  { field: "publishedBy", headerName: "Published by" },
  { field: "paymentMethod", headerName: "Payment Method" },
  { field: "paid", headerName: "Paid" },
];

export const columnsReceiptManagers = [
  {
    field: "receiptDate",
    headerName: "Receipt date",
    cellClassName: "name-column-cell",
  },
  {
    field: "date",
    headerName: "Date",
  },
  {
    field: "type",
    headerName: "Type",
  },
  { field: "amount", headerName: "Amount" },
  { field: "details", headerName: "Details" },
  { field: "publishedBy", headerName: "Published by" },
];

export const columnsRegisterAccountsManagers = [
  {
    field: "date",
    headerName: "Date",
  },
  {
    field: "credit",
    headerName: "Credit",
  },
  {
    field: "debit",
    headerName: "debit",
  },
  { field: "amount", headerName: "Amount" },
  { field: "balance", headerName: "Balance" },
  { field: "process", headerName: "Process" },
  { field: "details", headerName: "Details" },
];

export const columnsGroups = [
  {
    field: "name",
    headerName: "Name",
  },
  {
    field: "details",
    headerName: "Details",
  },
  {
    field: "subscribers",
    headerName: "Subscribers",
  },
  { field: "managers", headerName: "Managers" },
];

export const columnsNas = [
  {
    field: "name",
    headerName: "Name",
  },
  {
    field: "ipAddress",
    headerName: "Ip Address",
  },
  {
    field: "type",
    headerName: "Type",
  },
  { field: "secret", headerName: "Secret" },
  { field: "rtt", headerName: "Rtt" },
  { field: "onlineUser", headerName: "Online Users" },
  { field: "packetLoss", headerName: "Packet Loss" },
];

export const columnsPackages = [
  {
    field: "name",
    headerName: "Name",
  },
  {
    field: "price",
    headerName: "Price",
  },
  {
    field: "poolName",
    headerName: "Pool Name",
  },
  { field: "loadingSpeed", headerName: "Loading Speed" },
  { field: "paymentSpeed", headerName: "Payment Speed" },
  { field: "type", headerName: "Type" },
  { field: "subscriptionDuration", headerName: "Subscription Duration" },
  { field: "subscribers", headerName: "Subscribers" },
  { field: "onlineSubscribers", headerName: "Online Subscribers" },
];

export const columnsConsumptionNotices = [
  {
    field: "threshold",
    headerName: "Threshold",
  },
  {
    field: "profile",
    headerName: "Profile",
  },
  {
    field: "counter",
    headerName: "Counter",
  },
  {
    field: "sms",
    headerName: "SMS",
  },
  {
    field: "telegram",
    headerName: "Telegram",
  },
  {
    field: "email",
    headerName: "Email",
  },
  {
    field: "webhook",
    headerName: "Wehook",
  },
];

export const columnsAddonsServices = [
  {
    field: "addonName",
    headerName: "Addon Name",
  },
  {
    field: "expiration",
    headerName: "Expiration",
  },
  {
    field: "setAddressList",
    headerName: "Set Address List",
    width: 130,
  },
  {
    field: "setPoolName",
    headerName: "Set Pool Name",
    width: 130,
  },
  {
    field: "callUrl",
    headerName: "Call Url",
  },
];

export const columnsCards = [
  {
    field: "series",
    headerName: "Series",
  },
  {
    field: "type",
    headerName: "Type",
  },
  {
    field: "value",
    headerName: "Value",
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 130,
  },
  {
    field: "used",
    headerName: "Used",
  },
  {
    field: "owner",
    headerName: "Owner",
  },
  {
    field: "profile",
    headerName: "Profile",
  },
  {
    field: "expiration",
    headerName: "Expiration",
  },
];

export const columnsCardsJobs = [
  {
    field: "type",
    headerName: "Type",
  },
  {
    field: "owner",
    headerName: "Owner",
  },
  {
    field: "creator",
    headerName: "Creator",
  },
  {
    field: "dateAdded",
    headerName: "Date Added",
    width: 130,
  },
  {
    field: "quantity",
    headerName: "Quantity",
  },
  {
    field: "cardValue",
    headerName: "Card Value",
  },
  {
    field: "profile",
    headerName: "Profile",
  },
  {
    field: "series",
    headerName: "Series",
  },
  {
    field: "status",
    headerName: "Status",
  },
];

export const columnsSubscribersInvoices = [
  {
    field: "invoiceNo",
    headerName: "Invoice No",
  },
  {
    field: "dueDate",
    headerName: "Due Date",
  },
  {
    field: "username",
    headerName: "Username",
  },
  {
    field: "type",
    headerName: "Type",
  },
  {
    field: "amount",
    headerName: "Amount",
  },
  {
    field: "description",
    headerName: "Description",
    width: 280,
  },
  {
    field: "createdBy",
    headerName: "Crated By",
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
  },
  {
    field: "paid",
    headerName: "Paid",
  },
];

export const columnsReportsActivations = [
  {
    field: "history",
    headerName: "History",
  },
  {
    field: "loginName",
    headerName: "Login name",
  },
  {
    field: "firstName",
    headerName: "First name",
  },
  {
    field: "secondName",
    headerName: "Second name",
  },
  {
    field: "manager",
    headerName: "Manager",
  },
  {
    field: "service",
    headerName: "Service",
    width: 80,
  },
  {
    field: "price",
    headerName: "Price",
  },
  {
    field: "previousEndDate",
    headerName: "Previous end date",
    width: 160,
  },
  {
    field: "laterExpiryDate",
    headerName: "Later expiry date",
    width: 160,
  },
  {
    field: "activationMethod",
    headerName: "Activation method",
  },
  {
    field: "numberActivations",
    headerName: "Number of activations",
  },
  {
    field: "status",
    headerName: "Status",
  },
];

export const columnsReportCardsTransfer = [
  {
    field: "date",
    headerName: "Date",
  },
  {
    field: "oldOwner",
    headerName: "Old Owner",
  },
  {
    field: "number",
    headerName: "Number",
  },
  {
    field: "unitValue",
    headerName: "Unit Value",
  },
  {
    field: "total",
    headerName: "Total",
  },
  {
    field: "type",
    headerName: "Type",
  },
  {
    field: "rangeStart",
    headerName: "Range Start",
  },
  {
    field: "rangeEnd",
    headerName: "Range End",
  },
  {
    field: "manager",
    headerName: "Manager",
  },
];

export const columnsReportDebtsJournal = [
  {
    field: "date",
    headerName: "Date",
  },
  {
    field: "debtor",
    headerName: "Debtor",
  },
  {
    field: "creditor",
    headerName: "Creditor",
  },
  {
    field: "amount",
    headerName: "Amount",
  },
  {
    field: "balance",
    headerName: "Balance",
  },
  {
    field: "notices",
    headerName: "Notices",
  },
];

export const columnsReportDaraExportJobs = [
  {
    field: "date",
    headerName: "Date",
  },
  {
    field: "filename",
    headerName: "Filename",
  },
  {
    field: "manager",
    headerName: "Manager",
  },
  {
    field: "module",
    headerName: "Module",
  },
  {
    field: "status",
    headerName: "Status",
  },
  {
    field: "completedAt",
    headerName: "Completed At",
  },
  {
    field: "size",
    headerName: "Size",
  },
];

export const columnsReportInvoiceManagers = [
  {
    field: "invoiceNumber",
    headerName: "Invoice number",
  },
  {
    field: "history",
    headerName: "History",
  },
  {
    field: "type",
    headerName: "Type",
  },
  {
    field: "manager",
    headerName: "Manager",
  },
  {
    field: "amount",
    headerName: "Amount",
  },
  {
    field: "details",
    headerName: "Details",
  },
  {
    field: "publishedBy",
    headerName: "Published by",
  },
  {
    field: "paymentMethod",
    headerName: "Payment method",
  },
  {
    field: "notes",
    headerName: "Notes",
  },
  {
    field: "paid",
    headerName: "Paid",
  },
];

export const columnsReportJournalManagers = [
  {
    field: "history",
    headerName: "History",
  },
  {
    field: "debit",
    headerName: "Debit",
  },
  {
    field: "credit",
    headerName: "Credit",
  },
  {
    field: "amount",
    headerName: "Amount",
  },
  {
    field: "balance",
    headerName: "Balance",
  },
  {
    field: "process",
    headerName: "Process",
  },
  {
    field: "details",
    headerName: "Details",
  },
  {
    field: "notes",
    headerName: "Notes",
  },
];

export const columnsReportMonetTransfer = [
  {
    field: "history",
    headerName: "History",
  },
  {
    field: "process",
    headerName: "Process",
  },
  {
    field: "credit",
    headerName: "Credit",
  },
  {
    field: "debit",
    headerName: "Debit",
  },
  {
    field: "amount",
    headerName: "Amount",
  },
  {
    field: "notes",
    headerName: "Notes",
  },
];

export const columnsPaymentGatewayTransactions = [
  {
    field: "date",
    headerName: "Date",
  },
  {
    field: "gateway",
    headerName: "Gateway",
  },
  {
    field: "manager",
    headerName: "Manager",
  },
  {
    field: "user",
    headerName: "User",
  },
  {
    field: "amount",
    headerName: "Amount",
  },
  {
    field: "currency",
    headerName: "Currency",
  },
  {
    field: "status",
    headerName: "Status",
  },
];

export const columnsReportReceiptManagers = [
  {
    field: "dateReceipt",
    headerName: "Date of receipt",
  },
  {
    field: "history",
    headerName: "History",
  },
  {
    field: "loginName",
    headerName: "Login name",
  },
  {
    field: "type",
    headerName: "Type",
  },
  {
    field: "amount",
    headerName: "Amount",
  },
  {
    field: "details",
    headerName: "Details",
  },
  {
    field: "publishedBy",
    headerName: "Published by",
  },
];

export const columnsReportSessions = [
  {
    field: "loginName",
    headerName: "Login name",
  },
  {
    field: "startTime",
    headerName: "Start Time",
  },
  {
    field: "endTime",
    headerName: "End time",
  },
  {
    field: "ip",
    headerName: "IP",
  },
  {
    field: "mac",
    headerName: "Mac",
  },
  {
    field: "lift",
    headerName: "Lift",
  },
  {
    field: "download",
    headerName: "Download",
  },
  {
    field: "contactPoint",
    headerName: "Contact Point",
  },
  {
    field: "reasonTermination",
    headerName: "Reason for termination",
    width: 170,
  },
];

export const columnsReportSuspicious = [
  {
    field: "username",
    headerName: "Username",
  },
  {
    field: "expiration",
    headerName: "Expiration",
  },
  {
    field: "name",
    headerName: "Name",
  },
  {
    field: "currentSessions",
    headerName: "Current Sessions",
  },
  {
    field: "flag",
    headerName: "Flag",
  },
];

export const columnsSysLog = [
  {
    field: "date",
    headerName: "Date",
  },
  {
    field: "event",
    headerName: "Event",
  },
  {
    field: "manager",
    headerName: "Manager",
  },
  {
    field: "details",
    headerName: "Details",
  },
  {
    field: "internetAddress",
    headerName: "Internet Address",
    width: 150,
  },
];

export const columnsLoginAttempts = [
  {
    field: "date",
    headerName: "Date",
  },
  {
    field: "loginName",
    headerName: "Login name",
  },
  {
    field: "serverReply",
    headerName: "Server Reply",
  },
  {
    field: "nas",
    headerName: "NAS",
  },
  {
    field: "mac",
    headerName: "MAC",
  },
];

export const columnsBackupIndex = [
  {
    field: "fileName",
    headerName: "FileName",
  },
  {
    field: "date",
    headerName: "Date",
  },
  {
    field: "size",
    headerName: "Size",
  },
  {
    field: "version",
    headerName: "Version",
  },
];

export const columnsIpPools = [
  {
    field: "poolName",
    headerName: "Pool Name",
  },
  {
    field: "fromIp",
    headerName: "From IP",
  },
  {
    field: "toIp",
    headerName: "To IP",
  },
  {
    field: "LeaseTime",
    headerName: "Lease Time(hours)",
    width: 140,
  },
];
