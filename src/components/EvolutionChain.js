import React, { useState, useEffect } from "react";

// Dependencies
import axios from "axios";

// Components
import EvolutionItem from "./EvolutionItem";

const EvolutionChain = props => {
  const [evolutionChainUrl, setEvolutionChainUrl] = useState("");

  useEffect(() => {
    const getEvolutionChain = async () => {
      if (props.speciesUrl !== "") {
        const {data} = await axios.get(props.speciesUrl);
        console.log("evolution url");
        console.log(data.evolution_chain);
      }
    
    };
    getEvolutionChain();
  }, [props.speciesUrl]);

  return (
    <div className='evolution-chain'>
      {/* This will render dynamically based on how many items
       if no evolutions, so note.  */}
      <h3 className='evolution-chain-headline'>Evolution</h3>
      <ul className='evolution-chain-list'>
        <EvolutionItem name={"Squirtle"} />
        <EvolutionItem name={"Wartortle"} />
        <EvolutionItem name={"Blastoise"} />
      </ul>
    </div>
  );
};

export default EvolutionChain;
