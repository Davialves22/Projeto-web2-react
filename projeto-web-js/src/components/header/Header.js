import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "./../../assets/images/Logo_png.png";

export const Header = ({ username }) => {
  // const location = useLocation();

  return (
    <header>
      <nav id={classes.navbar} className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="100" height="90" />
          </a>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/produto">Produtos</a>
              </li>
            </ul>
          </div>

          <div id={classes.navBarOptions}>
            <div id={classes.navBarUser}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </div>
            
            <div id={classes.options}>
              <span>{username || "Usuário"}</span>

              <div id={classes.navBarLinks}>
                {/* TO FIX - mudar o redirecionamento do link */}
                <Link to="/MinhaConta" class={classes.btnOp}>
                  Minha Conta
                </Link>
                |
                <Link to="/Login" class={classes.btnOp}>
                  Sair
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
