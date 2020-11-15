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
    const source = axios.CancelToken.source();

    const getPokemon = async () => {
      try {
        const { data } = await axios.get(props.detailsUrl, {
          cancelToken: source.token,
        });

        setNumber(data.id);

        if (data.sprites.front_default === null) {
          setImg(pokeball);
        } else {
          setImg(data.sprites.front_default);
        }
        setName(data.name);
      } catch (error) {
        if (axios.isCancel(error)) {
          //User cancels request
          console.log("Request canceled", error.message);
        } else {
          console.log("Something went wrong: ", error.message);
        }
      }
    };
    getPokemon();

    return () => {
      source.cancel();
    };
  }, [props.detailsUrl]);

  const handleClick = () => {
    // pass the detail url and the index from current list of pokemon displayed.

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
      {/* Capitalize Pokemon name */}
      <h4 className='pokemon-list-item-name'>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h4>
    </div>
  );
};

export default PokemonListItem;
