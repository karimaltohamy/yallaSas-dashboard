import React from "react";
import "./radiusSubscriber.scss";
import { t } from "i18next";

const RadiusSubscriber = () => {
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
