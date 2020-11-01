import React from "react";

const EvolutionItem = ({ pokemon }) => {
  return (
    <li className = "pokemon-evolution-chain-item">
      {pokemon}
    </li>
  );
};

export default EvolutionItem;
