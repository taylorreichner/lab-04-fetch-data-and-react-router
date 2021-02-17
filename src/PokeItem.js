import React from 'react';
import { Link } from 'react-router-dom';

export default class PokeItem extends React.Component {
    render() {
        return (
            <Link to={`/pokemon/${this.props.pokemon.pokemon}`}>
            <div key={this.props.pokemon.pokebase}>
                <div>
                <img src={this.props.pokemon.url_image} alt="poke" />
                </div>
                {this.props.pokemon.pokemon} : {this.props.pokemon.shape} : {this.props.pokemon.ability_1}
            </div>
        </Link>
    )
    }
} 