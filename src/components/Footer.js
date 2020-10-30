import React from "react";
import pokeball from "../img/pokeball.png"

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
      <img src = {pokeball} style = {{'max-width': '100px'}}/>
      <h3>&copy; 2020 | Casey Pitman </h3>
    </div>
  );
};

export default Footer;
