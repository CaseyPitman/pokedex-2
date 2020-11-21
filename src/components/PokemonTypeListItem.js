// This component renders the types of the pokmeon types in the PokemonDetail component

import React from "react";

const PokemonTypeListItem = props => {
  // User clicks on one of the types - will close modal and display pokemon of that type.
  const onTypeClick = () => {
    props.changeListType(props.name);
  };

  return (
    <li className='pokemon-detail-content-type-list-item' onClick={onTypeClick}>
      {`${props.name.charAt(0).toUpperCase() + props.name.slice(1)} Type`}{" "}
    </li>
  );
};

export default PokemonTypeListItem;
