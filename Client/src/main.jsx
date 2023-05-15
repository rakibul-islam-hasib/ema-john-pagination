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
import AuthContext from './Utilities/AuthContext';
import SignUp from './components/SignUp/SignUp';
import PrivetRoute from './Privet/PrivetRoute';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
        loader: ()=> fetch('http://localhost:5000/totaldata')
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'order-review',
        element: <PrivetRoute> <OrderReview /></PrivetRoute>,
        loader: cartProductLoader,
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>,
)
