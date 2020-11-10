<img src="src/img/starter-pokemon.jpg" width ='250'>

# Pokédex Project        
A simple Pokedéx with basic information about all current Pokémon using data from the [PokéAPI](https://pokeapi.co/).

## Introduction



## Technologies
* [React](https://reactjs.org/)
   * [React-Modal](http://reactcommunity.org/react-modal/)
   * [Create-React-App](https://github.com/facebook/create-react-app)
* [PokéAPI](https://github.com/PokeAPI)
* [Axios](https://github.com/axios/axios)


## Features



## To Do:

- [ ] Reposition search bar. 
- [x] Implement navigation between previous & next pokémon in detailed view.
- [ ] Implement filter by pokémon type functionality.
- [ ] Implement search with autocomplete functionality.
- [ ] Assemble data to support search/autocomplete functionality. 
- [x] Set an upper limit on Pokémon rendered. 
- [ ] Display evolution chain


## Notes 

* The PokéAPI is not the easiest to use. While it is extremely detailed and nearly comprehensive, it is not always easy to retreive all the information needed in a single endpoint. For example: the [evolution-chain](https://pokeapi.co/api/v2/evolution-chain/3/) endpoint has a vast amount of information about each evolution chain, yet it lacks what I'd consider to be the most basic required piece of information: a simple list of all Pokémon, in order, that make up a specific chain (For example: ['Squirtle', 'Wartortle', 'Blastoise']). Without access to such a simple piece of data, assembling and displaying an evoltion chain is a labrynthine process, and I'm still trying to work it out. 

* I knew early on I wanted to use modals to display information about specifically selected Pokémon. I used the same strategy in my first version of the Pokédex and liked the result. This was my first time using modals in React, and I quickly came across [React-Modal](http://reactcommunity.org/react-modal/). They have great documentation and it didn't take me long to get up and running. I'll definitely be using it again. 



 
