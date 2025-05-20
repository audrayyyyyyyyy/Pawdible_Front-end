import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signup from "./Components/LoginSignup/Signup.tsx";
import Login from "./Components/LoginSignup/Login.tsx";
import NotFoundPage from "./Components/LoginSignup/NotFoundPage.tsx";

import NavBar from "./Components/NavBar/NavBar.tsx";

import MyPets from "./Components/MyAccount/MyPets.tsx";
import Account from "./Components/MyAccount/Account.tsx";
import ItemFoundUnsafe from "./Components/Scan/ItemFoundUnsafe.tsx";
import ItemFoundSafe from "./Components/Scan/ItemFoundSafe.tsx";

import ItemNotFound from "./Components/Scan/ItemNotFound.tsx";

import "./index.css";
// import NewPage from './Components/MyAccount/NewPage.tsx';
// import LandingPage from "./Components/Scan/LandingPage.tsx";
import AuthRedirect from "./Components/AuthRedirect/AuthRedirect.tsx";
import ScanPage from "./Components/Scan/ScanPage.tsx";
import ScanResult from "./Components/Scan/ScanResult.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Login />,
    element: <AuthRedirect redirectIfLoggedIn="/scan" />,
    errorElement: <NotFoundPage />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/scan",
    // element: <Login />,
    element: <ScanPage />,
    // element: <AuthRedirect redirectIfLoggedIn="/scan" />,
    errorElement: <NotFoundPage />,
  },

  {
    path: "/MyPets",
    element: <MyPets />,
  },
  {
    path: "/Account",
    element: <Account />,
  },
  {
    path: "/ItemFoundSafe",
    element: <ItemFoundSafe />,
  },
  {
    path: "/ItemFoundUnsafe",
    element: <ItemFoundUnsafe />,
  },
  {
    path: "/ItemNotFound",
    element: <ItemNotFound />,
  },
  {
    path: "/scan_result",
    element: <ScanResult />
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
