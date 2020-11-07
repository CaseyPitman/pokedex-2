import React, { useState, useEffect } from "react";

// Dependencies
import axios from "axios";

// Assets
import pokeball from "../img/pokeball.png";

const PokemonListItem = props => {
  const [img, setImg] = useState(pokeball);
  const [name, setName] = useState("???");
  const [number, setNumber] = useState("?");

  // Calls for Pokemon image, number, and name to display on list.
  useEffect(() => {
    const getPokemon = async () => {
      const { data } = await axios.get(props.detailsUrl);

      if (data.sprites.front_default === null) {
        setImg(pokeball);
      } else {
        setImg(data.sprites.front_default);
      }
      setNumber(data.id);
      setName(data.name);
    };
    getPokemon();
  }, [props.detailsUrl]);

  const handleClick = () => {
    console.log(`${name} has been clicked`);
    console.log(props.detailsUrl);
  };

  return (
    <div className='pokemon-list-item' onClick={handleClick}>
      <img
        className='pokemon-list-item-img'
        src={img}
        alt={`Classic ${name} sprite.`}
      />
      <h4 className='pokemon-list-item-number'>{number}</h4>
      {/* Capitalize Pokemon name */}
      <h4 className='pokemon-list-item-name'>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h4>
    </div>
  );
};

export default PokemonListItem;
