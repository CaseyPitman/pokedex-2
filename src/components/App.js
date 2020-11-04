import React, { useEffect, useState } from "react";

import axios from "axios";

// Hooks
import useCall from "../Hooks/useCall";

// Components
import Header from "./Header";
import Display from "./Display";
import Footer from "./Footer";

const App = () => {
  const [listUrl, setListUrl] = useState("");
  const [pokemonListByType, setPokemonListByType] = useState([]);
  const data = useCall(listUrl);

  // Call for list of pokemon in the requested type.
  // useEffect(() => {
  //   if (listUrl !== "") {
  //     const getPokemon = async () => {

  //       const response = await axios.get( listUrl );
  //       setPokemonListByType(response.data.pokemon);
  //     };
  //     getPokemon();
  //   }
  // }, [listUrl]);

  useEffect(() => {
    setPokemonListByType(data.pokemon);
  }, [data]);

  const changeListType = url => {
    setListUrl(url);
  };

 

  return (
    <div>
      <Header changeListType={changeListType} />
      <Display pokemonListByType = {pokemonListByType}/>

      <Footer />
    </div>
  );
};
export default App;
