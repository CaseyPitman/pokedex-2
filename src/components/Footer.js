import React from "react";

// Assets
import growlithe from "../img/growlithe.jpg";
import squirtleGlasses from "../img/squirtle-glasses.png"

// Styles
import footer from "../CSS/footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <img
        className='footer-img'
        src={growlithe}
        style={{ "max-width": "100px" }}
      />
      <img
        className='footer-img'
        src={squirtleGlasses}
        style={{ "max-width": "100px" }}
      />
      <div className='footer-text'>
        <h3 className='copyright-text'>&copy; 2020 | Casey Pitman </h3>
      </div>
    </div>
  );
};

export default Footer;
