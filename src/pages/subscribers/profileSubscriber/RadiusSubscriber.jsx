import React, { useEffect, useState } from "react";
import "./radiusSubscriber.scss";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { useParams } from "react-router-dom";

const RadiusSubscriber = () => {
  const { id } = useParams();
  const [radius, setRadius] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await apiAxios.get(
          `api/customRadiusAttribute/user/${id}`
        );
        setRadius(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="radius_table">
      <div className="head">
        <i className="fa-solid fa-star"></i>
        <span>Custom Radius Attributes</span>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>{t("Attribute")}</th>
              <th>{t("Value")}</th>
              <th>{t("Is Cisco-Av-Pair")}</th>
              <th>{t("Enabled")}</th>
              <th>{t("Action")}</th>
            </tr>
          </thead>
          <tbody>
            {radius &&
              radius.map((item, i) => (
                <tr>
                  <td>text</td>
                  <td>text</td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-check"></i>
                  </td>
                  <td>
                    <button>
                      <i className="fa-solid fa-trash remove"></i>
                    </button>
                  </td>
                </tr>
              ))}
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <button>
                  <i className="fa-solid fa-floppy-disk save"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RadiusSubscriber;
