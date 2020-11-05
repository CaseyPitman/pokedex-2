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
  }, [pageUrl]);

  //Map the list to make the PokemonListItems for display
  useEffect(() => {
    const curItems = list.map(pokemon => {
      return (<PokemonListItem key={pokemon.name} name={pokemon.name} detailsUrl = {pokemon.url}/>)
    });

    setListItems(curItems);
  }, [list]);

  return (
    <div className='pokemon-list'>
      <div className='grid-container'>
        {/* <PokemonListItem /> */}
        {listItems}

      </div>
      <div className='pokemon-list-pagination'>
        <Button type='left' />
        <h3 className='list-page-number'>Page 1</h3>
        <Button type='right' />
      </div>
    </div>
  );
};

export default PokemonList;
