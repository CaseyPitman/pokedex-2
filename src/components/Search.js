import React, { useEffect, useState } from "react";

// Dependencies
import Autosuggest from "react-autosuggest";

const Search = () => {
  // Store search term for controlled input.
  const [term, setTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions([
      { name: "Casey" },
      { name: "Traci" },
      { name: "Charlie" },
      { name: "Lily Beth" },
    ]);
  }, []);

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

    // <Autosuggest suggestions={suggestions} />
  );
};

export default Search;
