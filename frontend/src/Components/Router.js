import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from '../Routes/Home';
import TV from '../Routes/TV';
import Movie from '../Routes/Movie';
import Login from '../Routes/Login';

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/browse" exact component={Home} />
        <Route path="/browse/tv" component={TV} />
        <Route path="/browse/movie" component={Movie} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
