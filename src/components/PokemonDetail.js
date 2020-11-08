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
      <i class="fas fa-times-circle"></i>
        <Button type='left active' />
        <div className = 'pokemon-detail-content-text'>
          <h2 className = 'pokemon-detail-content-text-number pokemon-detail-content-text-item'>7</h2>
          <h2 className = 'pokemon-detail-content-text-name pokemon-detail-content-text-item'>Squirtle</h2>
          {/* make type clickable */}
          <h3 className = 'pokemon-detail-content-text-type pokemon-detail-content-text-item'>Water Type</h3>
           <EvolutionChain />
        </div>
        <Button type='right active' />
      </div>
     
    </div>
  );
};

export default PokemonDetail;
