<img src="src/img/starter-pokemon.jpg" width ='250'>


# Pokédex Project        
A React Pokedéx with basic information about all current Pokémon using data from the [PokéAPI](https://pokeapi.co/).


## Introduction

I made this Pokédex for my son and daughter, both of whom are crazy for Pokémon.

This is the second version of the Pokedéx that I've made. The first version was vanilla JavaScript paired with Bootstrap and, while it worked, it was quite sluggish. There was no api call for data. Everything was pre-loaded in a data.js file. It also only incorporated the original 151 Pokémon. 

I decided to revisit this project after learning some React and discovering [PokéAPI](https://pokeapi.co/). I wanted this version to run smoother and more efficently, as well as to include all known Pokémon.


## Technologies
* [React](https://reactjs.org/)
   * [Create-React-App](https://github.com/facebook/create-react-app)
   * [React-Modal](http://reactcommunity.org/react-modal/)
   * [React-Autosuggest](https://github.com/moroshko/react-autosuggest)
* [PokéAPI](https://github.com/PokeAPI)
* [Axios](https://github.com/axios/axios)


## Features

* Sequential listing of all known Pokémon presented as a paginated list including number, name, and classic sprite images.
* Pokémon search function featuring autosuggest of existing Pokémon.
* Detail view of individual Pokémon including classic sprite image, number, name, and type.
* Intra-modal Pokémon detail navigation. 


## To Do:

- [x] Reposition search bar. 
- [x] Implement navigation between previous & next Pokémon in detailed view.
- [x] Implement filter by Pokémon type functionality.
- [x] Implement search with autocomplete functionality.
- [x] Assemble data to support search/autocomplete functionality. 
- [x] Eliminate redundant calls to [PokéAPI](https://pokeapi.co/)
- [x] Set an upper limit on Pokémon rendered. 
- [x] Implement intra-modal navigation.
- [ ] Display evolution chain.
- [x] Display flavor text.


## Notes 

* The PokéAPI is not the easiest to use. While it is extremely detailed and nearly comprehensive, it is not always easy to retreive all the information needed in a single endpoint. For example: the [evolution-chain](https://pokeapi.co/api/v2/evolution-chain/3/) endpoint has a vast amount of information about each evolution chain, yet it lacks what I'd consider to be the most basic required piece of information: a simple list of all Pokémon, in order, that make up a specific chain (For example: ['Squirtle', 'Wartortle', 'Blastoise']). Without access to such a simple piece of data, assembling and displaying an evolution chain is a labrynthine process, and I'm still trying to work it out. 

* I knew early on I wanted to use modals to display information about specifically selected Pokémon. I used the same strategy in my first version of the Pokédex and liked the result. This was my first time using modals in React, and I quickly came across [React-Modal](http://reactcommunity.org/react-modal/). They have great documentation and it didn't take me long to get up and running. I'll definitely be using it again. 

* I've been learning React for a while now, and had started with the old-school class components model. I've recently started learning React Hooks and felt this would be an ideal project for me to explore their capabilities and get a lot of good experiendce using them. I encountered a few dead ends and quirks, but overall I feel like I'm getting a pretty good grasp on Hooks. 


