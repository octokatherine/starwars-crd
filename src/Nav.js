import React, { Component } from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import People from './People';

class Nav extends Component {
    render() { 
        return (
            <HashRouter>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/people'>People</Link></li>
                </ul>
                <Route path='/people' component={People}/>
            </HashRouter> 
         );
    }
}
 
export default Nav;