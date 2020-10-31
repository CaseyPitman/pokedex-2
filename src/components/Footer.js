import React from "react";

// Assets
import growlithe from "../img/growlithe.jpg";
import squirtleGlasses from "../img/squirtle-glasses.png";

// Styles
import footer from "../CSS/footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content-container'>
        <div className='footer-img-container'>
          <img
            className='footer-img growlithe-footer-img'
            src={growlithe}
            alt='Growlithe leaping into the fray.'
          />
        </div>

        <h2 className = 'footer-msg'>For Charlie</h2>

        <div className='footer-img-container'>
          <img
            className='footer-img squirtle-footer-img'
            src={squirtleGlasses}
            alt='Squirtle looking cool in his shades.'
          />
        </div>
      <h3 className='copyright-text'>&copy; 2020 | Casey Pitman</h3>
      </div>
    </div>
  );
};

export default Footer;
