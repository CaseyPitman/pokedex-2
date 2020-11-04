import React, { useState, useEffect } from "react";
import axios from "axios";

// Hooks
import useCall from "../Hooks/useCall";

// Styles
import header from "../CSS/header.css";

const FilterType = (props) => {
  const [types, setTypes] = useState([]);

  //Make call for list of types.
  useEffect(() => {
    const getTypes = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/type");

      setTypes(response.data.results);
    };
    getTypes();
  }, []);

  //Handles change in selector.
  const onChangeSelect = event => {
    props.changeListType(event.target.value);
  };

  // Map call results to create options for dropdown selector.
  const typeOptions = types.map(({ name, url }) => {
    //Capitalize name for selector menu.
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return (
      <option key={name} value={url}>
        {name}
      </option>
    );
  });

  return (
    <div className='filter-type'>
      <select className='input-field' onChange={onChangeSelect}>
        <option>Sort by Type</option>
        {typeOptions}
      </select>
    </div>
  );
};

export default FilterType;
