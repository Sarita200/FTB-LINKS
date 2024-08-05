import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './views/Home/Home';
import SignUp from './views/SignUp/SignUp';
import Login from './views/Login/Login';

const router= createBrowserRouter([
{
  path:'/',
  element: <Home/>
},
{
  path: '/signUp',
  element : <SignUp/>
},
{
  path:'/login',
  element: <Login/>
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <RouterProvider router={router}/>
);


