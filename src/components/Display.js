import React, { useState } from "react";

// Components
import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";
import SearchBar from "./SearchBar";

import ReactModal from "react-modal";

import display from "../CSS/display.css";

ReactModal.setAppElement("#root");

const Display = props => {
  const [modalStatus, setModalStatus] = useState(false);
  const [curPokemonDetailUrl, setCurPokemonDetailUrl] = useState("");

  const makeModal = pokemon => {
    // console.log(pokemon);
    setCurPokemonDetailUrl(pokemon);
    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <div className='display'>
      <SearchBar changeListType={props.changeListType} />
      <div className='display-container'>
        <PokemonList
          pokemonListByType={props.pokemonListByType}
          makeModal={makeModal}
        />

        <ReactModal
          isOpen={modalStatus}
          overlayClassName='modal-overlay'
          className='modal-content-container'
          onRequestClose={closeModal}>
          <PokemonDetail
            closeModal={closeModal}
            curPokemonDetailUrl={curPokemonDetailUrl}
            makeModal={makeModal}
          />
        </ReactModal>
      </div>
    </div>
  );
};

export default Display;
