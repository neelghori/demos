import React from "react";

const Button = ({ label, type, disabled, onClick }) => {
  return (
    <div>
      <button type={type} disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
