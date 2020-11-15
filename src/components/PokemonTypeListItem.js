import React from "react";





const PokemonTypeListItem = props => {

const onTypeClick = () => {
  props.changeListType(props.name)
}


  return (
    <li className='pokemon-detail-content-type-list-item' onClick = {onTypeClick}>{`${
      props.name.charAt(0).toUpperCase() + props.name.slice(1)
    } Type`} </li>
  );
};

export default PokemonTypeListItem;
