import React, { useEffect, useState } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./toolsBandwidthControl.scss";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { convertFromBytes, encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";
import { toast } from "react-toastify";

const ToolsBandwidthControl = () => {
  const [allProfiles, setAllProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const lang = localStorage.getItem("lang");

  const handleChange = (idx, value) => {
    setAllProfiles(
      allProfiles.map((item, index) => {
        return index == idx
          ? {
              ...item,
              bandwidth_multiplier: Number(value),
            }
          : item;
      })
    );
  };

  const changeAllProfile = (value) => {
    setAllProfiles(
      allProfiles.map((item) => {
        return { ...item, bandwidth_multiplier: Number(value) };
      })
    );
  };

  const getAllProfiles = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get("api/bandwidthController");
      setAllProfiles(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await apiAxios.post("api/bandwidthController", {
        payload: encryptedData({
          multipliers: allProfiles.map((item) => ({
            profile_id: item.id,
            multiplier: item.bandwidth_multiplier,
          })),
        }),
      });
      toast.success("Successfull Save");
      getAllProfiles();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProfiles();
  }, []);

  return (
    <div className="m-[10px]">
      <MainSection
        title={t("Bandwidth Controller")}
        icon={<i className="fa-solid fa-gears"></i>}
      >
        <div className="tools_bandwidth_control_content">
          <div className="btns_controls">
            <button className="btn_control save" onClick={handleSave}>
              {"Save"}
            </button>
            <button className="btn_control reset">{"Reset"}</button>
            <button className="btn_control reload" onClick={getAllProfiles}>
              <i className="fa-solid fa-rotate"></i>
            </button>
          </div>

          <div className="main_range">
            <div className={`text ${lang == "en" ? "border-r" : "border-l"}`}>
              <h5>All Profiles</h5>
            </div>

            <div className={`range ${lang == "en" ? "border-r" : "border-l"}`}>
              <input
                type="range"
                min="0"
                max="200"
                onChange={(e) => changeAllProfile(e.target.value)}
                id="range"
              />
              <div className="value_main value"></div>
            </div>

            <div className="info"></div>
          </div>
          {allProfiles.length > 0 &&
            allProfiles.map((item, i) => {
              return (
                <div className="main_range" key={i}>
                  <div
                    className={`text ${lang == "en" ? "border-r" : "border-l"}`}
                  >
                    <h5>{item.name}</h5>
                  </div>

                  <div
                    className={`range ${
                      lang == "en" ? "border-r" : "border-l"
                    }`}
                  >
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={item.bandwidth_multiplier}
                      onChange={(e) => handleChange(i, e.target.value)}
                      id="range"
                    />
                    <div className="value_main value">
                      {item.bandwidth_multiplier}
                    </div>
                  </div>

                  <div className="info">{`${convertFromBytes(
                    item.bandwidth_multiplier
                  )} / ${convertFromBytes(item.bandwidth_multiplier)}`}</div>
                </div>
              );
            })}
        </div>
      </MainSection>
      {loading && <Loader />}
    </div>
  );
};

export default ToolsBandwidthControl;
