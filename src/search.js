import React from 'react';
import './App.css';
import request from 'superagent';
import Dropdown from './Dropdown';




export default class Search extends React.Component {
  state = {
    pokemon: [],
    query: '',
    sortBy: 'shape',
    sortBy2: 'asc',

  }
  componentDidMount = async () => {
    await this.fetchPokemon();
  }
  
  fetchPokemon = async () => {
    const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${this.state.sortBy}&direction=${this.state.sortBy2}&pokemon=${this.state.query}`);
    
  
    this.setState({ 
      pokemon: pokeData.body.results,
    });
  }
  
  handleClick = async () => {
    await this.fetchPokemon();
  }
  handleQueryChange = async (e) => {
    
    this.setState({ 
      query: e.target.value,
     });
  }
  handleSortChange = async (e) => {
    await this.setState({
      sortBy: e.target.value
    })
    await this.fetchPokemon();
    
  }
  handleSortChange2 = async (e) => {
    await this.setState({
      sortBy2: e.target.value
    })
    
    await this.fetchPokemon();
    console.log('hey it worked')
  }
  
  render() {

      return (
       // console.log(this.state.sortBy),
        <>
           <label>
          Search
           <input onChange={this.handleQueryChange} />
        </label>
        <button onClick={this.handleClick}>Go!</button>
        <Dropdown
        handleSortChange={this.handleSortChange}
        handleSortChange2={this.handleSortChange2}
       />
        <h1>Welcome to the machine!!</h1>
        
        <div>
         { this.state.pokemon.map(poke => 
            <div key={poke.pokemon}>
              <div>
              <img src={poke.url_image} alt="poke" />
              </div>
              {poke.pokemon} 
              <p>First ability- {poke.ability_1}</p>
              <p>Shape- {poke.shape}</p>
            </div>)
          }

      
        </div>
      
        
        
        </>
      
    );
  }
}
