import React from "react";

const Button = ({ children, variant = "primary", className = "", onClick, type = "button", ...props }) => {
  const baseClass = variant === "primary" ? "cta-primary" : "cta-secondary";
  
  return (
    <button
      type={type}
      className={`${baseClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
