import React, { useState, useEffect } from "react";
import axios from "axios";

// Styles
import header from "../CSS/header.css";

const FilterType = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const getTypes = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/type");

      // console.log(response.data.results);
      setTypes(response.data.results);
    };
    getTypes();
  }, []);

  const typeOptions = types.map(({name}) => <option key={name}>{name}</option>);

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
