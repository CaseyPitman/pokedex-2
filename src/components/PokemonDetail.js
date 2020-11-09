import React, { useState, useEffect } from "react";

// Dependencies
import axios from "axios";

// Assets
import placeholder from "../img/placeholder-image.png";

// Components
import Button from "./Button";
import EvolutionChain from "./EvolutionChain";

// Styles
import display from "../CSS/display.css";

const PokemonDetail = props => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [number, setNumber] = useState(null);
  const [name, setName] = useState("?");
  const [types, setTypes] = useState([]);
  const [displayTypes, setDisplayTypes] = useState([]);

  // API call for individual pokemon details.
  useEffect(() => {
    const getDetails = async () => {
      const { data } = await axios.get(props.curPokemonDetailUrl);
      console.log(data);
      setImageSrc(data.sprites.front_default);
      setNumber(data.id);
      setName(data.name);
      setTypes(data.types);
    };
    getDetails();
  }, [props.curPokemonDetailUrl]);

  useEffect(() => {
    const mappedTypes = types.map(cur => <li key = {cur.slot} className = 'pokemon-detail-content-type-list-item'>{`${cur.type.name} type`}</li>);
    setDisplayTypes(mappedTypes);
  }, [types]);

  // Handle click on close button
  const handleCloseButtonClick = () => {
    props.closeModal();
  };

  return (
    <div className='pokemon-detail'>
      <i
        className='fas fa-times-circle close-modal-button'
        onClick={handleCloseButtonClick}></i>

      <div className='pokemon-detail-content-container'>
        <Button type='left active' />
        <div className='pokemon-detail-content'>
          <img
            className='pokemon-detail-img'
            src={imageSrc}
            alt={`${name} sprite.`}
          />
          <div className='pokemon-detail-content-text'>
            <h2 className='pokemon-detail-content-text-number pokemon-detail-content-text-item'>
              {number}
            </h2>
            <h2 className='pokemon-detail-content-text-name pokemon-detail-content-text-item'>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </h2>
            {/* make type clickable */}
            <ul className='pokemon-detail-content-type-list pokemon-detail-content-text-item'>
              {displayTypes}
            </ul>
            <EvolutionChain />
          </div>
        </div>
        <Button type='right active' />
      </div>
    </div>
  );
};

export default PokemonDetail;
