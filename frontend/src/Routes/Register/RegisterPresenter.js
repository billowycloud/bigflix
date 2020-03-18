import React from "react";
import AuthForm from "../../Components/Auth/AuthForm";
import AuthTemplate from "../../Components/Auth/AuthTemplate";

const RegisterPresenter = ({ form, onChange, onSubmit, error }) => {
  return (
    <AuthTemplate>
      <AuthForm
        type="register"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      ></AuthForm>
    </AuthTemplate>
  );
};

export default RegisterPresenter;
