import React, {useState, useEffect} from "react";

// Dependencies
import axios from 'axios';

// Assets
import placeholder from "../img/placeholder-image.png";
import pokeball from "../img/pokeball.png";


const PokemonListItem = (props) => {
const [img, setImg] = useState(pokeball);
const [name, setName] = useState('Pokemon');
const [number, setNumber] = useState(" ");


  useEffect(() => {
    const getPokemon = async () => {
      const {data} = await axios.get(props.detailsUrl);

      setNumber(data.id);
      setName(data.name);
      setImg(data.sprites.front_default)
      // console.log(data.sprites.other.official-artwork.front_default);
    };
    getPokemon();
  }, []);




  return (
    <div className='pokemon-list-item'>
      <img
        className='pokemon-list-item-img'
        src={img}
        alt='pokemon art'
      />
      <h4 className='pokemon-list-item-number'>{number}</h4>
      <h4 className='pokemon-list-item-name'>{name}</h4>
    </div>
  );
};


export default PokemonListItem;