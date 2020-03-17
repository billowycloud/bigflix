import React from "react";
import AuthForm from "../../Components/Auth/AuthForm";
import AuthTemplate from "../../Components/Auth/AuthTemplate";

const LoginPresenter = ({ form, onChange, onSubmit }) => {
  return (
    <AuthTemplate>
      <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      ></AuthForm>
    </AuthTemplate>
  );
};

export default LoginPresenter;
