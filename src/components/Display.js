import React from "react";

// Components
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";


import ReactModal from 'react-modal';

const Display = props => {



  const makeModal = (pokemon) => {
    console.log(pokemon);


  }




  return (
    <div className='display'>
      <PokemonList pokemonListByType={props.pokemonListByType} makeModal = {makeModal}/>

      <ReactModal/>
      {/* <PokemonDetail /> */}
    </div>
  );
};

export default Display;
