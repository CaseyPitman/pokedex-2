import React from "react";

const Button = ({ type }) => {

  return (
    <div>
      <i className={`nav-icon fas fa-arrow-alt-circle-${type}`}></i>
    </div>
  );
};

export default Button;
