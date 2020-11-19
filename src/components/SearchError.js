
//This module displays when there is an error in the search (user searches for non-existent pokemon);
import React from 'react';


// Assets
import searchErrorImage from '../img/sad-cubone.png'


const SearchError = () => {

   return (

      <div className = 'search-error'>
         <h1 className = 'search-error-headline'>Oh no! Something is wrong.</h1>
         <img className = 'search-error-image' src = {searchErrorImage} alt = 'Sad Cubone is sad.'/>
         <h3 className = 'search-error-explanation'>The Pokémon you are searching for isn't here.<br/>Perhaps it does not exist.<br/>Perhaps it has not yet been catalogued.</h3>
         <h2 className = 'search-error-return-home'>[HOME]</h2>
      </div>
   )
}

export default SearchError;