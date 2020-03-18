import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginPresenter from "./LoginPresenter";
import { initializeForm, changeFiled, login } from "../../modules/auth";
import { check } from "../../modules/user";
import { withRouter } from "react-router-dom";

const LoginContainer = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
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
    const { email, password } = form;
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("오류 발생");
      console.log(authError);
      setError("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
      return;
    }
    if (auth) {
      console.log("로그인 성공");
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push("/browse");
    }
  }, [history, user]);

  return (
    <LoginPresenter
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginContainer);
