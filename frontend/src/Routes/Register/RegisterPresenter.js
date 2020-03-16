import React from 'react';
import AuthTemplate from '../Auth/AuthTemplate';
import AuthForm from '../Auth/AuthForm';

const RegisterPresenter = () => {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
};

export default RegisterPresenter;
