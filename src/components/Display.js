import React, { useState, useEffect } from "react";

// Dependencies
import axios from "axios";
import ReactModal from "react-modal";

// Styles
import display from "../CSS/display.css";

// Components
// import PokemonList from "./PokemonList";

import PokemonDetail from "./PokemonDetail";
import SearchBar from "./SearchBar";


//React-Modal set up.
ReactModal.setAppElement("#root");

const Display = props => {
  const [modalStatus, setModalStatus] = useState(false);
  // Store the list off currently displayed pokemon (all, or a specific type);
  const [currentListData, setCurrentListData] = useState([]);
  // Store current type of pokemon to be displayed
  const [curType, setCurType] = useState('all');
  //Store the current page number of the displayed list (for display & pagination)
  const [curPage, setCurPage]= useState(1);


  //Set list of Pokemon to show.
  useEffect(() => {

    //Will display all pokemon, regardless of type.
    if (currentListData.length === 0 || curType === 'all') {
      setCurrentListData(props.pokemonData);
    } else if (curType !== 'all'){
      // const filteredPokemon = props.pokemonData.filter()
      console.log(`will display ${curType} type pokemon.`)
    }

  }, [props.pokemonData, curType]);





  // Change the type of pokemon you want to show. 

  const changeListType = type => {
  
    setCurType(type);
 
};



  // const [curPokemonDetailUrl, setCurPokemonDetailUrl] = useState("");
  // const [typeOfDisplay, setTypeOfDisplay] = useState("all"); // 'selected type'
  // const [displayedComponent, setDisplayedComponent] = useState(null);

  // const [listUrl, setListUrl] = useState("");
  // const [listByType, setListByType] = useState([]);

  // Call for list of pokemon in the requested type.
  // useEffect(() => {
  //   if (listUrl !== "") {
  //     const getPokemon = async () => {
  //       const response = await axios.get(listUrl);
  //       setListByType(response.data.pokemon);
  //       // console.log(response.data.pokemon);
  //     };
  //     getPokemon();
  //   }
  // }, [listUrl]);

  // also make a state for the type of list - type based or all. Send that down to Pokemon list to let it decide what type of list to make?

  // useEffect(() => {
  //   if (typeOfDisplay === "all") {
  //     //Show all pokemon
  //     setDisplayedComponent(
  //       <PokemonListAll
  //         pokemonListByType={props.pokemonListByType}
  //         makeModal={makeModal}
  //         typeOfDisplay={typeOfDisplay}
  //       />
  //     );
  //   } else if (typeOfDisplay === "selected type") {
  //     setDisplayedComponent(
  //       <PokemonListByType listByType={listByType} makeModal={makeModal} />
  //     );
  //   }
  // }, [typeOfDisplay, listByType]);

  // //url will go get all data on a specific type.
  

  const makeModal = pokemon => {
    // console.log(pokemon);
    // setCurPokemonDetailUrl(pokemon);
    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <div className='display'>
      <SearchBar
      changeListType={changeListType}
      />
      <div className='display-container'>
        {/* <PokemonList
          pokemonListByType={props.pokemonListByType}
          makeModal={makeModal}
          typeOfDisplay={typeOfDisplay}
        /> */}

        {/* {displayedComponent} */}

        <ReactModal
          isOpen={modalStatus}
          overlayClassName='modal-overlay'
          className='modal-content-container'
          onRequestClose={closeModal}>
          <PokemonDetail
            closeModal={closeModal}
            // curPokemonDetailUrl={curPokemonDetailUrl}
            makeModal={makeModal}
          />
        </ReactModal>
      </div>
    </div>
  );
};

export default Display;
