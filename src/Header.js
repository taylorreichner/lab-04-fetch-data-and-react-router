import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


export default class Header extends React.Component {
    render() {
        return (
            <header className="the-header">
                
                <div className="welcome">THE ULTIMATE POKEDEX!</div>
                <span>
               <div> <NavLink exact activeClassName="selected" to="/">Home Page </NavLink></div>
               <div> <NavLink exact activeClassName="selected" to="/pokemon">Search Page</NavLink></div>
                </span>
                
            </header>
        );
    }
}