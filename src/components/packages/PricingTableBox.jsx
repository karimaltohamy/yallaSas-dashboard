import React, { useState } from "react";
import "./pricingTableBox.scss";
import { t } from "i18next";
import apiAxios from "../../utils/apiAxios";
import { encryptedData } from "../../utils/utilsFunctions";
import Loader from "../loader/Loader";

const PricingTableBox = ({
  mangerPriceList,
  setManagerPriceList,
  managerId,
}) => {
  const [loading, setLoading] = useState(false);
  const handlePriceChange = (e, index) => {
    const { value } = e.target;
    setManagerPriceList((prevList) =>
      prevList.map((item, i) =>
        i === index ? { ...item, price: value } : item
      )
    );
  };

  const handleUserPriceChange = (e, index) => {
    const { value } = e.target;
    setManagerPriceList((prevList) =>
      prevList.map((item, i) =>
        i === index ? { ...item, user_price: value } : item
      )
    );
  };

  const handleSetPriceList = async () => {
    setLoading(true);
    const priceList = mangerPriceList.map((item) => ({
      profile_id: item.id,
      profile_name: item.name,
      ...item,
    }));
    try {
      await apiAxios.post("api/priceList", {
        payload: encryptedData({
          manager_id: managerId,
          priceList,
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pricing_table_box">
      <div className="pricing_table">
        <div className="head">
          <i className="fa-solid fa-star"></i>
          <span>Price List</span>
        </div>
        <div className="table">
          <table>
            <thead>
              <th>{t("Profile")}</th>
              <th>{t("Cost")}</th>
              <th>{t("Price")}</th>
              <th>{t("End User Price")}</th>
            </thead>
            <tbody>
              {mangerPriceList &&
                mangerPriceList.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.cost}</td>
                    <td>
                      <input
                        type="number"
                        value={item.price}
                        onChange={(e) => handlePriceChange(e, i)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={item.user_price}
                        onChange={(e) => handleUserPriceChange(e, i)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {mangerPriceList && (
          <div className="btns">
            <button className="btn_ok" onClick={handleSetPriceList}>
              OK
            </button>
            <button className="btn_close">Cancel</button>
          </div>
        )}
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default PricingTableBox;
