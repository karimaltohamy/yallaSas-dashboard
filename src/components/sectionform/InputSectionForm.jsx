const InputSectionForm = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  classes,
  id,
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
      />
    </div>
  );
};

export default InputSectionForm;
