import React, { useEffect, useState } from "react";

import axios from "axios";

// Components
import Header from "./Header";
import Display from "./Display";
import Footer from "./Footer";

const App = () => {
  // const [listUrl, setListUrl] = useState("");
  // const [listByType, setListByType] = useState([]);

  // // Call for list of pokemon in the requested type.
  // useEffect(() => {
  //   if (listUrl !== "") {
  //     const getPokemon = async () => {
  //       const response = await axios.get(listUrl);
  //       setListByType(response.data.pokemon);
  //     };
  //     getPokemon();
  //   }
  // }, [listUrl]);

  // const changeListType = url => {
  //   setListUrl(url);
  // };

  return (
    <div>
      <Header  />
      <Display/>

      <Footer />
    </div>
  );
};
export default App;
