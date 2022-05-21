import React from "react";

const Button = ({ label, type, disabled, onClick }) => {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
