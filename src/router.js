import React, { lazy } from "react";

const Home = lazy(() => import("pages/home"));
const Login = lazy(() => import("pages/login"));
const Search = lazy(() => import("pages/searchResults"));
const Notfound = lazy(() => import("pages/404"));

const Routers = [
  { path: "/moviesApp", exact: true, element: <Home /> },
  { path: "/moviesApp/login", exact: true, element: <Login /> },
  { path: "/moviesApp/search", exact: true, element: <Search /> },
  { path: "*", element: <Notfound /> },
];

export default Routers;
