import React, { useEffect, useState } from "react";

import axios from "axios";

// Components
import Header from "./Header";
import Display from "./Display";
import Footer from "./Footer";

const App = () => {

  //Store list of all Pokemon to be rendered
  const [pokemonData, setPokemonData] = useState([]);


  //






  return (
    <div>
      <Header  />
      <Display/>

      <Footer />
    </div>
  );
};
export default App;
