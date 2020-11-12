import React, { useState, useEffect } from "react";
import axios from "axios";
// Components
import PokemonListAll from "./PokemonListAll";
import PokemonListByType from "./PokemonListByType";
import PokemonDetail from "./PokemonDetail";
import SearchBar from "./SearchBar";

import ReactModal from "react-modal";

import display from "../CSS/display.css";

ReactModal.setAppElement("#root");

const Display = props => {
  const [modalStatus, setModalStatus] = useState(false);
  const [curPokemonDetailUrl, setCurPokemonDetailUrl] = useState("");
  const [typeOfDisplay, setTypeOfDisplay] = useState("all"); // 'selected type'
  const [displayedComponent, setDisplayedComponent] = useState(null);

  const [listUrl, setListUrl] = useState("");
  const [listByType, setListByType] = useState([]);

  // Call for list of pokemon in the requested type.
  useEffect(() => {
    if (listUrl !== "") {
      const getPokemon = async () => {
        const response = await axios.get(listUrl);
        setListByType(response.data.pokemon);
        console.log(response.data.pokemon);
      };
      getPokemon();
    }
  }, [listUrl]);

  // also make a state for the type of list - type based or all. Send that down to Pokemon list to let it decide what type of list to make?

  useEffect(() => {
    if (typeOfDisplay === "all") {
      //Show all pokemon
      setDisplayedComponent(
        <PokemonListAll
          pokemonListByType={props.pokemonListByType}
          makeModal={makeModal}
          typeOfDisplay={typeOfDisplay}
        />
      );
    } else if (typeOfDisplay === "selected type") {
      setDisplayedComponent(<PokemonListByType listByType={listByType} />);
    }
  }, [typeOfDisplay, listByType]);

  //url will go get all data on a specific type.
  const changeListType = url => {
    if (url === "all") {
      setTypeOfDisplay("all");
    } else {
      setListUrl(url);
      setTypeOfDisplay("selected type");
    }
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
        {/* <PokemonList
          pokemonListByType={props.pokemonListByType}
          makeModal={makeModal}
          typeOfDisplay={typeOfDisplay}
        /> */}
        {displayedComponent}

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
