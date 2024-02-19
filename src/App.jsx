import { useEffect } from "react";
import "./App.scss";
import Layout from "./layout/Layout";
import { getUser } from "./store/actions/getUser";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import apiAxios from "./utils/apiAxios";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { i18n, t } = useTranslation();
  useEffect(() => {
    // get user
    !location.pathname.includes("login") && getUser(dispatch);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        document.querySelector(".sidebar").classList.add("remove_elemnts");
        document.querySelector(".sidebar").classList.add("close_sidebar");
        document.querySelector(".overflow_sidebar").classList.remove("active");
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    if (innerWidth < 768) {
      document.querySelector(".sidebar").classList.add("remove_elemnts");
      document.querySelector(".sidebar").classList.add("close_sidebar");
      document.querySelector(".overflow_sidebar").classList.remove("active");
    }

    // default lang
    if (localStorage.getItem("lang") == "ar") {
      i18n.changeLanguage("ar");
      document.body.classList.add("ar");
      document.body.classList.remove("en");
    } else if (localStorage.getItem("lang") == "en") {
      i18n.changeLanguage("en");
      document.body.classList.add("en");
      document.body.classList.remove("ar");
    } else {
      i18n.changeLanguage("ar");
      document.body.classList.add("ar");
      document.body.classList.remove("en");
    }

    if (localStorage.getItem("mode") == "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window]);

  return <Layout />;
}

export default App;
