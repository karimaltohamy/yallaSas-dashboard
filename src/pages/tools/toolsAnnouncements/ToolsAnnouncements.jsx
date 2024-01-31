import React, { useRef } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./toolsAnnouncements.scss";
import { Editor } from "@tinymce/tinymce-react";
import InputEditor from "../../../components/inputEditor/InputEditor";

const ToolsAnnouncements = () => {
  const editorRef = useRef(null);
  const log = (e) => {
    e.preventDefault();
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="m-[10px]">
      <MainSection
        title={"Announcements"}
        icon={<i className="fa-solid fa-bullhorn"></i>}
      >
        <div className="tools_announcements_form">
          <form action="" onSubmit={log}>
            <div className="row line">
              <div className="col-12 col-md-9">
                <div className="input_item">
                  <input
                    type="text"
                    placeholder="Email Subject"
                    aria-autocomplete="list"
                  />
                </div>
                <div className="input_item">
                  <InputEditor editorRef={editorRef} />
                </div>
                <div className="bottom">
                  <p>5 users selected</p>
                  <button className="btn_send">Send</button>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="input_item">
                  <select name="" id="">
                    <option value="">Email</option>
                    <option value="">Telegram</option>
                    <option value="">User Portal</option>
                  </select>
                </div>
                <div className="input_item">
                  <select name="" id="">
                    <option value="">All managers</option>
                    <option value="">Admin</option>
                    <option value="">Manager_1</option>
                    <option value="">Manager_2</option>
                    <option value="">Manager_3</option>
                  </select>
                </div>
                <div className="input_check">
                  <input type="checkbox" id="active_user" />
                  <label htmlFor="active_user">Active Users</label>
                </div>
                <div className="input_check">
                  <input type="checkbox" id="expired_users" />
                  <label htmlFor="expired_users">Expired Users</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </MainSection>
    </div>
  );
};

export default ToolsAnnouncements;
