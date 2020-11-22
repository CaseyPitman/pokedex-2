// This component is the parent to all various display children.

import React, { useState, useEffect, useRef } from "react";

// Dependencies
import axios from "axios";
import ReactModal from "react-modal";

// Styles
import "../CSS/display.css";

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
  //Open/close modal (boolean)
  const [modalStatus, setModalStatus] = useState(false);
  // Full List of pokemon
  const [pokemonList, setPokemonList] = useState([]);
  // Store the list of currently displayed pokemon (all, or a specific type);
  //MODAL NAV FLOWS FROM HERE
  const [displayList, setDisplayList] = useState([]);
  // Store current type of pokemon to be displayed
  const [curType, setCurType] = useState("all");
  //Store the current page number of the displayed list (for display & pagination)
  const [curPage] = useState(1);
  // Store the current starting currentListData[idx]
  const [curStartingIndex] = useState(0);
  // Store url to retrieve details for currently displayed pokemon details (modal)
  const [curPokemonDetailUrl, setCurPokemonDetailUrl] = useState("");
  // Index of currently displayed pokemon detail
  const [currentDetailIdx, setCurDetailIdx] = useState(null);
  // Store the currently visible display
  const [currentDisplay, setCurrentDisplay] = useState("normal");

  // Store list of all pokemon
  useEffect(() => {
    //There is not currently a list.
    if (pokemonList.length === 0) {
      setPokemonList(props.pokemonData);
    }
  }, [props.pokemonData, pokemonList.length]);

  // Make the current list to show
  useEffect(() => {
    const getPokemonToShow = async () => {
      // Shows all pokemon regardless of type
      if (curType === "all" || curType === "choose") {
        setDisplayList(pokemonList);
      }
      // Only shows pokemon of selected type. Call to pokeAPI
      else {
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

  // Set normal display on initialization
  useEffect(() => {
    setCurrentDisplay("normal");
  }, []);

  //Change display (normal or search error)
  const changeDisplay = changeTo => {
    setCurrentDisplay(changeTo);
    //Scroll to top of Display
    myRef.current.scrollIntoView();
  };

  // Change the type of pokemon you want to show.
  const changeListType = type => {
    // Show normal display (as opposed to error)
    if (currentDisplay !== "normal") {
      setCurrentDisplay("normal");
    }
    // Set type
    setCurType(type);
    //Close modal if open
    setModalStatus(false);
    //Scroll to display top
    myRef.current.scrollIntoView();
  };

  //Scrolls to top of Display on list page navigation
  const executeScroll = () => {
    myRef.current.scrollIntoView();
  };

  // Create modal to display pokemon details
  const makeModal = (index, navDir = "") => {
    // Navigate to previous pokemon
    if (navDir === "previous" && index > 0) {
      setCurPokemonDetailUrl(displayList[index - 1].url);
      setCurDetailIdx(index - 1);
    }
    // Navigate to next pokemon
    else if (navDir === "next" && index < displayList.length) {
      setCurPokemonDetailUrl(displayList[index + 1].url);
      setCurDetailIdx(index + 1);
    } else {
      //Set display from SearchError to Normal
      if (currentDisplay === "search error") {
        setCurrentDisplay("normal");
      }
      //Store Url of currently displayed pokemon
      setCurPokemonDetailUrl(displayList[index].url);
      // Store index of currently displayed pokemon
      setCurDetailIdx(index);
    }
    //Display modal
    setModalStatus(true);
  };

  // Closes pokmeonDetail modal
  const closeModal = () => {
    setModalStatus(false);
  };

  // Render error display page
  const searchErrorDisplay = (
    <div className='errorDisplay'>
      <SearchError changeDisplay={changeDisplay} />
    </div>
  );

  // Render normal display
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
