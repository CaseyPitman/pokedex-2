import React, { useState, useEffect } from "react";

// Should I make this an unordered list instead?

const PokemonListItemType = ({typeArr}) => {

   const [types, setTypes] = useState(typeArr);





console.log(typeArr);




  return (
    <ul className='pokemon-list-item-type'>
      <li className='pokemon-list-item-type-text'>Normal</li>
    </ul>
  );
};

export default PokemonListItemType;
