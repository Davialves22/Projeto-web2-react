import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import 'atropos/css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from "./routes/pages/homePage/Home";
import { Login } from "./routes/pages/loginPage/Login";
import { Register} from "./routes/pages/RegisterPage/Register";
import { Produto } from './routes/pages/produtosPage/Produtos'
import { CadastroProdutos } from './routes/pages/produtosAddPage/CadastroProdutos'
import { ForgetPass } from './routes/pages/forgetPass/ForgetPass'
import { ProductDescription } from './components/productDescription/ProductDescription';


const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/', element: <Home /> },
      { path: '/Login', element: <Login /> },
      { path: '/Produto', element: <Produto /> },
      { path: '/Produto-add', element: <CadastroProdutos/> },
      { path: '/Register', element: <Register /> },
      { path: '/Descricao', element: <ProductDescription /> },
      { path: '/ForgetPass', element: <ForgetPass/> },
      { path: '*', element: <h1>Page Not Found</h1> },  // 404 Page  // Default Route

    ]
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);