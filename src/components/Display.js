import React, { useState, useEffect, useRef } from "react";

// Dependencies
import axios from "axios";
import ReactModal from "react-modal";

// Styles
import display from "../CSS/display.css";

// Components
import PokemonList from "./PokemonList";
import SearchError from "./SearchError";
import PokemonDetail from "./PokemonDetail";
import SearchBar from "./SearchBar";

//React-Modal set up.
ReactModal.setAppElement("#root");

const Display = props => {
  //Ref for scroll to top of Display on nav click
  const myRef = useRef(null);

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

  const [currentDetailIdx, setCurDetailIdx] = useState(null);

  const [currentDisplay, setCurrentDisplay] = useState("normal");

  // Store list of all pokemon
  useEffect(() => {
    if (pokemonList.length === 0) {
      setPokemonList(props.pokemonData);
    }
  }, [props.pokemonData]);

  // Make the current list to show
  useEffect(() => {
    const getPokemonToShow = async () => {
      if (curType === "all" || curType === "default") {
        setDisplayList(pokemonList);
      } else {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/type/${curType}`
        );

        //Retrieve data from one level deeper to match format of "all" list.
        const pokemon = data.pokemon.map(cur => cur.pokemon);
        // Attach index for modal nav
        pokemon.forEach(cur => (cur.idx = pokemon.indexOf(cur)));

        setDisplayList(pokemon);
      }
    };
    getPokemonToShow();
  }, [pokemonList, curType]);

  // Set display on init
  useEffect(() => {
    setCurrentDisplay("normal");
  }, []);

  //Change display
  const changeDisplay = changeTo => {
    console.log(`change to ${changeTo}`);
    setCurrentDisplay(changeTo);
  };

  // Change the type of pokemon you want to show.
  const changeListType = type => {
    if (currentDisplay !== "normal") {
      setCurrentDisplay("normal");
    }
    setCurType(type);
    //Close modal if open
    setModalStatus(false);
  };

  //Scrolls to top of Display on list page navigation
  const executeScroll = () => {
    myRef.current.scrollIntoView();
  };

  // Create modal to display pokemon details
  const makeModal = (index, navDir = "") => {
    if (navDir === "previous" && index > 0) {
      setCurPokemonDetailUrl(displayList[index - 1].url);
      setCurDetailIdx(index - 1);
    } else if (navDir === "next" && index < displayList.length) {
      setCurPokemonDetailUrl(displayList[index + 1].url);
      setCurDetailIdx(index + 1);
    } else {
      setCurPokemonDetailUrl(displayList[index].url);
      setCurDetailIdx(index);
    }

    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
  };

  const searchErrorDisplay = (
    <div className='errorDisplay'>
      <SearchError changeDisplay={changeDisplay} />
    </div>
  );

  const normalDisplay = (
    <div className='no-error-display'>
      <h1 className='pokemon-type-headline'>
        {curType.charAt(0).toUpperCase() + curType.slice(1)} Pokémon
      </h1>
      <div className='display-container'>
        <PokemonList
          makeModal={makeModal}
          displayList={displayList}
          curPage={curPage}
          curStartingIndex={curStartingIndex}
          executeScroll={executeScroll}
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
            index={currentDetailIdx}
            changeListType={changeListType}
            numberInCurrentList={displayList.length}
          />
        </ReactModal>
      </div>
    </div>
  );

  //Sets curent display depending on display status
  const show = currentDisplay => {
    if (currentDisplay === "normal") {
      return normalDisplay;
    } else if (currentDisplay === "search error") {
      return searchErrorDisplay;
    }
  };

  return (
    <div className='display' ref={myRef}>
      <SearchBar
        changeListType={changeListType}
        changeDisplay={changeDisplay}
        curType={curType}
        pokemonList={pokemonList}
        makeModal={makeModal}
      />

      {show(currentDisplay)}
    </div>
  );
};

export default Display;
