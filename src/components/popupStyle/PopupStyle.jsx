import React, { useState } from "react";
import "./popupStyle.scss";
import imgHomePage1 from "../../images/home-page-1.png";
import imgHomePage2 from "../../images/home-page-2.png";
import imgStyle1 from "../../images/style-1.png";
import imgStyle2 from "../../images/style-2.png";
import imgStyle3 from "../../images/style-3.png";
import imgStyle4 from "../../images/style-4.png";

const PopupStyle = () => {
  const [open, setOpen] = useState(false);
  const lang = localStorage.getItem("lang");

  const changeSidebarStyle = (value) => {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove(
      "dashboard_style_2",
      "dashboard_style_3",
      "dashboard_style_4"
    );

    if (value == "") {
      sidebar.classList.add("");
      localStorage.setItem("style", null);
    } else {
      sidebar.classList.add(value);
      localStorage.setItem("style", value);
    }
  };

  const changeHomeStyle = (value) => {
    let sections = document.querySelectorAll(".home_section .items");
    sections.forEach((section) =>
      section.classList.remove("style_1", "style_2")
    );

    if (value == "style_1") {
      sections.forEach((section) => section.classList.add("style_1"));
      localStorage.setItem("home_page_style", value);
    } else if (value == "style_2") {
      sections.forEach((section) => section.classList.add("style_2"));
      localStorage.setItem("home_page_style", value);
    }
  };

  return (
    <div
      className={`popup_styls ${open ? "open" : ""} ${
        lang == "ar" ? "ar" : ""
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className={`icon_open_popup ${lang == "ar" ? "ar" : ""}`}>
        <i className="fa-solid fa-fill-drip"></i>
      </div>

      <div className="head">
        <h4>
          SHOW STYLE <i className="fa-regular fa-thumbs-up"></i>
        </h4>

        <div className="close_popu_style" onClick={() => setOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>

      <div className="content">
        <div className="styles mb-4">
          <h3 className="text-[17px] text-gray-400 font-semibold pb-2">
            Home Page Styles:
          </h3>
          <div className="item" onClick={() => changeHomeStyle("style_1")}>
            <div className="image">
              <img src={imgHomePage1} alt="style-img" />
            </div>
            <h4>Home Page Style 1</h4>
          </div>
          <div className="item" onClick={() => changeHomeStyle("style_2")}>
            <div className="image">
              <img src={imgHomePage2} alt="style-img" />
            </div>
            <h4>Home Page Style 2</h4>
          </div>
        </div>
        <div className="styles">
          <h3 className="text-[17px] text-gray-400 font-semibold pb-2">
            Sidebar Styles:
          </h3>
          <div className="item" onClick={() => changeSidebarStyle("default")}>
            <div className="image">
              <img src={imgStyle1} alt="style-img" />
            </div>
            <h4>Style 1</h4>
          </div>
          <div
            className="item"
            onClick={() => changeSidebarStyle("dashboard_style_2")}
          >
            <div className="image">
              <img src={imgStyle2} alt="style-img" />
            </div>
            <h4>Style 2</h4>
          </div>
          <div
            className="item"
            onClick={() => changeSidebarStyle("dashboard_style_3")}
          >
            <div className="image">
              <img src={imgStyle3} alt="style-img" />
            </div>
            <h4>Style 3</h4>
          </div>
          <div
            className="item"
            onClick={() => changeSidebarStyle("dashboard_style_4")}
          >
            <div className="image">
              <img src={imgStyle4} alt="style-img" />
            </div>
            <h4>Style 4</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupStyle;
