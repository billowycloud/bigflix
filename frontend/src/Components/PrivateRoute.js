import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";

const PrivateRoute = ({ history, path, component, ...rest }) => {
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
    <>
      <Header />
      <Route path={path} component={component} {...rest}></Route>
    </>
  );
};

export default withRouter(PrivateRoute);
