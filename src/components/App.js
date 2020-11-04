import React, { useState } from "react";

// Components
import Header from "./Header";
import Display from "./Display";
import Footer from "./Footer";

const App = () => {
  const [listType, setListType] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  const changeListType = url => {
    setListType(url);
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
