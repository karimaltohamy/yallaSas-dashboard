import React from "react";
import ChartLine from "../../../components/charts/ChartLine";
import "./consumptionSubscriber.scss";
import { t } from "i18next";

const ConsumptionSubscriber = () => {
  return (
    <div className="consumption_informatio">
      <div className="h-[250px] md:h-[500px] bg-white mt-6">
        <ChartLine />
      </div>

      <div className="consumption_table">
        <table>
          <thead>
            <tr>
              <th>{t("Day")}</th>
              <th>{t("Download")}</th>
              <th>{t("Upload")}</th>
              <th>{t("Total")}</th>
              <th>{t("Real Traffic")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2023-8-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsumptionSubscriber;
