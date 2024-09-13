import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../../assets/images/Logo_png.png";
import { SearchInput } from "./../SearchBar/SearchInput";
import "./Header.css";

const api = "http://localhost:3001";

export const Header = ({ username }) => {
  const location = useLocation();

  const [text, setText] = useState("");
  useEffect(() => {
    if (text) {
      fetch(`${api}/produto?filtrer[text]=${text}`).then();
    }
  }, [text]);

  // const isLoginPage = location.pathname === "/LoginPage";

  return (
    <header>
      <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src={logo} alt="logo" id="logo" />
          </a>
          <form class="form" role="search">
            <div>
            <input
              class="searchNav"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="pesquisa"
            />
            <button class="btnSearch" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
            </div>
          </form>
          <div id="options">
            <span>{username || "Usuário"}</span>
            <Link to="/Login" class="exit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-box-arrow-right exit"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
              />
              <path
                fill-rule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};