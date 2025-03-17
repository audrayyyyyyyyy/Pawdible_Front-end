import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';


import Signup from './Components/LoginSignup/Signup.tsx';
import Login from './Components/LoginSignup/Login.tsx';

import './index.css'
import NotFoundPage from './Components/LoginSignup/NotFoundPage.tsx';
import MyPets from './Components/MyAccount/MyPets.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signup/>,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/Login',
    element: <Login/>,
  },
  {
    path:'/MyPets',
    element: <MyPets/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,

);