import React, { useState, useEffect } from "react";
import axios from "axios";

// Styles
import header from "../CSS/header.css";

const FilterType = () => {
  const [types, setTypes] = useState([]);

  //Make call for list of types.
  useEffect(() => {
    const getTypes = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      setTypes(response.data.results);
    };
    getTypes();
  }, []);

  //Map call results to create options for dropdown selector.
  const typeOptions = types.map(({ name }) => {
    //Capitalize name for selector menu.
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return <option key={name}>{name}</option>;
  });

  return (
    <div className='filter-type'>
      <select className='input-field'>
        <option>Sort by Type</option>
        {typeOptions}
      </select>
    </div>
  );
};

export default FilterType;
