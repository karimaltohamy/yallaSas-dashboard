import React, { useEffect, useRef, useState } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import InputEditor from "../../../components/inputEditor/InputEditor";
import { t } from "i18next";
import "./settingsEmailTemplates.scss";
import apiAxios from "../../../utils/apiAxios";
import { toast } from "react-toastify";
import { encryptedData } from "../../../utils/utilsFunctions";
import Swal from "sweetalert2";
import Loader from "../../../components/loader/Loader";

const SettingsEmailTemplates = () => {
  const [loading, setLoading] = useState(false);
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const getTemplates = async () => {
    try {
      const { data } = await apiAxios.get("api/emailTemplate");
      setTemplates(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTemplate = async () => {
    Swal.fire({
      title: "Template Name",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const templateName = result.value;
        try {
          const { data } = await apiAxios.post("api/emailTemplate", {
            payload: encryptedData({ name: templateName }),
          });
          toast.success("Successfull Add");
          getTemplates();
          getTemplate(data.data);
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.message);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  const getTemplate = async (templateId) => {
    try {
      const { data } = await apiAxios.get(`api/emailTemplate/${templateId}`);
      setTemplate(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveTemplate = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.put(`api/emailTemplate/${template.id}`, {
        payload: encryptedData({
          id: template.id,
          name: template.name,
          subject,
          body,
          site_id: template.site_id,
          updated_at: template.updated_at,
          created_at: template.created_at,
          created_by: template.created_by,
        }),
      });
      toast.success("Successfull Save");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTemplate = (e) => {
    Swal.fire({
      title: "Delete Template?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiAxios.delete(`api/emailTemplate/${template.id}`);

          toast.success("Successful Delete");
          setLoading(false);
          getTemplates();
          setTemplate(null);
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  useEffect(() => {
    getTemplates();
  }, []);

  return (
    <div className="settings_email_templates m-[10px]">
      <div className="dashboard_manager_content">
        <div className="selected_dashboard">
          <form action="">
            <select
              name=""
              id="select-dashboard"
              value={template}
              onChange={(e) => getTemplate(e.target.value)}
            >
              <option value="">select template</option>
              {templates &&
                templates.map((item, i) => (
                  <option key={i} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </form>
          <div className="utils_form">
            <button className="btn_utils btn_add" onClick={addTemplate}>
              <i className="fa-solid fa-plus"></i>
            </button>
            {template && (
              <button
                className="btn_utils btn_save"
                onClick={handleSaveTemplate}
              >
                <i className="fa-solid fa-floppy-disk"></i>
              </button>
            )}
            {template && (
              <button
                className="btn_utils btn_remove"
                onClick={handleDeleteTemplate}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            )}
          </div>
        </div>

        {template && (
          <MainSection
            title={t("Template Editor")}
            icon={<i className="fa-regular fa-eye"></i>}
          >
            <div className="form_tamplate">
              <div className="input_item">
                <input
                  type="text"
                  placeholder={t("Email subject")}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="input_item">
                <InputEditor content={body} setContent={setBody} />
              </div>
            </div>
          </MainSection>
        )}
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default SettingsEmailTemplates;
