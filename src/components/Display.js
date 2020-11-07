import React, { useState } from "react";

// Components
import PokemonList from "./PokemonList";
import PokemonDetailModal from "./PokemonDetailModal";

import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const Display = props => {
  const [modalStatus, setModalStatus] = useState(false);

  const makeModal = pokemon => {
    console.log("click");
    setModalStatus(true);
  };

  return (
    <div className='display'>
      <PokemonList
        pokemonListByType={props.pokemonListByType}
        makeModal={makeModal}
      />

      <ReactModal isOpen={modalStatus}>Modal content goes here.</ReactModal>

      {/* <PokemonDetail /> */}
    </div>
  );
};

export default Display;
