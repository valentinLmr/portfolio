import React from 'react';
import './NavigationItems.css'
import { HashLink as Link } from 'react-router-hash-link';


const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <Link className='navbar_link' onClick={props.clicked} to="/#About"><li className='NavigationItem'>Profil</li></Link>
        <Link className='navbar_link' onClick={props.clicked} to="/#Projet"><li className='NavigationItem'>Projet</li></Link>
        <Link className='navbar_link' onClick={props.clicked} to="/#Formation"><li className='NavigationItem'>Formation</li></Link>
        <Link className='navbar_link' onClick={props.clicked} to="/#Contact"><li className='NavigationItem'>Contact</li></Link>
    </ul>
);

export default navigationItems