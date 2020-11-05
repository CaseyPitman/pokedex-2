import React, { useState, useEffect } from "react";

// Should I make this an unordered list instead?

const PokemonListItemType = props => {



// map props type to generate list items


  return (
    <ul className='pokemon-list-item-type'>
      <li className='pokemon-list-item-type-text'>Normal</li>
    </ul>
  );
};

export default PokemonListItemType;
