import React from "react";

const PokemonTypeListItem = props => {
  return (
    <li className='pokemon-detail-content-type-list-item'>{`${
      props.name.charAt(0).toUpperCase() + props.name.slice(1)
    } Type`}</li>
  );
};

export default PokemonTypeListItem;
