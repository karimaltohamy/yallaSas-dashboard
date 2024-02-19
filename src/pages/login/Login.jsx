import React, { Fragment, useEffect, useState } from "react";
import "./login.scss";
import { t } from "i18next";
import CryptoJS from "crypto-js";
import apiAxios from "../../utils/apiAxios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { secretPass } from "../../utils/data";
import Loader from "../../components/loader/Loader";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [languages, setLanguages] = useState([]);
  const [lang, setLang] = useState("en");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiAxios.get("api/resources/languages");
        setLanguages(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    let encrypted;
    if (password && username) {
      const dataToEncrypt = JSON.stringify({ username, password });
      encrypted = CryptoJS.AES.encrypt(dataToEncrypt, secretPass).toString();
    }
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/login", {
        payload: encrypted,
      });
      localStorage.setItem("token", data.token);
      apiAxios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.token}`;
      toast.success(
        data.success && lang == "en"
          ? "Successful login"
          : "تم تسجيل الدخول بنجاح"
      );
      setLoading(false);
      navigate("/");
      changeLanguage(lang);
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="contact_sale_fab">
        <a href="https://atfawry.fawrystaging.com/be-login/contact-us">
          <i className="fas fa-headset" aria-hidden="true"></i>
        </a>
      </div>
      <div className="login">
        <div className="line">
          <div className="logo">
            <img src="./images/logo.png" alt="" loading="lazy" />
          </div>
          <div className="box_form">
            <form onSubmit={handleLogin}>
              <div className="text">
                <h3>{t("Welcome to Yalla Sas")}</h3>
                <span>{t("Your Admin Dashboard")}</span>
              </div>
              <div className="input_item">
                <label htmlFor=""> {t("global_username")} </label>
                <input
                  type="text"
                  placeholder={t("Enter your username")}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input_item">
                <label htmlFor=""> {t("user_form_label_password")} </label>
                <input
                  type="password"
                  placeholder={t("Enter your password")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input_item">
                <label htmlFor=""> {t("Language")} </label>
                <select
                  name=""
                  id=""
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                >
                  <option value="">Select Language</option>
                  {languages &&
                    languages.map((lang, i) => {
                      return (
                        <option value={lang.id} key={i}>
                          {lang.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <button className="btn_login" type="submit">
                {t("Login")}
              </button>
            </form>
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </Fragment>
  );
};

export default Login;
