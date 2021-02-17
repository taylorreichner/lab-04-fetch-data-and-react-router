import React from 'react';

export default class DetailPage extends React.Component {
    componentDidMount = () => {
        

    }
    render() {
        return (
        <div>
           <h2>Welcome to the detail page</h2>
           <p>{this.props.match.params.pokemonName}</p> 
         </div> 
        );
    }
}