import React from "react";

// Styles
import button from '../CSS/button.css'


const Button = ({ type }) => {




  return (
    <div>
      <i className={`nav-icon fas fa-arrow-alt-circle-${type}`}></i>
    </div>
  );
};

export default Button;
