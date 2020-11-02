import React from "react";
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";



const Display = () => {
  return (
    <div className = 'display'>
      <PokemonList />
      {/* <PokemonDetail /> */}
    </div>
  );
};

export default Display;
