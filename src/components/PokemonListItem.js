import React from "react";

const PokemonListItem = () => {


  return (
    <div className='pokemon-list-item'>
      <img
        className='pokemon-list-item-img'
        src={placeholder}
        alt='pokemon art'
      />
      <h4 className='pokemon-list-item-number'>7</h4>
      <h4 className='pokemon-list-item-name'>Squirtle</h4>
    </div>
  );
};


export default PokemonListItem;