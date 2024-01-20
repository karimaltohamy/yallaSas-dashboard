import React from "react";

const SwitchSectionForm = ({
  label,
  classes,
  onChange,
  value,
  options,
  id,
}) => {
  return (
    <div className={`input_switch ${classes}`}>
      <span>{label}</span>
      <input
        type="checkbox"
        value={value}
        onChange={(e) => onChange(e)}
        id={id}
      />
      <label htmlFor={id}>Toggle</label>
    </div>
  );
};

export default SwitchSectionForm;
