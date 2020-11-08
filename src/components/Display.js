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
        shouldFocusAfterRender={
          true
        }
        onRequestClose={
          closeModal
        }
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={
          true
          /* Boolean indicating if pressing the esc key should close the modal
           Note: By disabling the esc key from closing the modal
           you may introduce an accessibility issue. */
        }
        shouldReturnFocusAfterClose={
          true
          /* Boolean indicating if the modal should restore focus to the element
           that had focus prior to its display. */
        }>
        <PokemonDetail />
      </ReactModal>

      {/* <PokemonDetail /> */}
    </div>
  );
};

export default Display;
