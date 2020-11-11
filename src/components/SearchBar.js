import React from "react";

const SearchBar = () => {
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