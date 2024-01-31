import React, { Fragment } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Subscribers from "../pages/subscribers/Subscribers";
import AddEditSubscriber from "../pages/subscribers/addEditSubscriber/AddEditSubscriber";
import ActivateSubscriber from "../pages/subscribers/activateSubscriber/ActivateSubscriber";
import ExtendSubscriber from "../pages/subscribers/extendSubscriber/ExtendSubscriber";
import AdditionalServiceSubscriber from "../pages/subscribers/addonSubscriber/AdditionalServiceSubscriber";
import ChangePackageSubscriber from "../pages/subscribers/changePackageSubscriber/ChangePackageSubscriber";
import ProfileSubscriber from "../pages/subscribers/profileSubscriber/ProfileSubscriber";
import GeneralSubscriber from "../pages/subscribers/profileSubscriber/GeneralSubscriber";
import ConsumptionSubscriber from "../pages/subscribers/profileSubscriber/ConsumptionSubscriber";
import SessionsSubscriber from "../pages/subscribers/profileSubscriber/SessionsSubscriber";
import InvoicesSubscriber from "../pages/subscribers/profileSubscriber/InvoicesSubscriber";
import PaymentsSubscriber from "../pages/subscribers/profileSubscriber/PaymentsSubscriber";
import RecordSubscriber from "../pages/subscribers/profileSubscriber/RecordSubscriber";
import DocumentsSubscriber from "../pages/subscribers/profileSubscriber/DocumentsSubscriber";
import RadiusSubscriber from "../pages/subscribers/profileSubscriber/RadiusSubscriber";
import FinancialRecordSubscriber from "../pages/subscribers/profileSubscriber/financialRecordSubscriber";
import FreeZoneSubscriber from "../pages/subscribers/profileSubscriber/FreeZoneSubscriber";
import QuotasSubscriber from "../pages/subscribers/profileSubscriber/quotasSubscriber";
import OnlineSubscribers from "../pages/subscribers/onlineSubscribers/OnlineSubscribers";
import CompensationsSubscribers from "../pages/subscribers/compensationsSubscribers/CompensationsSubscribers";
import SubscriberTickets from "../pages/subscribers/subscriberTickets/SubscriberTickets";
import Managers from "../pages/managers/Managers";
import AddEditManager from "../pages/managers/addEditManager/AddEditManager";
import ProfileManager from "../pages/managers/profileManager/ProfileManager";
import GeneralManager from "../pages/managers/profileManager/GeneralManager";
import InvoicesManager from "../pages/managers/profileManager/InvoicesManager";
import ReceiptManager from "../pages/managers/profileManager/ReceiptManager";
import RegisterAccountsManager from "../pages/managers/profileManager/RegisterAccountsManager";
import Groups from "../pages/groups/Groups";
import AddEditGroup from "../pages/groups/addEditGroup/AddEditGroup";
import Nas from "../pages/nas/Nas";
import AddEditNas from "../pages/nas/addEditNas/AddEditNas";
import PackagesList from "../pages/packages/packagesList/packagesList";
import AddEditPackage from "../pages/packages/packagesList/AddEditPackage";
import PricingTable from "../pages/packages/pricingTable/PricingTable";
import ConsumptionNotices from "../pages/packages/consumptionNotices/ConsumptionNotices";
import AddEditConsumptionNotices from "../pages/packages/consumptionNotices/AddEditConsumptionNotices";
import AddonsServices from "../pages/packages/addonsServices/AddonsServices";
import AddEditAddonsServices from "../pages/packages/addonsServices/AddEditAddonsServices";
import Cards from "../pages/cards/Cards";
import AddEditCards from "../pages/cards/AddEditCards";
import VerifyCards from "../pages/cards/VerifyCards";
import CardJobsQueue from "../pages/packages/addonsServices/CardJobsQueue";
import SubscriberInvoices from "../pages/accounts/SubscriberInvoices";
import IssuingInvoiceForm from "../pages/accounts/IssuingInvoiceForm";
import UserInvoiceDesigner from "../pages/accounts/UserInvoiceDesigner";
import ReportsActivations from "../pages/Reports/ReportsActivations";
import ReportsActivationsStatistics from "../pages/Reports/reportsActivationsStatistics/ReportsActivationsStatistics";
import ReportsCardsUsage from "../pages/Reports/reportsCardsUsage/ReportsCardsUsage";
import ReportCardsTransfer from "../pages/Reports/reportCardsTransfer/ReportCardsTransfer";
import ReportDebtsJournal from "../pages/Reports/reportDebtsJournal/ReportDebtsJournal";
import ReportDataExportJobs from "../pages/Reports/reportDataExportJobs/ReportDataExportJobs";
import ReportInvoiceManagers from "../pages/Reports/reportInvoiceManagers/ReportInvoiceManagers";
import ReportJournalManagers from "../pages/Reports/reportJournalManagers/ReportJournalManagers";
import ReportMoneyTransfer from "../pages/Reports/reportMoneyTransfer/reportMoneyTransfer";
import ReportOnline from "../pages/Reports/reportOnline/ReportOnline";
import ReportProfits from "../pages/Reports/reportProfits/ReportProfits";
import PaymentGatewayTransactions from "../pages/Reports/paymentGatewayTransactions/PaymentGatewayTransactions";
import ReportReceiptsManagers from "../pages/Reports/reportReceiptsManagers/ReportReceiptsManagers";
import ReportSessions from "../pages/Reports/reportSessions/ReportSessions";
import ReportSuspicious from "../pages/Reports/reportSuspicious/ReportSuspicious";
import ReportTraffic from "../pages/Reports/ReportTraffic";
import ReportUsers from "../pages/Reports/reportUser/ReportUsers";
import AccordingManagers from "../pages/Reports/reportUser/AccordingManagers";
import AccordingService from "../pages/Reports/reportUser/AccordingService";
import RegistrationDate from "../pages/Reports/reportUser/RegistrationDate";
import RadiusLog from "../pages/log/radiusLog/RadiusLog";
import SysLog from "../pages/log/sysLog/SysLog";
import LoginAttempts from "../pages/log/loginAttempts/LoginAttempts";
import DashboardManager from "../pages/tools/dashboardManager/DashboardManager";
import WidgetFactory from "../pages/tools/widgetFactory/WidgetFactory";
import SystemServices from "../pages/tools/systemServices/SystemServices";
import SystemUpdate from "../pages/tools/systemUpdate/SystemUpdate";
import SystemMaintenance from "../pages/tools/systemMaintenance/SystemMaintenance";
import ToolsAnnouncements from "../pages/tools/toolsAnnouncements/ToolsAnnouncements";
import ToolsImport from "../pages/tools/toolsImport/ToolsImport";
import ToolsBandwidthControl from "../pages/tools/toolsBandwidthControl/ToolsBandwidthControl";
import BackupIndex from "../pages/tools/backupIndex/BackupIndex";
import SettingsBackup from "../pages/tools/backupIndex/SettingsBackup";
import BulkChanges from "../pages/tools/BulkChanges/BulkChanges";
import IpPools from "../pages/ipPools/IpPools";
import SettingsAdvanced from "../pages/options/settingsAdvanced/SettingsAdvanced";
import AddIpPools from "../pages/ipPools/AddIpPools";
import EmailSettings from "../pages/options/emailSettings/EmailSettings";
import SettingsEmailTemplates from "../pages/options/settingsEmailTemplates/SettingsEmailTemplates";
import SettingsFreezone from "../pages/options/settingsFreezone/SettingsFreezone";
import SettingsForms from "../pages/options/settingsForms/SettingsForms";
import SettingsGeneral from "../pages/options/settingsGeneral/SettingsGeneral";

const Layout = () => {
  return (
    <main>
      <Sidebar />
      <div className="main_content_page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* subscribers */}
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/subscribers/:id" element={<ProfileSubscriber />}>
            <Route path="general" element={<GeneralSubscriber />} />
            <Route
              path="edit"
              element={<AddEditSubscriber typePage={"editPage"} />}
            />
            <Route path="consumption" element={<ConsumptionSubscriber />} />
            <Route path="sessions" element={<SessionsSubscriber />} />
            <Route path="invoices" element={<InvoicesSubscriber />} />
            <Route path="payments" element={<PaymentsSubscriber />} />
            <Route path="record" element={<RecordSubscriber />} />
            <Route path="documents" element={<DocumentsSubscriber />} />
            <Route path="radius" element={<RadiusSubscriber />} />
            <Route path="free-zone" element={<FreeZoneSubscriber />} />
            <Route path="quotas" element={<FinancialRecordSubscriber />} />
            <Route path="financial-record" element={<QuotasSubscriber />} />
          </Route>
          <Route path="/subscribers/add/:id" element={<AddEditSubscriber />} />
          <Route
            path="/subscribers/activate/:id"
            element={<ActivateSubscriber />}
          />
          <Route
            path="/subscribers/extend/:id"
            element={<ExtendSubscriber />}
          />
          <Route
            path="/subscribers/addon/:id"
            element={<AdditionalServiceSubscriber />}
          />
          <Route
            path="/subscribers/change-package/:id"
            element={<ChangePackageSubscriber />}
          />
          <Route path="/subscribers-online" element={<OnlineSubscribers />} />
          <Route
            path="/compensations-subscibers"
            element={<CompensationsSubscribers />}
          />
          <Route path="/subscriber-tickets" element={<SubscriberTickets />} />
          {/* managers */}
          <Route path="/managers" element={<Managers />} />
          <Route path="/managers/add/:id" element={<AddEditManager />} />
          <Route path="/managers/profile/:id" element={<ProfileManager />}>
            <Route path="general" element={<GeneralManager />} />
            <Route path="edit" element={<AddEditManager />} />
            <Route path="invoices" element={<InvoicesManager />} />
            <Route path="receipt" element={<ReceiptManager />} />
            <Route
              path="registerAccounts"
              element={<RegisterAccountsManager />}
            />
          </Route>
          {/* group */}
          <Route path="/groups" element={<Groups />} />
          <Route path="/groups/add/:id" element={<AddEditGroup />} />
          {/* nas */}
          <Route path="/NAS" element={<Nas />} />
          <Route path="/NAS/add/:id" element={<AddEditNas />} />
          <Route path="/NAS/profile/:id/edit" element={<AddEditNas />} />
          {/* packages */}
          <Route path="/packages" element={<PackagesList />} />
          <Route path="/packages/add/:id" element={<AddEditPackage />} />
          <Route
            path="/packages/profile/:id/edit"
            element={<AddEditPackage />}
          />
          <Route path="/pricing-table" element={<PricingTable />} />
          <Route path="/consumption-notices" element={<ConsumptionNotices />} />
          <Route
            path="/consumption-notices/add/:id"
            element={<AddEditConsumptionNotices />}
          />
          <Route path="/additional-services" element={<AddonsServices />} />
          <Route
            path="/additional-services/add/:id"
            element={<AddEditAddonsServices />}
          />
          {/* cards */}
          <Route path="/cards" element={<Cards />} />
          <Route path="/cards/add/:id" element={<AddEditCards />} />
          <Route path="/cards/verify" element={<VerifyCards />} />
          <Route path="/cards/jobs-queue" element={<CardJobsQueue />} />
          {/* account */}
          <Route path="/subscriber-invoices" element={<SubscriberInvoices />} />
          <Route path="/issuing-invoice" element={<IssuingInvoiceForm />} />
          <Route
            path="/user-invoice-designer"
            element={<UserInvoiceDesigner />}
          />
          {/* reports */}
          <Route path="/report-activations" element={<ReportsActivations />} />
          <Route
            path="/activation-stats"
            element={<ReportsActivationsStatistics />}
          />
          <Route path="/reportcards-usage" element={<ReportsCardsUsage />} />
          <Route
            path="/report-cards-transfer"
            element={<ReportCardsTransfer />}
          />
          <Route
            path="/report-debts-journal"
            element={<ReportDebtsJournal />}
          />
          <Route
            path="/report-data-export-jobs"
            element={<ReportDataExportJobs />}
          />
          <Route
            path="/report-invoice-managers"
            element={<ReportInvoiceManagers />}
          />
          <Route
            path="/report-journal-managers"
            element={<ReportJournalManagers />}
          />
          <Route
            path="/report-money-transfer"
            element={<ReportMoneyTransfer />}
          />
          <Route path="/report-online" element={<ReportOnline />} />
          <Route path="/report-profits" element={<ReportProfits />} />
          <Route
            path="/payment-gateway-transaction"
            element={<PaymentGatewayTransactions />}
          />
          <Route
            path="/report-receipts-managers"
            element={<ReportReceiptsManagers />}
          />
          <Route path="/report-sessions" element={<ReportSessions />} />
          <Route path="/report-suspicious" element={<ReportSuspicious />} />
          <Route path="/report-traffic" element={<ReportTraffic />} />
          <Route path="/report-users" element={<ReportUsers />}>
            <Route path="accordingManagers" element={<AccordingManagers />} />
            <Route path="accordingService" element={<AccordingService />} />
            <Route path="registrationDate" element={<RegistrationDate />} />
          </Route>
          {/* log */}
          <Route path="/log-radius" element={<RadiusLog />} />
          <Route path="/system-log" element={<SysLog />} />
          <Route path="/login-attempts" element={<LoginAttempts />} />
          {/* tools */}
          <Route
            path="/tools-dashboard-manager"
            element={<DashboardManager />}
          />
          <Route path="/widget-factory" element={<WidgetFactory />} />
          <Route path="/system-services" element={<SystemServices />} />
          <Route path="/system-update" element={<SystemUpdate />} />
          <Route path="/system-maintenance" element={<SystemMaintenance />} />
          <Route path="/tools-announcements" element={<ToolsAnnouncements />} />
          <Route path="/tools-import" element={<ToolsImport />} />
          <Route
            path="/tools-bandwidth-control"
            element={<ToolsBandwidthControl />}
          />
          <Route path="/backup-index" element={<BackupIndex />} />
          <Route path="/backup-index/settings" element={<SettingsBackup />} />
          <Route path="/bulk-changes" element={<BulkChanges />} />
          {/* ip pools */}
          <Route path="/ip-pools" element={<IpPools />} />
          <Route path="/add-ip-pools" element={<AddIpPools />} />
          {/* options */}
          <Route path="/settings-advanced" element={<SettingsAdvanced />} />
          <Route path="/add-settings-backup" element={<BulkChanges />} />
          <Route path="/settings-email" element={<EmailSettings />} />
          <Route
            path="/settings-email-templates"
            element={<SettingsEmailTemplates />}
          />
          <Route path="/settings-freezone" element={<SettingsFreezone />} />
          <Route path="/settings-forms" element={<SettingsForms />} />
          <Route path="/settings-general" element={<SettingsGeneral />} />
        </Routes>
      </div>
    </main>
  );
};

export default Layout;
