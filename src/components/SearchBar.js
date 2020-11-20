import React from "react";


import searchBar from "../CSS/searchBar.css";


// Components
import Search from "./Search"
import FilterType from "./FilterType";

const SearchBar = (props) => {
  return (
    <div className='search-bar'>
      <div className='banner-inputs'>
        <FilterType changeListType={props.changeListType} curType = {props.curType}/>
        <Search pokemonList = {props.pokemonList} makeModal = {props.makeModal} changeDisplay = {props.changeDisplay}/>
      </div>
    </div>
  );
};

export default SearchBar;
