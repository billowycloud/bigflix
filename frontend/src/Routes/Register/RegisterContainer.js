import React, { useEffect, useState } from 'react';
import RegisterPresenter from './RegisterPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { changeFiled, initializeForm, register } from '../../modules/auth';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterContainer = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeFiled({
        form: 'register',
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const { email, password, passwordConfirm } = form;
    if ([email, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      changeFiled({ form: 'register', key: 'password', value: '' });
      changeFiled({ form: 'register', key: 'passwordConfirm', value: '' });
      return;
    }
    if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$/.test(password)) {
      setError(
        '비밀번호를 숫자와 문자 포함 형태의 6~12자리 이내로 설정해주세요.'
      );
      return;
    }
    dispatch(register({ email, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다.');
        return;
      }
      setError('허용되지않는 이메일 형식이거나, 잘못된 비밀번호 형식 입니다.');
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/browse');
    }
  }, [history, user]);

  return (
    <RegisterPresenter
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterContainer);
