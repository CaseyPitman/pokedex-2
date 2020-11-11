import React from "react";

// Components
import Search from "./FilterType"
import FilterType from "./FilterType";

const SearchBar = (props) => {
  return (
    <div className='banner-inputs-container'>
      <div className='banner-inputs'>
        <FilterType changeListType={props.changeListType} />
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
