import React from 'react';
import style from './NavigationItems.module.css'

const navigationItems = (props) => (
    <ul className={style.NavigationItems}>
        <li className={style.NavigationItem}><a href='/'>About</a></li>
        <li className={style.NavigationItem}><a href='/'>Formation</a></li>
        <li className={style.NavigationItem}><a href='/'>Project</a></li>
        <li className={style.NavigationItem}><a href='/'>Skills</a></li>
        <li className={style.NavigationItem}><a href='/'>Contact</a></li>
    </ul>
);

export default navigationItems