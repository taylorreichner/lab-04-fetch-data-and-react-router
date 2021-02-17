import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Search from './search';
import Header from './Header';
import HomePage from './homepage';

export default class App extends React.Component {
    render() {
        return (
           <Router>
               <Header/>
               <Switch>
                    <Route exact path="/" render={(routerProps) => <HomePage {...routerProps} />} />
                   <Route exact path="/search" render={(routerProps) => <Search {...routerProps} />} />
                   <Route exact path="/search/:pokemonName" render={(routerProps) => <DetailPage {...routerProps} />} />
               </Switch>
           </Router>
        );
    }
}