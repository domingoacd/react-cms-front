import React from "react";


const InputText = ({
  placeholder,
  icon,
  containerClasses,
  id,
  type = "text",
  required = false,
  onChange
}) => {
  return (
    <label
      htmlFor={id && id}
      className={`w-full max-w-sm flex items-center rounded-lg px-3 bg-white-tone ${
        containerClasses ? containerClasses : ""
      }`}
    >
      {icon ? <img src={icon} alt="" className="w-4 mr-4" /> : ""}
      <input
        id={id && id}
        name={id && id}
        type={type}
        placeholder={placeholder}
        className="w-full focus:outline-none h-10 bg-transparent"
        required={required}
        onChange={onChange && onChange}
      />
    </label>
  );
};

export default InputText;
