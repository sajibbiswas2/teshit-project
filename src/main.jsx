import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Main from './component/Layout/Main.jsx';
import Orderrevew from './component/Orderrevew/Orderrevew.jsx';
import About from './component/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '',
        element: <Home></Home>,
        loader: () => fetch('tshirts.json')
      },
      {
        path: '/review',
        element: <Orderrevew></Orderrevew>
      },
      {
        path: '/about',
        element: <About></About>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
