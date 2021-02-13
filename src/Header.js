import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <NavLink exact activeClassName="selected" to="/">Home Page</NavLink>
                <NavLink exact activeClassName="selected" to="/search">Search Page</NavLink>
              Welcome to my pokedex sorting hat thing
              
            </header>
        );
    }
}