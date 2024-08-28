import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css';
import logo from './../../assets/images/Logo_png.png'

export const Header: React.FC = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === '/LoginPage';

  return (
    <header className={classes.header}>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>
            <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-text-top" />
          </a>

          <form className="d-flex" role="search">
            {!isLoginPage && (
              <Link to="/LoginPage" className={`btn`}>
                <button className={`${classes.buttonL}`}>
                  <span className='bi bi-person' />
                  Login
                </button>
              </Link>
            )}

            <div className={`${classes.inputGroup} input-group`}>
              <input className={`${classes.formControl} form-control`} type="search" placeholder="" aria-label="Search" />
              <button className={classes.btn} type="submit">
                <i className="bi bi-search" />
              </button>
            </div>
          </form>
        </div>
      </nav>
    </header>
  );
}
