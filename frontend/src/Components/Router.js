import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Movie from "../Routes/Movie";
import Login from "../Routes/Login";
import Register from "../Routes/Register";
import PrivateRoute from "./PrivateRoute";
import Footer from "./Footer";
import Search from "../Routes/Search";
import MyList from "../Routes/MyList";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/browse" exact component={Home} />
        <PrivateRoute path="/browse/tv" exact component={TV} />
        <PrivateRoute path="/browse/movie" exact component={Movie} />
        <PrivateRoute path="/browse/tv/:genre" component={TV} />
        <PrivateRoute path="/browse/movie/:genre" component={Movie} />
        <PrivateRoute path="/browse/mylist" component={MyList} />
        <PrivateRoute path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  </Router>
);
