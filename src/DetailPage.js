import React from 'react';
import request from 'superagent';
import Spinner from './Spinner';

export default class DetailPage extends React.Component {
    state = {
        pokemonData: {}
    }
    
    componentDidMount = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);
    
        this.setState({
            loading: false,

            pokemonData: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonName),
        });
    }
    render() {
        return (
        <div>
           <h2>Welcome to the detail page!! check out some stats!</h2>
           { 
           this.state.loading
           ? <Spinner />
           : <div>
                         <img src={this.state.pokemonData.url_image} alt="pokemon" />
                       <p>{this.state.pokemonData.pokemon}</p>
                       <p>{this.state.pokemonData.attack}</p>
                       <p>{this.state.pokemonData.defense}</p>
                       <p>{this.state.pokemonData.type_1}</p>
                       <p>{this.state.pokemonData.type_2}</p>
                       <p>{this.state.pokemonData.shape}</p>
                       <p>{this.state.pokemonData.ability_1}</p>
                       <p>{this.state.pokemonData.ability_2}</p>
             </div>
           }
         </div> 
        );
    }
}