import React from "react";
import "./radiusSubscriber.scss";

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
              <th>Attribute</th>
              <th>Value</th>
              <th>Is Cisco-Av-Pair</th>
              <th>Enabled</th>
              <th>Action</th>
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
