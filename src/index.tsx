import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ResgisterPage } from "./pages/Register/Register";
import { HomePage } from "./pages/homePage/HomePage";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/loginPage/LoginPage";
import { Produto } from './pages/Produtos/Produtos'
import { ProductDescription } from './components/ProductDescription/ProductDescription';


const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/', element: <HomePage /> },
      { path: '/LoginPage', element: <LoginPage /> },
      { path: '/Register', element: <ResgisterPage /> },
      { path: '/Produto', element: <Produto /> },
      { path: '/Descricao', element: <ProductDescription /> },
      { path: '*', element: <h1>Page Not Found</h1> },  // 404 Page  // Default Route

    ]
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);