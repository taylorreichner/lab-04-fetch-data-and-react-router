import React from 'react';
import { Link } from 'react-router-dom';

export default class PokeItem extends React.Component {
    render() {
        return (
            <Link to={`/pokemon/${this.props.pokemon.pokemon}`}>
            <div key={this.props.pokemon.pokebase}>
                <div>
                <img className="pics"  src={this.props.pokemon.url_image} alt="poke" />
                </div>
                <div>Name: {this.props.pokemon.pokemon}</div>
                <div>Shape: {this.props.pokemon.shape}</div>  
                <div>First ability: {this.props.pokemon.ability_1}</div>
            </div>
        </Link>
    )
    }
} 