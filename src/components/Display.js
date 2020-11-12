import React, { useState, useEffect } from "react";
import axios from 'axios'
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

  
  const [listUrl, setListUrl] = useState("");
  const [listByType, setListByType] = useState([]);

  // Call for list of pokemon in the requested type.
  useEffect(() => {
    if (listUrl !== "") {
      const getPokemon = async () => {
        const response = await axios.get(listUrl);
        setListByType(response.data.pokemon);
      };
      getPokemon();
    }
  }, [listUrl]);

  const changeListType = url => {
    setListUrl(url);
  };


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
      <SearchBar changeListType={changeListType} />
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
