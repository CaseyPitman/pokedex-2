import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  


  return (
    <div className='search-input'>
      <form>
        <input
          className='input-field'
          type='text'
          value={term}
          onChange={event => setTerm(event.target.value)}
          placeholder='Search for Pokémon'></input>
      </form>
    </div>
  );
};

export default Search;
