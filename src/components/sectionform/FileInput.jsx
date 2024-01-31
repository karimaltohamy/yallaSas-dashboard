import React from "react";

const FileInput = ({ label, value, onChange, id }) => {
  return (
    <div class="input_file">
      <h6>{label}</h6>
      <label for="logo">
        <i class="fa-solid fa-image"></i>
      </label>
      <input type="file" class="d-none" id={id} onChange={(e) => onChange(e)} />
    </div>
  );
};

export default FileInput;
