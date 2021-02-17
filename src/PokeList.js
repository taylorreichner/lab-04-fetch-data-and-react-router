import React from 'react';
import PokeItem from "./PokeItem.js";

export default class PokeList extends React.Component {
    render() {
        return this.props.pokemonData.map(pokemon => <PokeItem pokemon={pokemon} />)
    }
} 