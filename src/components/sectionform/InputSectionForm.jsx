const InputSectionForm = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  classes,
  id,
  required = false,
  min = null,
  max = null,
}) => {
  return (
    <div className={`input_item ${classes}`}>
      <label htmlFor=""> {label} </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        id={id}
        required={required}
      />
    </div>
  );
};

export default InputSectionForm;
