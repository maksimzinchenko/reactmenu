import React from "react";

import classes from './Header.module.css';
import logoImage from '../assets/logo.svg';
// import menuButton from '../assets/menu-button.svg';

import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <header className={classes.head}>
            <img src={logoImage} alt="Logo"/>
            <h1 className={classes.menuName}>Cafe Menu</h1>
            <HeaderCartButton onShowCartHandler={props.onShowCartHandler}/>
        </header>
    );
}

export default Header;