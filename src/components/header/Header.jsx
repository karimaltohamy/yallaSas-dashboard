import React, { useEffect, useRef, useState } from "react";
import "./header.scss";
import imgEn from "../../images/Flag-United-States-of-America.webp";
import imgAr from "../../images/ar.png";
import imgProfile from "../../images/user-1.jpg";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import imgLogo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [openListLang, setOpenListLang] = useState(false);
  const listLangRef = useRef();
  const [openProfileBox, setProfileBox] = useState(false);
  const profileBoxRef = useRef();
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listLangRef.current && !listLangRef.current.contains(event.target)) {
        setOpenListLang(false);
      }

      if (
        profileBoxRef.current &&
        !profileBoxRef.current.contains(event.target)
      ) {
        setProfileBox(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
          <img src={imgLogo} alt="logo" loading="lazy" />
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
        <div className="nav_item" ref={listLangRef}>
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
        <div className="nav_item" ref={profileBoxRef}>
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
            <div className="items">
              <div className="item">
                <Link to={"/profile"} className="flex items-center gap-2">
                  <i class="fa-solid fa-id-badge"></i>
                  <span>Profile</span>
                </Link>
              </div>
            </div>
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
