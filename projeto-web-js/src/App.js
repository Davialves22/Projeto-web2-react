import { Header } from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import classes from './App.module.css'

export const App = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.mainContent}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
