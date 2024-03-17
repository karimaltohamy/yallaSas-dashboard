import React, { useEffect, useRef, useState } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./toolsAnnouncements.scss";
import InputEditor from "../../../components/inputEditor/InputEditor";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";
import Swal from "sweetalert2";

const ToolsAnnouncements = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [mode, setMode] = useState("");
  const [managers, setManagers] = useState([]);
  const [manager, setManager] = useState("");
  const [userFilter, setUserFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [usersSelected, setUsersSelected] = useState(0);

  const handleChecked = (e, type) => {
    let value = e.target.checked;
    value && !userFilter.includes(type)
      ? setUserFilter((prev) => [...prev, type])
      : setUserFilter(userFilter.filter((item) => item != type));
  };

  const handleCount = async () => {
    try {
      const { data } = await apiAxios.post(`api/announcement/count`, {
        payload: encryptedData({
          text: body,
          mode,
          user_filter: userFilter,
          manager_id: manager,
          subject,
        }),
      });
      setUsersSelected(data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Announcement ?",
      text: "Send Announcement To Selected Users ?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.post(`api/announcement`, {
            payload: encryptedData({
              text: body,
              mode,
              user_filter: userFilter,
              manager_id: manager,
              subject,
            }),
          });
          toast.success("Successful operation");
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        } finally {
          setLoading(false);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiAxios.get("api/index/manager");
        setManagers(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    handleCount();
  }, [userFilter]);

  return (
    <div className="m-[10px]">
      <MainSection
        title={t("Announcements")}
        icon={<i className="fa-solid fa-bullhorn"></i>}
      >
        <div className="tools_announcements_form">
          <form onSubmit={handleSend}>
            <div className="row line">
              <div className="col-12 col-md-9">
                <div className="input_item">
                  {(mode == "1" || mode == "3") && (
                    <input
                      type="text"
                      placeholder={mode == "1" ? "Email Subject" : "Subject..."}
                      aria-autocomplete="list"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  )}
                </div>
                <div className="input_item">
                  <InputEditor content={body} setContent={setBody} />
                </div>
                <div className="bottom">
                  <p>{usersSelected} users selected</p>
                  <button className="btn_send">Send</button>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="input_item">
                  <select
                    name=""
                    id=""
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                  >
                    <option value="0">Sms</option>
                    <option value="1">Email</option>
                    <option value="2">Telegram</option>
                    <option value="3">User Portal && App</option>
                  </select>
                </div>
                <div className="input_item">
                  <select
                    value={manager}
                    onChange={(e) => setManager(e.target.value)}
                  >
                    <option value="">select manager</option>
                    {managers &&
                      managers.map((item, i) => (
                        <option value={item.id} key={i}>
                          {item.username}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="input_check">
                  <input
                    type="checkbox"
                    id="active_user"
                    onChange={(e) => handleChecked(e, "active")}
                  />
                  <label htmlFor="active_user">{"Active Users"}</label>
                </div>
                <div className="input_check">
                  <input
                    type="checkbox"
                    id="expired_users"
                    onChange={(e) => handleChecked(e, "expired")}
                  />
                  <label htmlFor="expired_users">{t("Expired Users")}</label>
                </div>
              </div>
            </div>
          </form>
        </div>
        {loading && <Loader />}
      </MainSection>
    </div>
  );
};

export default ToolsAnnouncements;
