// This component renders the contents of the detail view as displayed in modals (via Display component).

import React, { useState, useEffect } from "react";

// Dependencies
import axios from "axios";

// Assets
import pokeball from "../img/pokeball.png";

// Components
import Button from "./Button";
import PokemonTypeListItem from "./PokemonTypeListItem";

// Styles
import "../CSS/display.css";
import "../CSS/global.css";

const PokemonDetail = props => {
  // Manage active/inactive class on buttons
  const [prvBtnStatus, setPrvBtnStatus] = useState("active");
  const [nextBtnStatus, setNextBtnStatus] = useState("active");

  // Stores all the data to be displayed.
  const [imageSrc, setImageSrc] = useState(pokeball);
  const [number, setNumber] = useState(null);
  const [name, setName] = useState("?");
  const [types, setTypes] = useState([]);
  const [displayTypes, setDisplayTypes] = useState([]);
  const [speciesUrl, setSpeciesUrl] = useState("");
  const [flavorText, setFlavorText] = useState("");

  // API call for individual pokemon details.
  useEffect(() => {
    // Cancel if necessary
    const source = axios.CancelToken.source();

    const getDetails = async () => {
      try {
        const { data } = await axios.get(props.curPokemonDetailUrl, {
          cancelToken: source.token,
        });

        if (data.sprites.front_default !== null) {
          // If there is no official artwork dispaly classic sprite
          if (!data.sprites.other["official-artwork"].front_default) {
            setImageSrc(data.sprites.front_default);
          } else {
            //Display official artwork
            setImageSrc(data.sprites.other["official-artwork"].front_default);
          }
        }

        // Set number, name, types and url
        setNumber(data.id);
        setName(data.name);
        setTypes(data.types);
        setSpeciesUrl(data.species.url);

        // Set active || inactive class on buttons depending on position at begin, end or middle of list
        if (data.id === 1) {
          setPrvBtnStatus("inactive");
        } else if (props.index === props.numberInCurrentList - 1) {
          setNextBtnStatus("inactive");
        } else {
          setPrvBtnStatus("active");
          setNextBtnStatus("active");
        }
      } catch (error) {
        console.log("Something went wrong: ", error.message);
      }
    };
    getDetails();

    // Cleanup function/cancel call
    return () => {
      source.cancel();
    };
  }, [props.curPokemonDetailUrl, props.index, props.changeListType, props.numberInCurrentList]);

  // MAKE A CALL FOR FLAVOR TEXT USING SPECIES URL
  useEffect(() => {
    const source = axios.CancelToken.source();

    const getFlavorText = async () => {
      try {
        const { data } = await axios.get(speciesUrl, {
          cancelToken: source.token,
        });
        console.log(data.flavor_text_entries[0].language.name);

        //Iterate through flavor text entries until we reach one written in English (en)
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

    // Cleanup function/cancel
    return () => {
      source.cancel();
    };
  }, [speciesUrl]);

  useEffect(() => {
    // Map the types associated with the current pokemon and render them as list items.
    const mappedTypes = types.map(cur => (
      <PokemonTypeListItem
        key={cur.slot}
        name={cur.type.name}
        changeListType={props.changeListType}
      />
    ));
    setDisplayTypes(mappedTypes);
  }, [types, props.changeListType]);

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
