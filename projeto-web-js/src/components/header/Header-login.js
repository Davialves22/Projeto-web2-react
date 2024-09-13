// Header.jsx
import React from 'react';
import classes from './Header-login.module.css'; // Ajuste o caminho conforme necessário
import logo from './../../assets/images/Logo_png.png';

export const Header_login = () => {

    return (
        <header id={classes.navbar}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo" width="100" height="90" />
                    </a>
                </div>
            </nav>
        </header>
    );
};
