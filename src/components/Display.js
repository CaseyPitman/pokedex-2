import React from "react";

// Components
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";

const Display = props => {



  const makeModal = (pokemon) => {
    console.log(pokemon);


  }




  return (
    <div className='display'>
      <PokemonList pokemonListByType={props.pokemonListByType} makeModal = {makeModal}/>
      {/* <PokemonDetail /> */}
    </div>
  );
};

export default Display;
