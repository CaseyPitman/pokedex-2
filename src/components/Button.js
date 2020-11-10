import React from "react";

// Styles
import button from '../CSS/button.css'


const Button = (props) => {

  const handleClick = (parent) =>{
    props.onClick();
  }

  return (
    <div>
      <i className={`nav-icon fas fa-arrow-alt-circle-${props.type} ${props.status}`} onClick = {handleClick}></i>
    </div>
  );
};

export default Button;
