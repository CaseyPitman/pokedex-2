import React, { useState, useEffect } from "react";

// Dependencies
import axios from "axios";

// Components
import EvolutionItem from "./EvolutionItem";

const EvolutionChain = props => {
  const [evolutionChainUrl, setEvolutionChainUrl] = useState("");
  const [evolutionList, setEvolutionList] = useState([]);

  useEffect(() => {
    const getEvolutionChain = async () => {
      if (props.speciesUrl !== "") {
        const { data } = await axios.get(props.speciesUrl);
        // console.log("evolution url");
        // console.log(data.evolution_chain);
        setEvolutionChainUrl(data.evolution_chain.url);
      }
    };
    getEvolutionChain();
  }, [props.speciesUrl]);

  useEffect(() => {
    if (evolutionChainUrl !== "") {
    const getEvolutions = async () => {
      const response = await axios.get(evolutionChainUrl);
      console.log(response.data);}
      getEvolutions();
    };
  }, [evolutionChainUrl]);

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
