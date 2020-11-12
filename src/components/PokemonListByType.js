import React from "react";


import Button from './Button';

const PokemonListByType = () => {
  return (
    <div className='pokemon-list'>
       <h1 className = 'pokemon-list-by-type-heading'>Type Name Here</h1>
      <div className='grid-container'>
        {/* <PokemonListItem /> */}
        {/* {listItems} */}
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
