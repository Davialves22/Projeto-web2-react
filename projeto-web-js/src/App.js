import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import classes from './App.module.css';

export const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/Login';
  const isForgetPass = location.pathname === '/ForgetPass';
  const isCadasterPage = location.pathname === '/Register';

  return (
    <div className={classes.wrapper}>
      <div className={classes.mainContent}>
        {!isLoginPage
          && !isForgetPass
          && !isCadasterPage
          && <Header />};

        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
