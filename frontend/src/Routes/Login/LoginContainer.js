import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginPresenter from "./LoginPresenter";
import AuthTemplate from "../../Components/Auth/AuthTemplate";
import { initializeForm, changeFiled } from "../../modules/auth";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeFiled({
        form: "login",
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  return (
    <AuthTemplate>
      <LoginPresenter form={form} onChange={onChange} onSubmit={onSubmit} />
    </AuthTemplate>
  );
};

export default LoginContainer;
