import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "./../../assets/images/Logo_png.png";

export const Header = ({ username }) => {
  const location = useLocation();
  // const isLoginPage = location.pathname === "/LoginPage";

  return (
    <header>
      <nav id={classes.navbar} className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="100" height="90" />
          </a>

        
              <div className={`${classes.inputGroup} ms-auto me-auto`}>
                <form class="d-flex" role="search">
                  <input
                    id={classes.search}
                    class="form-control"
                    type="search"
                    placeholder="Procurar..."
                    aria-label="Search"
                  />
                  <button class="btn" type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="#2C5282"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>{" "}
                  </button>
                </form>
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
