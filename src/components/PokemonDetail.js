import React, { useState, useEffect } from "react";

// Dependencies
import axios from "axios";

// Assets
import pokeball from "../img/pokeball.png";

// Components
import Button from "./Button";
import PokemonTypeListItem from "./PokemonTypeListItem";

// Styles
import display from "../CSS/display.css";
import global from "../CSS/global.css";

const PokemonDetail = props => {
  const [prvBtnStatus, setPrvBtnStatus] = useState("active");
  const [nextBtnStatus, setNextBtnStatus] = useState("active");

  const [prevPokemon, setPrevPokemon] = useState("");
  const [curPokemon, setCurPokemon] = useState("");
  const [nextPokemon, setNextPokemon] = useState("");

  const [imageSrc, setImageSrc] = useState(pokeball);
  const [number, setNumber] = useState(null);
  const [name, setName] = useState("?");
  const [types, setTypes] = useState([]);
  const [displayTypes, setDisplayTypes] = useState([]);
  const [speciesUrl, setSpeciesUrl] = useState("");
  const [flavorText, setFlavorText] = useState("");

  // API call for individual pokemon details.
  useEffect(() => {
    const source = axios.CancelToken.source();

    const getDetails = async () => {
      try {
        const { data } = await axios.get(props.curPokemonDetailUrl, {
          cancelToken: source.token,
        });

        if (data.sprites.front_default !== null) {
          // No official artwork
          if (!data.sprites.other["official-artwork"].front_default) {
            setImageSrc(data.sprites.front_default);
          } else {
            setImageSrc(data.sprites.other["official-artwork"].front_default);
          }
        }

        setNumber(data.id);
        setName(data.name);
        setTypes(data.types);
        setSpeciesUrl(data.species.url);

        // Set active || inactive class on buttons
        if (data.id === 1) {
          setPrvBtnStatus("inactive");
        } else if (data.id === 893) {
          setNextBtnStatus("inactive");
        } else {
          setPrvBtnStatus("active");
          setNextBtnStatus("active");
        }
        setCurPokemon(data.species.name);
      } catch (error) {
        console.log("Something went wrong: ", error.message);
      }
    };
    getDetails();

    // Cleanup
    return () => {
      source.cancel();
    };
  }, [props.curPokemonDetailUrl]);

  // MAKE A CALL FOR FLAVOR TEXT USING SPECIES URL
  useEffect(() => {
    const source = axios.CancelToken.source();

    const getFlavorText = async () => {
      try {
        const { data } = await axios.get(speciesUrl, {
          cancelToken: source.token,
        });
        console.log(data.flavor_text_entries[0].language.name);

        //Iterate through flavor text entries until reach one written in English (en)

        for (let i = 0; i < data.flavor_text_entries.length; i++) {
          if (data.flavor_text_entries[i].language.name === "en") {
            setFlavorText(data.flavor_text_entries[i].flavor_text);
            break;
          }
        }
      } catch (error) {
        console.log(`Something went wrong: ${error}`);
      }
    };
    if (speciesUrl !== "") {
      getFlavorText();
    }

    // Cleanup
    return () => {
      source.cancel();
    };
  }, [speciesUrl]);

  useEffect(() => {
    const mappedTypes = types.map(cur => (
      <PokemonTypeListItem key={cur.slot} name={cur.type.name} />
    ));
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
        <Button
          type='left'
          status={prvBtnStatus}
          onClick={e => props.makeModal(props.index, "previous")}
        />
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
            <h3 className='flavor-text'>{flavorText}</h3>
          </div>
        </div>
        <Button
          type='right'
          status={nextBtnStatus}
          onClick={e => props.makeModal(props.index, "next")}
        />
      </div>
    </div>
  );
};

export default PokemonDetail;
