import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header className="the-header">
                
                <span className="welcome">Welcome to my pokedex sorting hat thing</span>
                <NavLink exact activeClassName="selected" to="/">Home Page </NavLink>
                <NavLink exact activeClassName="selected" to="/pokemon">Search Page</NavLink>
                
                
            </header>
        );
    }
}