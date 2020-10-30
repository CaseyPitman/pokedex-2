import React from "react";
import Search from "./Search";
import FilterType from "./FilterType";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <FilterType />
      <Search />
    </div>
  );
};

export default Header;
