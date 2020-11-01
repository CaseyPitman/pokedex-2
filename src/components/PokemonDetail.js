import React from "react";

// Assets
import placeholder from "../img/placeholder-image.png";

// Components
import Button from "./Button";
import EvolutionChain from "./EvolutionChain";

// Styles
import display from "../CSS/display.css";

const PokemonDetail = () => {
  return (
    <div className='pokemon-detail'>

      <img className = 'pokemon-detail-img' src={placeholder} alt='placeholder pic'  />


      <div className='pokemon-detail-content'>
        <Button type='left' />
        <div>
          <h2>7</h2>
          <h2>Squirtle</h2>
          {/* make type clickable */}
          <h3>Water</h3>
           <EvolutionChain />
        </div>
        <Button type='right' />
      </div>
     
    </div>
  );
};

export default PokemonDetail;
