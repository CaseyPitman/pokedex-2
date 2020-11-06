import React, { useEffect, useState } from "react";

// Dependencies
import axios from "axios";

// Components
import Button from "./Button";

// Styles
import pokemonList from "../CSS/pokemonList.css";
import useCall from "../Hooks/useCall";

import PokemonListItem from "./PokemonListItem";

const PokemonList = () => {
  // Component state
  const [pageNumber, setPageNumber] = useState(1);
  const [pageUrl, setPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [list, setList] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [prevBtnStatus, setPrevBtnStatus] = useState("inactive");
  const [nextBtnStatus, setNextBtnStatus] = useState("active");

  // Call for list of currently showing pokemon
  useEffect(() => {
    const getList = async () => {
      const { data } = await axios.get(pageUrl);
      setList(data.results);
      setPrevPageUrl(data.previous);
      setNextPageUrl(data.next);
    };
    getList();
  }, [pageUrl]);

  //Map the list to make the PokemonListItems for display
  useEffect(() => {
    const curItems = list.map(pokemon => {
      console.log("list");
      console.log(pokemon);
      return (
        <PokemonListItem
          key={pokemon.name}
          name={pokemon.name}
          detailsUrl={pokemon.url}
        />
      );
    });

    setListItems(curItems);
  }, [list]);

  const changePage = dir => {
    console.log(dir);
    //Set page number

    //Limit to a certain page (52?)
    if (dir === "next" && pageNumber === 50) {
      return;
    }

    if (dir === "previous" && pageNumber !== 1) {
      setPageNumber(pageNumber - 1);
      setPageUrl(prevPageUrl);
    }

    if (pageNumber === 2) {
      setPrevBtnStatus("inactive");
    }

    if (dir === "next") {
      setPageNumber(pageNumber + 1);
      setPageUrl(nextPageUrl);
      setPrevBtnStatus("active");
    }

    // TODO

    //Set conditional styling on the buttons to negate inactives

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
        />

        <h3 className='list-page-number'>Page {pageNumber} of 50</h3>

        <Button
          type='right'
          onClick={e => changePage("next")}
          status={nextBtnStatus}
        />
      </div>
    </div>
  );
};

export default PokemonList;
