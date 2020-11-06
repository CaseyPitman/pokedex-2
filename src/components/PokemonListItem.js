import React, { useState, useEffect } from "react";

// Components
import PokemonListItemType from "./PokemonListItemType";

// Dependencies
import axios from "axios";

// Assets
import pokeball from "../img/pokeball.png";

const PokemonListItem = props => {
  const [img, setImg] = useState(pokeball);
  const [name, setName] = useState("Pokemon");
  const [number, setNumber] = useState(" ");
  const [type, setType] = useState("Normal");

  // Calls for Pokemon image, number, and name to display on list.
  useEffect(() => {
    const getPokemon = async () => {
      const { data } = await axios.get(props.detailsUrl);

      setNumber(data.id);
      setName(data.name);
      setImg(data.sprites.front_default);
      setType(data.types);
    };
    getPokemon();
  }, [props.detailsUrl]);

  return (
    <div className='pokemon-list-item'>
      <img className='pokemon-list-item-img' src={img} alt='pokemon art' />
      <h4 className='pokemon-list-item-number'>{number}</h4>
      {/* Capitalize Pokemon name */}
      <h4 className='pokemon-list-item-name'>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h4>
      <ul className='pokemon-list-item-type'></ul>
    </div>
  );
};

export default PokemonListItem;
