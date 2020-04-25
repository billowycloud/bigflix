import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import { FlixProvider } from "../lib/contexts/FlixContext";

const PrivateRoute = ({ location: { pathname }, history, path, component, ...rest }) => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  useEffect(() => {
    if (!user) {
      history.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log(e + ": localStorage is not working");
      }
    }
  }, [history, user]);

  return (
    <FlixProvider>
      <Header currentRoute={pathname} />
      <Route path={path} component={component} {...rest}></Route>
    </FlixProvider>
  );
};

export default withRouter(PrivateRoute);
