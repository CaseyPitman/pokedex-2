import React from "react";

// Components
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";

const Display = props => {
  return (
    <div className='display'>
      <PokemonList pokemonListByType={props.pokemonListByType} />
      {/* <PokemonDetail /> */}
    </div>
  );
};

export default Display;
