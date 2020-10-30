import React from "react";

const Button = (props) => {

// Props will be type of button - prev or next
// Button itself will be arrow icon depending on props.

  return (
    <div>
      <button>{props.type}</button>
    </div>
  );
};

export default Button;