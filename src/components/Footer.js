import React from "react";

// Assets
import growlithe from "../img/growlithe.jpg";
import squirtleGlasses from "../img/squirtle-glasses.png";

// Styles
import footer from "../CSS/footer.css";

const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer-img'>
          <img
            className='growlithe-footer-img'
            src={growlithe}
            alt='Growlithe leaping into the fray.'
          />
        </div>
        <div className='footer-text'>
          <h2>For Charlie</h2>
          <h3 className='copyright-text'>&copy; 2020 | Casey Pitman </h3>
        </div>
        <div className='footer-img'>
          <img
            className='squirtle-footer-img'
            src={squirtleGlasses}
            alt='Squirtle looking cool in his shades.'
          />
        </div>
  
    </div>
  );
};

export default Footer;
