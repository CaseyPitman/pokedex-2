import React, { useState } from "react";



const Search = () => {

 const [term, setTerm] = useState('');




  return (
    <div className='search-input'>
      <input
        className='input-field'
        type='text'
        value = {term}
        onChange = {(event) => setTerm(event.target.value)}
        placeholder='Search for Pokémon'></input>
    </div>
  );
};

export default Search;
