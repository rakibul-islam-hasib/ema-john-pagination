import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './components/Login/Login';
import OrderReview from './components/OrderReview/OrderReview';
import cartProductLoader from './components/Utilities/Loaders/cartProductLoader';
const router = createBrowserRouter([
  {
    path:'/', 
    element: <App />, 
    errorElement: <ErrorPage/>,
    children :[
      {
        path:'/',
        element:<Home/>, 
      },
      {
        path:'shop',
        element:<Shop/>
      }, 
      {
        path: 'login', 
        element:<Login/>
      },
      {
        path:'order-review',
        element:<OrderReview/>, 
        loader: cartProductLoader ,
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
