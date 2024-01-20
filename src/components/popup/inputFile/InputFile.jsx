import React from "react";

const InputFile = ({ label, placeholder, value, onChange, classes }) => {
  return (
    <div className={`input_file ${classes}`}>
      <span>{label}</span>
      <label htmlFor={label}>
        <input
          type={"file"}
          id={label}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <i className="fa-regular fa-pen-to-square"></i>
      </label>
    </div>
  );
};

export default InputFile;
