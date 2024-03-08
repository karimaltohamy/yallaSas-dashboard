import React, { useEffect, useState } from "react";
import SectionForm from "../../components/sectionform/SectionForm";
import SelectSectionForm from "../../components/sectionform/SelectSectionForm";
import InputSectionForm from "../../components/sectionform/InputSectionForm";
import SwitchSectionForm from "../../components/sectionform/SwitchSectionForm";
import { t } from "i18next";
import apiAxios from "../../utils/apiAxios";
import { encryptedData } from "../../utils/utilsFunctions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const AddEditCards = () => {
  const [managers, setManagers] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [cardsGenerator, setCardsGenerator] = useState({
    type: "0",
    qty: "",
    value: "",
    expiration: "",
    prefix: "",
    pin_size: "",
    auto_activate: false,
    profile_id: null,
    owner: "",
    username_size: 8,
    password_size: 4,
    mac_login: null,
    sim_sessions: "1",
    password_username: null,
    use_fixed_password: 0,
    fixed_password: null,
  });

  const handleChangeCardsGenerator = (e) => {
    setCardsGenerator((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const getManagers = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/manager", {
        payload: encryptedData({
          page: 1,
          count: 10,
          sortBy: "username",
          direction: "asc",
          search: "",
          columns: [
            "username",
            "firstname",
            "lastname",
            "balance",
            "loan_balance",
            "name",
            "username",
            "users_count",
          ],
        }),
      });
      setManagers(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getPackages = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get("api/list/profile/4");
      setProfiles(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleForm = async () => {
    setLoading(true);
    try {
      if (cardsGenerator.type == "0") {
        await apiAxios.post("api/card/generate", {
          payload: encryptedData({
            type: cardsGenerator.type,
            qty: cardsGenerator.qty,
            value: cardsGenerator.value,
            expiration: cardsGenerator.expiration,
            prefix: cardsGenerator.prefix,
            pin_size: cardsGenerator.pin_size,
            auto_activate: cardsGenerator.auto_activate,
            profile_id: null,
            owner: cardsGenerator.owner,
          }),
        });
      } else {
        await apiAxios.post("api/card/generate", {
          payload: encryptedData({
            type: cardsGenerator.type,
            qty: cardsGenerator.qty,
            value: cardsGenerator.value,
            expiration: cardsGenerator.expiration,
            prefix: cardsGenerator.prefix,
            username_size: cardsGenerator.username_size,
            password_size: cardsGenerator.password_size,
            mac_login: cardsGenerator.mac_login,
            sim_sessions: cardsGenerator.sim_sessions,
            owner: cardsGenerator.owner,
            password_username: cardsGenerator.password_size,
            use_fixed_password: cardsGenerator.use_fixed_password,
            fixed_password: cardsGenerator.fixed_password,
          }),
        });
      }

      toast.success("Successfull Added Card");
      navigate(-1);
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getManagers();
    getPackages();
  }, []);

  return (
    <div className="content_page">
      <SectionForm title={t("Cards Generator")}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SelectSectionForm
            label={t("global_type")}
            value={cardsGenerator.type}
            onChange={handleChangeCardsGenerator}
            id="type"
            options={[
              { name: "Refill Card", value: "0" },
              { name: "Prepaid User", value: "1" },
            ]}
          />
          <InputSectionForm
            label={t("global_qty")}
            type={"text"}
            value={cardsGenerator.qty}
            onChange={handleChangeCardsGenerator}
            id="qty"
          />
          <InputSectionForm
            label={t("Value")}
            type={"text"}
            value={cardsGenerator.value}
            onChange={handleChangeCardsGenerator}
            id="value"
          />
          <InputSectionForm
            label={t("global_expiration")}
            type={"date"}
            value={cardsGenerator.expiration}
            onChange={handleChangeCardsGenerator}
            id="expiration"
          />
          <InputSectionForm
            label={t("Prefix")}
            type={"text"}
            value={cardsGenerator.prefix}
            onChange={handleChangeCardsGenerator}
            id="prefix"
          />
          {cardsGenerator.type == "1" && (
            <SelectSectionForm
              label={t("global_profile")}
              value={cardsGenerator.profile_id}
              onChange={handleChangeCardsGenerator}
              id="profile_id"
              options={
                profiles &&
                profiles.map((item) => ({
                  name: item.name,
                  value: item.id,
                }))
              }
            />
          )}
          {cardsGenerator.type == "0" && (
            <InputSectionForm
              label={t("Pin Size")}
              type={"text"}
              value={cardsGenerator.pin_size}
              onChange={handleChangeCardsGenerator}
              id="pin_size"
            />
          )}
          {cardsGenerator.type == "0" && (
            <SwitchSectionForm
              label={t("Auto Activate")}
              value={cardsGenerator.auto_activate}
              onChange={handleChangeCardsGenerator}
              id="auto_activate"
            />
          )}
          {cardsGenerator.auto_activate && cardsGenerator.type == "0" && (
            <SelectSectionForm
              label={t("global_profile")}
              value={cardsGenerator.profile_id}
              onChange={handleChangeCardsGenerator}
              id="profile_id"
              options={
                profiles &&
                profiles.map((item) => ({
                  name: item.name,
                  value: item.id,
                }))
              }
            />
          )}
          {cardsGenerator.type == "1" && (
            <SelectSectionForm
              label={t("Username Size")}
              value={cardsGenerator.username_size}
              onChange={handleChangeCardsGenerator}
              id="username_size"
              options={[
                {
                  name: 4,
                  value: 4,
                },
                {
                  name: 6,
                  value: 6,
                },
                {
                  name: 8,
                  value: 8,
                },
                {
                  name: 10,
                  value: 10,
                },
                {
                  name: 12,
                  value: 12,
                },
              ]}
            />
          )}
          {cardsGenerator.type == "1" && !cardsGenerator.password_username && (
            <SelectSectionForm
              label={t("Password Size")}
              value={cardsGenerator.password_size}
              onChange={handleChangeCardsGenerator}
              id="password_size"
              options={[
                {
                  name: 4,
                  value: 4,
                },
                {
                  name: 6,
                  value: 6,
                },
                {
                  name: 8,
                  value: 8,
                },
                {
                  name: 10,
                  value: 10,
                },
                {
                  name: 12,
                  value: 12,
                },
                {
                  name: 14,
                  value: 14,
                },
              ]}
            />
          )}
          {cardsGenerator.type == "1" && (
            <SwitchSectionForm
              label={t("MAC Login (Hotspot Only)")}
              value={cardsGenerator.mac_login}
              onChange={handleChangeCardsGenerator}
              id="mac_login"
            />
          )}
          {cardsGenerator.type == "1" && (
            <InputSectionForm
              label={t("Simultaneous Sessions")}
              type={"text"}
              value={cardsGenerator.sim_sessions}
              onChange={handleChangeCardsGenerator}
              id="sim_sessions"
            />
          )}
          <SelectSectionForm
            label={t("user_overview_owner")}
            value={cardsGenerator.owner}
            onChange={handleChangeCardsGenerator}
            id="owner"
            options={
              managers &&
              managers.map((item) => ({ name: item.username, value: item.id }))
            }
          />
          {cardsGenerator.type == "1" && (
            <SwitchSectionForm
              label={t("Password = Username")}
              value={cardsGenerator.password_username}
              onChange={handleChangeCardsGenerator}
              id="password_username"
            />
          )}
          {cardsGenerator.type == "1" && (
            <SwitchSectionForm
              label={t("Use Fixed Password")}
              value={cardsGenerator.use_fixed_password}
              onChange={handleChangeCardsGenerator}
              id="use_fixed_password"
            />
          )}
          {cardsGenerator.type == "1" && cardsGenerator.use_fixed_password && (
            <InputSectionForm
              label={t("Fixed Password")}
              type={"text"}
              value={cardsGenerator.fixed_password}
              onChange={handleChangeCardsGenerator}
              id="fixed_password"
            />
          )}
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add" onClick={handleForm}>
          {t("global_button_submit")}
        </button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default AddEditCards;
