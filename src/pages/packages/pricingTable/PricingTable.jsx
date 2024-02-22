import React, { useEffect, useState } from "react";
import "./pricingTable.scss";
import ManagersTreeBox from "../../../components/packages/ManagersTreeBox";
import PricingTableBox from "../../../components/packages/PricingTableBox";
import apiAxios from "../../../utils/apiAxios";

const PricingTable = () => {
  const [managers, setManagers] = useState([]);
  const [mangerPriceList, setManagerPriceList] = useState([]);
  const [managerId, setManagerId] = useState(0);
  const [priceList, setPriceList] = useState({
    defaultPrice: "",
    defaultUserPric: "",
    slowPrice: "",
    slowUserPric: "",
    standardPrice: "",
    standardUserPric: "",
    plusPrice: "",
    plusUserPric: "",
  });

  const getManagers = async () => {
    try {
      const { data } = await apiAxios.get("api/manager/tree");
      setManagers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getManager = async (id) => {
    setManagerId(id);
    try {
      const { data } = await apiAxios.get(`/api/priceList/${id}`);
      setManagerPriceList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getManagers();
  }, []);

  return (
    <div className="pricing_table">
      <div className="line">
        <ManagersTreeBox managers={managers} getManager={getManager} />
        <PricingTableBox
          mangerPriceList={mangerPriceList.length > 0 && mangerPriceList}
          setManagerPriceList={setManagerPriceList}
          managerId={managerId}
        />
      </div>
    </div>
  );
};

export default PricingTable;
