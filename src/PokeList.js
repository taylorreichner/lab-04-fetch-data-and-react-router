import React from 'react';
import PokeItem from "./PokeItem.js";

export default class PokeList extends React.Component {
    render() {
        return (
            <ul className="the-map">
            {this.props.filteredPokeos.map(pokeosObject =>
            <PokeItem
                key={pokeosObject.id}
                pokeosItemProp={pokeosObject}
            />)}
        </ul>
    )    
    }
}