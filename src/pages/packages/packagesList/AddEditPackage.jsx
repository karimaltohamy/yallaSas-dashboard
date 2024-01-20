import React, { useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import SwitchSectionForm from "../../../components/sectionform/switchSectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";

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
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeServiceParameters = (e) => {
    setServiceParameters((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeAdvancedFeatures = (e) => {
    setAdvancedFeatures((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeDailySOADeterminants = (e) => {
    setDailySOADeterminants((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeMikrotikSettings = (e) => {
    setMikrotikSettings((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeCiscoOptions = (e) => {
    setCiscoOptions((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeActivationOptions = (e) => {
    setActivationOptions((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeEncouragingPoints = (e) => {
    setEncouragingPoints((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  const handleChangeInitialValues = (e) => {
    setInitialValues((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.checked ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="content_page">
      <SectionForm title={"General information"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"Service Name"}
            type={"text"}
            value={generalinformation.serviceName}
            onChange={handleChangeGeneralInformation}
            id="serviceName"
          />
          <SwitchSectionForm
            label={"Effective"}
            value={generalinformation.effective}
            onChange={handleChangeGeneralInformation}
            id="effective"
          />
          <InputSectionForm
            label={"Service Price"}
            type={"text"}
            value={generalinformation.servicePrice}
            onChange={handleChangeGeneralInformation}
            id="servicePrice"
          />
          <SwitchSectionForm
            label={"Available subscribers panel"}
            value={generalinformation.availableSubscribersPanel}
            onChange={handleChangeGeneralInformation}
            id="availableSubscribersPanel"
          />
          <InputSectionForm
            label={"Download speed"}
            type={"text"}
            value={generalinformation.downloadSpeed}
            onChange={handleChangeGeneralInformation}
            id="downloadSpeed"
          />
          <InputSectionForm
            label={"Upload speed"}
            type={"text"}
            value={generalinformation.uploadSpeed}
            onChange={handleChangeGeneralInformation}
            id="uploadSpeed"
          />
          <SelectSectionForm
            label={"Type"}
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
            label={"Short explanation"}
            type={"text"}
            value={generalinformation.shortExplanation}
            onChange={handleChangeGeneralInformation}
            id="shortExplanation"
          />
          <InputSectionForm
            label={"Value added taxes"}
            type={"text"}
            value={generalinformation.valueAddedTaxes}
            onChange={handleChangeGeneralInformation}
            id="valueAddedTaxes"
          />
          <InputSectionForm
            label={"HTTP Port"}
            type={"text"}
            value={generalinformation.httpPort}
            onChange={handleChangeGeneralInformation}
            id="httpPort"
          />
          <InputSectionForm
            label={"Monitor"}
            type={"text"}
            value={generalinformation.monitor}
            onChange={handleChangeGeneralInformation}
            id="monitor"
          />
          <InputSectionForm
            label={"Details"}
            type={"text"}
            value={generalinformation.details}
            onChange={handleChangeGeneralInformation}
            id="details"
          />
        </div>
      </SectionForm>
      <SectionForm title={"Service parameters"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SwitchSectionForm
            label={"determined Duration"}
            value={serviceParameters.determinedDuration}
            onChange={handleChangeServiceParameters}
            id="determinedDuration"
          />
          <SelectSectionForm
            label={"Selection Duration"}
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
            label={"Time Bound"}
            value={serviceParameters.timeBound}
            onChange={handleChangeServiceParameters}
            id="timeBound"
          />
          <SelectSectionForm
            label={"Selection Duration"}
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
            label={"Limited Download Quantity"}
            value={serviceParameters.limitedDownloadQuantity}
            onChange={handleChangeServiceParameters}
            id="limitedDownloadQuantity"
          />
          <InputSectionForm
            label={"Download Quantity"}
            type={"text"}
            value={generalinformation.downloadQuantity}
            onChange={handleChangeServiceParameters}
            id="downloadQuantity"
          />
          <SwitchSectionForm
            label={"Lift Amount Limiter"}
            value={serviceParameters.liftAmountLimiter}
            onChange={handleChangeServiceParameters}
            id="liftAmountLimiter"
          />
          <InputSectionForm
            label={"Lifting Quantity"}
            type={"text"}
            value={generalinformation.liftingQuantity}
            onChange={handleChangeServiceParameters}
            id="liftingQuantity"
          />
          <SwitchSectionForm
            label={"Determined Total Affluence"}
            value={serviceParameters.determinedTotalAffluence}
            onChange={handleChangeServiceParameters}
            id="determinedTotalAffluence"
          />
          <InputSectionForm
            label={"Total Luxury"}
            type={"text"}
            value={generalinformation.totalLuxury}
            onChange={handleChangeServiceParameters}
            id="totalLuxury"
          />
        </div>
      </SectionForm>
      <SectionForm title={"Daily SOA determinants"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"Daily Download Limit (MB)"}
            type={"text"}
            value={dailySOADeterminants.dailyDownloadLimit}
            onChange={handleChangeDailySOADeterminants}
            id="dailyDownloadLimit"
          />
          <InputSectionForm
            label={"Daily Upload Limit (MB)"}
            type={"text"}
            value={dailySOADeterminants.dailyUploadLimit}
            onChange={handleChangeDailySOADeterminants}
            id="dailyUploadLimit"
          />
          <InputSectionForm
            label={"Daily Luxury Limit (MB)"}
            type={"text"}
            value={dailySOADeterminants.dailyLuxuryLimit}
            onChange={handleChangeDailySOADeterminants}
            id="dailyLuxuryLimit"
          />
          <SelectSectionForm
            label={"Daily Time Allowed"}
            value={dailySOADeterminants.dailyTimeAllowedType}
            onChange={handleChangeDailySOADeterminants}
            id="selectionDurationType"
            options={[
              { name: "day", value: "" },
              { name: "hour", value: "" },
            ]}
            valueInput={serviceParameters.dailyTimeAllowedType}
            onChangeInput={handleChangeDailySOADeterminants}
            idInput={"dailyTimeAllowedType"}
            input={true}
            type={"number"}
          />
        </div>
      </SectionForm>
      <SectionForm title={"Advanced features"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SelectSectionForm
            label={"The Pool Equipped"}
            value={advancedFeatures.thePoolEquipped}
            onChange={handleChangeServiceParameters}
            id="thePoolEquipped"
            options={[
              { name: "Preparing the pool from the router", value: "" },
              { name: "Preparing the pool from scratch", value: "" },
            ]}
          />
          <InputSectionForm
            label={"Daily Luxury Limit (MB)"}
            type={"text"}
            value={advancedFeatures.poolName}
            onChange={handleChangeAdvancedFeatures}
            id="poolName"
          />
          <SwitchSectionForm
            label={"Activate Burst"}
            value={advancedFeatures.activateBurst}
            onChange={handleChangeAdvancedFeatures}
            id="activateBurst"
          />
          <SelectSectionForm
            label={"Subscription Expiration Service"}
            value={advancedFeatures.subscriptionExpirationService}
            onChange={handleChangeServiceParameters}
            id="subscriptionExpirationService"
            options={[{ name: "None", value: "" }]}
          />
          <SelectSectionForm
            label={"Daily Quota Expiration Service"}
            value={advancedFeatures.dailyQuotaExpirationService}
            onChange={handleChangeServiceParameters}
            id="dailyQuotaExpirationService"
            options={[{ name: "None", value: "" }]}
          />
          <SwitchSectionForm
            label={"Ignoring Static Ip"}
            value={advancedFeatures.ignoringStaticIp}
            onChange={handleChangeAdvancedFeatures}
            id="ignoringStaticIp"
          />
          <SelectSectionForm
            label={"Site"}
            value={advancedFeatures.site}
            onChange={handleChangeServiceParameters}
            id="site"
            options={[{ name: "None", value: "" }]}
          />
          <SelectSectionForm
            label={"Privacy"}
            value={advancedFeatures.privacy}
            onChange={handleChangeServiceParameters}
            id="privacy"
            options={[{ name: "None", value: "" }]}
          />
          <SwitchSectionForm
            label={"Install Subscription Expiry Hour"}
            value={advancedFeatures.installSubscriptionExpiryHour}
            onChange={handleChangeAdvancedFeatures}
            id="installSubscriptionExpiryHour"
          />
          <SelectSectionForm
            label={"Allowed Connection Methods"}
            value={advancedFeatures.allowedConnectionMethods}
            onChange={handleChangeServiceParameters}
            id="allowedConnectionMethods"
            options={[{ name: "None", value: "" }]}
          />
          <SelectSectionForm
            label={"Free Zone Data"}
            value={advancedFeatures.freeZoneData}
            onChange={handleChangeServiceParameters}
            id="freeZoneData"
            options={[{ name: "None", value: "" }]}
          />
          <SwitchSectionForm
            label={"Activation With Loans Permitted"}
            value={advancedFeatures.activationWithLoansPermitted}
            onChange={handleChangeAdvancedFeatures}
            id="activationWithLoansPermitted"
          />
          <InputSectionForm
            label={"Highest Price Final Subscriber"}
            type={"text"}
            value={advancedFeatures.highestPriceFinalSubscriber}
            onChange={handleChangeAdvancedFeatures}
            id="highestPriceFinalSubscriber"
          />
          <InputSectionForm
            label={"Highest Price Service Manager"}
            type={"text"}
            value={advancedFeatures.highestPriceServiceManager}
            onChange={handleChangeAdvancedFeatures}
            id="highestPriceServiceManager"
          />
          <SwitchSectionForm
            label={"Separate Sessions Charged Hotspot Ppp"}
            value={advancedFeatures.SeparateSessionsChargedHotspotPpp}
            onChange={handleChangeAdvancedFeatures}
            id="SeparateSessionsChargedHotspotPpp"
          />
          <InputSectionForm
            label={"Grace Period After Subscription EndsHours"}
            type={"text"}
            value={advancedFeatures.gracePeriodAfterSubscriptionEndsHours}
            onChange={handleChangeAdvancedFeatures}
            id="gracePeriodAfterSubscriptionEndsHours"
          />
          <SwitchSectionForm
            label={"Ignoring Pool Hotspot Mode"}
            value={advancedFeatures.ignoringPoolHotspotMode}
            onChange={handleChangeAdvancedFeatures}
            id="ignoringPoolHotspotMode"
          />
        </div>
      </SectionForm>
      <SectionForm title={"Mikrotik Settings"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"Address List"}
            type={"text"}
            value={mikrotikSettings.addressList}
            onChange={handleChangeMikrotikSettings}
            id="addressList"
          />
          <InputSectionForm
            label={"Queue Priority"}
            type={"text"}
            value={mikrotikSettings.queuePriority}
            onChange={handleChangeMikrotikSettings}
            id="queuePriority"
          />
        </div>
      </SectionForm>

      <SectionForm title={"Cisco Options"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"QOS-Policy-In"}
            type={"text"}
            value={ciscoOptions.qosPolicyIn}
            onChange={handleChangeCiscoOptions}
            id="qosPolicyIn"
          />
          <InputSectionForm
            label={"QOS-Policy-Out"}
            type={"text"}
            value={ciscoOptions.qosPolicyOut}
            onChange={handleChangeCiscoOptions}
            id="qosPolicyOut"
          />
        </div>
      </SectionForm>
      <SectionForm title={"Activation Options"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SwitchSectionForm
            label={"Account Monthly Contract"}
            value={activationOptions.accountMonthlyContract}
            onChange={handleChangeActivationOptions}
            id="accountMonthlyContract"
          />
          <SwitchSectionForm
            label={"Calculating Remaining Quota Previous Activation"}
            value={
              activationOptions.calculatingRemainingQuotaPreviousActivation
            }
            onChange={handleChangeActivationOptions}
            id="calculatingRemainingQuotaPreviousActivation"
          />
          <SwitchSectionForm
            label={"Daily Luxury Meter Zero"}
            value={activationOptions.dailyLuxuryMeterZero}
            onChange={handleChangeActivationOptions}
            id="dailyLuxuryMeterZero"
          />
          <SwitchSectionForm
            label={"Reset Activation Date"}
            value={activationOptions.resetActivationDate}
            onChange={handleChangeActivationOptions}
            id="resetActivationDate"
          />
          <SelectSectionForm
            label={"Time Add Quota"}
            value={activationOptions.timeAddQuota}
            onChange={handleChangeActivationOptions}
            id="timeAddQuota"
            options={[
              { name: "Preparing the pool from the router", value: "" },
              { name: "Preparing the pool from scratch", value: "" },
            ]}
          />
          <SwitchSectionForm
            label={"Maintaining Luxury Meter Express Subscriber"}
            value={activationOptions.maintainingLuxuryMeterExpressSubscriber}
            onChange={handleChangeActivationOptions}
            id="maintainingLuxuryMeterExpressSubscriber"
          />
          <SwitchSectionForm
            label={"Can Be Cancelled"}
            value={activationOptions.canBeCancelled}
            onChange={handleChangeActivationOptions}
            id="canBeCancelled"
          />
        </div>
      </SectionForm>
      <SectionForm title={"Encouraging Points"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputSectionForm
            label={"Points Awarded Upon Activation"}
            type={"text"}
            value={encouragingPoints.pointsAwardedUponActivation}
            onChange={handleChangeEncouragingPoints}
            id="pointsAwardedUponActivation"
          />
          <SwitchSectionForm
            label={"Can Be Cancelled"}
            value={encouragingPoints.maintainingLuxuryMeterExpressSubscriber}
            onChange={handleChangeEncouragingPoints}
            id="maintainingLuxuryMeterExpressSubscriber"
          />
          <InputSectionForm
            label={"Points Required Activation"}
            type={"text"}
            value={encouragingPoints.pointsRequiredActivation}
            onChange={handleChangeEncouragingPoints}
            id="pointsRequiredActivation"
          />
        </div>
      </SectionForm>
      <SectionForm title={"Initial values ​​(given when adding the common)"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SelectSectionForm
            label={"Free Days"}
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
            label={"Quantity Data"}
            type={"text"}
            value={initialValues.quantityData}
            onChange={handleChangeInitialValues}
            id="quantityData"
          />
          <SelectSectionForm
            label={"Free Days"}
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
        <button className="btn_add">OK</button>
        <button className="btn_close">Cancel</button>
      </div>
    </div>
  );
};

export default AddEditPackage;
