import React from "react";

// Styles
import "../CSS/button.css";

const Button = props => {
  // Handle pagination button clicks.
  const handleClick = () => {
    // No more pages to be viewed.
    if (props.status === "inactive") {
      return;
    }
    props.onClick();
  };

  return (
    <div>
      <i
        className={`nav-icon fas fa-arrow-alt-circle-${props.type} ${props.status}`}
        onClick={handleClick}></i>
    </div>
  );
};

export default Button;
