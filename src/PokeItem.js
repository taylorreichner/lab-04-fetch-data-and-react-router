import React from 'react';

export default class PokeItem extends React.Component {
    
    render() {
        return (
            
              <li>
                  <p>{this.props.pokeosItemProp.pokemon}</p>
                  <p>{this.props.pokeosItemProp.shape}</p>
                  <p>{this.props.pokeosItemProp.ability_1}</p>
                  <img src={this.props.pokeosItemProp.url_image}/>
                  
              </li>
            
        );
    }
}
