import React from "react";
import ChartLine from "../../../components/charts/ChartLine";

const FreeZoneSubscriber = () => {
  return (
    <div className="consumption_informatio">
      <div className="h-[250px] md:h-[500px] bg-white mt-6">
        <ChartLine />
      </div>

      <div className="consumption_table">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Download</th>
              <th>Upload</th>
              <th>Total</th>
              <th>Real Traffic</th>
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

export default FreeZoneSubscriber;
