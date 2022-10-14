import React, { lazy } from "react";

const Home = lazy(() => import("pages/home"));
const Login = lazy(() => import("pages/login"));
const Notfound = lazy(() => import("pages/404"));

const Routers = [
  { path: "/", exact: true, element: <Home /> },
  { path: "/login", exact: true, element: <Login /> },
  { path: "*", element: <Notfound /> },
];

export default Routers;
