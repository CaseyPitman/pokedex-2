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

  // Call for list of currently showing pokemon
  useEffect(() => {
    const getList = async () => {
      const { data } = await axios.get(pageUrl);
      setList(data.results);
      setPrevPageUrl(data.previous);
      setNextPageUrl(data.next);
    };
    getList();
  }, [pageUrl, pageNumber]);

  //Map the list to make the PokemonListItems for display
  useEffect(() => {
    const curItems = list.map(pokemon => {
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

    if (dir === "previous" && pageNumber !== 0) {
      setPageNumber(pageNumber - 1);
    } else if (dir === "next") {
      setPageNumber(pageNumber + 1);
    }


    //set page url to next or previous
  };

  return (
    <div className='pokemon-list'>
      <div className='grid-container'>
        {/* <PokemonListItem /> */}
        {listItems}
      </div>
      <div className='pokemon-list-pagination'>
        <Button type='left' onClick={e => changePage("previous")} />

        <h3 className='list-page-number'>Page {pageNumber} of 53</h3>

        <Button type='right' onClick={e => changePage("next")} />
      </div>
    </div>
  );
};

export default PokemonList;
