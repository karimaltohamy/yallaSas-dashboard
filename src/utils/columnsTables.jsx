import { t } from "i18next";
import i18n from "../i18n";
import { convertFromBytes } from "./utilsFunctions";
import { Link } from "react-router-dom";

export const columnsSubscibers = [
  {
    field: "enabled",
    headerName: i18n.t("users_table_status"),
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
    headerName: t("users_table_username"),
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
    headerName: t("users_table_firstname"),
    type: "number",
    headerAlign: "left",
  },
  { field: "lastname", headerName: t("users_table_lastname"), flex: 1 },
  {
    field: "expiration",
    headerName: t("users_table_expiration"),
    flex: 1,
    width: 220,
  },
  { field: "parent_username", headerName: t("users_table_parent"), flex: 1 },
  {
    field: "package",
    headerName: t("users_table_profile"),
    valueGetter: (params) => {
      if (params.row["profile_details"] && params.row["profile_details"].name) {
        return params.row["profile_details"].name;
      }
    },
  },
  { field: "loan_balance", headerName: t("users_table_balance") },
  {
    field: "daily_traffic_details.traffic",
    headerName: t("users_table_daily_traffic"),
    valueGetter: (params) => {
      if (
        params.row["daily_traffic_details"] &&
        params.row["daily_traffic_details"].traffic
      ) {
        return convertFromBytes(params.row["daily_traffic_details"].traffic);
      }
    },
  },
  { field: "remaining_days", headerName: t("users_table_remaining_days") },
];

export const columnsOnlineSubscibers = [
  {
    field: "status",
    headerName: t("global_status"),
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
    flex: 1,
  },
  { field: "username", headerName: t("global_username"), flex: 1 },
  {
    field: "acctoutputoctets",
    headerName: t("global_download"),
    valueGetter: (params) => {
      if (params.row["acctoutputoctets"]) {
        return convertFromBytes(params.row["acctoutputoctets"]);
      }
    },
    flex: 1,
  },
  {
    field: "acctinputoctets",
    headerName: t("users_table_ul"),
    valueGetter: (params) => {
      if (params.row["acctinputoctets"]) {
        return convertFromBytes(params.row["acctinputoctets"]);
      }
    },
    flex: 1,
  },
  { field: "parent_username", headerName: t("users_table_parent"), flex: 1 },
  { field: "user_profile_name", headerName: t("users_table_profile"), flex: 1 },
  { field: "framedipaddress", headerName: t("global_ip"), flex: 1 },
  {
    field: "callingstationid",
    headerName: t("user_session_table_mac"),
    flex: 1,
  },
  { field: "acctsessiontime", headerName: t("users_table_uptime"), flex: 1 },
  { field: "oui", headerName: t("users_table_hardware"), flex: 1 },
];

export const columnsSessions = [
  { field: "acctstarttime", headerName: t("user_session_table_started") },
  { field: "acctstoptime", headerName: t("user_session_table_ended") },
  { field: "framedipaddress", headerName: t("user_session_table_ip") },
  {
    field: "acctoutputoctets",
    headerName: t("user_session_table_download"),
    valueGetter: (params) => {
      if (params.row["acctoutputoctets"]) {
        return convertFromBytes(params.row["acctoutputoctets"]);
      }
    },
  },
  {
    field: "acctinputoctets",
    headerName: t("user_session_table_upload"),
    valueGetter: (params) => {
      if (params.row["acctinputoctets"]) {
        return convertFromBytes(params.row["acctinputoctets"]);
      }
    },
  },
  { field: "callingstationid", headerName: t("user_session_table_mac") },
  { field: "calledstationid", headerName: t("user_session_table_profile") },
  { field: "nasipaddress", headerName: t("user_session_table_service") },
  {
    field: "acctterminatecause",
    headerName: t("user_session_table_protocol"),
    width: 150,
  },
  {
    field: "acctterminatecause",
    headerName: t("user_session_table_termination_cause"),
    width: 150,
  },
];

export const columnsInvoices = [
  {
    field: "invoice_number",
    headerName: t("user_invoice_table_number"),
    width: 150,
  },
  { field: "created_at", headerName: t("user_invoice_table_date") },
  { field: "type", headerName: t("user_invoice_table_type") },
  { field: "amount", headerName: t("user_invoice_table_amount") },
  { field: "description", headerName: t("user_invoice_table_description") },
  {
    field: "user_details.parent_username",
    headerName: t("user_invoice_table_created_by"),
    valueGetter: (params) => {
      if (params.row["user_details"]) {
        return params.row["user_details"].parent_username;
      }
    },
  },
  {
    field: "payment_method",
    headerName: t("user_invoice_table_method"),
    width: 150,
  },
  { field: "paid", headerName: t("user_invoice_table_paid"), width: 150 },
];
export const columnsPayments = [
  {
    field: "receipt_number",
    headerName: t("user_receipt_table_no"),
    width: 150,
    flex: 1,
  },
  { field: "created_at", headerName: t("user_receipt_table_date"), flex: 1 },
  { field: "type", headerName: t("user_receipt_table_type"), flex: 1 },
  { field: "amount", headerName: t("user_receipt_table_amount"), flex: 1 },
  {
    field: "description",
    headerName: t("user_receipt_table_description"),
    flex: 1,
  },
  {
    field: "user_details.parent_username",
    headerName: t("user_receipt_table_created_by"),
    valueGetter: (params) => {
      if (params.row["user_details"]) {
        return params.row["user_details"].parent_username;
      }
    },
    flex: 1,
  },
];

export const columnsRecord = [
  {
    field: "created_at",
    headerName: t("user_history_table_date"),
    width: 180,
    flex: 1,
  },
  {
    field: "event",
    headerName: t("user_history_table_action"),
    width: 130,
    flex: 1,
  },
  {
    field: "description",
    headerName: t("user_history_table_description"),
    width: 180,
    flex: 1,
  },
  {
    field: "manager_details.firstname",
    headerName: t("user_history_table_created_by"),
    width: 170,
    valueGetter: (params) => {
      if (params.row["manager_details"]) {
        return params.row["manager_details"].firstname;
      }
    },
    flex: 1,
  },
];

export const columnsDocuments = [
  {
    field: "documentName",
    headerName: t("user_document_table_name"),
    width: 170,
    flex: 1,
  },
  { field: "size", headerName: t("user_document_table_size"), flex: 1 },
  { field: "date", headerName: t("user_document_table_date"), flex: 1 },
];

export const columnsFinamialRecord = [
  { field: "created_at", headerName: t("user_journal_table_date"), width: 170 },
  { field: "cr", headerName: t("user_journal_table_cr"), width: 190 },
  { field: "dr", headerName: t("user_journal_table_dr"), width: 190 },
  { field: "amount", headerName: t("user_journal_table_amount") },
  { field: "balance", headerName: t("user_journal_table_balance") },
  { field: "created_at", headerName: t("user_journal_table_operation") },
  { field: "description", headerName: t("user_journal_table_description") },
];

export const columnsQuotas = [
  { field: "created_at", headerName: t("global_date"), width: 150 },
  {
    field: "download",
    headerName: t("user_activate_download"),
    valueGetter: (params) => {
      if (params.row.rx_mbytes) {
        return convertFromBytes(params.row.rx_mbytes);
      }
    },
  },
  {
    field: "upload",
    headerName: t("user_activate_upload"),
    valueGetter: (params) => {
      if (params.row.tx_mbytes) {
        return convertFromBytes(params.row.tx_mbytes);
      }
    },
  },
  {
    field: "rxtx_mbytes",
    headerName: t("Total Traffic (MB)"),
    valueGetter: (params) => {
      if (params.row.rxtx_mbytes) {
        return convertFromBytes(params.row.rxtx_mbytes);
      }
    },
  },
  { field: "effective_date", headerName: t("Effective Date"), width: 150 },
  { field: "comment", headerName: t("global_comment") },
];

export const columnsCompensations = [
  { field: "created_at", headerName: t("global_date"), width: 140, flex: 1 },
  {
    field: "user_details",
    headerName: t("global_username"),
    valueGetter: (params) => {
      if (params.row["user_details"]) {
        return params.row["user_details"].username;
      }
    },
    width: 140,
    flex: 1,
  },
  { field: "days", headerName: t("global_days"), flex: 1 },
  { field: "traffic", headerName: t("menu_reports_traffic"), flex: 1 },
  { field: "hours", headerName: t("users_table_uptime"), flex: 1 },
  { field: "created_by_username", headerName: t("global_manager"), flex: 1 },
  { field: "approved", headerName: t("Approved"), flex: 1 },
  { field: "approved_by_username", headerName: t("Approved By"), flex: 1 },
];

export const columnsUserTickets = [
  { field: "created_at", headerName: t("global_date"), width: 140 },
  { field: "subject", headerName: t("global_subject"), width: 120 },
  {
    field: "user_details.username",
    headerName: t("global_username"),
    valueGetter: (params) => {
      if (params.row["user_details"]) {
        return params.row["user_details"].username;
      }
    },
    width: 140,
  },
  {
    field: "user_details.firstname",
    headerName: t("global_firstname"),
    valueGetter: (params) => {
      if (params.row["user_details"]) {
        return params.row["user_details"].firstname;
      }
    },
    width: 140,
  },
  {
    field: "user_details.lastname",
    headerName: t("global_lastname"),
    valueGetter: (params) => {
      if (params.row["user_details"]) {
        return params.row["user_details"].lastname;
      }
    },
    width: 140,
  },
  { field: "closed", headerName: t("global_status"), width: 140 },
];

export const columnsManagers = [
  {
    field: "username",
    headerName: t("managers_table_parent"),
    cellClassName: "name-column-cell",
    flex: 1,
    renderCell: (params) => {
      if (params.row["username"]) {
        return (
          <Link
            to={`/managers/profile/${params.row.id}/general`}
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
    headerName: t("users_table_firstname"),
    type: "number",
    headerAlign: "left",
    flex: 1,
    renderCell: (params) => {
      if (params.row["firstname"]) {
        return (
          <Link
            to={`/managers/profile/${params.row.id}/general`}
            className="text_color"
          >
            {params.row["firstname"]}
          </Link>
        );
      }
    },
  },
  { field: "lastname", headerName: t("users_table_lastname"), flex: 1 },
  { field: "balance", headerName: t("managers_table_balance"), flex: 1 },
  {
    field: "loan_balance",
    headerName: t("managers_table_loan_balance"),
    flex: 1,
  },
  {
    field: "parent_details",
    headerName: t("managers_table_acl_group"),
    valueGetter: (params) => {
      if (params.row["parent_details"]) {
        return params.row["parent_details"].username;
      }
    },
    flex: 1,
  },
  { field: "username", headerName: t("managers_table_parent"), flex: 1 },
  {
    field: "users_count",
    headerName: t("managers_table_users_count"),
    flex: 1,
  },
];

export const columnsInvoicesManagers = [
  {
    field: "invoice_number",
    headerName: t("user_invoice_table_number"),
    cellClassName: "name-column-cell",
    flex: 1,
  },
  {
    field: "created_at",
    headerName: t("user_invoice_table_date"),
    flex: 1,
  },
  { field: "type", headerName: t("user_invoice_table_type"), flex: 1 },
  { field: "amount", headerName: t("user_invoice_table_amount"), flex: 1 },
  {
    field: "description",
    headerName: t("user_invoice_table_description"),
    flex: 1,
  },
  {
    field: "username",
    headerName: t("manager_invoice_table_created_by"),
    flex: 1,
  },
  {
    field: "payment_method",
    headerName: t("manager_invoice_table_method"),
    flex: 1,
  },
  { field: "paid", headerName: t("manager_invoice_table_paid"), flex: 1 },
];

export const columnsReceiptManagers = [
  {
    field: "receipt_number",
    headerName: t("user_receipt_table_no"),
    cellClassName: "name-column-cell",
    flex: 1,
  },
  {
    field: "created_at",
    headerName: t("user_receipt_table_date"),
    flex: 1,
  },
  {
    field: "type",
    headerName: t("user_receipt_table_type"),
    flex: 1,
  },
  { field: "amount", headerName: t("user_receipt_table_amount"), flex: 1 },
  {
    field: "description",
    headerName: t("user_receipt_table_description"),
    flex: 1,
  },
  {
    field: "username",
    headerName: t("user_receipt_table_created_by"),
    flex: 1,
  },
];

export const columnsRegisterAccountsManagers = [
  {
    field: "created_at",
    headerName: t("global_date"),
    flex: 1,
  },
  {
    field: "cr",
    headerName: t("user_journal_table_cr"),
    flex: 1,
  },
  {
    field: "dr",
    headerName: t("user_journal_table_dr"),
    flex: 1,
  },
  { field: "amount", headerName: t("user_journal_table_amount"), flex: 1 },
  { field: "balance", headerName: t("user_journal_table_balance"), flex: 1 },
  {
    field: "operation",
    headerName: t("user_journal_table_operation"),
    flex: 1,
  },
  {
    field: "description",
    headerName: t("user_journal_table_description"),
    flex: 1,
  },
];

export const columnsGroups = [
  {
    field: "name",
    headerName: t("global_name"),
    renderCell: (params) => {
      if (params.row["name"]) {
        return (
          <Link to={`/groups/${params.row.id}/edit`} className="text_color">
            {params.row["name"]}
          </Link>
        );
      }
    },
  },
  {
    field: "description",
    headerName: t("global_description"),
  },
  {
    field: "users_count",
    headerName: t("menu_users"),
  },
  { field: "managers_count", headerName: t("menu_managers") },
];

export const columnsNas = [
  {
    field: "shortname",
    headerName: t("global_name"),
    renderCell: (params) => {
      if (params.row["shortname"]) {
        return (
          <Link
            to={`/NAS/profile/${params.row.id}/edit`}
            className="text_color"
          >
            {params.row["shortname"]}
          </Link>
        );
      }
    },
  },
  {
    field: "nasname",
    headerName: t("nas_form_ip_address"),
  },
  {
    field: "type",
    headerName: t("nas_form_type"),
  },
  { field: "secret", headerName: t("nas_form_secret") },
  { field: "online_users_count", headerName: t("RTT") },
  { field: "ping_time", headerName: t("menu_users_online") },
  { field: "ping_loss", headerName: t("Packet Loss") },
];

export const columnsPackages = [
  {
    field: "name",
    headerName: t("global_name"),
    renderCell: (params) => {
      if (params.row["name"]) {
        return (
          <Link
            to={`/packages/profile/${params.row.id}/edit`}
            className="text_color"
          >
            {params.row["name"]}
          </Link>
        );
      }
    },
  },
  {
    field: "price",
    headerName: t("global_price"),
  },
  {
    field: "pool",
    headerName: t("ippool_form_name"),
  },
  { field: "downrate", headerName: t("profiles_table_downrate") },
  { field: "uprate", headerName: t("profiles_table_uprate") },
  { field: "type", headerName: t("global_type") },
  { field: "expiration_amount", headerName: t("profiles_table_expiry") },
  { field: "users_count", headerName: t("menu_users") },
  { field: "online_users_count", headerName: t("menu_users_online") },
];

export const columnsConsumptionNotices = [
  {
    field: "threshold",
    headerName: t("Threshold"),
    renderCell: (params) => {
      if (params.row["threshold"]) {
        return (
          <Link
            to={`/consumption-notices/profile/${params.row.id}/edit`}
            className="text_color"
          >
            {params.row["threshold"]}
          </Link>
        );
      }
    },
    flex: 1,
  },
  {
    field: "ProfileName",
    headerName: t("Profile"),
    flex: 1,
  },
  {
    field: "check_counter",
    headerName: t("Counter"),
    flex: 1,
  },
  {
    field: "sms_enabled",
    headerName: t("SMS"),
    flex: 1,
  },
  {
    field: "telegram_enabled",
    headerName: t("Telegram"),
    flex: 1,
  },
  {
    field: "email_enabled",
    headerName: t("Email"),
    flex: 1,
  },
  {
    field: "webhook_enabled",
    headerName: t("Wehook"),
    flex: 1,
  },
];

export const columnsAddonsServices = [
  {
    field: "name",
    headerName: t("Addon Name"),
    renderCell: (params) => {
      if (params.row["name"]) {
        return (
          <Link
            to={`/additional-services/profile/${params.row.id}/edit`}
            className="text_color"
          >
            {params.row["name"]}
          </Link>
        );
      }
    },
    flex: 1,
  },
  {
    field: "expiration_amount",
    headerName: t("Expiration"),
    flex: 1,
  },
  {
    field: "set_address_list",
    headerName: t("Set Address List"),
    width: 130,
    flex: 1,
  },
  {
    field: "set_pool_name",
    headerName: t("Set Pool Name"),
    width: 130,
    flex: 1,
  },
  {
    field: "call_url",
    headerName: t("Call Url"),
    flex: 1,
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
    field: "invoice_number",
    headerName: t("user_invoice_table_number"),
  },
  {
    field: "due_date",
    headerName: t("user_invoice_table_date"),
  },
  {
    field: "username",
    headerName: t("global_username"),
    valueGetter: (params) => {
      if (params.row.manager_details) {
        return params.row.manager_details.username;
      }
    },
  },
  {
    field: "type",
    headerName: t("global_type"),
  },
  {
    field: "amount",
    headerName: t("user_invoice_table_amount"),
  },
  {
    field: "description",
    headerName: t("user_invoice_table_description"),
    width: 280,
  },

  {
    field: "username",
    headerName: t("user_invoice_table_created_by"),
    valueGetter: (params) => {
      if (params.row.manager_details) {
        return params.row.manager_details.username;
      }
    },
  },
  {
    field: "payment_method",
    headerName: t("user_invoice_table_method"),
  },
  {
    field: "paid",
    headerName: t("user_invoice_table_paid"),
    renderCell: (params) => {
      if (params.row.paid == 1) {
        return <i class="fa-solid fa-check"></i>;
      } else {
        return <i class="fa-solid fa-xmark"></i>;
      }
    },
  },
];

export const columnsReportsActivations = [
  {
    field: "created_at",
    headerName: t("global_date"),
  },
  {
    field: "user_details.username",
    headerName: t("global_username"),
    valueGetter: (params) => {
      if (params.row.user_details) {
        return params.row.user_details.username;
      }
    },
  },
  {
    field: "user_details.firstname",
    headerName: t("global_firstname"),
    valueGetter: (params) => {
      if (params.row.user_details) {
        return params.row.user_details.firstname;
      }
    },
  },
  {
    field: "user_details.lastname",
    headerName: t("global_lastname"),
    valueGetter: (params) => {
      if (params.row.user_details) {
        return params.row.user_details.lastname;
      }
    },
  },
  {
    field: "manager_details.username",
    headerName: t("global_manager"),
    valueGetter: (params) => {
      if (params.row.manager_details) {
        return params.row.manager_details.username;
      }
    },
  },
  {
    field: "profile_details.name",
    headerName: t("global_profile"),
    width: 80,
    valueGetter: (params) => {
      if (params.row.profile_details) {
        return params.row.profile_details.name;
      }
    },
  },
  {
    field: "price",
    headerName: t("global_price"),
  },
  {
    field: "user_price",
    headerName: t("user_activate_end_user_price"),
    width: 160,
  },
  {
    field: "old_expiration",
    headerName: t("report_activations_old_expiration"),
    width: 160,
  },
  {
    field: "new_expiration",
    headerName: t("report_activations_new_expiration"),
  },
  {
    field: "activation_method",
    headerName: t("user_activate_method"),
  },
  {
    field: "user_activations_count",
    headerName: t("report_activations_count"),
  },
  {
    field: "refunded",
    headerName: t("global_status"),
  },
];

export const columnsReportCardsTransfer = [
  {
    field: "created_at",
    headerName: t("global_date"),
  },
  {
    field: "old_owner_username",
    headerName: t("cards_log_old_owner"),
  },
  {
    field: "new_owner_username",
    headerName: t("cards_log_new_owner"),
  },
  {
    field: "qty",
    headerName: t("global_qty"),
  },
  {
    field: "unit_value",
    headerName: t("cards_log_unit_value"),
  },
  {
    field: "total_value",
    headerName: t("cards_log_total_value"),
  },
  {
    field: "card_type",
    headerName: t("global_type"),
  },
  {
    field: "range_start",
    headerName: t("cards_log_range_start"),
  },
  {
    field: "range_end",
    headerName: t("cards_log_range_end"),
  },
  {
    field: "username",
    headerName: t("global_manager"),
  },
];

export const columnsReportDebtsJournal = [
  {
    field: "created_at",
    headerName: t("global_date"),
  },
  {
    field: "cr",
    headerName: t("report_journal_cr"),
  },
  {
    field: "dr",
    headerName: t("report_journal_dr"),
  },
  {
    field: "amount",
    headerName: t("report_journal_amount"),
  },
  {
    field: "balance",
    headerName: t("report_journal_balance"),
  },
  {
    field: "comment",
    headerName: t("user_depodrawal_form_comment"),
  },
];

export const columnsReportDaraExportJobs = [
  {
    field: "created_at",
    headerName: t("global_date"),
    flex: 1,
  },
  {
    field: "filename",
    headerName: t("Filename"),
    flex: 1,
  },
  {
    field: "manager_details.username",
    headerName: t("global_manager"),
    flex: 1,
    valueGetter: (params) => {
      if (params.row.manager_details) {
        return params.row.manager_details.username;
      }
    },
  },
  {
    field: "module",
    headerName: t("Module"),
    flex: 1,
  },
  {
    field: "status",
    headerName: t("global_status"),
    flex: 1,
  },
  {
    field: "completed_at",
    headerName: t("Completed At"),
    flex: 1,
  },
  {
    field: "file_size",
    headerName: t("global_size"),
    flex: 1,
  },
];

export const columnsReportInvoiceManagers = [
  {
    field: "invoice_number",
    headerName: t("user_invoice_table_number"),
  },
  {
    field: "created_at",
    headerName: t("user_invoice_table_date"),
  },
  {
    field: "type",
    headerName: t("user_invoice_table_type"),
  },
  {
    field: "owner_details.username",
    headerName: t("global_manager"),
    valueGetter: (params) => {
      if (params.row.owner_details) {
        return params.row.owner_details.username;
      }
    },
  },
  {
    field: "amount",
    headerName: t("user_invoice_table_amount"),
  },
  {
    field: "description",
    headerName: t("global_description"),
  },
  {
    field: "issuer_details.username",
    headerName: t("manager_invoice_table_created_by"),
    valueGetter: (params) => {
      if (params.row.issuer_details) {
        return params.row.issuer_details.username;
      }
    },
  },
  {
    field: "payment_method",
    headerName: t("manager_invoice_table_method"),
  },
  {
    field: "comments",
    headerName: t("global_comment"),
  },
  {
    field: "paid",
    headerName: t("manager_invoice_table_paid"),
  },
];

export const columnsReportJournalManagers = [
  {
    field: "created_at",
    headerName: t("global_date"),
    flex: 1,
  },
  {
    field: "cr",
    headerName: t("report_journal_cr"),
    flex: 1,
  },
  {
    field: "dr",
    headerName: t("report_journal_dr"),
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("report_journal_amount"),
    flex: 1,
  },
  {
    field: "balance",
    headerName: t("report_journal_balance"),
    flex: 1,
  },
  {
    field: "operation",
    headerName: t("user_journal_table_operation"),
    flex: 1,
  },
  {
    field: "description",
    headerName: t("user_journal_table_description"),
    flex: 1,
  },
  {
    field: "comment",
    headerName: t("global_comment"),
    flex: 1,
  },
];

export const columnsReportMonetTransfer = [
  {
    field: "created_at",
    headerName: t("global_date"),
    flex: 1,
  },
  {
    field: "operation",
    headerName: t("user_journal_table_operation"),
    flex: 1,
  },
  {
    field: "cr_manager",
    headerName: t("user_journal_table_cr"),
    flex: 1,
  },
  {
    field: "dr_manager",
    headerName: t("user_journal_table_dr"),
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("user_journal_table_amount"),
    flex: 1,
  },
  {
    field: "comment",
    headerName: t("global_comment"),
    flex: 1,
  },
];

export const columnsPaymentGatewayTransactions = [
  {
    field: "created_at",
    headerName: t("global_date"),
    flex: 1,
  },
  {
    field: "gateway_name",
    headerName: t("payment_gateways_transactions_table_gateway"),
    flex: 1,
  },
  {
    field: "manager_name",
    headerName: t("payment_gateways_transactions_table_manager"),
    flex: 1,
  },
  {
    field: "user_name",
    headerName: t("payment_gateways_transactions_table_user"),
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("payment_gateways_transactions_table_amount"),
    flex: 1,
  },
  {
    field: "currency",
    headerName: t("payment_gateways_transactions_table_currency"),
    flex: 1,
  },
  {
    field: "status",
    headerName: t("payment_gateways_transactions_table_status"),
    flex: 1,
  },
];

export const columnsReportReceiptManagers = [
  {
    field: "receipt_number",
    headerName: t("user_receipt_table_no"),
    flex: 1,
  },
  {
    field: "created_at",
    headerName: t("user_receipt_table_date"),
    flex: 1,
  },
  {
    field: "manager_details.username",
    headerName: t("global_username"),
    flex: 1,
    valueGetter: (params) => {
      if (params.row.manager_details) {
        return params.row.manager_details.username;
      }
    },
  },
  {
    field: "type",
    headerName: t("user_receipt_table_type"),
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("user_receipt_table_amount"),
    flex: 1,
  },
  {
    field: "description",
    headerName: t("user_receipt_table_description"),
    flex: 1,
  },
  {
    field: "created_by",
    headerName: t("user_receipt_table_created_by"),
    flex: 1,
  },
];

export const columnsReportSessions = [
  {
    field: "username",
    headerName: t("global_username"),
  },
  {
    field: "acctstarttime",
    headerName: t("user_session_table_started"),
  },
  {
    field: "acctstoptime",
    headerName: t("user_session_table_ended"),
  },
  {
    field: "framedipaddress",
    headerName: t("user_session_table_ip"),
  },
  {
    field: "nasipaddress",
    headerName: t("menu_nas"),
  },
  {
    field: "callingstationid",
    headerName: t("user_session_table_mac"),
  },
  {
    field: "acctinputoctets",
    headerName: t("user_session_table_upload"),
    valueGetter: (params) => {
      if (params.row["acctinputoctets"]) {
        return convertFromBytes(params.row["acctinputoctets"]);
      }
    },
  },
  {
    field: "acctoutputoctets",
    headerName: t("user_session_table_download"),
    valueGetter: (params) => {
      if (params.row["acctoutputoctets"]) {
        return convertFromBytes(params.row["acctoutputoctets"]);
      }
    },
  },
  {
    field: "calledstationid",
    headerName: t("user_session_table_service"),
  },
  {
    field: "acctterminatecause",
    headerName: t("user_session_table_termination_cause"),
    width: 170,
  },
];

export const columnsReportSuspicious = [
  {
    field: "username",
    headerName: t("Username"),
    flex: 1,
  },
  {
    field: "expiration",
    headerName: t("Expiration"),
    flex: 1,
  },
  {
    field: "name",
    headerName: t("Name"),
    flex: 1,
  },
  {
    field: "currentSessions",
    headerName: t("Current Sessions"),
    flex: 1,
  },
  {
    field: "flag",
    headerName: t("Flag"),
    flex: 1,
  },
];

export const columnsSysLog = [
  {
    field: "created_at",
    headerName: t("global_date"),
    width: 150,
  },
  {
    field: "event",
    headerName: t("report_syslog_event"),
    width: 150,
  },
  {
    field: "manager_details",
    headerName: t("global_manager"),
    valueGetter: (params) => {
      if (params.row["manager_details"]) {
        return params.row["manager_details"].username;
      }
    },
  },
  {
    field: "description",
    headerName: t("global_description"),
  },
  {
    field: "ip",
    headerName: t("global_ip"),
    width: 150,
  },
];

export const columnsLoginAttempts = [
  {
    field: "created_at",
    headerName: t("global_date"),
    width: 160,
  },
  {
    field: "username",
    headerName: t("global_username"),
    width: 160,
  },
  {
    field: "reply",
    headerName: t("Server Reply"),
    width: 160,
  },
  {
    field: "nas_ip_address",
    headerName: t("menu_nas"),
    width: 160,
  },
  {
    field: "mac",
    headerName: t("user_session_table_mac"),
    width: 160,
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
    field: "name",
    headerName: t("nas_form_pool"),
    renderCell: (params) => {
      if (params.row["name"]) {
        return (
          <Link to={`/ip-pools/${params.row.id}/edit`} className="text_color">
            {params.row["name"]}
          </Link>
        );
      }
    },
    width: 150,
  },
  {
    field: "start_ip",
    headerName: t("From IP"),
  },
  {
    field: "end_ip",
    headerName: t("To IP"),
  },
  {
    field: "lease_time",
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
