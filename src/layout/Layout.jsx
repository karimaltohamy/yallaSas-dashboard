import React, { Fragment, Suspense } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Login = React.lazy(() => import("../pages/login/Login"));
const Home = React.lazy(() => import("../pages/home/Home"));
const Subscribers = React.lazy(() =>
  import("../pages/subscribers/Subscribers")
);
const AddEditSubscriber = React.lazy(() =>
  import("../pages/subscribers/addEditSubscriber/AddEditSubscriber")
);
const ActivateSubscriber = React.lazy(() =>
  import("../pages/subscribers/activateSubscriber/ActivateSubscriber")
);
const ExtendSubscriber = React.lazy(() =>
  import("../pages/subscribers/extendSubscriber/ExtendSubscriber")
);
const AdditionalServiceSubscriber = React.lazy(() =>
  import("../pages/subscribers/addonSubscriber/AdditionalServiceSubscriber")
);
const ChangePackageSubscriber = React.lazy(() =>
  import("../pages/subscribers/changePackageSubscriber/ChangePackageSubscriber")
);
const ProfileSubscriber = React.lazy(() =>
  import("../pages/subscribers/profileSubscriber/ProfileSubscriber")
);
const GeneralSubscriber = React.lazy(() =>
  import("../pages/subscribers/profileSubscriber/GeneralSubscriber")
);
const ConsumptionSubscriber = React.lazy(() =>
  import("../pages/subscribers/profileSubscriber/ConsumptionSubscriber")
);
const SessionsSubscriber = React.lazy(() =>
  import("../pages/subscribers/profileSubscriber/SessionsSubscriber")
);
const InvoicesSubscriber = React.lazy(() =>
  import("../pages/subscribers/profileSubscriber/InvoicesSubscriber")
);
const PaymentsSubscriber = React.lazy(() =>
  import("../pages/subscribers/profileSubscriber/PaymentsSubscriber")
);
const RecordSubscriber = React.lazy(() =>
  import("../pages/subscribers/profileSubscriber/RecordSubscriber")
);
const DocumentsSubscriber = React.lazy(() =>
  import("../pages/subscribers/profileSubscriber/DocumentsSubscriber")
);
const RadiusSubscriber = React.lazy(() =>
  import("../pages/subscribers/profileSubscriber/RadiusSubscriber")
);
const FinancialRecordSubscriber = React.lazy(() =>
  import("../pages/subscribers/profileSubscriber/FinancialRecordSubscriber")
);
const FreeZoneSubscriber = React.lazy(() =>
  import("../pages/subscribers/profileSubscriber/FreeZoneSubscriber")
);
const QuotasSubscriber = React.lazy(() =>
  import("../pages/subscribers/profileSubscriber/QuotasSubscriber")
);
const OnlineSubscribers = React.lazy(() =>
  import("../pages/subscribers/onlineSubscribers/OnlineSubscribers")
);
const CompensationsSubscribers = React.lazy(() =>
  import(
    "../pages/subscribers/compensationsSubscribers/CompensationsSubscribers"
  )
);
const SubscriberTickets = React.lazy(() =>
  import("../pages/subscribers/subscriberTickets/SubscriberTickets")
);

const Managers = React.lazy(() => import("../pages/managers/Managers"));
const AddEditManager = React.lazy(() =>
  import("../pages/managers/addEditManager/AddEditManager")
);
const ProfileManager = React.lazy(() =>
  import("../pages/managers/profileManager/ProfileManager")
);
const GeneralManager = React.lazy(() =>
  import("../pages/managers/profileManager/GeneralManager")
);
const InvoicesManager = React.lazy(() =>
  import("../pages/managers/profileManager/InvoicesManager")
);
const ReceiptManager = React.lazy(() =>
  import("../pages/managers/profileManager/ReceiptManager")
);
const RegisterAccountsManager = React.lazy(() =>
  import("../pages/managers/profileManager/RegisterAccountsManager")
);
const Groups = React.lazy(() => import("../pages/groups/Groups"));
const AddEditGroup = React.lazy(() =>
  import("../pages/groups/addEditGroup/AddEditGroup")
);
const Nas = React.lazy(() => import("../pages/nas/Nas"));
const AddEditNas = React.lazy(() =>
  import("../pages/nas/addEditNas/AddEditNas")
);
const PackagesList = React.lazy(() =>
  import("../pages/packages/packagesList/PackagesList")
);
const AddEditPackage = React.lazy(() =>
  import("../pages/packages/packagesList/AddEditPackage")
);
const PricingTable = React.lazy(() =>
  import("../pages/packages/pricingTable/PricingTable")
);
const ConsumptionNotices = React.lazy(() =>
  import("../pages/packages/consumptionNotices/ConsumptionNotices")
);
const AddEditConsumptionNotices = React.lazy(() =>
  import("../pages/packages/consumptionNotices/AddEditConsumptionNotices")
);
const AddonsServices = React.lazy(() =>
  import("../pages/packages/addonsServices/AddonsServices")
);
const AddEditAddonsServices = React.lazy(() =>
  import("../pages/packages/addonsServices/AddEditAddonsServices")
);
const Cards = React.lazy(() => import("../pages/cards/Cards"));
const AddEditCards = React.lazy(() => import("../pages/cards/AddEditCards"));
const VerifyCards = React.lazy(() => import("../pages/cards/VerifyCards"));
const CardJobsQueue = React.lazy(() =>
  import("../pages/packages/addonsServices/CardJobsQueue")
);
const SubscriberInvoices = React.lazy(() =>
  import("../pages/accounts/SubscriberInvoices")
);
const IssuingInvoiceForm = React.lazy(() =>
  import("../pages/accounts/IssuingInvoiceForm")
);
const ReportsActivations = React.lazy(() =>
  import("../pages/Reports/ReportsActivations")
);
const UserInvoiceDesigner = React.lazy(() =>
  import("../pages/accounts/UserInvoiceDesigner")
);
const ReportsActivationsStatistics = React.lazy(() =>
  import(
    "../pages/Reports/reportsActivationsStatistics/ReportsActivationsStatistics"
  )
);
const ReportsCardsUsage = React.lazy(() =>
  import("../pages/Reports/reportsCardsUsage/ReportsCardsUsage")
);
const ReportCardsTransfer = React.lazy(() =>
  import("../pages/Reports/reportCardsTransfer/ReportCardsTransfer")
);
const ReportDebtsJournal = React.lazy(() =>
  import("../pages/Reports/reportDebtsJournal/ReportDebtsJournal")
);
const ReportDataExportJobs = React.lazy(() =>
  import("../pages/Reports/reportDataExportJobs/ReportDataExportJobs")
);
const ReportInvoiceManagers = React.lazy(() =>
  import("../pages/Reports/reportInvoiceManagers/ReportInvoiceManagers")
);
const ReportJournalManagers = React.lazy(() =>
  import("../pages/Reports/reportJournalManagers/ReportJournalManagers")
);
const ReportMoneyTransfer = React.lazy(() =>
  import("../pages/Reports/reportMoneyTransfer/ReportMoneyTransfer")
);
const ReportOnline = React.lazy(() =>
  import("../pages/Reports/reportOnline/ReportOnline")
);
const ReportProfits = React.lazy(() =>
  import("../pages/Reports/reportProfits/ReportProfits")
);
const PaymentGatewayTransactions = React.lazy(() =>
  import(
    "../pages/Reports/paymentGatewayTransactions/PaymentGatewayTransactions"
  )
);
const ReportReceiptsManagers = React.lazy(() =>
  import("../pages/Reports/reportReceiptsManagers/ReportReceiptsManagers")
);
const ReportSessions = React.lazy(() =>
  import("../pages/Reports/reportSessions/ReportSessions")
);
const ReportSuspicious = React.lazy(() =>
  import("../pages/Reports/reportSuspicious/ReportSuspicious")
);
const ReportTraffic = React.lazy(() =>
  import("../pages/Reports/ReportTraffic")
);
const ReportUsers = React.lazy(() =>
  import("../pages/Reports/reportUser/ReportUsers")
);
const AccordingManagers = React.lazy(() =>
  import("../pages/Reports/reportUser/AccordingManagers")
);
const AccordingService = React.lazy(() =>
  import("../pages/Reports/reportUser/AccordingService")
);
const RegistrationDate = React.lazy(() =>
  import("../pages/Reports/reportUser/RegistrationDate")
);
const RadiusLog = React.lazy(() => import("../pages/log/radiusLog/RadiusLog"));
const SysLog = React.lazy(() => import("../pages/log/sysLog/SysLog"));
const LoginAttempts = React.lazy(() =>
  import("../pages/log/loginAttempts/LoginAttempts")
);
const DashboardManager = React.lazy(() =>
  import("../pages/tools/dashboardManager/DashboardManager")
);
const WidgetFactory = React.lazy(() =>
  import("../pages/tools/widgetFactory/WidgetFactory")
);
const SystemServices = React.lazy(() =>
  import("../pages/tools/systemServices/SystemServices")
);
const SystemUpdate = React.lazy(() =>
  import("../pages/tools/systemUpdate/SystemUpdate")
);
const SystemMaintenance = React.lazy(() =>
  import("../pages/tools/systemMaintenance/SystemMaintenance")
);
const ToolsAnnouncements = React.lazy(() =>
  import("../pages/tools/toolsAnnouncements/ToolsAnnouncements")
);
const ToolsImport = React.lazy(() =>
  import("../pages/tools/toolsImport/ToolsImport")
);
const ToolsBandwidthControl = React.lazy(() =>
  import("../pages/tools/toolsBandwidthControl/ToolsBandwidthControl")
);
const BackupIndex = React.lazy(() =>
  import("../pages/tools/backupIndex/BackupIndex")
);
const SettingsBackup = React.lazy(() =>
  import("../pages/tools/backupIndex/SettingsBackup")
);
const BulkChanges = React.lazy(() =>
  import("../pages/tools/BulkChanges/BulkChanges")
);
const IpPools = React.lazy(() => import("../pages/ipPools/IpPools"));
const SettingsAdvanced = React.lazy(() =>
  import("../pages/options/settingsAdvanced/SettingsAdvanced")
);
const AddEditIpPools = React.lazy(() =>
  import("../pages/ipPools/AddEditIpPools")
);
const EmailSettings = React.lazy(() =>
  import("../pages/options/emailSettings/EmailSettings")
);
const SettingsEmailTemplates = React.lazy(() =>
  import("../pages/options/settingsEmailTemplates/SettingsEmailTemplates")
);
const SettingsFreezone = React.lazy(() =>
  import("../pages/options/settingsFreezone/SettingsFreezone")
);
const SettingsForms = React.lazy(() =>
  import("../pages/options/settingsForms/SettingsForms")
);
const SettingsGeneral = React.lazy(() =>
  import("../pages/options/settingsGeneral/SettingsGeneral")
);
const LicenseSettings = React.lazy(() =>
  import("../pages/options/licenseSettings/LicenseSettings")
);
const SettingsNetwork = React.lazy(() =>
  import("../pages/options/settingsNetwork/SettingsNetwork")
);
const SettingsNotifications = React.lazy(() =>
  import("../pages/options/settingsNotifications/SettingsNotifications")
);
const SettingsAcl = React.lazy(() =>
  import("../pages/options/settingsAcl/SettingsAcl")
);
const { SettingsPaymentGateways } = React.lazy(() =>
  import("../pages/options/settingsPaymentGateways/SettingsPaymentGateways")
);
const SettingsBilling = React.lazy(() =>
  import("../pages/options/settingsBilling/SettingsBilling")
);
const SettingsSites = React.lazy(() =>
  import("../pages/options/settingsSites/SettingsSites")
);
const SettingsSms = React.lazy(() =>
  import("../pages/options/settingsSms/SettingsSms")
);
const SettingsSastrack = React.lazy(() =>
  import("../pages/options/settingsSastrack/SettingsSastrack")
);
const SettingsTelegraml = React.lazy(() =>
  import("../pages/options/settingsTelegraml/SettingsTelegraml")
);
const SettingsUcp = React.lazy(() =>
  import("../pages/options/settingsUcp/SettingsUcp")
);
const SettingsWeb = React.lazy(() =>
  import("../pages/options/settingsWeb/SettingsWeb")
);
const AboutCompany = React.lazy(() =>
  import("../pages/aboutCompany/AboutCompany")
);
const About = React.lazy(() => import("../pages/aboutCompany/About"));
const Hardware = React.lazy(() => import("../pages/aboutCompany/Hardware"));
const Loader = React.lazy(() => import("../components/loader/Loader"));

const ProidectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token === null) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

const Layout = () => {
  const location = useLocation();
  return (
    <main>
      {location.pathname != "/login" && <Sidebar />}
      <div className="main_content_page">
        {location.pathname != "/login" && <Header />}
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Navigate to={"/home"} />
              </Suspense>
            }
          />
          <Route
            path="/home"
            element={
              <Suspense fallback={<Loader />}>
                <ProidectedRoute>
                  <Home />
                </ProidectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />
          {/* subscribers */}
          <Route
            path="/subscribers"
            element={
              <Suspense fallback={<Loader />}>
                <ProidectedRoute>
                  <Subscribers />
                </ProidectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/subscribers/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ProidectedRoute>
                  <ProfileSubscriber />
                </ProidectedRoute>
              </Suspense>
            }
          >
            <Route path="general" element={<GeneralSubscriber />} />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <ProidectedRoute>
                    <AddEditSubscriber typePage={"editPage"} />
                  </ProidectedRoute>
                </Suspense>
              }
            />
            <Route
              path="consumption"
              element={
                <Suspense fallback={<Loader />}>
                  <ProidectedRoute>
                    <ConsumptionSubscriber />
                  </ProidectedRoute>
                </Suspense>
              }
            />
            <Route
              path="sessions"
              element={
                <Suspense fallback={<Loader />}>
                  <ProidectedRoute>
                    <SessionsSubscriber />
                  </ProidectedRoute>
                </Suspense>
              }
            />
            <Route
              path="invoices"
              element={
                <Suspense fallback={<Loader />}>
                  <ProidectedRoute>
                    <InvoicesSubscriber />
                  </ProidectedRoute>
                </Suspense>
              }
            />
            <Route
              path="payments"
              element={
                <Suspense fallback={<Loader />}>
                  <ProidectedRoute>
                    <PaymentsSubscriber />
                  </ProidectedRoute>
                </Suspense>
              }
            />
            <Route
              path="record"
              element={
                <Suspense fallback={<Loader />}>
                  <ProidectedRoute>
                    <RecordSubscriber />
                  </ProidectedRoute>
                </Suspense>
              }
            />
            <Route
              path="documents"
              element={
                <Suspense fallback={<Loader />}>
                  <ProidectedRoute>
                    <DocumentsSubscriber />
                  </ProidectedRoute>
                </Suspense>
              }
            />
            <Route
              path="radius"
              element={
                <Suspense fallback={<Loader />}>
                  <ProidectedRoute>
                    <RadiusSubscriber />
                  </ProidectedRoute>
                </Suspense>
              }
            />
            <Route
              path="free-zone"
              element={
                <Suspense fallback={<Loader />}>
                  <ProidectedRoute>
                    <FreeZoneSubscriber />
                  </ProidectedRoute>
                </Suspense>
              }
            />
            <Route
              path="quotas"
              element={
                <Suspense fallback={<Loader />}>
                  <ProidectedRoute>
                    <QuotasSubscriber />
                  </ProidectedRoute>
                </Suspense>
              }
            />
            <Route
              path="financial-record"
              element={
                <Suspense fallback={<Loader />}>
                  <ProidectedRoute>
                    <FinancialRecordSubscriber />
                  </ProidectedRoute>
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/subscribers/add"
            element={
              <Suspense fallback={<Loader />}>
                <ProidectedRoute>
                  <AddEditSubscriber typePage={"addPage"} />
                </ProidectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/subscribers/activate/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ProidectedRoute>
                  <ActivateSubscriber />
                </ProidectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/subscribers/extend/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ProidectedRoute>
                  <ExtendSubscriber />
                </ProidectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/subscribers/addon/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ProidectedRoute>
                  <AdditionalServiceSubscriber />
                </ProidectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/subscribers/change-package/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ProidectedRoute>
                  <ChangePackageSubscriber />
                </ProidectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/subscribers-online"
            element={
              <Suspense fallback={<Loader />}>
                <ProidectedRoute>
                  <OnlineSubscribers />
                </ProidectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/compensations-subscibers"
            element={
              <Suspense fallback={<Loader />}>
                <ProidectedRoute>
                  <CompensationsSubscribers />
                </ProidectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/subscriber-tickets"
            element={
              <Suspense fallback={<Loader />}>
                <ProidectedRoute>
                  <SubscriberTickets />
                </ProidectedRoute>
              </Suspense>
            }
          />
          {/* managers */}
          <Route
            path="/managers"
            element={
              <Suspense fallback={<Loader />}>
                <Managers />
              </Suspense>
            }
          />
          <Route
            path="/managers/add/:id"
            element={
              <Suspense fallback={<Loader />}>
                <AddEditManager />
              </Suspense>
            }
          />
          <Route
            path="/managers/profile/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ProfileManager />
              </Suspense>
            }
          >
            <Route
              path="general"
              element={
                <Suspense fallback={<Loader />}>
                  <GeneralManager />
                </Suspense>
              }
            />
            <Route
              path="edit"
              element={
                <Suspense fallback={<Loader />}>
                  <AddEditManager />
                </Suspense>
              }
            />
            <Route
              path="invoices"
              element={
                <Suspense fallback={<Loader />}>
                  <InvoicesManager />
                </Suspense>
              }
            />
            <Route
              path="receipt"
              element={
                <Suspense fallback={<Loader />}>
                  <ReceiptManager />
                </Suspense>
              }
            />
            <Route
              path="registerAccounts"
              element={
                <Suspense fallback={<Loader />}>
                  <RegisterAccountsManager />
                </Suspense>
              }
            />
          </Route>
          {/* group */}
          <Route
            path="/groups"
            element={
              <Suspense fallback={<Loader />}>
                <Groups />
              </Suspense>
            }
          />
          <Route
            path="/groups/add/:id"
            element={
              <Suspense fallback={<Loader />}>
                <AddEditGroup typePage={"addPage"} />
              </Suspense>
            }
          />
          <Route
            path="/groups/:id/edit"
            element={
              <Suspense fallback={<Loader />}>
                <AddEditGroup typePage={"editPage"} />
              </Suspense>
            }
          />
          {/* nas */}
          <Route
            path="/NAS"
            element={
              <Suspense fallback={<Loader />}>
                <Nas />
              </Suspense>
            }
          />
          <Route
            path="/NAS/add"
            element={
              <Suspense fallback={<Loader />}>
                <AddEditNas typePage={"addPage"} />
              </Suspense>
            }
          />
          <Route
            path="/NAS/profile/:id/edit"
            element={
              <Suspense fallback={<Loader />}>
                <AddEditNas typePage={"editPage"} />
              </Suspense>
            }
          />
          {/* packages */}
          <Route
            path="/packages"
            element={
              <Suspense fallback={<Loader />}>
                <PackagesList />
              </Suspense>
            }
          />
          <Route
            path="/packages/add/:id"
            element={<AddEditPackage typePage="addPage" />}
          />
          <Route
            path="/packages/profile/:id/edit"
            element={<AddEditPackage typePage="editPage" />}
          />
          <Route
            path="/pricing-table"
            element={
              <Suspense fallback={<Loader />}>
                <PricingTable />
              </Suspense>
            }
          />
          <Route
            path="/consumption-notices"
            element={
              <Suspense fallback={<Loader />}>
                <ConsumptionNotices />
              </Suspense>
            }
          />
          <Route
            path="/consumption-notices/add/:id"
            element={
              <Suspense fallback={<Loader />}>
                <AddEditConsumptionNotices />
              </Suspense>
            }
          />
          <Route
            path="/consumption-notices/profile/:id/edit"
            element={
              <Suspense fallback={<Loader />}>
                <AddEditConsumptionNotices />
              </Suspense>
            }
          />
          <Route
            path="/additional-services"
            element={
              <Suspense fallback={<Loader />}>
                <AddonsServices />
              </Suspense>
            }
          />
          <Route
            path="/additional-services/add/:id"
            element={
              <Suspense fallback={<Loader />}>
                <AddEditAddonsServices />
              </Suspense>
            }
          />
          <Route
            path="/additional-services/profile/:id/edit"
            element={
              <Suspense fallback={<Loader />}>
                <AddEditAddonsServices />
              </Suspense>
            }
          />
          {/* cards */}
          <Route
            path="/cards"
            element={
              <Suspense fallback={<Loader />}>
                <Cards />
              </Suspense>
            }
          />
          <Route
            path="/cards/add/:id"
            element={
              <Suspense fallback={<Loader />}>
                <AddEditCards />
              </Suspense>
            }
          />
          <Route
            path="/cards/verify"
            element={
              <Suspense fallback={<Loader />}>
                <VerifyCards />
              </Suspense>
            }
          />
          <Route
            path="/cards/jobs-queue"
            element={
              <Suspense fallback={<Loader />}>
                <CardJobsQueue />
              </Suspense>
            }
          />
          {/* account */}
          <Route
            path="/subscriber-invoices"
            element={
              <Suspense fallback={<Loader />}>
                <SubscriberInvoices />
              </Suspense>
            }
          />
          <Route
            path="/issuing-invoice"
            element={
              <Suspense fallback={<Loader />}>
                <IssuingInvoiceForm />
              </Suspense>
            }
          />
          <Route
            path="/user-invoice-designer"
            element={
              <Suspense fallback={<Loader />}>
                <UserInvoiceDesigner />
              </Suspense>
            }
          />
          {/* reports */}
          <Route
            path="/report-activations"
            element={
              <Suspense fallback={<Loader />}>
                <ReportsActivations />
              </Suspense>
            }
          />
          <Route
            path="/activation-stats"
            element={
              <Suspense fallback={<Loader />}>
                <ReportsActivationsStatistics />
              </Suspense>
            }
          />
          <Route
            path="/reportcards-usage"
            element={
              <Suspense fallback={<Loader />}>
                <ReportsCardsUsage />
              </Suspense>
            }
          />
          <Route
            path="/report-cards-transfer"
            element={
              <Suspense fallback={<Loader />}>
                <ReportCardsTransfer />
              </Suspense>
            }
          />
          <Route
            path="/report-debts-journal"
            element={
              <Suspense fallback={<Loader />}>
                <ReportDebtsJournal />
              </Suspense>
            }
          />
          <Route
            path="/report-data-export-jobs"
            element={
              <Suspense fallback={<Loader />}>
                <ReportDataExportJobs />
              </Suspense>
            }
          />
          <Route
            path="/report-invoice-managers"
            element={
              <Suspense fallback={<Loader />}>
                <ReportInvoiceManagers />
              </Suspense>
            }
          />
          <Route
            path="/report-journal-managers"
            element={
              <Suspense fallback={<Loader />}>
                <ReportJournalManagers />
              </Suspense>
            }
          />
          <Route
            path="/report-money-transfer"
            element={
              <Suspense fallback={<Loader />}>
                <ReportMoneyTransfer />
              </Suspense>
            }
          />
          <Route
            path="/report-online"
            element={
              <Suspense fallback={<Loader />}>
                <ReportOnline />
              </Suspense>
            }
          />
          <Route
            path="/report-profits"
            element={
              <Suspense fallback={<Loader />}>
                <ReportProfits />
              </Suspense>
            }
          />
          <Route
            path="/payment-gateway-transaction"
            element={
              <Suspense fallback={<Loader />}>
                <PaymentGatewayTransactions />
              </Suspense>
            }
          />
          <Route
            path="/report-receipts-managers"
            element={
              <Suspense fallback={<Loader />}>
                <ReportReceiptsManagers />
              </Suspense>
            }
          />
          <Route
            path="/report-sessions"
            element={
              <Suspense fallback={<Loader />}>
                <ReportSessions />
              </Suspense>
            }
          />
          <Route
            path="/report-suspicious"
            element={
              <Suspense fallback={<Loader />}>
                <ReportSuspicious />
              </Suspense>
            }
          />
          <Route
            path="/report-traffic"
            element={
              <Suspense fallback={<Loader />}>
                <ReportTraffic />
              </Suspense>
            }
          />
          <Route
            path="/report-users"
            element={
              <Suspense fallback={<Loader />}>
                <ReportUsers />
              </Suspense>
            }
          >
            <Route
              path="accordingManagers"
              element={
                <Suspense fallback={<Loader />}>
                  <AccordingManagers />
                </Suspense>
              }
            />
            <Route
              path="accordingService"
              element={
                <Suspense fallback={<Loader />}>
                  <AccordingService />
                </Suspense>
              }
            />
            <Route
              path="registrationDate"
              element={
                <Suspense fallback={<Loader />}>
                  <RegistrationDate />
                </Suspense>
              }
            />
          </Route>
          {/* log */}
          <Route
            path="/log-radius"
            element={
              <Suspense fallback={<Loader />}>
                <RadiusLog />
              </Suspense>
            }
          />
          <Route
            path="/system-log"
            element={
              <Suspense fallback={<Loader />}>
                <SysLog />
              </Suspense>
            }
          />
          <Route
            path="/login-attempts"
            element={
              <Suspense fallback={<Loader />}>
                <LoginAttempts />
              </Suspense>
            }
          />
          {/* tools */}
          <Route
            path="/tools-dashboard-manager"
            element={
              <Suspense fallback={<Loader />}>
                <DashboardManager />
              </Suspense>
            }
          />
          <Route
            path="/widget-factory"
            element={
              <Suspense fallback={<Loader />}>
                <WidgetFactory />
              </Suspense>
            }
          />
          <Route
            path="/system-services"
            element={
              <Suspense fallback={<Loader />}>
                <SystemServices />
              </Suspense>
            }
          />
          <Route
            path="/system-update"
            element={
              <Suspense fallback={<Loader />}>
                <SystemUpdate />
              </Suspense>
            }
          />
          <Route
            path="/system-maintenance"
            element={
              <Suspense fallback={<Loader />}>
                <SystemMaintenance />
              </Suspense>
            }
          />
          <Route
            path="/tools-announcements"
            element={
              <Suspense fallback={<Loader />}>
                <ToolsAnnouncements />
              </Suspense>
            }
          />
          <Route
            path="/tools-import"
            element={
              <Suspense fallback={<Loader />}>
                <ToolsImport />
              </Suspense>
            }
          />
          <Route
            path="/tools-bandwidth-control"
            element={
              <Suspense fallback={<Loader />}>
                <ToolsBandwidthControl />
              </Suspense>
            }
          />
          <Route
            path="/backup-index"
            element={
              <Suspense fallback={<Loader />}>
                <BackupIndex />
              </Suspense>
            }
          />
          <Route
            path="/backup-index/settings"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsBackup />
              </Suspense>
            }
          />
          <Route
            path="/bulk-changes"
            element={
              <Suspense fallback={<Loader />}>
                <BulkChanges />
              </Suspense>
            }
          />
          {/* ip pools */}
          <Route
            path="/ip-pools"
            element={
              <Suspense fallback={<Loader />}>
                <IpPools />
              </Suspense>
            }
          />
          <Route
            path="/add-ip-pools"
            element={
              <Suspense fallback={<Loader />}>
                <AddEditIpPools typePage="addPage" />
              </Suspense>
            }
          />
          <Route
            path="/ip-pools/:id/edit"
            element={
              <Suspense fallback={<Loader />}>
                <AddEditIpPools typePage="editPage" />
              </Suspense>
            }
          />
          {/* options */}
          <Route
            path="/settings-advanced"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsAdvanced />
              </Suspense>
            }
          />
          <Route
            path="/add-settings-backup"
            element={
              <Suspense fallback={<Loader />}>
                <BulkChanges />
              </Suspense>
            }
          />
          <Route
            path="/settings-email"
            element={
              <Suspense fallback={<Loader />}>
                <EmailSettings />
              </Suspense>
            }
          />
          <Route
            path="/settings-email-templates"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsEmailTemplates />
              </Suspense>
            }
          />
          <Route
            path="/settings-freezone"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsFreezone />
              </Suspense>
            }
          />
          <Route
            path="/settings-forms"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsForms />
              </Suspense>
            }
          />
          <Route
            path="/settings-general"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsGeneral />
              </Suspense>
            }
          />
          <Route
            path="/settings-license"
            element={
              <Suspense fallback={<Loader />}>
                <LicenseSettings />
              </Suspense>
            }
          />
          <Route
            path="/settings-network"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsNetwork />
              </Suspense>
            }
          />
          <Route
            path="/settings-notifications"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsNotifications />
              </Suspense>
            }
          />
          <Route
            path="/settings-acl"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsAcl />
              </Suspense>
            }
          />
          <Route
            path="/settings-paymentgateways"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsPaymentGateways />
              </Suspense>
            }
          />
          <Route
            path="/settings-billing"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsBilling />
              </Suspense>
            }
          />
          <Route
            path="/settings-sites"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsSites />
              </Suspense>
            }
          />
          <Route
            path="/settings-sms"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsSms />
              </Suspense>
            }
          />
          <Route
            path="/settings-sastrack"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsSastrack />
              </Suspense>
            }
          />
          <Route
            path="/settings-telegraml"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsTelegraml />
              </Suspense>
            }
          />
          <Route
            path="/settings-ucp"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsUcp />
              </Suspense>
            }
          />
          <Route
            path="/settings-web"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsWeb />
              </Suspense>
            }
          />
          {/* about-company */}
          <Route
            path="/about-company"
            element={
              <Suspense fallback={<Loader />}>
                <AboutCompany />
              </Suspense>
            }
          >
            <Route
              path="about"
              element={
                <Suspense fallback={<Loader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="hardware"
              element={
                <Suspense fallback={<Loader />}>
                  <Hardware />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </div>
    </main>
  );
};

export default Layout;
