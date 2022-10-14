import { Navigate } from "react-router";
import React from "react";
import { useSelector } from "react-redux";

const WithAuthentication = (Component) => {
  return function ComponentWithAuth() {
    const user = useSelector((state) => state?.AuthReducer)?.user;
    if (!user) {
      return <Navigate to="/login" />;
    } else {
      return <Component />;
    }
  };
};

export default WithAuthentication;
