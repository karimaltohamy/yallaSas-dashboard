import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import { t } from "i18next";

const AddEditPackage = () => {
  const [generalinformation, setGeneralinformation] = useState({
    serviceName: "",
    effective: "",
    servicePrice: "",
    availableSubscribersPanel: "",
    downloadSpeed: "",
    uploadSpeed: "",
    type: "",
    shortExplanation: "",
    valueAddedTaxes: "",
    httpPort: "",
    monitor: "",
    details: "",
  });

  const [serviceParameters, setServiceParameters] = useState({
    determinedDuration: "",
    selectionDurationNumber: "",
    selectionDurationType: "",
    timeBound: "",
    selectionDurationTimeNumber: "",
    selectionDurationTimeType: "",
    limitedDownloadQuantity: "",
    downloadQuantity: "",
    liftAmountLimiter: "",
    liftingQuantity: "",
    determinedTotalAffluence: "",
    totalLuxury: "",
  });
  const [dailySOADeterminants, setDailySOADeterminants] = useState({
    dailyDownloadLimit: "",
    dailyUploadLimit: "",
    dailyLuxuryLimit: "",
    dailyTimeAllowedNumber: "",
    dailyTimeAllowedType: "",
  });

  const [advancedFeatures, setAdvancedFeatures] = useState({
    thePoolEquipped: "",
    poolName: "",
    activateBurst: "",
    subscriptionExpirationService: "",
    quotaExpirationService: "",
    dailyQuotaExpirationService: "",
    ignoringStaticIp: "",
    site: "",
    privacy: "",
    installSubscriptionExpiryHour: "",
    allowedConnectionMethods: "",
    freeZoneData: "",
    activationWithLoansPermitted: "",
    highestPriceFinalSubscriber: "",
    highestPriceServiceManager: "",
    SeparateSessionsChargedHotspotPpp: "",
    gracePeriodAfterSubscriptionEndsHours: "",
    ignoringPoolHotspotMode: "",
  });

  const [mikrotikSettings, setMikrotikSettings] = useState({
    addressList: "",
    queuePriority: "",
  });

  const [ciscoOptions, setCiscoOptions] = useState({
    qosPolicyIn: "",
    qosPolicyOut: "",
  });

  const [activationOptions, setActivationOptions] = useState({
    accountMonthlyContract: "",
    calculatingRemainingQuotaPreviousActivation: "",
    dailyLuxuryMeterZero: "",
    resetActivationDate: "",
    timeAddQuota: "",
    maintainingLuxuryMeterExpressSubscriber: "",
    canBeCancelled: "",
  });

  const [encouragingPoints, setEncouragingPoints] = useState({
    pointsAwardedUponActivation: "",
    maintainingLuxuryMeterExpressSubscriber: "",
    pointsRequiredActivation: "",
  });

  const [initialValues, setInitialValues] = useState({
    freeDaysNumber: "",
    freeDaysType: "",
    quantityData: "",
    freeTimeNumber: "",
    freeTimeType: "",
  });

  const handleChangeGeneralInformation = (e) => {
    setGeneralinformation((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeServiceParameters = (e) => {
    setServiceParameters((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeAdvancedFeatures = (e) => {
    setAdvancedFeatures((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeDailySOADeterminants = (e) => {
    setDailySOADeterminants((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeMikrotikSettings = (e) => {
    setMikrotikSettings((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeCiscoOptions = (e) => {
    setCiscoOptions((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeActivationOptions = (e) => {
    setActivationOptions((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeEncouragingPoints = (e) => {
    setEncouragingPoints((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeInitialValues = (e) => {
    setInitialValues((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={t("General information")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("Service Name")}
            type={"text"}
            value={generalinformation.serviceName}
            onChange={handleChangeGeneralInformation}
            id="serviceName"
          />
          <SwitchSectionForm
            label={t("Effective")}
            value={generalinformation.effective}
            onChange={handleChangeGeneralInformation}
            id="effective"
          />
          <InputSectionForm
            label={t("Service Price")}
            type={"text"}
            value={generalinformation.servicePrice}
            onChange={handleChangeGeneralInformation}
            id="servicePrice"
          />
          <SwitchSectionForm
            label={t("Available subscribers panel")}
            value={generalinformation.availableSubscribersPanel}
            onChange={handleChangeGeneralInformation}
            id="availableSubscribersPanel"
          />
          <InputSectionForm
            label={t("Download speed")}
            type={"text"}
            value={generalinformation.downloadSpeed}
            onChange={handleChangeGeneralInformation}
            id="downloadSpeed"
          />
          <InputSectionForm
            label={t("Upload speed")}
            type={"text"}
            value={generalinformation.uploadSpeed}
            onChange={handleChangeGeneralInformation}
            id="uploadSpeed"
          />
          <SelectSectionForm
            label={t("Type")}
            value={generalinformation.type}
            onChange={handleChangeGeneralInformation}
            id="type"
            options={[
              { name: "pay", value: "" },
              { name: "Post payment", value: "" },
              { name: "Fair usage service", value: "" },
              { name: "Extension", value: "" },
            ]}
          />
          <InputSectionForm
            label={t("Short explanation")}
            type={"text"}
            value={generalinformation.shortExplanation}
            onChange={handleChangeGeneralInformation}
            id="shortExplanation"
          />
          <InputSectionForm
            label={t("Value added taxes")}
            type={"text"}
            value={generalinformation.valueAddedTaxes}
            onChange={handleChangeGeneralInformation}
            id="valueAddedTaxes"
          />
          <InputSectionForm
            label={t("HTTP Port")}
            type={"text"}
            value={generalinformation.httpPort}
            onChange={handleChangeGeneralInformation}
            id="httpPort"
          />
          <InputSectionForm
            label={t("Monitor")}
            type={"text"}
            value={generalinformation.monitor}
            onChange={handleChangeGeneralInformation}
            id="monitor"
          />
          <InputSectionForm
            label={t("Details")}
            type={"text"}
            value={generalinformation.details}
            onChange={handleChangeGeneralInformation}
            id="details"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Service parameters")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SwitchSectionForm
            label={t("determined Duration")}
            value={serviceParameters.determinedDuration}
            onChange={handleChangeServiceParameters}
            id="determinedDuration"
          />
          <SelectSectionForm
            label={t("Selection Duration")}
            value={serviceParameters.selectionDurationType}
            onChange={handleChangeServiceParameters}
            id="selectionDurationType"
            options={[
              { name: "day", value: "" },
              { name: "month", value: "" },
              { name: "hour", value: "" },
            ]}
            valueInput={serviceParameters.selectionDurationNumber}
            onChangeInput={handleChangeServiceParameters}
            idInput={"selectionDurationNumber"}
            input={true}
            type={"number"}
          />
          <SwitchSectionForm
            label={t("Time Bound")}
            value={serviceParameters.timeBound}
            onChange={handleChangeServiceParameters}
            id="timeBound"
          />
          <SelectSectionForm
            label={t("Selection Duration")}
            value={serviceParameters.selectionDurationTimeType}
            onChange={handleChangeServiceParameters}
            id="selectionDurationTimeType"
            options={[
              { name: "minute", value: "" },
              { name: "hour", value: "" },
            ]}
            valueInput={serviceParameters.selectionDurationTimeNumber}
            onChangeInput={handleChangeServiceParameters}
            idInput={"selectionDurationTimeNumber"}
            input={true}
            type={"number"}
          />
          <SwitchSectionForm
            label={t("Limited Download Quantity")}
            value={serviceParameters.limitedDownloadQuantity}
            onChange={handleChangeServiceParameters}
            id="limitedDownloadQuantity"
          />
          <InputSectionForm
            label={t("Download Quantity")}
            type={"text"}
            value={generalinformation.downloadQuantity}
            onChange={handleChangeServiceParameters}
            id="downloadQuantity"
          />
          <SwitchSectionForm
            label={t("Lift Amount Limiter")}
            value={serviceParameters.liftAmountLimiter}
            onChange={handleChangeServiceParameters}
            id="liftAmountLimiter"
          />
          <InputSectionForm
            label={t("Lifting Quantity")}
            type={"text"}
            value={generalinformation.liftingQuantity}
            onChange={handleChangeServiceParameters}
            id="liftingQuantity"
          />
          <SwitchSectionForm
            label={t("Determined Total Affluence")}
            value={serviceParameters.determinedTotalAffluence}
            onChange={handleChangeServiceParameters}
            id="determinedTotalAffluence"
          />
          <InputSectionForm
            label={t("Total Luxury")}
            type={"text"}
            value={generalinformation.totalLuxury}
            onChange={handleChangeServiceParameters}
            id="totalLuxury"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Daily SOA determinants")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("Daily Download Limit (MB)")}
            type={"text"}
            value={dailySOADeterminants.dailyDownloadLimit}
            onChange={handleChangeDailySOADeterminants}
            id="dailyDownloadLimit"
          />
          <InputSectionForm
            label={t("Daily Upload Limit (MB)")}
            type={"text"}
            value={dailySOADeterminants.dailyUploadLimit}
            onChange={handleChangeDailySOADeterminants}
            id="dailyUploadLimit"
          />
          <InputSectionForm
            label={t("Daily Luxury Limit (MB)")}
            type={"text"}
            value={dailySOADeterminants.dailyLuxuryLimit}
            onChange={handleChangeDailySOADeterminants}
            id="dailyLuxuryLimit"
          />
          <SelectSectionForm
            label={t("Daily Time Allowed")}
            value={dailySOADeterminants.dailyTimeAllowedType}
            onChange={handleChangeDailySOADeterminants}
            id="selectionDurationType"
            options={[
              { name: "day", value: "" },
              { name: "hour", value: "" },
            ]}
            valueInput={serviceParameters.dailyTimeAllowedType}
            onChangeInput={handleChangeDailySOADeterminants}
            idInput={t("dailyTimeAllowedType")}
            input={true}
            type={"number"}
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Advanced features")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SelectSectionForm
            label={t("The Pool Equipped")}
            value={advancedFeatures.thePoolEquipped}
            onChange={handleChangeServiceParameters}
            id="thePoolEquipped"
            options={[
              { name: "Preparing the pool from the router", value: "" },
              { name: "Preparing the pool from scratch", value: "" },
            ]}
          />
          <InputSectionForm
            label={t("Daily Luxury Limit (MB)")}
            type={"text"}
            value={advancedFeatures.poolName}
            onChange={handleChangeAdvancedFeatures}
            id="poolName"
          />
          <SwitchSectionForm
            label={t("Activate Burst")}
            value={advancedFeatures.activateBurst}
            onChange={handleChangeAdvancedFeatures}
            id="activateBurst"
          />
          <SelectSectionForm
            label={t("Subscription Expiration Service")}
            value={advancedFeatures.subscriptionExpirationService}
            onChange={handleChangeServiceParameters}
            id="subscriptionExpirationService"
            options={[{ name: "None", value: "" }]}
          />
          <SelectSectionForm
            label={t("Daily Quota Expiration Service")}
            value={advancedFeatures.dailyQuotaExpirationService}
            onChange={handleChangeServiceParameters}
            id="dailyQuotaExpirationService"
            options={[{ name: "None", value: "" }]}
          />
          <SwitchSectionForm
            label={t("Ignoring Static Ip")}
            value={advancedFeatures.ignoringStaticIp}
            onChange={handleChangeAdvancedFeatures}
            id="ignoringStaticIp"
          />
          <SelectSectionForm
            label={t("Site")}
            value={advancedFeatures.site}
            onChange={handleChangeServiceParameters}
            id="site"
            options={[{ name: "None", value: "" }]}
          />
          <SelectSectionForm
            label={t("Privacy")}
            value={advancedFeatures.privacy}
            onChange={handleChangeServiceParameters}
            id="privacy"
            options={[{ name: "None", value: "" }]}
          />
          <SwitchSectionForm
            label={t("Install Subscription Expiry Hour")}
            value={advancedFeatures.installSubscriptionExpiryHour}
            onChange={handleChangeAdvancedFeatures}
            id="installSubscriptionExpiryHour"
          />
          <SelectSectionForm
            label={t("Allowed Connection Methods")}
            value={advancedFeatures.allowedConnectionMethods}
            onChange={handleChangeServiceParameters}
            id="allowedConnectionMethods"
            options={[{ name: "None", value: "" }]}
          />
          <SelectSectionForm
            label={t("Free Zone Data")}
            value={advancedFeatures.freeZoneData}
            onChange={handleChangeServiceParameters}
            id="freeZoneData"
            options={[{ name: "None", value: "" }]}
          />
          <SwitchSectionForm
            label={t("Activation With Loans Permitted")}
            value={advancedFeatures.activationWithLoansPermitted}
            onChange={handleChangeAdvancedFeatures}
            id="activationWithLoansPermitted"
          />
          <InputSectionForm
            label={t("Highest Price Final Subscriber")}
            type={"text"}
            value={advancedFeatures.highestPriceFinalSubscriber}
            onChange={handleChangeAdvancedFeatures}
            id="highestPriceFinalSubscriber"
          />
          <InputSectionForm
            label={t("Highest Price Service Manager")}
            type={"text"}
            value={advancedFeatures.highestPriceServiceManager}
            onChange={handleChangeAdvancedFeatures}
            id="highestPriceServiceManager"
          />
          <SwitchSectionForm
            label={t("Separate Sessions Charged Hotspot Ppp")}
            value={advancedFeatures.SeparateSessionsChargedHotspotPpp}
            onChange={handleChangeAdvancedFeatures}
            id="SeparateSessionsChargedHotspotPpp"
          />
          <InputSectionForm
            label={t("Grace Period After Subscription EndsHours")}
            type={"text"}
            value={advancedFeatures.gracePeriodAfterSubscriptionEndsHours}
            onChange={handleChangeAdvancedFeatures}
            id="gracePeriodAfterSubscriptionEndsHours"
          />
          <SwitchSectionForm
            label={t("Ignoring Pool Hotspot Mode")}
            value={advancedFeatures.ignoringPoolHotspotMode}
            onChange={handleChangeAdvancedFeatures}
            id="ignoringPoolHotspotMode"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Mikrotik Settings")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("Address List")}
            type={"text"}
            value={mikrotikSettings.addressList}
            onChange={handleChangeMikrotikSettings}
            id="addressList"
          />
          <InputSectionForm
            label={t("Queue Priority")}
            type={"text"}
            value={mikrotikSettings.queuePriority}
            onChange={handleChangeMikrotikSettings}
            id="queuePriority"
          />
        </div>
      </SectionForm>

      <SectionForm title={t("Cisco Options")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("QOS-Policy-In")}
            type={"text"}
            value={ciscoOptions.qosPolicyIn}
            onChange={handleChangeCiscoOptions}
            id="qosPolicyIn"
          />
          <InputSectionForm
            label={t("QOS-Policy-Out")}
            type={"text"}
            value={ciscoOptions.qosPolicyOut}
            onChange={handleChangeCiscoOptions}
            id="qosPolicyOut"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Activation Options")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SwitchSectionForm
            label={t("Account Monthly Contract")}
            value={activationOptions.accountMonthlyContract}
            onChange={handleChangeActivationOptions}
            id="accountMonthlyContract"
          />
          <SwitchSectionForm
            label={t("Calculating Remaining Quota Previous Activation")}
            value={
              activationOptions.calculatingRemainingQuotaPreviousActivation
            }
            onChange={handleChangeActivationOptions}
            id="calculatingRemainingQuotaPreviousActivation"
          />
          <SwitchSectionForm
            label={t("Daily Luxury Meter Zero")}
            value={activationOptions.dailyLuxuryMeterZero}
            onChange={handleChangeActivationOptions}
            id="dailyLuxuryMeterZero"
          />
          <SwitchSectionForm
            label={t("Reset Activation Date")}
            value={activationOptions.resetActivationDate}
            onChange={handleChangeActivationOptions}
            id="resetActivationDate"
          />
          <SelectSectionForm
            label={t("Time Add Quota")}
            value={activationOptions.timeAddQuota}
            onChange={handleChangeActivationOptions}
            id="timeAddQuota"
            options={[
              { name: "Preparing the pool from the router", value: "" },
              { name: "Preparing the pool from scratch", value: "" },
            ]}
          />
          <SwitchSectionForm
            label={t("Maintaining Luxury Meter Express Subscriber")}
            value={activationOptions.maintainingLuxuryMeterExpressSubscriber}
            onChange={handleChangeActivationOptions}
            id="maintainingLuxuryMeterExpressSubscriber"
          />
          <SwitchSectionForm
            label={t("Can Be Cancelled")}
            value={activationOptions.canBeCancelled}
            onChange={handleChangeActivationOptions}
            id="canBeCancelled"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Encouraging Points")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={t("Points Awarded Upon Activation")}
            type={"text"}
            value={encouragingPoints.pointsAwardedUponActivation}
            onChange={handleChangeEncouragingPoints}
            id="pointsAwardedUponActivation"
          />
          <SwitchSectionForm
            label={t("Can Be Cancelled")}
            value={encouragingPoints.maintainingLuxuryMeterExpressSubscriber}
            onChange={handleChangeEncouragingPoints}
            id="maintainingLuxuryMeterExpressSubscriber"
          />
          <InputSectionForm
            label={t("Points Required Activation")}
            type={"text"}
            value={encouragingPoints.pointsRequiredActivation}
            onChange={handleChangeEncouragingPoints}
            id="pointsRequiredActivation"
          />
        </div>
      </SectionForm>
      <SectionForm title={t("Initial values ​​(given when adding the common)")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SelectSectionForm
            label={t("Free Days")}
            value={initialValues.freeDaysType}
            onChange={handleChangeInitialValues}
            id="freeDaysType"
            options={[
              { name: "day", value: "" },
              { name: "month", value: "" },
              { name: "hour", value: "" },
            ]}
            valueInput={initialValues.freeDaysNumber}
            onChangeInput={handleChangeInitialValues}
            idInput={"freeDaysNumber"}
            input={true}
            type={"number"}
          />
          <InputSectionForm
            label={t("Quantity Data")}
            type={"text"}
            value={initialValues.quantityData}
            onChange={handleChangeInitialValues}
            id="quantityData"
          />
          <SelectSectionForm
            label={t("Free Days")}
            value={initialValues.freeTimeType}
            onChange={handleChangeInitialValues}
            id="freeTimeType"
            options={[
              { name: "minute", value: "" },
              { name: "hour", value: "" },
            ]}
            valueInput={initialValues.freeTimeNumber}
            onChangeInput={handleChangeInitialValues}
            idInput={"freeTimeNumber"}
            input={true}
            type={"number"}
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add">{t("global_button_submit")}</button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
    </div>
  );
};

export default AddEditPackage;
