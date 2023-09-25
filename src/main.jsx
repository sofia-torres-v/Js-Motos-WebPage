// acá va el router
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home.jsx'
import './index.css'
import ErrorPage from './views/ErrorPage.jsx'
import About from './views/About.jsx'
import Products from './views/Products.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/products",
    element: <Products/>,
    errorElement: <ErrorPage/>
  },
 
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
