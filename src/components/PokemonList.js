import React, { useEffect, useState } from "react";

// Components
import Button from "./Button";

// Styles
import pokemonList from "../CSS/pokemonList.css";
import useCall from "../Hooks/useCall";

import PokemonListItem from "./PokemonListItem";

const PokemonList = () => {
  const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  return (
    <div className='pokemon-list'>
      <div className='grid-container'>
        <PokemonListItem />
      </div>
      <div className='pokemon-list-pagination'>
        <Button type='left' />

        <Button type='right' />
      </div>
    </div>
  );
};

export default PokemonList;
