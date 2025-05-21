import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Signup from "./Components/LoginSignup/Signup.tsx";
import Login from "./Components/LoginSignup/Login.tsx";
import NotFoundPage from "./Components/LoginSignup/NotFoundPage.tsx";

import NavBar from "./Components/NavBar/NavBar.tsx";

import MyPets from "./Components/MyAccount/MyPets.tsx";
import Account from "./Components/MyAccount/Account.tsx";
import ItemFoundUnsafe from "./Components/Scan/ItemFoundUnsafe.tsx";
import ItemFoundSafe from "./Components/Scan/ItemFoundSafe.tsx";

import ItemNotFound from "./Components/Scan/ItemNotFound.tsx";
import AuthRedirect from "./Components/AuthRedirect/AuthRedirect.tsx";
import "./index.css";

import ScanPage from "./Components/Scan/ScanPage.tsx";
import ScanResult from "./Components/Scan/ScanResult.tsx";

import AddNewItem from "./Components/History/AddNewItem.tsx";
import MyHistory from "./Components/History/MyHistory.tsx";

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
    element: <ScanResult />,
  },

  {
    path: "/history",
    element: <MyHistory />,
  },
  {
    path: "/add-product",
    element: <AddNewItem />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
