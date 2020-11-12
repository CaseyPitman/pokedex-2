import React, { useState, useEffect } from "react";

import axios from "axios";

// Components
import PokemonListItem from "./PokemonListItem";
import Button from "./Button";

const PokemonListByType = props => {
  const [pokemon, setPokemon] = useState([]);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    setPokemon(props.listByType);
  }, [props.listByType]);

  //Map the list to make the PokemonListItems for display
  useEffect(() => {
    const curItems = props.listByType.map(cur=> {

      console.log(pokemon);
      return (
        <PokemonListItem
          key={cur.pokemon.name}
          name={cur.pokemon.name}
          detailsUrl={cur.pokemon.url}
          makeModal={props.makeModal}
        />
      );
    });

    setListItems(curItems);
  }, [pokemon]);

  return (
    <div className='pokemon-list'>
      <h1 className='pokemon-list-by-type-heading'>Type Name Here</h1>
      <div className='grid-container'>
        {/* <PokemonListItem /> */}
        {listItems}
      </div>
      <div className='pokemon-list-pagination'>
        <Button
          type='left'
          //  onClick={e => changePage("previous")}
          //  status={prevBtnStatus}
          parent='pokemonList'
        />

        <h3 className='list-page-number'>Page blank of blank</h3>

        <Button
          type='right'
          //  onClick={e => changePage("next")}
          //  status={nextBtnStatus}
          parent='pokemonList'
        />
      </div>
    </div>
  );
};

export default PokemonListByType;
