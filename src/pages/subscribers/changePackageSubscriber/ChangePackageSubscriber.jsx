import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import { t } from "i18next";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import apiAxios from "../../../utils/apiAxios";
import CryptoJS from "crypto-js";
import { secretPass } from "../../../utils/data";
import { toast } from "react-toastify";

const ChangePackageSubscriber = () => {
  const { id } = useParams();
  const [subscriber, setSubscriber] = useState({});
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [changePackage, setChangePackage] = useState({
    newPackage: "",
    changeDate: "",
  });
  const navigate = useNavigate();

  const handleChangePackage = (e) => {
    setChangePackage((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiAxios.get(`api/user/${id}`);
        setSubscriber(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await apiAxios.get(`api/list/profile/0`);
        setPackages(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeProfile = async () => {
    let encrypted;
    if (changePackage.newPackage) {
      setLoading(true);
      const dataToEncrypt = JSON.stringify({
        user_id: id,
        profile_id: changePackage.newPackage,
        change_type: changePackage.changeDate,
      });
      encrypted = CryptoJS.AES.encrypt(dataToEncrypt, secretPass).toString();

      try {
        const { data } = await apiAxios.post("api/user/changeProfile", {
          payload: encrypted,
        });
        toast.success("Successful change package");
        navigate("/subscribers");
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error(error.reponse.data.error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="content_page">
      <SectionForm title={t("Change User Profile")}>
        <div className="boxs_information mb-5">
          <div className="boxs">
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>اسم الدخول</h4>
                <span>{subscriber.username && subscriber.username}</span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>الباقة</h4>
                <span>
                  {subscriber.profile_name && subscriber.profile_name}
                </span>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text">
                <h4>تأريخ الانتهاء</h4>
                <span>{subscriber.expiration && subscriber.expiration}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border-t border-gray-300 pt-4">
          <SelectSectionForm
            label={t("user_change_profile_new")}
            value={changePackage.newPackage}
            onChange={handleChangePackage}
            id="newPackage"
            options={
              packages &&
              packages.map((item, i) => ({ name: item.name, value: item.id }))
            }
          />
          <SelectSectionForm
            label={t("user_change_type")}
            value={changePackage.changeDate}
            onChange={handleChangePackage}
            id="changeDate"
            options={[
              { name: "Immediately", value: "immediate" },
              {
                name: "When the subscription ends",
                value: "schedule",
              },
            ]}
          />
        </div>
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add" onClick={handleChangeProfile}>
          {t("global_button_submit")}
        </button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default ChangePackageSubscriber;
