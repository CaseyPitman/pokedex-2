import React from "react";

// Components
import Search from "./Search"
import FilterType from "./FilterType";

const SearchBar = (props) => {
  return (
    <div className='search-bar'>
      <div className='banner-inputs'>
        <FilterType changeListType={props.changeListType} curType = {props.curType}/>
        <Search pokemonList = {props.pokemonList}/>
      </div>
    </div>
  );
};

export default SearchBar;
