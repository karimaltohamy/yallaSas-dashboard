import React, { Fragment, useEffect, useState } from "react";
import "./login.scss";
import { t } from "i18next";
import CryptoJS from "crypto-js";
import apiAxios from "../../utils/apiAxios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { secretPass } from "../../utils/data";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [languages, setLanguages] = useState([]);
  const [lang, setLang] = useState("en");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    } catch (error) {
      toast.error(error.reponse.data.message);
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
                <label htmlFor=""> {t("Username")} </label>
                <input
                  type="text"
                  placeholder={t("Enter your username")}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input_item">
                <label htmlFor=""> {t("Password")} </label>
                <input
                  type="password"
                  placeholder={t("Enter your password")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input_item">
                <label htmlFor=""> {t("Language")} </label>
                <select name="" id="" onChange={(e) => setLang(e.target.value)}>
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
