import React from "react";
import EvolutionItem from './EvolutionItem'

const EvolutionChain = () => {
  return (
    <div>

       {/* This will render dynamically based on how many items
       if no evolutions, so note.  */}
      <ul>
        <EvolutionItem pokemon = {'7 Squirtle'}/>
        <EvolutionItem pokemon = {'8 Wartortle'}/>
        <EvolutionItem pokemon = {'9 Blastoise'}/>
      </ul>
    </div>
  );
};

export default EvolutionChain;
