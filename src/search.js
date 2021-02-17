import React from 'react';
import './App.css';
import request from 'superagent';
import Dropdown from './Dropdown';
import Spinner from "./Spinner";
import PokeList from './PokeList';

export default class Search extends React.Component {
  state = {
    pokemonData: [],
    query: '',
    sortBy: 'shape',
    sortBy2: 'asc',
    loading: false,
    currentPage: 1,
  }
  componentDidMount = async () => {
    await this.fetchPokemon();
  }
  
  fetchPokemon = async () => {
    this.setState({ loading: true });
    
    const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${this.state.sortBy}&direction=${this.state.sortBy2}&pokemon=${this.state.query}&page=${this.state.currentPage}&perPage=30`);
    
    this.setState({
      loading: false, 
      pokemonData: pokeData.body.results,
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
  handleNextClick = async () => {
    await this.setState({
      currentPage: this.state.currentPage + 1
    });
    await this.fetchPokemon();
    
  }

  handlePreviousClick = async () => {
    await this.setState({
      currentPage: this.state.currentPage - 1
    });
    await this.fetchPokemon();
  }

  
  render() {
    const {
      pokemonData,
      loading,
    } = this.state;
      return (
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
       <p>Page # {this.state.currentPage}</p>
       <button onClick={this.handlePreviousClick}>Previous</button>
       <button onClick={this.handleNextClick}>Next</button>
        <h1>Welcome to the machine!!</h1>
        <div>
          { loading 
          ? <Spinner />
          : <PokeList pokemonData={pokemonData} />
          }
        </div>
      </>
    );
  }
}
