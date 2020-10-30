import React from "react";
import placeholder from "../img/placeholder-image.png";
import Button from "./Button";
import EvolutionChain from "./EvolutionChain";

const PokemonDetail = () => {
  return (
    <div>
      <div>
        <Button type='prev' />
      </div>
      <div>
        <img
          src={placeholder}
          alt='placeholder pic'
          style={{ width: "200px" }}
        />
        <h2>number Name</h2>
        <h3>type</h3>
        <EvolutionChain />
      </div>
      <div>
        <Button type='next' />
      </div>
    </div>
  );
};

export default PokemonDetail;
