import React, { useRef } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./toolsAnnouncements.scss";
import { Editor } from "@tinymce/tinymce-react";

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
                  <Editor
                    apiKey="your-api-key"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
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
