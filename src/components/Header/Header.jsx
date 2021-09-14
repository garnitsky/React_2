import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import React from 'react';

const Header = () => {
    return (

        <header className={classes.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' />

            <div className={classes.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    )
}

export default Header;