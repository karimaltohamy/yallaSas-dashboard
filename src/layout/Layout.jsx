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
        </Routes>
      </div>
    </main>
  );
};

export default Layout;
