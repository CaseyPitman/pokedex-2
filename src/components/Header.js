import React from "react";

// Components
import Search from "./Search";
import FilterType from "./FilterType";

// Assets
import headerImg from "../img/starter-pokemon.jpg";

// Styles
import global from "../CSS/global.css"
import header from "../CSS/header.css";

const Header = () => {
  return (
    <div className='banner'>
      <h1>Charlie's Pokédex</h1>
      <img src={headerImg} style={{ "max-width": "200px" }} alt = 'Bulbasaur, Charmander, and Squirtle looking at a Pokédex.'/>
      <div className='banner-inputs'>
        <FilterType />
        <Search />
      </div>
    </div>
  );
};

export default Header;
