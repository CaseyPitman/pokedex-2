import React, { useEffect, useState } from "react";

import axios from "axios";

// Components
import Header from "./Header";
import Display from "./Display";
import Footer from "./Footer";

const App = () => {
  //Store list of all Pokemon to be rendered
  const [pokemonData, setPokemonData] = useState([]);

  //  Call to retrieve list of all Pokemon and then construct the customized data object.

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1050");

        console.log(`init call:`);
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  });

  return (
    <div>
      <Header />
      <Display />

      <Footer />
    </div>
  );
};
export default App;
