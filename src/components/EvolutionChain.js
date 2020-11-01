import React from "react";
import EvolutionItem from "./EvolutionItem";

const EvolutionChain = () => {
  return (
    <div className = 'evolution-chain'>
      {/* This will render dynamically based on how many items
       if no evolutions, so note.  */}
      <h3 className = 'evolution-chain-headline'>Evolution</h3>
      <ul className = 'evolution-chain-list'>
        <EvolutionItem name={"Squirtle"} />
        <EvolutionItem name={"Wartortle"}  />
        <EvolutionItem name={"Blastoise"} />
      </ul>
    </div>
  );
};

export default EvolutionChain;
