import React, { useState, useEffect } from "react";
import axios from "axios";

// Styles
import header from "../CSS/header.css";

const FilterType = ({ changeListType, curType }) => {
  const [types, setTypes] = useState([]);
  const [typeUrl, setTypeUrl] = useState("");
  const [currentType, setCurrentType] = ""
  // //Make call for list of types.
  useEffect(() => {
    const getTypes = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        // console.log("types");
        // console.log(response.data);
        setTypes(response.data.results);
      } catch (error) {
        console.log("Something went wrong: ", error.message);
      }
    };

    getTypes();
  }, []);

  //Handles change in selector. Will pass type of pokemon to be filtered up to Display.
  const onChangeSelect = event => {
    console.log(`selected type: ${event.target.value}`);
    changeListType(event.target.value);
  };



  // Map call results to create options for dropdown selector.
  const options = types.map(({ name }) => {

    return (
      <option key={name} value={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </option>
    );
  });



  return (
    <div className='filter-type'>
      <select className='input-field' value = {curType} onChange={onChangeSelect} >
        <option key='default' value='all'>
          Sort by Type
        </option>
        <option key='all' value='all'>
          All Pokémon
        </option>

        {options.slice(0,18)}
      </select>
    </div>
  );
};

export default FilterType;
