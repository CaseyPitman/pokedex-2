// This component renders each pokemon to be displayed in currently selected list.

import React, { useState, useEffect } from "react";

// Dependencies
import axios from "axios";

// Assets (laoding image / placeholder image for pokemon with no image)
import pokeball from "../img/pokeball.png";

const PokemonListItem = props => {
  // Store the info to be dsplayed (set to defaults)
  const [img, setImg] = useState(pokeball);
  const [name, setName] = useState("Name?");
  const [number, setNumber] = useState("0");

  // Call for Pokemon image, number, and name to display on list.
  useEffect(() => {
    const source = axios.CancelToken.source();

    const getPokemon = async () => {
      try {
        const { data } = await axios.get(props.detailsUrl, {
          cancelToken: source.token,
        });
        // Set pokemon number
        setNumber(data.id);
        //If there is no available sprite image, use the pokeball placeholder
        if (data.sprites.front_default === null) {
          setImg(pokeball);
        }
        // If there is an available sprite, then store and display it.
        else {
          setImg(data.sprites.front_default);
        }
        // Set pokemon name
        setName(data.name);
      } catch (error) {
        if (axios.isCancel(error)) {
          //User cancels request
          console.log("Request canceled", error.message);
        } else {
          // Some other error.
          console.log("Something went wrong: ", error.message);
        }
      }
    };
    getPokemon();

    return () => {
      source.cancel();
    };
  }, [props.detailsUrl]);

  // User clicks a pokmeon to request detailed view
  const handleClick = () => {
    // Pass the detail url and the index from current list of pokemon displayed.
    props.makeModal(props.index);
  };

  return (
    <div className='pokemon-list-item' onClick={handleClick}>
      <img
        className='pokemon-list-item-img'
        src={img}
        alt={`Classic ${name} sprite.`}
      />
      <h4 className='pokemon-list-item-number'>{number}</h4>
      <h4 className='pokemon-list-item-name'>
        {/* Capitalize Pokemon name */}
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h4>
    </div>
  );
};

export default PokemonListItem;
