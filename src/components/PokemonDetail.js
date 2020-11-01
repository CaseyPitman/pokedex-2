import React from "react";

// Assets
import placeholder from "../img/placeholder-image.png";

// Components
import Button from "./Button";
import EvolutionChain from "./EvolutionChain";

// Styles
import pokemonDetail from "../CSS/pokemonDetail.css";

const PokemonDetail = () => {
  return (
    <div className='pokemon-detail'>
      <div className='pokemon-detail-container'>
        <Button type='left' />
        <div>
          <img
            src={placeholder}
            alt='placeholder pic'
            style={{ width: "200px" }}
          />
          <h2>number Name</h2>
          <h3>type</h3>
          <EvolutionChain />
        </div>
        <Button type='right' />
      </div>
    </div>
  );
};

export default PokemonDetail;
