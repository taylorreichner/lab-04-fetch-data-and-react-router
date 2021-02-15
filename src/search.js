import React from 'react';
import './App.css';
import PokeList from './PokeList';
import pokeos from './data.js';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';



export default class Search extends React.Component {
  state = {
    sortBy: 'shape',
    pokemon: 'Enter poke name here',
    sortBy2: 'alphabet',
    pokeData: pokeos,
  }
  handleSearchChange = (e) => {
    this.setState({
      pokemon: e.target.value
    })
  }

  handleSortChange = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }
  handleSortChange2 = (e) => {
    this.setState({
      sortBy2: e.target.value
    })
  }

  render() {
    if(this.state.sortBy2 === "ascending") {
      
    this.state.pokeData.sort(
       (a, b) =>
      a[this.state.sortBy]
      .localeCompare(b[this.state.sortBy])
    )
  } else{ 
    this.state.pokeData.sort(
      (a, b) =>
     b[this.state.sortBy]
     .localeCompare(a[this.state.sortBy])
    )}

   
    

    const filteredPokemon = this.state.pokeData.filter((pokes => pokes.pokemon.includes(this.state.pokemon)));
    

      return ( 
      <>
        
        
        <SearchBar
        currentValue={this.state.pokemon}
        handleChange={this.handleSearchChange}
        {...filteredPokemon}
        />
        <Dropdown
        currentValue={this.state.sortBy}
        handleChange={this.handleSortChange}
        handleChange2={this.handleSortChange2}
        currentValue2={this.state.sortBy2}
        />
        
        
        <PokeList 
        filteredPokeos={filteredPokemon}
        />
        
      </>
      
    );
  }
}
