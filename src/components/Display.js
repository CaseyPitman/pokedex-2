import React, { useState } from "react";

// Components
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";

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

      <ReactModal isOpen={modalStatus}>
        <PokemonDetail />
      </ReactModal>

      {/* <PokemonDetail /> */}
    </div>
  );
};

export default Display;
