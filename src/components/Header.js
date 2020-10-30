import React from "react";
import Search from "./Search";
import FilterType from "./FilterType";
import headerImg from "../img/starter-pokemon.jpg"


const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <img src = {headerImg} style = {{'max-width': '200px'}}/>
      <FilterType />
      <Search />
    </div>
  );
};

export default Header;
