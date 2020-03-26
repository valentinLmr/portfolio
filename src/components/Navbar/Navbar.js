import React, { Component } from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import Logo from './Logo/Logo'
import styles from './Navbar.module.css';

class Navbar extends Component {
    render () {
        return (
            <header className={styles.Navbar}>
                <div className={styles.DrawerToggle}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.Logo}>
                    <Logo/>
                </div>
                <div className={styles.DesktopOnly}>
                    <NavigationItems/>
                </div>
            </header>
        )
    }
}

export default Navbar;