import React, { useState } from "react";

// Components
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";

import ReactModal from "react-modal";

import display from "../CSS/display.css";

ReactModal.setAppElement("#root");

const Display = props => {
  const [modalStatus, setModalStatus] = useState(false);

  const makeModal = pokemon => {
    console.log("click");
    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <div className='display'>
      <PokemonList
        pokemonListByType={props.pokemonListByType}
        makeModal={makeModal}
      />

      <ReactModal
        isOpen={modalStatus}
        overlayClassName='modal-overlay'
        className='modal-content-container'
        onRequestClose={closeModal}>
        <PokemonDetail />
      </ReactModal>
    </div>
  );
};

export default Display;
