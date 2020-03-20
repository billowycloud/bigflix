import React, { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ history, path, component, ...rest }) => {
  const { user } = useSelector(({ user }) => ({
    user: user.user
  }));

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [user]);

  return <Route path={path} component={component} {...rest}></Route>;
};

export default withRouter(PrivateRoute);
