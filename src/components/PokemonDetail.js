import React from "react";
import placeholder from "../img/placeholder-image.png";
import Button from "./Button";

const PokemonDetail = () => {
  return (
    <div>
      <div>
        <Button type='prev' />
      </div>
      <img src={placeholder} alt='placeholder pic' style={{ width: "200px" }} />
      <h2>number Name</h2>
      <h3>type</h3>
      {/* Evolution chain may be seperate module */}
      <ul>
        <li>evolution 1</li>
        <li>evolution 2</li>
        <li>evolution 3</li>
      </ul>
      <div>
        <Button type='next' />
      </div>
    </div>
  );
};

export default PokemonDetail;
