
//This module displays when there is an error in the search (user searches for non-existent pokemon);
import React from 'react';


// Assets
import searchErrorImage from '../img/sad-cubone.png'


const SearchError = () => {

   return (

      <div className = 'SearchError'>
         <h1>Search Error goes here</h1>
         <img className = 'search-error-image' src = {searchErrorImage} alt = 'Sad Cubone is sad.'/>
         
      </div>
   )
}

export default SearchError;