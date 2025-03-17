import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';


import Signup from './Components/LoginSignup/Signup.tsx';
import Login from './Components/LoginSignup/Login.tsx';

import './index.css'
import NotFoundPage from './Components/LoginSignup/NotFoundPage.tsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,

);