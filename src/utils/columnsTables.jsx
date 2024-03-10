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
    width: 60,
  },
  {
    field: "username",
    headerName: t("users_table_username"),
    width: 230,
    minWidth: 190,
    flex: 1,
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
    minWidth: 190,
    flex: 1,
  },
  {
    field: "lastname",
    headerName: t("users_table_lastname"),
    flex: 1,
    minWidth: 170,
  },
  {
    field: "expiration",
    headerName: t("users_table_expiration"),
    flex: 1,
    width: 200,
    minWidth: 190,
  },
  {
    field: "parent_username",
    headerName: t("users_table_parent"),
    flex: 1,
    minWidth: 150,
  },
  {
    field: "package",
    headerName: t("users_table_profile"),
    valueGetter: (params) => {
      if (params.row["profile_details"] && params.row["profile_details"].name) {
        return params.row["profile_details"].name;
      }
    },
    renderCell: (params) => {
      if (params.row["username"]) {
        return (
          <Link
            to={`/packages/profile/${params.row.profile_details.id}/edit`}
            className="text_color"
          >
            {params.row["profile_details"].name}
          </Link>
        );
      }
    },
    minWidth: 150,
  },
  {
    field: "loan_balance",
    headerName: t("users_table_balance"),
    minWidth: 150,
  },
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
    minWidth: 170,
  },
  {
    field: "remaining_days",
    headerName: t("users_table_remaining_days"),
    minWidth: 180,
  },
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
    minWidth: 170,
  },
  {
    field: "username",
    headerName: t("global_username"),
    flex: 1,
    minWidth: 170,
  },
  {
    field: "acctoutputoctets",
    headerName: t("global_download"),
    valueGetter: (params) => {
      if (params.row["acctoutputoctets"]) {
        return convertFromBytes(params.row["acctoutputoctets"]);
      }
    },
    flex: 1,
    minWidth: 170,
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
    minWidth: 170,
  },
  {
    field: "parent_username",
    headerName: t("users_table_parent"),
    flex: 1,
    minWidth: 170,
  },
  {
    field: "user_profile_name",
    headerName: t("users_table_profile"),
    flex: 1,
    minWidth: 170,
  },
  {
    field: "framedipaddress",
    headerName: t("global_ip"),
    flex: 1,
    minWidth: 170,
  },
  {
    field: "callingstationid",
    headerName: t("user_session_table_mac"),
    flex: 1,
    minWidth: 170,
  },
  { field: "acctsessiontime", headerName: t("users_table_uptime"), flex: 1 },
  {
    field: "oui",
    headerName: t("users_table_hardware"),
    flex: 1,
    minWidth: 170,
  },
];

export const columnsSessions = [
  {
    field: "acctstarttime",
    headerName: t("user_session_table_started"),
    flex: 1,
    minWidth: 190,
  },
  {
    field: "acctstoptime",
    headerName: t("user_session_table_ended"),
    flex: 1,
    minWidth: 190,
  },
  {
    field: "framedipaddress",
    headerName: t("user_session_table_ip"),
    flex: 1,
    minWidth: 190,
  },
  {
    field: "acctoutputoctets",
    headerName: t("user_session_table_download"),
    valueGetter: (params) => {
      if (params.row["acctoutputoctets"]) {
        return convertFromBytes(params.row["acctoutputoctets"]);
      }
    },
    flex: 1,
    minWidth: 180,
  },
  {
    field: "acctinputoctets",
    headerName: t("user_session_table_upload"),
    valueGetter: (params) => {
      if (params.row["acctinputoctets"]) {
        return convertFromBytes(params.row["acctinputoctets"]);
      }
    },
    flex: 1,
    minWidth: 180,
  },
  {
    field: "callingstationid",
    headerName: t("user_session_table_mac"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "calledstationid",
    headerName: t("user_session_table_profile"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "nasipaddress",
    headerName: t("user_session_table_service"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "acctterminatecause",
    headerName: t("user_session_table_protocol"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "acctterminatecause",
    headerName: t("user_session_table_termination_cause"),
    flex: 1,
    minWidth: 180,
  },
];

export const columnsInvoices = [
  {
    field: "invoice_number",
    headerName: t("user_invoice_table_number"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "created_at",
    headerName: t("user_invoice_table_date"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "type",
    headerName: t("user_invoice_table_type"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "amount",
    headerName: t("user_invoice_table_amount"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "description",
    headerName: t("user_invoice_table_description"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "user_details.parent_username",
    headerName: t("user_invoice_table_created_by"),
    valueGetter: (params) => {
      if (params.row["user_details"]) {
        return params.row["user_details"].parent_username;
      }
    },
    flex: 1,
    minWidth: 180,
  },
  {
    field: "payment_method",
    headerName: t("user_invoice_table_method"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "paid",
    headerName: t("user_invoice_table_paid"),
    width: 150,
    flex: 1,
    minWidth: 180,
  },
];
export const columnsPayments = [
  {
    field: "receipt_number",
    headerName: t("user_receipt_table_no"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "created_at",
    headerName: t("user_receipt_table_date"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "type",
    headerName: t("user_receipt_table_type"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "amount",
    headerName: t("user_receipt_table_amount"),
    flex: 1,
    minWidth: 180,
  },
  {
    field: "description",
    headerName: t("user_receipt_table_description"),
    flex: 1,
    minWidth: 180,
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
    minWidth: 180,
  },
];

export const columnsRecord = [
  {
    field: "created_at",
    headerName: t("user_history_table_date"),
    minWidth: 180,
    flex: 1,
  },
  {
    field: "event",
    headerName: t("user_history_table_action"),
    minWidth: 140,
    flex: 1,
  },
  {
    field: "description",
    headerName: t("user_history_table_description"),
    minWidth: 180,
    flex: 1,
  },
  {
    field: "manager_details.firstname",
    headerName: t("user_history_table_created_by"),
    minWidth: 180,
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
    minWidth: 180,
    flex: 1,
  },
  {
    field: "size",
    headerName: t("user_document_table_size"),
    flex: 1,
    minWidth: 150,
  },
  {
    field: "date",
    headerName: t("user_document_table_date"),
    flex: 1,
    minWidth: 150,
  },
];

export const columnsFinamialRecord = [
  {
    field: "created_at",
    headerName: t("user_journal_table_date"),
    minWidth: 180,
    flex: 1,
  },
  {
    field: "cr",
    headerName: t("user_journal_table_cr"),
    minWidth: 180,
    flex: 1,
  },
  {
    field: "dr",
    headerName: t("user_journal_table_dr"),
    minWidth: 180,
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("user_journal_table_amount"),
    minWidth: 180,
    flex: 1,
  },
  {
    field: "balance",
    headerName: t("user_journal_table_balance"),
    minWidth: 180,
    flex: 1,
  },
  {
    field: "created_at",
    headerName: t("user_journal_table_operation"),
    minWidth: 180,
    flex: 1,
  },
  {
    field: "description",
    headerName: t("user_journal_table_description"),
    minWidth: 180,
    flex: 1,
  },
];

export const columnsQuotas = [
  { field: "created_at", headerName: t("global_date"), minWidth: 150, flex: 1 },
  {
    field: "download",
    headerName: t("user_activate_download"),
    valueGetter: (params) => {
      if (params.row.rx_mbytes) {
        return convertFromBytes(params.row.rx_mbytes);
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "upload",
    headerName: t("user_activate_upload"),
    valueGetter: (params) => {
      if (params.row.tx_mbytes) {
        return convertFromBytes(params.row.tx_mbytes);
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "rxtx_mbytes",
    headerName: t("Total Traffic (MB)"),
    valueGetter: (params) => {
      if (params.row.rxtx_mbytes) {
        return convertFromBytes(params.row.rxtx_mbytes);
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "effective_date",
    headerName: t("Effective Date"),
    minWidth: 160,
    flex: 1,
  },
  { field: "comment", headerName: t("global_comment"), minWidth: 160, flex: 1 },
];

export const columnsCompensations = [
  { field: "created_at", headerName: t("global_date"), minWidth: 150, flex: 1 },
  {
    field: "user_details",
    headerName: t("global_username"),
    valueGetter: (params) => {
      if (params.row["user_details"]) {
        return params.row["user_details"].username;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  { field: "days", headerName: t("global_days"), minWidth: 160, flex: 1 },
  {
    field: "traffic",
    headerName: t("menu_reports_traffic"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "hours",
    headerName: t("users_table_uptime"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "created_by_username",
    headerName: t("global_manager"),
    minWidth: 160,
    flex: 1,
  },
  { field: "approved", headerName: t("Approved"), minWidth: 160, flex: 1 },
  {
    field: "approved_by_username",
    headerName: t("Approved By"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsUserTickets = [
  { field: "created_at", headerName: t("global_date"), minWidth: 150, flex: 1 },
  { field: "subject", headerName: t("global_subject"), minWidth: 120, flex: 1 },
  {
    field: "user_details.username",
    headerName: t("global_username"),
    valueGetter: (params) => {
      if (params.row["user_details"]) {
        return params.row["user_details"].username;
      }
    },
    minWidth: 150,
    flex: 1,
  },
  {
    field: "user_details.firstname",
    headerName: t("global_firstname"),
    valueGetter: (params) => {
      if (params.row["user_details"]) {
        return params.row["user_details"].firstname;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "user_details.lastname",
    headerName: t("global_lastname"),
    valueGetter: (params) => {
      if (params.row["user_details"]) {
        return params.row["user_details"].lastname;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  { field: "closed", headerName: t("global_status"), minWidth: 160, flex: 1 },
];

export const columnsManagers = [
  {
    field: "username",
    headerName: t("managers_table_parent"),
    cellClassName: "name-column-cell",
    minWidth: 160,
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
    minWidth: 160,
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
  {
    field: "lastname",
    headerName: t("users_table_lastname"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "balance",
    headerName: t("managers_table_balance"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "loan_balance",
    headerName: t("managers_table_loan_balance"),
    minWidth: 160,
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
    minWidth: 150,
    flex: 1,
  },
  {
    field: "username",
    headerName: t("managers_table_parent"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "users_count",
    headerName: t("managers_table_users_count"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsInvoicesManagers = [
  {
    field: "invoice_number",
    headerName: t("user_invoice_table_number"),
    cellClassName: "name-column-cell",
    minWidth: 160,
    flex: 1,
  },
  {
    field: "created_at",
    headerName: t("user_invoice_table_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "type",
    headerName: t("user_invoice_table_type"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("user_invoice_table_amount"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "description",
    headerName: t("user_invoice_table_description"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "username",
    headerName: t("manager_invoice_table_created_by"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "payment_method",
    headerName: t("manager_invoice_table_method"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "paid",
    headerName: t("manager_invoice_table_paid"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsReceiptManagers = [
  {
    field: "receipt_number",
    headerName: t("user_receipt_table_no"),
    cellClassName: "name-column-cell",
    minWidth: 160,
    flex: 1,
  },
  {
    field: "created_at",
    headerName: t("user_receipt_table_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "type",
    headerName: t("user_receipt_table_type"),
    minWidth: 160,
    flex: 1,
  },
  { field: "amount", headerName: t("user_receipt_table_amount"), flex: 1 },
  {
    field: "description",
    headerName: t("user_receipt_table_description"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "username",
    headerName: t("user_receipt_table_created_by"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsRegisterAccountsManagers = [
  {
    field: "created_at",
    headerName: t("global_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "cr",
    headerName: t("user_journal_table_cr"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "dr",
    headerName: t("user_journal_table_dr"),
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("user_journal_table_amount"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "balance",
    headerName: t("user_journal_table_balance"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "operation",
    headerName: t("user_journal_table_operation"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "description",
    headerName: t("user_journal_table_description"),
    minWidth: 160,
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
    minWidth: 160,
    flex: 1,
  },
  {
    field: "description",
    headerName: t("global_description"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "users_count",
    headerName: t("menu_users"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "managers_count",
    headerName: t("menu_managers"),
    minWidth: 160,
    flex: 1,
  },
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
    minWidth: 160,
    flex: 1,
  },
  {
    field: "nasname",
    headerName: t("nas_form_ip_address"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "type",
    headerName: t("nas_form_type"),
    minWidth: 160,
    flex: 1,
  },
  { field: "secret", headerName: t("nas_form_secret"), minWidth: 160, flex: 1 },
  { field: "online_users_count", headerName: t("RTT"), minWidth: 160, flex: 1 },
  {
    field: "ping_time",
    headerName: t("menu_users_online"),
    minWidth: 160,
    flex: 1,
  },
  { field: "ping_loss", headerName: t("Packet Loss"), minWidth: 160, flex: 1 },
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
    minWidth: 160,
    flex: 1,
  },
  {
    field: "price",
    headerName: t("global_price"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "pool",
    headerName: t("ippool_form_name"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "downrate",
    headerName: t("profiles_table_downrate"),
    minWidth: 160,
    flex: 1,
    minWidth: 160,
    flex: 1,
  },
  {
    field: "uprate",
    headerName: t("profiles_table_uprate"),
    minWidth: 160,
    flex: 1,
  },
  { field: "type", headerName: t("global_type"), minWidth: 160, flex: 1 },
  {
    field: "expiration_amount",
    headerName: t("profiles_table_expiry"),
    minWidth: 160,
    flex: 1,
  },
  { field: "users_count", headerName: t("menu_users"), minWidth: 160, flex: 1 },
  {
    field: "online_users_count",
    headerName: t("menu_users_online"),
    minWidth: 160,
    flex: 1,
  },
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
    minWidth: 160,
    flex: 1,
  },
  {
    field: "ProfileName",
    headerName: t("Profile"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "check_counter",
    headerName: t("Counter"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "sms_enabled",
    headerName: t("SMS"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "telegram_enabled",
    headerName: t("Telegram"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "email_enabled",
    headerName: t("Email"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "webhook_enabled",
    headerName: t("Wehook"),
    minWidth: 160,
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
    minWidth: 160,
    flex: 1,
  },
  {
    field: "expiration_amount",
    headerName: t("Expiration"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "set_address_list",
    headerName: t("Set Address List"),
    minWidth: 130,
    flex: 1,
  },
  {
    field: "set_pool_name",
    headerName: t("Set Pool Name"),
    minWidth: 130,
    flex: 1,
  },
  {
    field: "call_url",
    headerName: t("Call Url"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsCards = [
  {
    field: "series",
    headerName: t("global_series"),
    minWidth: 160,
    flex: 1,
    renderCell: (params) => {
      return (
        <Link className="text_color" to={`/cards/list/${params.row.series}`}>
          {params.row.series}
        </Link>
      );
    },
  },
  {
    field: "type",
    headerName: t("global_type"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "value",
    headerName: t("Value"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "qty",
    headerName: t("global_qty"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "used",
    headerName: t("Used"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "username",
    headerName: t("global_owner"),
    flex: 1,
    valueGetter: (params) => {
      if (params.row["owner_details"]) {
        return params.row["owner_details"].username;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "name",
    headerName: t("global_profile"),
    flex: 1,
    valueGetter: (params) => {
      if (params.row["profile_details"]) {
        return params.row["profile_details"].name;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "expiration",
    headerName: t("global_expiration"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsCardsList = [
  {
    field: "id",
    headerName: t("ID"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "serialnumber",
    headerName: t("Serial Number"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "pin",
    headerName: t("PIN"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "username",
    headerName: t("Username"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "password",
    headerName: t("Password"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "used_at",
    headerName: t("Used At"),
    flex: 1,

    minWidth: 160,
    flex: 1,
  },
  {
    field: "username",
    headerName: t("Used By (User)"),
    flex: 1,
    valueGetter: (params) => {
      if (params.row["profile_details"]) {
        return params.row["profile_details"].name;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "username",
    headerName: t("Used By (Manager)"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsCardsJobs = [
  {
    field: "type",
    headerName: t("global_type"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "username",
    headerName: t("global_owner"),
    valueGetter: (params) => {
      if (params.row["owner_details"]) {
        return params.row["owner_details"].username;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "username",
    headerName: t("Creator"),
    valueGetter: (params) => {
      if (params.row["creator_details"]) {
        return params.row["creator_details"].username;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "created_at",
    headerName: t("Date Added"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "qty",
    headerName: t("global_qty"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "value",
    headerName: t("Card Value"),
    minWidth: 120,
    flex: 1,
  },
  {
    field: "name",
    headerName: t("global_profile"),
    minWidth: 140,
    flex: 1,
  },
  {
    field: "series",
    headerName: t("Series"),
    minWidth: 140,
    flex: 1,
  },
  {
    field: "status",
    headerName: t("global_status"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsSubscribersInvoices = [
  {
    field: "invoice_number",
    headerName: t("user_invoice_table_number"),
    minWidth: 160,
    flex: 1,
    renderCell: (params) => {
      return (
        <Link to={`/issuing-invoice/${params.row.id}`} className="text_color">
          {params.row.invoice_number}
        </Link>
      );
    },
  },
  {
    field: "due_date",
    headerName: t("user_invoice_table_date"),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "username",
    headerName: t("global_username"),
    valueGetter: (params) => {
      if (params.row.manager_details) {
        return params.row.manager_details.username;
      }
    },
    minWidth: 140,
    flex: 1,
  },
  {
    field: "type",
    headerName: t("global_type"),
    minWidth: 130,
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("user_invoice_table_amount"),
    minWidth: 120,
    flex: 1,
  },
  {
    field: "description",
    headerName: t("user_invoice_table_description"),
    minWidth: 160,
    flex: 1,
  },

  {
    field: "username",
    headerName: t("user_invoice_table_created_by"),
    valueGetter: (params) => {
      if (params.row.manager_details) {
        return params.row.manager_details.username;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "payment_method",
    headerName: t("user_invoice_table_method"),
    minWidth: 150,
    flex: 1,
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
    minWidth: 140,
    flex: 1,
  },
];

export const columnsReportsActivations = [
  {
    field: "created_at",
    headerName: t("global_date"),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "user_details.username",
    headerName: t("global_username"),
    valueGetter: (params) => {
      if (params.row.user_details) {
        return params.row.user_details.username;
      }
    },
    minWidth: 140,
    flex: 1,
  },
  {
    field: "user_details.firstname",
    headerName: t("global_firstname"),
    valueGetter: (params) => {
      if (params.row.user_details) {
        return params.row.user_details.firstname;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "user_details.lastname",
    headerName: t("global_lastname"),
    valueGetter: (params) => {
      if (params.row.user_details) {
        return params.row.user_details.lastname;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "manager_details.username",
    headerName: t("global_manager"),
    valueGetter: (params) => {
      if (params.row.manager_details) {
        return params.row.manager_details.username;
      }
    },
    minWidth: 160,
    flex: 1,
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
    minWidth: 150,
    flex: 1,
  },
  {
    field: "price",
    headerName: t("global_price"),
    minWidth: 130,
    flex: 1,
  },
  {
    field: "user_price",
    headerName: t("user_activate_end_user_price"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "old_expiration",
    headerName: t("report_activations_old_expiration"),
    minWidth: 140,
    flex: 1,
  },
  {
    field: "new_expiration",
    headerName: t("report_activations_new_expiration"),
    minWidth: 140,
    flex: 1,
  },
  {
    field: "activation_method",
    headerName: t("user_activate_method"),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "user_activations_count",
    headerName: t("report_activations_count"),
    minWidth: 130,
    flex: 1,
  },
  {
    field: "refunded",
    headerName: t("global_status"),
    minWidth: 130,
    flex: 1,
  },
];

export const columnsReportCardsTransfer = [
  {
    field: "created_at",
    headerName: t("global_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "old_owner_username",
    headerName: t("cards_log_old_owner"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "new_owner_username",
    headerName: t("cards_log_new_owner"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "qty",
    headerName: t("global_qty"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "unit_value",
    headerName: t("cards_log_unit_value"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "total_value",
    headerName: t("cards_log_total_value"),
    minWidth: 140,
    flex: 1,
  },
  {
    field: "card_type",
    headerName: t("global_type"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "range_start",
    headerName: t("cards_log_range_start"),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "range_end",
    headerName: t("cards_log_range_end"),
    minWidth: 150,
    flex: 1,
  },
  {
    field: "username",
    headerName: t("global_manager"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsReportDebtsJournal = [
  {
    field: "created_at",
    headerName: t("global_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "cr",
    headerName: t("report_journal_cr"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "dr",
    headerName: t("report_journal_dr"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("report_journal_amount"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "balance",
    headerName: t("report_journal_balance"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "comment",
    headerName: t("user_depodrawal_form_comment"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsReportDaraExportJobs = [
  {
    field: "created_at",
    headerName: t("global_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "filename",
    headerName: t("Filename"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "manager_details.username",
    headerName: t("global_manager"),
    minWidth: 160,
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
    minWidth: 160,
    flex: 1,
  },
  {
    field: "status",
    headerName: t("global_status"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "completed_at",
    headerName: t("Completed At"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "file_size",
    headerName: t("global_size"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsReportInvoiceManagers = [
  {
    field: "invoice_number",
    headerName: t("user_invoice_table_number"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "created_at",
    headerName: t("user_invoice_table_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "type",
    headerName: t("user_invoice_table_type"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "owner_details.username",
    headerName: t("global_manager"),
    valueGetter: (params) => {
      if (params.row.owner_details) {
        return params.row.owner_details.username;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("user_invoice_table_amount"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "description",
    headerName: t("global_description"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "issuer_details.username",
    headerName: t("manager_invoice_table_created_by"),
    valueGetter: (params) => {
      if (params.row.issuer_details) {
        return params.row.issuer_details.username;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "payment_method",
    headerName: t("manager_invoice_table_method"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "comments",
    headerName: t("global_comment"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "paid",
    headerName: t("manager_invoice_table_paid"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsReportJournalManagers = [
  {
    field: "created_at",
    headerName: t("global_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "cr",
    headerName: t("report_journal_cr"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "dr",
    headerName: t("report_journal_dr"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("report_journal_amount"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "balance",
    headerName: t("report_journal_balance"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "operation",
    headerName: t("user_journal_table_operation"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "description",
    headerName: t("user_journal_table_description"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "comment",
    headerName: t("global_comment"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsReportMonetTransfer = [
  {
    field: "created_at",
    headerName: t("global_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "operation",
    headerName: t("user_journal_table_operation"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "cr_manager",
    headerName: t("user_journal_table_cr"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "dr_manager",
    headerName: t("user_journal_table_dr"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("user_journal_table_amount"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "comment",
    headerName: t("global_comment"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsPaymentGatewayTransactions = [
  {
    field: "created_at",
    headerName: t("global_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "gateway_name",
    headerName: t("payment_gateways_transactions_table_gateway"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "manager_name",
    headerName: t("payment_gateways_transactions_table_manager"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "user_name",
    headerName: t("payment_gateways_transactions_table_user"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("payment_gateways_transactions_table_amount"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "currency",
    headerName: t("payment_gateways_transactions_table_currency"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "status",
    headerName: t("payment_gateways_transactions_table_status"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsReportReceiptManagers = [
  {
    field: "receipt_number",
    headerName: t("user_receipt_table_no"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "created_at",
    headerName: t("user_receipt_table_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "manager_details.username",
    headerName: t("global_username"),
    minWidth: 160,
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
    minWidth: 160,
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
    minWidth: 160,
    flex: 1,
  },
];

export const columnsReportSessions = [
  {
    field: "username",
    headerName: t("global_username"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "acctstarttime",
    headerName: t("user_session_table_started"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "acctstoptime",
    headerName: t("user_session_table_ended"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "framedipaddress",
    headerName: t("user_session_table_ip"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "nasipaddress",
    headerName: t("menu_nas"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "callingstationid",
    headerName: t("user_session_table_mac"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "acctinputoctets",
    headerName: t("user_session_table_upload"),
    minWidth: 160,
    flex: 1,
    valueGetter: (params) => {
      if (params.row["acctinputoctets"]) {
        return convertFromBytes(params.row["acctinputoctets"]);
      }
    },
  },
  {
    field: "acctoutputoctets",
    headerName: t("user_session_table_download"),
    minWidth: 160,
    flex: 1,
    valueGetter: (params) => {
      if (params.row["acctoutputoctets"]) {
        return convertFromBytes(params.row["acctoutputoctets"]);
      }
    },
  },
  {
    field: "calledstationid",
    headerName: t("user_session_table_service"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "acctterminatecause",
    headerName: t("user_session_table_termination_cause"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsReportSuspicious = [
  {
    field: "username",
    headerName: t("Username"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "expiration",
    headerName: t("Expiration"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "name",
    headerName: t("Name"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "currentSessions",
    headerName: t("Current Sessions"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "flag",
    headerName: t("Flag"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsSysLog = [
  {
    field: "created_at",
    headerName: t("global_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "event",
    headerName: t("report_syslog_event"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "manager_details",
    headerName: t("global_manager"),
    valueGetter: (params) => {
      if (params.row["manager_details"]) {
        return params.row["manager_details"].username;
      }
    },
    minWidth: 160,
    flex: 1,
  },
  {
    field: "description",
    headerName: t("global_description"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "ip",
    headerName: t("global_ip"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsLoginAttempts = [
  {
    field: "created_at",
    headerName: t("global_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "username",
    headerName: t("global_username"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "reply",
    headerName: t("Server Reply"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "nas_ip_address",
    headerName: t("menu_nas"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "mac",
    headerName: t("user_session_table_mac"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsBackupIndex = [
  {
    field: "fileName",
    headerName: t("FileName"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "date",
    headerName: t("Date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "size",
    headerName: t("Size"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "version",
    headerName: t("Version"),
    minWidth: 160,
    flex: 1,
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
    minWidth: 160,
    flex: 1,
  },
  {
    field: "start_ip",
    headerName: t("From IP"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "end_ip",
    headerName: t("To IP"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "lease_time",
    headerName: t("Lease Time(hours)"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsFormSettings = [
  {
    field: "key",
    headerName: t("Key"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "label",
    headerName: t("Label"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "type",
    headerName: t("Type"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "requird",
    headerName: t("Required"),
    minWidth: 160,
    flex: 1,
  },
];

export const columnsSettingsAcl = [
  {
    field: "name",
    headerName: t("Group"),
    minWidth: 160,
    flex: 1,
    renderCell: (params) => {
      return <button className="text_color">{params.row.name}</button>;
    },
  },
  {
    field: "dashboard_name",
    headerName: t("Dashboard"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "total",
    headerName: t("Permissions"),
    minWidth: 160,
    flex: 1,
  },
];
