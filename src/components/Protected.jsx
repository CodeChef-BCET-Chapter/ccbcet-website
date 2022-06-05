import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Protected = ({ component, path }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Redirect to="/" />;
  }

  return <Route component={component} path={path} />;
};

export default Protected;
