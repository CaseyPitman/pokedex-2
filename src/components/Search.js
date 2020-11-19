import React, { useEffect, useState } from "react";

// Dependencies
import Autosuggest from "react-autosuggest";

import theme from "../CSS/theme.css";

const Search = props => {
  // Store search term for controlled input.
  const [term, setTerm] = useState(""); //AKA Value
  const [searchIndex, setSearchIndex] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

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

  // When suggestion is clicked, Autosuggest stores suggestion as value
  const getSuggestionValue = suggestion => suggestion.name;

  // Render suggestions (capitialized)
  const renderSuggestion = suggestion => (
    <div className='auto-suggestions' index={suggestion.idx}>
      {suggestion.name.charAt(0).toUpperCase() + suggestion.name.slice(1)}
    </div>
  );

  const onChange = (event, { newValue }) => {
    setTerm(newValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
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
  };

  const submitSearch = async event => {
    event.preventDefault();

    //Retrieve index of the selected pokemon
    let index = await props.pokemonList.findIndex(
      pokemon => pokemon.name === term
    );
    setSearchIndex(index);
    props.makeModal(index);
    onSuggestionsClearRequested();
    clearInput();
  };

  //Clear input upon opening a modal.
  const clearInput = () => {
    setTerm("");
  };

  return (
    <div className='search-input'>
      <form onSubmit={submitSearch}>
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
