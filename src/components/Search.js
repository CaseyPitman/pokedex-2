import React, { useEffect, useState } from "react";

// Dependencies
import Autosuggest from "react-autosuggest";

import theme from "../CSS/theme.css";

const Search = (props) => {
  // Store search term for controlled input.
  const [term, setTerm] = useState(""); //AKA Value
  const [suggestions, setSuggestions] = useState([]);

  // const family = [
  //   { name: "Casey" },
  //   { name: "Traci" },
  //   { name: "Charlie" },
  //   { name: "Lily Beth" },
  // ];



  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : props.pokemonList.filter(
          pokemon =>
            pokemon.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = suggestion => suggestion.name;

  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div className='auto-suggestions'>{suggestion.name}</div>
  );

  const onChange = (event, { newValue }) => {
    setTerm(newValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    placeholder: "Search Pokémon",
    value: term,
    onChange: onChange,
    // className: 'input-field'
  };

  const submitSearch = (event) => {
    event.preventDefault();
    console.log(`search submitted for term: ${term}`)



  }


  return (
    <div className='search-input'>

      <form onSubmit = {submitSearch}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          highlightFirstSuggestion={true}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </form>
    </div>
  );
};

export default Search;
