import { Editor } from "@tinymce/tinymce-react";
import React, { Fragment } from "react";
import "./inputEditor.scss";

const InputEditor = ({ content, setContent }) => {
  const handleEditorChange = (content, editor) => {
    setContent(content);
  };
  return (
    <Fragment>
      <Editor
        apiKey="cpfuvu48b5fm64c2c9vliogjidtw4qp1mws7meludv62v7jd"
        onInit={(evt, editor) => (content = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={handleEditorChange}
      />
    </Fragment>
  );
};

export default InputEditor;
