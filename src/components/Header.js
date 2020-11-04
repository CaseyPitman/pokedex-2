import React from "react";

// Components
import Search from "./Search";
import FilterType from "./FilterType";

// Assets
import headerImg from "../img/starter-pokemon.jpg";

// Styles
import global from "../CSS/global.css";
import header from "../CSS/header.css";

const Header = (props) => {
  return (
    <div className='banner'>
      <h1 className = 'banner-headline'>Pokédex</h1>
      <img
        className='banner-img'
        src={headerImg}
        alt='Bulbasaur, Charmander, and Squirtle looking at a Pokédex.'
      />
      <div className='banner-inputs-container'>
        <div className='banner-inputs'>
          <FilterType changeListType = {props.changeListType}/>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
