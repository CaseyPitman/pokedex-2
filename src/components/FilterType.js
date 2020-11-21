// This component renders the menu to filter by type of pokemon.

import React, { useState, useEffect } from "react";

// Dependencies
import axios from "axios";

// Styles
import header from "../CSS/header.css";

const FilterType = ({ changeListType, curType }) => {
  // Store all possible types of pokemon (retrieved at initialization)
  const [types, setTypes] = useState([]);

  // //Make call for list of all pokemon types.
  useEffect(() => {
    const getTypes = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        setTypes(response.data.results);
      } catch (error) {
        console.log("Something went wrong: ", error.message);
      }
    };

    getTypes();
  }, []);

  //Handles change in selector. Will pass type of pokemon to be filtered up to Display.
  const onChangeSelect = event => {
    changeListType(event.target.value);
  };

  // Map types create options for dropdown selector.
  const options = types.map(({ name }) => {
    return (
      // Render options with capitalized first letter
      <option key={name} value={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </option>
    );
  });

  return (
    <div className='filter-type'>
      <select className='input-field' value={curType} onChange={onChangeSelect}>
        <option key='all' value='all'>
          All Types
        </option>
        {/* Renders all options except last two (shadow and unknown - no contents) */}
        {options.slice(0, 18)}
      </select>
    </div>
  );
};

export default FilterType;
