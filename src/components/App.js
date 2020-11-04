import React, { useEffect, useState } from "react";

import axios from "axios";

// Components
import Header from "./Header";
import Display from "./Display";
import Footer from "./Footer";

const App = () => {
  const [listUrl, setListUrl] = useState("");
  const [pokemonListByType, setPokemonListByType] = useState([]);

  // Call for list of pokemon in the requested type.
  useEffect(() => {
    if (listUrl !== "") {
      const getPokemon = async () => {
        console.log("test", listUrl);
        const response = await axios.get( listUrl );

        console.log(response.data.pokemon);
        setPokemonListByType(response);
      };
      getPokemon();
    }
  }, [listUrl]);

  const changeListType = url => {
    setListUrl(url);
  };

  return (
    <div>
      <Header changeListType={changeListType} />
      <Display />

      <Footer />
    </div>
  );
};
export default App;
