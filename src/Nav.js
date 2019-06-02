import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = () => {
    return ( 
            <ul style={{display: 'flex', justifyContent: 'space-around', listStyle: 'none'}}>
                <li><NavLink exact activeClassName='is-active' to='/'>Home</NavLink></li>
                <li><NavLink exact activeClassName='is-active' to='/people'>People</NavLink></li>
                <li><NavLink exact activeClassName='is-active' to='/people/create'>Create a Person</NavLink></li>
            </ul>
     );
}
 
export default Nav;