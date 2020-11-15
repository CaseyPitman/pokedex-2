import React, { useState, useEffect } from "react";

// Dependencies
import axios from "axios";
import ReactModal from "react-modal";

// Styles
import display from "../CSS/display.css";

// Components
import PokemonList from "./PokemonList";

import PokemonDetail from "./PokemonDetail";
import SearchBar from "./SearchBar";

//React-Modal set up.
ReactModal.setAppElement("#root");

const Display = props => {
  const [modalStatus, setModalStatus] = useState(false);

  // Full List of pokemon
  const [pokemonList, setPokemonList] = useState([]);

  // Store the list of currently displayed pokemon (all, or a specific type);
  //MODAL NAV FLOWS FROM HERE
  const [displayList, setDisplayList] = useState([]);      

  // Store current type of pokemon to be displayed
  const [curType, setCurType] = useState("all");

  //Store the current page number of the displayed list (for display & pagination)
  const [curPage, setCurPage] = useState(1);

  // Store the current starting currentListData[idx]
  const [curStartingIndex, setCurStartingIndex] = useState(0);

  // Store url to retrieve details for currently displayed pokemon details (modal)
  const [curPokemonDetailUrl, setCurPokemonDetailUrl] = useState("");

  // Store list of all pokemon
  useEffect(() => {
    if (pokemonList.length === 0) {
      setPokemonList(props.pokemonData);
    }
  }, [props.pokemonData]);

  // Make the current list to show
  useEffect(() => {
    const getPokemonToShow = async () => {
      if (curType === "all") {
        setDisplayList(pokemonList);
      } else {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/type/${curType}`
        );

        //Retrieve data from one level deeper to match format of "all" list.
        const pokemon = data.pokemon.map(cur => cur.pokemon);
          // Attach index for modal nav
          pokemon.forEach(cur => cur.idx = pokemon.indexOf(cur));

        setDisplayList(pokemon);
      }
    };
    getPokemonToShow();
  }, [pokemonList, curType]);

  // Change the type of pokemon you want to show.
  const changeListType = type => {
    setCurType(type);
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
      <h1 className='pokemon-type-headline'>
        {" "}
        {curType.charAt(0).toUpperCase() + curType.slice(1)} Pokémon{" "}
      </h1>
      <div className='display-container'>
        <PokemonList
          makeModal={makeModal}
          displayList={displayList}
          curPage={curPage}
          curStartingIndex={curStartingIndex}
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
