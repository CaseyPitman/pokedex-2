import React, { useEffect, useState } from "react";

// Components
import Button from "./Button";

// Styles
import pokemonList from "../CSS/pokemonList.css";
import useCall from "../Hooks/useCall";

import PokemonListItem from "./PokemonListItem";

const PokemonList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageUrl, setPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");

  return (
    <div className='pokemon-list'>
      <div className='grid-container'>
        <PokemonListItem />
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
