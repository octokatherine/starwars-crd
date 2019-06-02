import React, { Component } from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';



const Nav = () => {
    return ( 
        <HashRouter>
            <ul style={{display: 'flex', justifyContent: 'space-around', listStyle: 'none'}}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/people'>People</Link></li>
                <li><Link to='/people/create'>Create a Person</Link></li>
            </ul>
        </HashRouter> 
     );
}
 
export default Nav;