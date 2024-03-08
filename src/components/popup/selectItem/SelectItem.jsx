import React from "react";

const SelectItem = ({ label, classes, onChange, value, options }) => {
  return (
    <div className={`input_item ${classes}`}>
      <label htmlFor=""> {label} </label>

      <select
        name=""
        id=""
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{label}</option>
        {options &&
          options.map((item, i) => (
            <option value={item.value ? item.value : item.id} key={i}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectItem;
