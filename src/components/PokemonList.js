import React, { useEffect, useState } from "react";

// Dependencies
import axios from "axios";

// Components
import Button from "./Button";

// Styles
import pokemonList from "../CSS/pokemonList.css";

import PokemonListItem from "./PokemonListItem";

const PokemonList = props => {

  //Store current list to be displayed
  const [currentList, setCurrentList] = useState([]); //modal nav

  const [pageNumber, setPageNumber] = useState(null);
  const [startIdx, setStartIdx] = useState(null);
  const [curTotalPages, setCurTotalPages] = useState(null);

  // Store list items
  const [listItems, setListItems] = useState([]);

  const [prevBtnStatus, setPrevBtnStatus] = useState("inactive");
  const [nextBtnStatus, setNextBtnStatus] = useState("active");

  // Set starting states
  useEffect(() => {
    setCurrentList(props.displayList);
    setPageNumber(props.curPage);
    setStartIdx(props.curStartingIndex);
  }, [props.displayList, props.curPage, props.curStartingIndex]);

  //Map the list to make the PokemonListItems for display
  useEffect(() => {
    //Limit to 15 per page
    let items = [];
    if (currentList.length !== 0) {
      for (let i = startIdx; i < startIdx + 15; i++) {
        if (currentList[i]) {
          items.push(currentList[i]);
        }
      }
      setCurTotalPages(Math.ceil(currentList.length / 15));
    } 
    // else if (currentList.length === 0){
    //   console.log('no pokemon of this type.')
    // }

    const curItems = items.map(pokemon => {
      return (
        <PokemonListItem
          key={pokemon.name}
          index={pokemon.idx}
          name={pokemon.name}
          detailsUrl={pokemon.url}
          makeModal={props.makeModal}
        />
      );
    });

    setListItems(curItems);
  }, [currentList, pageNumber]);

  //Maintain styles and functionality status of buttons.
  useEffect(() => {
    setPrevBtnStatus(pageNumber === 1 ? "inactive" : "active");
    setNextBtnStatus(pageNumber === curTotalPages ? "inactive" : "active");
  }, [pageNumber]);

  //Change page
  const changePage = dir => {
  
    if (dir === "next") {
      setPageNumber(pageNumber + 1);
      setStartIdx(startIdx + 15);
    }

    if (dir === "previous") {
      setPageNumber(pageNumber - 1);
      setStartIdx(startIdx - 15);
    }
    props.executeScroll();
  };

  return (
    <div className='pokemon-list'>
      <div className='grid-container'>
        {/* <PokemonListItem /> */}
        {listItems}
      </div>
      <div className='pokemon-list-pagination'>
        <Button
          type='left'
          onClick={e => changePage("previous")}
          status={prevBtnStatus}
          parent='pokemonList'
        />

        <h3 className='list-page-number'>
          Page {pageNumber} of {curTotalPages}
        </h3>

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
