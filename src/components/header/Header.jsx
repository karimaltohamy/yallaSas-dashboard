import React, { useState } from "react";
import "./header.scss";
import imgEn from "../../images/Flag-United-States-of-America.webp";
import imgAr from "../../images/ar.png";
import imgProfile from "../../images/user-1.jpg";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Header = () => {
  const [openListLang, setOpenListLang] = useState(false);
  const [openProfileBox, setProfileBox] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const { i18n, t } = useTranslation();
  const lang = localStorage.getItem("lang");
  const { userInfo } = useSelector((state) => state.user);

  // change theme
  const handleModeTheme = (mode) => {
    localStorage.setItem("mode", mode);
    if (mode == "light") {
      setMode(mode);
      document.body.classList.remove("dark");
    } else if (mode == "dark") {
      setMode(mode);
      document.body.classList.add("dark");
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);

    if (lang == "ar") {
      document.body.classList.add("ar");
      document.body.classList.remove("en");
    } else if (lang == "en") {
      document.body.classList.add("en");
      document.body.classList.remove("ar");
    }
  };

  const handleToggleSidebar = () => {
    document.querySelector(".sidebar").classList.toggle("remove_elemnts");
    document.querySelector(".sidebar").classList.toggle("close_sidebar");

    if (innerWidth < 768) {
      document.querySelector(".overflow_sidebar").classList.toggle("active");
    }
  };

  return (
    <div className="header">
      <div className="left">
        <div className="icon_menu" onClick={() => handleToggleSidebar()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </div>
        <div className="logo_header">
          <img src="images/logo.png" alt="logo" loading="lazy" />
        </div>
        <div className="input_search">
          <input type="text" placeholder="Search..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="right">
        <div className="mode btn_mode">
          {mode == "dark" && (
            <i
              className={`fa-regular fa-sun light cursor-pointer ${
                mode == "dark" && "show"
              }`}
              onClick={() => handleModeTheme("light")}
            ></i>
          )}
          {mode == "light" && (
            <i
              className={`fa-solid fa-moon dark cursor-pointer ${
                mode == "light" && "show"
              }`}
              onClick={() => handleModeTheme("dark")}
            ></i>
          )}
        </div>
        <div className="nav_item">
          <div className="head" onClick={() => setOpenListLang(!openListLang)}>
            <i class="fa-solid fa-earth-africa"></i>
          </div>
          <div
            className={`list list2 ${openListLang ? "active" : ""} ${
              lang == "ar" ? "ar" : ""
            }`}
          >
            <div className="item" onClick={() => changeLanguage("en")}>
              <img
                src={imgEn}
                alt="Flag-United-States-of-America"
                loading="lazy"
              />
              <span>English (UK)</span>
            </div>
            <div className="item" onClick={() => changeLanguage("ar")}>
              <img src={imgAr} alt="ar-img" loading="lazy" />
              <span>Arabic (ar)</span>
            </div>
          </div>
        </div>
        <a href="attendance.html" className="notfication">
          <div className="head">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                ></path>
              </svg>
            </div>
          </div>
        </a>
        <div className="nav_item">
          <div className="head" onClick={() => setProfileBox(!openProfileBox)}>
            <img
              className="img_profile"
              src={imgProfile}
              alt="user-1"
              loading="lazy"
            />
          </div>
          <div
            className={`list list2 !min-w-[250px] ${
              openProfileBox ? "active" : ""
            } ${lang == "ar" ? "ar" : ""}`}
          >
            <h4 className="title">Profile</h4>
            {userInfo?.client && (
              <div className="profile">
                <img src={imgProfile} alt="user-1" loading="lazy" />
                <div className="text">
                  <div className="name">{userInfo.client.username}</div>
                  <div className="email">
                    <i className="fa-regular fa-envelope"></i>
                    <span>
                      {userInfo.client.email
                        ? userInfo.client.email
                        : "Info@example.com"}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <a href="login.html" className="btn_logout">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
