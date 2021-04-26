import React from "react";

const InputText = ({ placeholder, icon}) => {
    return (
        <label htmlFor="input-search" className="w-full max-w-sm flex items-center rounded-lg px-3 bg-white-tone">
            {icon ? <img src={icon} alt="" className="w-4 mr-4"/> : "" }
            <input id="input-search" name="input-search" type="text" placeholder={placeholder} className="max-w-sm focus:outline-none h-10 bg-transparent" />
        </label>
    );
}

export default InputText;