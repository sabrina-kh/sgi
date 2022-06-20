import React from "react";
import './auth.css'

const Input = ({ type, icon, placeholder, value, onChange, name, ...props }) => {
  return (
    <div className="input-container my-5">
      <i className={`fa fa-solid fa-2x fa-${icon} mx-5`} ></i>
      <input
        type={type}
        className="input-inside"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        
      />
    </div>
  );
};

export default Input;
