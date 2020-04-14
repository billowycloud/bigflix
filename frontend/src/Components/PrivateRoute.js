import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import { useScroll } from "../lib/hooks/useScroll";
import { SearchProvider } from "../contexts/search";

const PrivateRoute = ({
  location: { pathname },
  history,
  path,
  component,
  ...rest
}) => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const { y } = useScroll();

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
    <SearchProvider>
      <Header currentRoute={pathname} scrollY={y} />
      <Route path={path} component={component} {...rest}></Route>
    </SearchProvider>
  );
};

export default withRouter(PrivateRoute);
