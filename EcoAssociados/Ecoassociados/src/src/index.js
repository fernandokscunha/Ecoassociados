import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos'
import Campanhas from './pages/Campanhas';
import Voluntario from './pages/Voluntario';
import Contato from './pages/Contato';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sobre-nos",
        element: <SobreNos />
      },
      {
        path: "/campanhas",
        element: <Campanhas />
      },
      {
        path: "/voluntario",
        element: <Voluntario />
      },
      {
        path: "/contato",
        element: <Contato />
      }
      
    ]
  },
  ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
