import React from "react";

const FileInput = ({ label, value, onChange, id }) => {
  return (
    <div className="input_file">
      <h6>{label}</h6>
      <label htmlFor={id}>
        <i className="fa-solid fa-image"></i>
      </label>
      <input
        type="file"
        className="d-none"
        id={id}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default FileInput;
