import React from 'react';
import './App.css';
import PokeList from './PokeList';
import Header from './Header.js';
import pokeos from './data.js';
import Dropdown from './Dropdown';


export default class App extends React.Component {
  state = {
    pokemon: '',
    height: '',
  }
  handlePokeChange = (e) => {
    this.setState({
      pokemon: e.target.value
    })
  }
  handleHeightChange = (e) => {
    this.setState({
      height: Number(e.target.value)
    })
  }

  render() {
    const filteredPokeos = pokeos.filter((pokes) => {
      if (!this.state.pokemon && !this.state.height) return true;
      
      if (this.state.pokemon && !this.state.height) {
        if (pokes.pokemon === this.state.pokemon) return true;
        }

      if (this.state.height && !this.state.pokemon) {
        if (pokes.height === this.state.height) return true;
        }
      if (this.state.pokemon && this.state.height) {
        if (pokes.height === this.state.height && pokes.pokemon === this.state.pokemon) return true;
    }
      
      return false;
});
      return ( 
      <>
        <Header/>
        pokemon name
        <Dropdown 
        currentValue={this.state.pokemon}
        handleChange={this.handlePokeChange}
        options={['bulbasaur', 'ivysaur']}
        />
        height
        <Dropdown
        currentValue={this.state.height}
        handleChange={this.handleHeightChange}
        options={[7, 10]}
        />
        <PokeList 
        filteredPokeos={filteredPokeos}
        />
        
      </>
      
    );
  }
}
