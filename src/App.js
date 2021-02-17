import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Search from './search';
import Header from './Header';
import HomePage from './homepage';
import DetailPage from './DetailPage'
export default class App extends React.Component {
    render() {
        return (
           <Router>
               <Header/>
               <Switch>
                    <Route path="/" exact component={HomePage} />
                   <Route path="/pokemon" exact component={Search} />
                   <Route path="/pokemon/:pokemonName" exact component={DetailPage} />
               </Switch>
           </Router>
        );
    }
}