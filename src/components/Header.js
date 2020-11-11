import React from "react";

// Assets
import headerImg from "../img/starter-pokemon.jpg";

// Styles
import global from "../CSS/global.css";
import header from "../CSS/header.css";

const Header = props => {
  return (
    <div className='banner'>
      <h1 className='banner-headline'>Pokédex</h1>
      <img
        className='banner-img'
        src={headerImg}
        alt='Bulbasaur, Charmander, and Squirtle looking at a Pokédex.'
      />
    </div>
  );
};

export default Header;
