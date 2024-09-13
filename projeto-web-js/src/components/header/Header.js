import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "./../../assets/images/Logo_png.png";
import LocalStoregeHelper from "../../helpers/localStorage.helper";
import { Link } from 'react-router-dom';




export const Header = () => {
  const user = LocalStoregeHelper.getUserLogged();
  const navigate = useNavigate();

  const logOut = () => {
    LocalStoregeHelper.logOut();
    alert("Logout realizado com sucesso!")
    navigate("/");
  }

  return (
    <header>
      <nav id={classes.navbar} className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" width="100" height="90" />
          </Link>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" className="nav-link" aria-current="page" href="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/Produto" className="nav-link" aria-current="page">Produtos</Link>
            </li>
          </ul>
          {
            user ? (
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <button className="nav-link dropdown-toggle btn btn-link" id="navbarDropdownMenuLink" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {user.nome}
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                    {
                      user.nome === "Admin" ? (
                        <li><Link to="Produto-add" className="dropdown-item" >Gerenciar Produtos</Link></li>
                      ) : null
                    }
                    <li><Link to="MinhaConta" className="dropdown-item" >Minha Conta</Link></li>
                    <li><button className="dropdown-item" onClick={logOut}>Sair</button></li>
                  </ul>
                </li>
              </ul>
            ) : (
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item">
                  <Link to="/Register" className="nav-link">Cadastrar-se</Link>
                </li>
                <li class="nav-item">
                  <Link to="/Login" className="btn" id={classes.navBarButton}>Login</Link>
                </li>
              </ul>
            )
          }
          
          </div>
        </div>
      </nav>
    </header>
  );
};
