import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Nav from './Nav'
import People from './People';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        return (
            <HashRouter>
            <div>
            <h1>Star Wars CRD</h1>
            <Nav />  
            <Route exact path='/' render={() => 'Welcome!'}/>
            <Route exact path='/people' component={People}/>
            </div>
            </HashRouter>
          );
    }
}
 
export default App;