import React from "react";

const Input = ({ label, id, type = "text", placeholder, value, onChange, className = "", error, ...props }) => {
  const isTextarea = type === "textarea";
  const Component = isTextarea ? "textarea" : "input";
  
  return (
    <div className={`input-group ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <Component
        id={id}
        type={isTextarea ? undefined : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={isTextarea ? "glass-textarea" : "glass-input"}
        {...props}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default Input;
