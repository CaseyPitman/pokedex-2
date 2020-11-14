import React, { useEffect, useState } from "react";

// Dependencies
import axios from "axios";

// Components
import Button from "./Button";

// Styles
import pokemonList from "../CSS/pokemonList.css";

import PokemonListItem from "./PokemonListItem";

const PokemonList = props => {
  // Component state
  // const [pageNumber, setPageNumber] = useState(1);
  // const [pageUrl, setPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  // const [nextPageUrl, setNextPageUrl] = useState("");
  // const [prevPageUrl, setPrevPageUrl] = useState("");
  // const [list, setList] = useState([]);
  // const [listItems, setListItems] = useState([]);

  //Store current list to be displayed
  const [currentList, setCurrentList] = useState([]);
  const [pageNumber, setPageNumber] = useState(null);
  const [startIdx, setStartIdx] = useState(null);

  const [prevBtnStatus, setPrevBtnStatus] = useState("inactive");
  const [nextBtnStatus, setNextBtnStatus] = useState("active");

  // Set starting states
  useEffect(() => {
    setCurrentList(props.displayList);
    setPageNumber(props.curPage);
    setStartIdx(props.curStartingIndex);
  }, [props.displayList]);

  //Map the list to make the PokemonListItems for display

  // const curItems = list.map(pokemon => {
  //   return (
  //     <PokemonListItem
  //       key={pokemon.name}
  //       name={pokemon.name}
  //       detailsUrl={pokemon.url}
  //       makeModal={props.makeModal}
  //     />
  //   );
  // });

  const changePage = dir => {
    console.log(dir);
    //Set page number

    //Limit to 50 pages. Do not advance past page 50.
    //   if (dir === "next" && pageNumber === 50) {
    //     return;
    //   }

    //   //On page one, do not subtract if previous button clicked.
    //   if (dir === "previous" && pageNumber !== 1) {
    //     setPageNumber(pageNumber - 1);
    //     setPageUrl(prevPageUrl);
    //   }

    //   if (pageNumber === 2) {
    //     setPrevBtnStatus("inactive");
    //   }

    //   if (dir === "next") {
    //     setPageNumber(pageNumber + 1);
    //     setPageUrl(nextPageUrl);
    //     setPrevBtnStatus("active");
    //   }

    //   if (pageNumber === 49 && dir === "next") {
    //     setNextBtnStatus("inactive");
    //   } else {
    //     setNextBtnStatus("active");
    //   }

    //   // Todo : skip to page functionality?
  };

  return (
    <div className='pokemon-list'>
      <div className='grid-container'>
        {/* <PokemonListItem /> */}
        {/* {listItems} */}
      </div>
      <div className='pokemon-list-pagination'>
        <Button
          type='left'
          onClick={e => changePage("previous")}
          status={prevBtnStatus}
          parent='pokemonList'
        />

        <h3 className='list-page-number'>Page Number</h3>

        <Button
          type='right'
          onClick={e => changePage("next")}
          status={nextBtnStatus}
          parent='pokemonList'
        />
      </div>
    </div>
  );
};

export default PokemonList;
