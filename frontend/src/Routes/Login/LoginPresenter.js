import React from 'react';
import AuthTemplate from '../Auth/AuthTemplate';
import AuthForm from '../Auth/AuthForm';

const LoginPresenter = () => {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPresenter;
