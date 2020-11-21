//This component renders the individual pokemon search input and handles autosuggest features.

import React, { useState } from "react";

// Dependencies
import Autosuggest from "react-autosuggest";


const Search = props => {
  // Store search term for controlled input.
  const [term, setTerm] = useState(""); //AKA Value
  // Store current search suggestions
  const [suggestions, setSuggestions] = useState([]);

  // Calculate suggestions for any given input value.
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

  // Update term as user types
  const onChange = (event, { newValue }) => {
    setTerm(newValue);
  };

  // Autosuggest will call this function to update suggestions.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Autosuggest will call this function to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Autosuggest will pass these props to the input.
  const inputProps = {
    placeholder: "Search Pokémon",
    value: term,
    onChange: onChange,
  };

  // Handles user submission of search term
  const submitSearch = async event => {
    event.preventDefault();

    //Retrieve index of the selected pokemon
    let index = await props.pokemonList.findIndex(
      pokemon => pokemon.name === term
    );
    //User inputs a non-existent pokemon
    if (index === -1) {
      // Tells display to show error message to user
      props.changeDisplay("search error");
    } else {
      //Displays PokemonDetail modal for searched pokemon
      props.makeModal(index);
    }
    // Clear suggestions
    onSuggestionsClearRequested();
    // Clear search input field on successful search and modal render
    clearInput();
  };

  //Clear input upon opening a modal.
  const clearInput = () => {
    setTerm("");
  };

  return (
    <div className='search-input'>
      <form onSubmit={submitSearch} className='search-input-form'>
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
