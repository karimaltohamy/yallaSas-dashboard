import React from "react";

const SelectSectionForm = ({
  label,
  classes,
  onChange,
  value,
  options,
  id,
  input = false,
  type,
  placeholderInput,
  valueInput,
  onChangeInput,
  idInput,
}) => {
  return (
    <div className={`input_item ${classes}`}>
      <label htmlFor=""> {label} </label>
      {input && (
        <input
          type={type}
          placeholder={placeholderInput}
          value={valueInput}
          onChange={(e) => onChangeInput(e)}
          id={idInput}
        />
      )}
      <select value={value} onChange={(e) => onChange(e)} id={id}>
        <option value="">{label}</option>
        {options &&
          options.map((item, i) => (
            <option value={item.value} key={i}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectSectionForm;
