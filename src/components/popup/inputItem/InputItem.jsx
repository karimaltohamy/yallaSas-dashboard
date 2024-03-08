import React from "react";

const InputItem = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  classes,
  id = null,
}) => {
  return (
    <div className={`input_item ${classes}`}>
      <label htmlFor=""> {label} </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        id={id && id}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputItem;
