import React from "react";
import "./pricingTable.scss";
import ManagersTreeBox from "../../../components/packages/ManagersTreeBox";
import PricingTableBox from "../../../components/packages/PricingTableBox";

const PricingTable = () => {
  return (
    <div className="pricing_table">
      <div className="line">
        <ManagersTreeBox />
        <PricingTableBox />
      </div>
    </div>
  );
};

export default PricingTable;
