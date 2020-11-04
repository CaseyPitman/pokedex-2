import React,{ useEffect, useState }from "react";

// Components
import Button from "./Button";

// Assets
import placeholder from "../img/placeholder-image.png";

// Styles
import pokemonList from "../CSS/pokemonList.css";
import useCall from "../Hooks/useCall";

const PokemonList = () => {



  return (
    <div className='pokemon-list'>
      <div className='grid-container'>





        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'>
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>

        <div className='pokemon-list-item'> 
          <img
            className='pokemon-list-item-img'
            src={placeholder}
            alt='pokemon art'
          />
          <h4 className='pokemon-list-item-number'>7</h4>
          <h4 className='pokemon-list-item-name'>Squirtle</h4>
        </div>
      </div>

      <div className='pokemon-list-pagination'>
        <Button type='left' />
        <ul className='pokemon-list-pagination-list'>
          <li className='pokemon-list-pagintion-list-item'>1</li>
          <li className='pokemon-list-pagintion-list-item'>2</li>
          <li className='pokemon-list-pagintion-list-item'>3</li>
          <li className='pokemon-list-pagintion-list-item'>4</li>
          <li className='pokemon-list-pagintion-list-item'>5</li>
        </ul>
        <Button type='right' />
      </div>
    </div>
  );
};

export default PokemonList;
