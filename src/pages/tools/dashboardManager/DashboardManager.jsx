import React, { useState } from "react";
import "./dashboardManager.scss";
import MainSection from "../../../components/mainSection/MainSection";

const DashboardManager = () => {
  const [rows, setRows] = useState([]);

  const handleAddRow = (row) => {
    setRows((prev) => {
      return [...prev, row];
    });
  };
  return (
    <div className="dashboard_manager">
      <div className="selected_dashboard">
        <form action="">
          <select name="" id="select-dashboard">
            <option value="">select dashboard</option>
            <option value="">admin</option>
            <option value="">Reseller Dashboard</option>
            <option value="">o2.net</option>
          </select>
        </form>
        <div className="utils_form">
          <button className="btn_utils btn_add">
            <i className="fa-solid fa-plus"></i>
          </button>
          <button className="btn_utils btn_save">
            <i className="fa-solid fa-floppy-disk"></i>
          </button>
          <button className="btn_utils btn_remove">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      <MainSection
        title={"Dashboard Designer"}
        icon={<i className="fa-regular fa-eye"></i>}
      >
        <div className="line flex gap-10">
          <div className="w-full md:w-[70%]">
            <div className="dash_rows">
              {rows &&
                rows.map((row, i) => (
                  <div className="dash_row" key={i}>
                    <button
                      className="btn_remove_row"
                      onClick={() =>
                        setRows(rows.filter((row, index) => index !== i))
                      }
                    >
                      <span>Delete Row</span>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                ))}
              <div className="add_row">
                <button
                  className="btn_add_row"
                  onClick={() => handleAddRow({ row: rows.length + 1 })}
                >
                  <span>Add Row</span>
                  <i className="fa-solid fa-circle-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%]">
            <div className="col_boxs">
              <div className="boxs">
                <div className="box">
                  <i className="fa-solid fa-tree"></i>
                  <h5>المدراء</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#20a8d8" }}>
                  <i className="fa-regular fa-keyboard"></i>
                  <h5>المتصلين</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#59b3a6" }}>
                  <i className="fa-regular fa-face-smile"></i>
                  <h5>المشتركين الفعالين</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#ff8180" }}>
                  <i className="fa-regular fa-face-angry"></i>
                  <h5>المنتهي اشتراكهم</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#ffe808" }}>
                  <i className="fa-regular fa-calendar-days"></i>
                  <h5>علي وشك الانتهاء</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#5a78c7" }}>
                  <i className="fa-regular fa-money-bill-1"></i>
                  <h5>الرصيد</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#59b3a6" }}>
                  <i className="fa-solid fa-info"></i>
                  <h5>الاصدار</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#ef8bff" }}>
                  <i className="fa-solid fa-plug"></i>
                  <h5>مده عمل النظام</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#4b64a6" }}>
                  <i className="fa-solid fa-microchip"></i>
                  <h5>ذاكره النظام</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#20a8d8" }}>
                  <i className="fa-solid fa-hard-drive"></i>
                  <h5>وحده التخزين</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#ffe808" }}>
                  <i className="fa-solid fa-signal"></i>
                  <h5>الشبكه</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#6bd7c7" }}>
                  <i className="fa-solid fa-signal"></i>
                  <h5>Google Ping</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#ff80a4" }}>
                  <i className="fa-solid fa-gift"></i>
                  <h5>النقاط التشجعيه</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#ef8bff" }}>
                  <i className="fa-solid fa-info"></i>
                  <h5>Online FUP</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#20a8d8" }}>
                  <i className="fa-regular fa-clock"></i>
                  <h5>System Time</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#20a8d8" }}>
                  <i className="fa-solid fa-scale-balanced"></i>
                  <h5>الديون</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#20a8d8" }}>
                  <i className="fa-solid fa-scale-balanced"></i>
                  <h5>المطالبات الماليه</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#20a8d8" }}>
                  <i className="fa-solid fa-info"></i>
                  <h5>Nas</h5>
                </div>
                <div className="box" style={{ backgroundColor: "#20a8d8" }}>
                  <i className="fa-solid fa-tree"></i>
                  <h5>عدد المشتركين</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default DashboardManager;
